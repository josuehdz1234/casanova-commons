import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormikContext } from 'formik';
import {
  transformIdOfList,
  getFieldSearch,
  getLastSearchField,
} from '@utils/transformHelpers';
import Input from '../../Input/MaskedInput';
import './SearchableSelect.scss';

const SearchableSelect = (props) => {
  const {
    initialValue,
    disabled,
    name,
    onChange,
    onSearching,
    placeholder,
    mask,
    icon,
    noResultsLabel,
    options = [],
    infoText,
  } = props;

  const [open, setOpen] = useState(false);
  const [elementSelected, setElementSelected] = useState();
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const searchField = getFieldSearch(name);
  const lastSearchField = getLastSearchField(name);

  const handleSelection = useCallback(
    ({ value, label }) => {
      setFieldValue(name, value);
      setFieldValue(searchField, label);
      setFieldValue(lastSearchField, label);

      setTimeout(() => {
        setFieldTouched(searchField, true);
        setFieldTouched(name, true);
      }, 1);

      setElementSelected(value);
      setOpen(false);
      if (onChange) {
        onChange(value);
      }
    },
    [onChange, name, setFieldValue, searchField, lastSearchField]
  );

  const toogleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (initialValue) {
      setFieldValue(searchField, initialValue);
    }
  }, [initialValue, name, setFieldValue]);

  const handleBlur = useCallback(
    (e) => {
      setTimeout(() => {
        const target = document.activeElement;
        const focusedElement = target
          ? target.id || target || target.tagName
          : '';
        const isFocusedCalendar =
          focusedElement.className.indexOf(
            'SercheableSelect__options--open'
          ) !== -1;
        setOpen(isFocusedCalendar);
        if (props.onBlur) {
          props.onBlur(e);
        }
      }, 1);
    },
    [props]
  );

  const handleOnChange = useCallback(
    (e) => {
      if (onSearching) {
        const { value } = e.target;
        onSearching(value);
      }
    },
    [onSearching]
  );

  // Starts classNames block
  const containerCN = classNames('SercheableSelect__input', {
    'SercheableSelect__input--open': open,
  });
  const calendarCN = classNames(`SercheableSelect__options`, {
    'SercheableSelect__options--open': open,
  });
  const iconOpen = open ? 'svg-icon-chevron-up' : 'svg-icon-chevron-down';
  const iconCn = classNames(`svg-icon`, icon || iconOpen);
  const withoutResultsLabel = noResultsLabel || 'No hay resultados';

  return (
    <div className="SercheableSelect">
      <div className={containerCN}>
        <Input
          label={props.label}
          type="text"
          mask={mask}
          placeholder={props.placeholder}
          name={`${props.name}_search`}
          id={props.id}
          maskPlaceholder=""
          disabled={disabled}
          onBlur={handleBlur}
          onChange={handleOnChange}
          infoText={infoText}
          right={
            <div
              onClick={() => (disabled ? {} : toogleOpen())}
              onKeyPress={() => (disabled ? {} : toogleOpen())}
              role="button"
              tabIndex="0"
              className={iconCn}
            />
          }
          onFocus={handleOpen}
        />
      </div>
      <div
        tabIndex={0}
        onBlur={(e) => {
          setOpen(false);
          if (props.onBlur) {
            props.onBlur({
              ...e,
            });
          }
        }}
        className={calendarCN}
      >
        <label className="col-form-label">{placeholder}</label>
        {options &&
          transformIdOfList(options).map(({ value, label, disabled, id }) => (
            <div
              key={id}
              onClick={() =>
                disabled ? {} : handleSelection({ value, label })
              }
              className={classNames(
                `SercheableSelect__options__element ${
                  disabled ? '__element-disabled' : ''
                }`,
                {
                  'SercheableSelect__options__element--selected':
                    value === elementSelected,
                }
              )}
            >
              {label}
            </div>
          ))}
        {(!options || (options && options.length === 0)) && (
          <div
            className={classNames(
              'SercheableSelect__options__element',
              '__element-disabled'
            )}
          >
            {withoutResultsLabel}
          </div>
        )}
      </div>
    </div>
  );
};

SearchableSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchableSelect.defaultProps = {
  label: '',
  name: '',
  placeholder: '',
};

export default SearchableSelect;

import React, { useState, useCallback, useMemo } from 'react';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';

const execHandler = (handler, e) => (handler ? handler(e) : undefined);

function Select(props) {
  const [hasContent, setHasContent] = useState(false);

  const {
    disabled,
    className,
    name,
    id,
    label,
    options,
    onChange,
    onBlur,
    onFocus,
    disableLabel = false,
    availableFirstValue = false,
    value,
    labelClassName,
    optionKeyField,
    multiple,
    showFirstValue = true,
    firstValueLabel = null,
  } = props;

  const [field, meta, helpers] = useField({ name, type: 'select' });
  const { error, touched } = meta;
  const { setValue, setTouched } = helpers;

  const handleInputFocus = useCallback(
    (e) => {
      execHandler(onFocus, e);
    },
    [onFocus]
  );

  const handleInputBlur = useCallback(
    (e) => {
      setTouched(true);
      setHasContent(!_isEmpty(e.target.value));
      execHandler(onBlur, e);
    },
    [setTouched, onBlur]
  );

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
      setHasContent(!_isEmpty(e.target.value));
      execHandler(onChange, e);
    },
    [setValue, onChange]
  );

  const hasValue = useMemo(() => !_isEmpty(field.value), [field.value]);
  const hasError = useMemo(() => touched && error, [touched, error]);
  const isLabelVisible = useMemo(
    () => hasError || hasContent || hasValue,
    [hasError, hasContent, hasValue]
  );

  const groupCln = useMemo(
    () => classNames('form-group', className),
    [className]
  );

  const labelCln = useMemo(
    () =>
      classNames(
        'col-form-label',
        hasError && error && 'text-danger',
        labelClassName
      ),
    [hasError, error, labelClassName]
  );

  const selectCln = useMemo(
    () =>
      classNames(
        'custom-select',
        (hasContent || hasValue) && 'custom-select--with-content',
        hasError && 'custom-select--error'
      ),
    [hasContent, hasValue, hasError]
  );

  const errorCln = useMemo(
    () => classNames('col-form-error', hasError && error && 'text-danger'),
    [hasError, error]
  );

  return (
    <div className={groupCln}>
      {label && !disableLabel && (
        <label
          style={{ visibility: `${isLabelVisible ? 'visible' : 'hidden'}` }}
          className={labelCln}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <select
        disabled={disabled}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleChange}
        value={value || field.value || '0'}
        className={selectCln}
        name={name}
        multiple={multiple}
      >
        {showFirstValue && (
          <option
            disabled={!availableFirstValue}
            value={availableFirstValue ? '' : 0}
          >
            {firstValueLabel || label}
          </option>
        )}

        {options.map((option) => (
          <option
            key={optionKeyField ? option[optionKeyField] : option.value}
            disabled={option.disabled}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {hasError && (
        <label className={errorCln} htmlFor={id}>
          {hasError}
        </label>
      )}
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

Select.defaultProps = {
  options: [],
};

export default Select;

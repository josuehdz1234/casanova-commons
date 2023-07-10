import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';
import InputMask from 'react-input-mask';
import * as Icons from '../Icons';

const MaskedInput = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    name,
    label,
    right,
    left,
    placeholder,
    onChange,
    mask,
    maskPlaceholder,
    link,
    linkText,
    infoText,
    customLabelContent,
    classNameError,
    customValue,
    showLabel,
    upperCase,
    deleteValue = false,
    onDeleteValue,
    inputClass,
    modifiedExternal = false,
    ...rest
  } = props;

  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;

  const [hasContent, setHasContent] = useState(false);

  const { setValue, setTouched } = helpers;

  useEffect(() => {
    setHasContent(field && field.value && field.value !== '');
  }, [field.value]);

  const handleInputFocus = useCallback(
    (e) => {
      if (props.onFocus) {
        props.onFocus(e);
      }
    },
    [props.onFocus]
  );

  const handleInputBlur = useCallback(
    (e) => {
      const { value } = e.target;
      setTouched(true);
      setHasContent(value && value !== '');
      if (props.onBlur) {
        props.onBlur(e);
      }
    },
    [setTouched, props.onBlur]
  );

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const formattedValue = value.replace(/\s{2,}/, ' ');
      setValue(upperCase ? formattedValue.toUpperCase() : formattedValue);
      setHasContent(value && value !== '');
      if (onChange) {
        onChange(e);
      }
    },
    [setValue, onChange]
  );

  const handleDeleteValue = useCallback(() => {
    if (onDeleteValue) {
      onDeleteValue(field);
    }
    setValue('');
  }, [setValue, onDeleteValue, field]);

  const hasValue = (field.value && field.value !== '') || customValue;
  const hasError = touched && error;
  const withContent = hasContent || hasValue || modifiedExternal;

  const icn = useMemo(() => {
    const inputClassName = classNames(
      'form-control',
      inputClass && 'formtopPosition',
      withContent && 'form-control--with-content',
      hasError && 'is-invalid',
      right && 'input-group-br-no',
      left && 'input-group-bl-no'
    );

    return inputClassName;
  }, [withContent, hasError, right, left]);

  return (
    <div className={`form-group ${className || ''} `}>
      {label && !customLabelContent && (
        <label
          className={classNames(
            'col-form-label d-flex justify-content-between',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          <span
            style={{
              visibility: `${
                withContent || hasError || showLabel ? 'visible' : 'hidden'
              }`,
            }}
          >
            {label}
          </span>
          {link && (
            <span style={{ textTransform: 'capitalize' }}>
              <a rel="noopener norefer" target="__blank" href={link}>
                {linkText}
              </a>
            </span>
          )}
        </label>
      )}

      {customLabelContent && <label htmlFor={id}>{customLabelContent}</label>}

      <div className="custom-input-group">
        {left && <span className="left-content">{left}</span>}
        <InputMask
          ref={ref}
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleChange}
          placeholder={placeholder}
          className={icn}
          value={field.value}
          name={name}
          {...rest}
        />
        {right && !deleteValue && (
          <span className="right-content">{right}</span>
        )}
        {deleteValue && field.value && (
          <span
            className="right-content"
            onClick={handleDeleteValue}
            onKeyPress={handleDeleteValue}
            role="button"
            tabIndex="0"
          >
            <Icons.IcoDeleteGray width="1.5rem" height="1.5rem" />
          </span>
        )}
      </div>
      {infoText && (
        <label
          className={classNames('col-form-info-text mt-1 d-block')}
          htmlFor={id}
        >
          {infoText}
        </label>
      )}
      {hasError && (
        <label
          className={classNames(
            'col-form-error',
            hasError && error && 'text-danger',
            classNameError
          )}
          htmlFor={id}
        >
          {hasError}
        </label>
      )}
    </div>
  );
});

MaskedInput.propTypes = {
  error: PropTypes.string,
  upperCase: PropTypes.bool,
  showLabel: PropTypes.bool,
  inputClass: PropTypes.string,
  onDeleteValue: PropTypes.func,
  modifiedExternal: PropTypes.bool,
};

MaskedInput.defaultProps = {
  error: '',
  showLabel: false,
  upperCase: false,
};

export default MaskedInput;

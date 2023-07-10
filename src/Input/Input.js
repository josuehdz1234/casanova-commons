import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';
import * as Icons from '../Icons';

const Input = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    name,
    label,
    right,
    left,
    placeholder,
    onChange,
    inputClass,
    modifiedExternal,
    showLabel,
    deleteValue = false,
    onDeleteValue,
    initialValue,
    defaultValue,
    ...rest
  } = props;

  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;

  const [hasContent, setHasContent] = useState(false);

  const { setValue, setTouched } = helpers;

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
      setHasContent(value && value !== '');
      setValue(value);
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

  const hasError = touched && error;

  const hasValue = typeof field.value !== 'undefined' && field.value !== '';

  const icn = useMemo(() => {
    const inputClassName = classNames(
      `${inputClass && 'formtopPosition'} form-control`,
      (hasContent || modifiedExternal || hasValue) &&
        'form-control--with-content',
      hasError && 'is-invalid',
      right && 'input-group-br-no',
      left && 'input-group-bl-no'
    );

    return inputClassName;
  }, [inputClass, hasContent, hasContent, hasValue, hasError, right, left]);

  return (
    <div className={`form-group ${className || ''} `}>
      {label && (
        <label
          style={{
            visibility: `${
              hasError ||
              hasContent ||
              modifiedExternal ||
              hasValue ||
              showLabel
                ? 'visible'
                : 'hidden'
            }`,
          }}
          className={classNames(
            'col-form-label',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div className="custom-input-group">
        {left && <span className="left-content">{left}</span>}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleChange}
          ref={ref}
          placeholder={placeholder}
          className={icn}
          value={field.value || ''}
          defaultValue={defaultValue || initialValue}
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
      {hasError && (
        <label
          className={classNames(
            'col-form-error',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          {hasError}
        </label>
      )}
    </div>
  );
});

Input.propTypes = {
  error: PropTypes.string,
  showLabel: PropTypes.bool,
};

Input.defaultProps = {
  showLabel: false,
  error: '',
};

export default Input;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';

const Input = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    name,
    label,
    right,
    left,
    placeholder,
    onlyError,
    displayError,
    ...rest
  } = props;
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;

  const hasError = onlyError ? error : touched && error;
  const icn = classNames(
    'form-control',
    hasError && 'is-invalid',
    right && 'input-group-br-no',
    left && 'input-group-bl-no'
  );
  const hasNotValue = typeof field.value === 'undefined' || field.value === '';
  return (
    <div className={`form-group ${className || ''} `}>
      {label && (
        <label
          style={{
            visibility: `${hasError || !hasNotValue ? 'visible' : 'hidden'}`,
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
          ref={ref}
          placeholder={label || placeholder}
          className={icn}
          value={field.value || ''}
          {...rest}
          {...field}
          onBlur={props.onBlur}
        />
        {right && <span className="right-content">{right}</span>}
      </div>
      {hasError && displayError && (
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
  displayError: PropTypes.bool,
  onlyError: PropTypes.bool,
};

Input.defaultProps = {
  onlyError: false,
  displayError: true,
};
export default Input;

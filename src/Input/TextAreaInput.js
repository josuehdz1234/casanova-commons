import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';

const whiteSpaceRegex = /\ {2,}/g;

function TextAreaInput(props) {
  const {
    regex,
    className,
    id,
    name,
    label,
    placeholder,
    rows,
    onlyError,
    onChangeWithRegex,
    ...rest
  } = props;
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;
  const { setValue } = helpers;

  const handleChange = useCallback(
    (e) => {
      const { target } = e;
      const value = target.value.replace(regex, '');
      const clean = value.replace(whiteSpaceRegex, ' ');
      setValue(clean);
      if (onChangeWithRegex) {
        onChangeWithRegex(clean);
      }
    },
    [setValue, onChangeWithRegex]
  );
  const hasNotValue = typeof field.value === 'undefined' || field.value === '';
  const hasValue = field.value && field.value !== '';
  const hasError = onlyError ? error : touched && error;
  const icn = classNames(
    'form-control',
    hasError && 'is-invalid',
    hasValue && 'with-content'
  );
  const row = rows || '5';
  return (
    <div className={`form-group ${className || ''} `}>
      {label && (
        <label
          className={classNames(
            'col-form-label',
            hasError ? 'text-danger' : hasNotValue && 'empty'
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        rows={row}
        placeholder={placeholder}
        className={icn}
        {...field}
        onChange={regex ? handleChange : field.onChange}
        {...rest}
        value={field.value || ''}
      />
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
}

TextAreaInput.propTypes = {
  onlyError: PropTypes.bool,
  regex: PropTypes.any,
};

TextAreaInput.defaultProps = {
  onlyError: false,
  onChangeWithRegex: null,
};

export default TextAreaInput;

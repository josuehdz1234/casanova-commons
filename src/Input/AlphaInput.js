import React, { useCallback } from 'react';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';

const noAlpha = /[^a-zA-Z\u00B4\u00C0-\u00FF ]/g;
const whiteSpaceRegex = /\ {2,}/g;

const getClipped = (limit, value) =>
  limit && value.length > limit ? value.substring(0, limit) : value;

const getHasError = (onlyError, error, touched) =>
  onlyError ? error : touched && error;
function AlphaInput(props) {
  const {
    limit,
    regex,
    whitespace,
    placeholder,
    id,
    className,
    name,
    label,
    right,
    left,
    onlyError,
    disabled,
  } = props;
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;
  const { setValue } = helpers;

  const handleChange = useCallback(
    (e) => {
      const { target } = e;
      const value = target.value.replace(regex, '');
      const clipped = getClipped(limit, value);
      if (whitespace) {
        const clean = clipped.replace(whiteSpaceRegex, ' ');
        setValue(clean);
      } else {
        setValue(clipped);
      }
    },
    [setValue, whitespace]
  );

  const hasNotValue = _isEmpty(field.value);
  const hasError = getHasError(onlyError, error, touched);
  const icn = classNames(
    'form-control',
    hasError && 'is-invalid',
    right && 'input-group-br-no',
    left && 'input-group-bl-no'
  );
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

      <input
        placeholder={placeholder || label}
        className={icn}
        {...field}
        value={field.value || ''}
        onChange={handleChange}
        disabled={disabled}
      />
      {hasError && (
        <label
          className={classNames(
            'col-form-error',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          {error}
        </label>
      )}
    </div>
  );
}

AlphaInput.propTypes = {
  onlyError: PropTypes.bool,
  regex: PropTypes.any,
  whitespace: PropTypes.bool,
  limit: PropTypes.number,
};

AlphaInput.defaultProps = {
  onlyError: false,
  regex: noAlpha,
  whitespace: true,
  limit: 0,
};

export default AlphaInput;

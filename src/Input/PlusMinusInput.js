import React, { useCallback } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

function PlusMinusInput(props) {
  const { id, name, label, placeholder, disabled, min, max, ...rest } = props;
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;

  const hasError = touched && error;
  const handleChange = useCallback((e) => {
    const inputValue = e.target.value;
    const isDigit = /^\d*$/.test(inputValue);
    if (isDigit) {
      helpers.setValue(inputValue);
    }
  });

  const handleIncrease = useCallback((e) => {
    const value = parseInt(field.value);
    if (isNaN(value)) {
      helpers.setValue(String(min || 0));
    } else if (max && value + 1 > max) {
      helpers.setValue(max);
    } else {
      helpers.setValue(String(value + 1));
    }
    e.preventDefault();
  });
  const handleDecrease = useCallback((e) => {
    const value = parseInt(field.value);
    if (isNaN(value) || value - 1 < min) {
      helpers.setValue(String(min || 0));
    } else {
      helpers.setValue(String(value - 1));
    }
    e.preventDefault();
  });

  return (
    <div className="form-group">
      {label && (
        <label
          className={classNames(
            'col-form-label',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div className="col-md-12">
        <div className="row">
          <button
            className="col-2 col-md-2 btn btn-outline btn-plus-minus"
            onClick={handleDecrease}
            disabled={disabled}
          >
            <span>-</span>
          </button>
          <div className="col-8 col-md-8">
            <input
              type="number"
              className="form-control text-center"
              placeholder={placeholder}
              {...field}
              onChange={handleChange}
              value={field.value || ''}
              disabled
              {...rest}
            />
          </div>
          <button
            className="col-2 col-md-2 btn btn-outline btn-plus-minus"
            onClick={handleIncrease}
            disabled={disabled}
          >
            <span>+</span>
          </button>
        </div>
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
}

export default PlusMinusInput;

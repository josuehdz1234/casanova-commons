import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Input(props) {
  const { name, error } = props;
  const { id, label, right, ...rest } = props;
  const icn = classNames(
    'form-control',
    hasError && 'is-invalid',
    right && 'input-group-br-no'
  );
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

      <div className="custom-input-group">
        <input className={icn} {...field} value={field.value || ''} {...rest} />
        {right && <span className="right-content">{right}</span>}
      </div>
      {hasError && <small className="form-text text-danger">{error}</small>}
    </div>
  );
}

Input.propTypes = {
  error: PropTypes.string,
};

Input.defaultProps = {};
export default Input;

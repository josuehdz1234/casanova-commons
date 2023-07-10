import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import _noop from 'lodash/noop';
import classNames from 'classnames';

import IconSmallCheckOn from '../../Icons/SmallBoxCheckOn';
import IconSmallCheckOff from '../../Icons/SmallBoxCheckOff';

export default function SmallCheckbox({ name, label, onChange = _noop }) {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { error, touched } = meta;
  const { setValue, setTouched } = helpers;

  const handleChange = useCallback(() => {
    setValue(!value);
    setTouched(true);
    onChange(!value);
  }, [value, onChange, setValue, setTouched]);

  const hasChecked = value === true;
  const hasError = touched && error;

  const CheckIcon = hasChecked ? IconSmallCheckOn : IconSmallCheckOff;

  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center pointer"
        role="button"
        tabIndex={0}
        onClick={handleChange}
        onKeyDown={handleChange}
      >
        <CheckIcon width="1.125rem" height="1.125rem" className="mr-2" />

        <p
          className={classNames(
            'm-0',
            hasChecked ? 'text-secondary' : 'text-muted'
          )}
        >
          {label}
        </p>
      </div>
      {hasError && (
        <label
          className={classNames(
            'col-form-error pt-2',
            hasError && 'text-danger'
          )}
          htmlFor={name}
        >
          {error}
        </label>
      )}
    </div>
  );
}

SmallCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

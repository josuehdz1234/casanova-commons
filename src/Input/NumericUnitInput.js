import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','); // NOSONAR
}

function formatUnit(rawValue) {
  const value = rawValue.replace(/[^0-9\.]/g, '');

  if (value) {
    const decimalPos = value.indexOf('.');
    if (decimalPos > -1) {
      const integers = value.substring(0, decimalPos);
      const allDecimals = value.substring(decimalPos + 1);
      const decimals = allDecimals.substring(0, 1);

      return {
        mask: `${formatNumber(integers)}.${formatNumber(decimals)}`,
        value: `${integers}.${decimals}`,
      };
    }
    return {
      mask: `${formatNumber(value)}`,
      value,
    };
  }
  return {
    mask: '',
    value: '',
  };
}

function UnitInput(props) {
  const { unit, className, id, name, label, right, left, ...rest } = props;
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;
  const [mask, setMask] = useState();

  const hasError = touched && error;
  const icn = classNames(
    'form-control',
    hasError && 'is-invalid',
    right && 'input-group-br-no',
    left && 'input-group-bl-no'
  );
  useEffect(() => {
    if (field.value) {
      const { mask } = formatUnit(String(field.value));
      setMask(mask);
    }
  }, []);
  const handleChange = useCallback((e) => {
    const { target } = e;
    const { mask, value } = formatUnit(target.value);
    helpers.setValue(value);
    setMask(mask);
  }, []);

  const handleBlur = useCallback((e) => {
    const { target } = e;
    const { mask, value } = formatUnit(target.value);
    helpers.setTouched(true);
    helpers.setValue(value);
    setMask(mask);
  }, []);

  return (
    <div className={`form-group ${className || ''} `}>
      {label && (
        <label
          className={classNames(
            'col-form-label',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          {hasError || label}
        </label>
      )}

      <div className="input-group">
        <input
          className={icn}
          {...field}
          onBlur={handleBlur}
          onChange={handleChange}
          value={typeof mask === 'undefined' ? field.value : mask}
        />
        <div className="input-group-append">
          <span className="input-group-text">{unit}</span>
        </div>
      </div>
    </div>
  );
}
UnitInput.propTypes = {
  unit: PropTypes.string,
};

UnitInput.defaultProps = {
  unit: 'cm',
};
export default UnitInput;

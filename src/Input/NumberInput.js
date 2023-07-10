import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';
import { formatNumberInput as formatNumber } from '@utils/inputs';

function NumberInput(props) {
  const {
    max,
    decimals,
    className,
    id,
    name,
    label,
    right,
    left,
    placeholder,
    onlyError,
    maskPrefix,
    maskSuffix,
    min,
    onChangeWithMaskValue = null,
    showLabel,
    showPlaceholder,
    ...rest
  } = props;

  const [mask, setMask] = useState();
  const [hasContent, setHasContent] = useState(false);

  const [field, meta, helpers] = useField(name);

  const { error, touched, initialValue } = meta;

  const handleChange = useCallback(
    (e) => {
      const { target } = e;
      const { mask, value } = formatNumber(target.value, decimals, maskPrefix);

      if (max && value > max) {
        return;
      }

      if (onChangeWithMaskValue) {
        onChangeWithMaskValue({ value, name: target.name });
      } else {
        helpers.setValue(value);
      }

      setMask(mask);
      setHasContent((target.value && target.value !== '') || field.value === 0);
    },
    [onChangeWithMaskValue, helpers]
  );

  const handleBlur = useCallback(
    (e) => {
      const { target } = e;

      const { mask, value } = formatNumber(
        target.value,
        decimals,
        maskPrefix,
        maskSuffix
      );

      if (max && value > max) {
        return;
      }

      helpers.setTouched(true);
      helpers.setValue(value);

      setMask(mask);
      setHasContent((target.value && target.value !== '') || field.value === 0);
    },
    [helpers]
  );

  useEffect(() => {
    if (field.value !== undefined) {
      handleChange({
        target: {
          ...field,
          value: String(field.value),
        },
      });
    }
  }, [field.value]);

  useEffect(() => {
    if (initialValue) {
      const { mask } = formatNumber(String(initialValue), decimals, maskPrefix);
      setMask(mask);
    } else {
      setMask('');
      setHasContent(false);
    }
  }, [initialValue, rest.disabled]);

  const hasValue = (field.value && field.value !== '') || field.value === 0;
  const hasError = touched && error;

  const withContent = hasContent || hasValue;

  const icn = classNames(
    'form-control',
    withContent && 'form-control--with-content',
    hasError && 'is-invalid',
    right && 'input-group-br-no',
    left && 'input-group-bl-no'
  );

  return (
    <div className={`form-group ${className || ''} `}>
      {label && (
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
        </label>
      )}

      <div className="custom-input-group">
        {left && <span className="left-content">{left}</span>}
        <input
          className={icn}
          {...field}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={showPlaceholder ? placeholder : label || placeholder}
          name={name}
          {...rest}
          value={!mask ? field.value : mask}
        />
      </div>
      {hasError && (
        <label
          className={classNames(
            'col-form-error',
            hasError && error && 'text-danger'
          )}
          htmlFor={name}
        >
          {hasError}
        </label>
      )}
    </div>
  );
}

NumberInput.propTypes = {
  onlyError: PropTypes.bool,
  decimals: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  showLabel: PropTypes.bool,
  showPlaceholder: PropTypes.bool,
};

NumberInput.defaultProps = {
  onlyError: false,
  decimals: 1,
  max: 0,
  min: 0,
  showLabel: false,
  showPlaceholder: false,
};

export default NumberInput;

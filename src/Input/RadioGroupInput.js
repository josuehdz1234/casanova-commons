import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';
import RadioInput from './RadioInput';

const withValue = (value, option) =>
  Array.isArray(value) ? value.concat([option.value]) : [option.value];

const withOutValue = (value, option) =>
  Array.isArray(value) ? value.filter((a) => a !== option.value) : [];

const getNewValue = (val, value, option) =>
  val ? withValue(value, option) : withOutValue(value, option);
function RadioGroupInput(props) {
  const {
    id,
    label,
    multiple,
    type,
    parentClass,
    options,
    name,
    labelClass,
    groupClass,
    inputContainerClass = '',
    disabled,
    statusKey,
    onChange,
  } = props;
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { error, touched } = meta;
  const hasError = touched && error;

  return (
    <div className={`form-group ${parentClass}`}>
      <div className="row">
        {label && (
          <label
            className={classNames(
              `${
                hasError &&
                'col-form-error text-danger font-weight-normal padding__error_stand'
              } col-md-6 m-0`,
              labelClass
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div className={groupClass}>
          {options.map((option, k) => {
            const lastPosition = options.length - 1;

            const { label } = option;
            let bgCheck = 'custom-control-label-1';
            if (statusKey) {
              if (option.value === value) {
                if (statusKey.Extraviada === option.value) {
                  bgCheck = 'custom-control-label-2';
                }
                if (statusKey.Préstamo === option.value) {
                  bgCheck = 'custom-control-label-3';
                }
                if (statusKey.Siniestro === option.value) {
                  bgCheck = 'custom-control-label-4';
                }
              }
            }
            return (
              <RadioInput
                bgCheck={bgCheck}
                typeCheck={props.typeCheck}
                disabled={
                  statusKey ? (k !== lastPosition ? disabled : true) : disabled
                }
                key={label}
                name={name}
                label={label}
                type={type}
                inputContainerClassName={inputContainerClass}
                checked={
                  multiple
                    ? (Array.isArray(value) &&
                        value.find((val) => option.value === val)) ||
                      false
                    : option.value === value
                }
                onChange={(val) => {
                  if (multiple) {
                    const newValue = getNewValue(val, value, option);
                    helpers.setValue(newValue);
                  } else {
                    helpers.setValue(option.value);
                  }
                  if (onChange) {
                    onChange(option);
                  }
                }}
              />
            );
          })}
        </div>
        {hasError && (
          <div className="col-12">
            <label
              className={classNames(
                'col-form-error font-weight-normal text-danger padding__error_stand'
              )}
              htmlFor={id}
            >
              {error}
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

RadioGroupInput.propTypes = {
  multiple: PropTypes.bool,
  type: PropTypes.string,
  labelClass: PropTypes.string,
};

RadioGroupInput.defaultProps = {
  multiple: false,
};

export default RadioGroupInput;

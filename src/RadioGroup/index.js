import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from '../Input/RadioInput';

function RadioGroup(props) {
  const { multiple, type, onChange, options, name, value, size } = props;
  return options.map((option) => {
    const { label } = option;
    return (
      <RadioInput
        key={label}
        name={name}
        label={label}
        type={type}
        size={size}
        checked={
          multiple
            ? (Array.isArray(value) &&
                value.find((val) => option.value === val)) ||
              false
            : option.value === value
        }
        onChange={(val) => {
          if (multiple) {
            const newValue = val
              ? Array.isArray(value)
                ? value.concat([option.value])
                : [option.value]
              : Array.isArray(value)
              ? value.filter((a) => a !== option.value)
              : [];
            onChange({ name, value: newValue, label });
          } else {
            onChange({ name, value: option.value, label });
          }
        }}
      />
    );
  });
}

RadioGroup.propTypes = {
  multiple: PropTypes.bool,
  type: PropTypes.string,
};

RadioGroup.defaultProps = {
  multiple: false,
};

export default RadioGroup;

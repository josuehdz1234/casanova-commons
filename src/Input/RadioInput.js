import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function RadioInput(props) {
  const {
    type,
    name,
    id,
    label,
    onChange,
    disabled,
    size,
    typeCheck,
    bgCheck,
    inputContainerClassName = '',
    ...rest
  } = props;
  const handleChange = useCallback((e) => {
    onChange(e.target.checked);
  });
  const handleClick = useCallback((e) => {
    onChange(!props.checked);
  });

  return (
    <div
      className={`custom-control custom-${type} custom-radio-${size} ${inputContainerClassName}`}
      onClick={disabled ? undefined : handleClick}
    >
      <input
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        className="custom-control-input"
        onChange={handleChange}
        {...rest}
      />
      <label
        className={`custom-control-label custom-radio-label ${
          typeCheck && bgCheck
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

RadioInput.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
};

RadioInput.defaultProps = {
  type: 'radio',
  size: 'md',
};

export default RadioInput;

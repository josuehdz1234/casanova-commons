import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function Radio(props) {
  const { type, name, id, label, onChange, ...rest } = props;
  const handleChange = useCallback((e) => {
    onChange(e.target.checked);
  });
  const handleClick = useCallback((e) => {
    onChange(!props.checked);
  });

  return (
    <div className={`custom-control custom-${type}`} onClick={handleClick}>
      <input
        type={type}
        id={id}
        name={name}
        className="custom-control-input"
        onChange={handleChange}
        {...rest}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

Radio.propTypes = {
  type: PropTypes.string,
};

Radio.defaultProps = {
  type: 'radio',
};

export default Radio;

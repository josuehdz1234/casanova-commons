import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

function Checkbox(props) {
  const {
    id,
    name,
    label,
    disabled,
    classDiv,
    onChange,
    data,
    checked,
  } = props;
  const [field, meta, helpers] = useField({ name, type: 'checkbox' });
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    onChange(data);
  };

  return (
    <div className={`custom-control custom-checkbox ${classDiv}`}>
      <input
        disabled={disabled}
        name={field.name}
        type="checkbox"
        className="custom-control-input"
        id={id || name}
        checked={checked || isChecked}
        onChange={toggleCheckboxChange}
      />
      <label className="custom-control-label" htmlFor={id || name}>
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

Checkbox.defaultProps = {};

export default Checkbox;

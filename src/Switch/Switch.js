import React, { useCallback } from 'react';
import { useField } from 'formik';
import './Switch.scss';

function Switch(props) {
  const { id, name, label, disabled, onClick = () => {} } = props;
  const [field, meta, helpers] = useField({ name, type: 'checkbox' });

  const handleClick = useCallback(() => {
    helpers.setValue(!field.value);
    onClick();
  }, [helpers, onClick]);

  return (
    <div
      className="Switch custom-control custom-switch"
      onClick={!disabled ? handleClick : undefined}
    >
      <input
        type="checkbox"
        className="Switch__input custom-control-input"
        disabled={disabled}
        {...field}
        checked={field.value}
        id={id}
      />
      <label className="custom-control-label custom-switch-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Switch;

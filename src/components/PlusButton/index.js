import React from 'react';
import './PlusButton.scss';

export default function PlusButton({
  onClick,
  className = '',
  textLeft,
  textRight,
  color = 'secondary',
  ...rest
}) {
  return (
    <div className="PlusButton">
      {textLeft && (
        <span className={`PlusButton__Left PlusButton__Left--${color}`}>
          {textLeft}
        </span>
      )}

      <button
        onClick={onClick}
        type="button"
        {...rest}
        className={`PlusButton__Button btn btn-outline btn-plus-minus ${className}`}
      >
        <div>+</div>
      </button>

      {textRight && (
        <span className={`PlusButton__Right PlusButton__Right--${color}`}>
          {textRight}
        </span>
      )}
    </div>
  );
}

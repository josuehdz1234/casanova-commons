import React from 'react';
import './Circles.scss';

export default function Circles({ primary = false, className = '' }) {
  const shapeClassName = `Circle__Shape Circle__Shape--${
    primary ? 'primary' : 'secondary'
  }`;
  return (
    <div className={`Circle ${className}`}>
      <div className={shapeClassName} />
      <div className={shapeClassName} />
      <div className={shapeClassName} />
    </div>
  );
}

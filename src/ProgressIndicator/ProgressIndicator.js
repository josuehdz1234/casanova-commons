import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const labelClass = classnames([
  'component-progress-indicator-label',
  'd-flex',
  'justify-content-center',
  'align-items-center',
  'font-weight-bold',
]);

export default function ProgressIndicator({
  size,
  stroke,
  strokeWidth,
  progress, // Percentaje
  label,
}) {
  const position = Math.round(+size / 2);
  const radio = position - 15;
  const [baseStroke, progressStroke] = stroke;
  const circunference = 2 * Math.PI * radio;
  const progressSize = circunference * (progress / 100);
  const progressDiff = circunference - progressSize;
  const offset = circunference / 4;

  return (
    <div className="position-relative">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={position}
          cy={position}
          r={radio}
          fill="none"
          stroke={baseStroke}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={position}
          cy={position}
          r={position - 15}
          fill="none"
          stroke={progressStroke}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressSize} ${progressDiff}`}
          strokeDashoffset={offset}
          strokeLinecap="square"
        />
      </svg>
      <div
        className={labelClass}
        style={{
          width: size,
          height: size,
        }}
      >
        {label}
      </div>
    </div>
  );
}

ProgressIndicator.propTypes = {
  size: PropTypes.number.isRequired,
  stroke: PropTypes.array.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

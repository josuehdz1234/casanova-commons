import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _capitalize from 'lodash/capitalize';
import './CardNumber.scss';

export default function CardNumber({
  title = '',
  value = '',
  className = '',
  type = 'primary',
  size = '',
}) {
  const isSmall = useMemo(() => size === 'small', [size]);

  const headerClass = useMemo(() => {
    const headerClasses = size
      ? `CardNumber__Header${_capitalize(size)}`
      : 'CardNumber__Header';

    return classNames(
      'card-header justify-content-center',
      headerClasses,
      `CardNumber__Header--${type}`
    );
  }, [type, size]);

  const bodyClass = useMemo(() => {
    const bodyClasses = size ? `Card-Body${_capitalize(size)}` : 'Card-Body';

    return classNames(
      'card-body bg-white  d-flex justify-content-center p-0',
      bodyClasses
    );
  }, []);

  const titleClassName = useMemo(() => 'text-center text-white m-0', []);

  return (
    <div className={`card CardNumber ${className}`}>
      <div className={headerClass}>
        {isSmall ? (
          <h6 className={titleClassName}>{title}</h6>
        ) : (
          <h5 className={titleClassName}>{title}</h5>
        )}
      </div>
      <div className={bodyClass}>
        <h1 className={classNames('m-0 mt-1', isSmall && 'h4')}>{value}</h1>
      </div>
    </div>
  );
}

CardNumber.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

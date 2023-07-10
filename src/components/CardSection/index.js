import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './CardSection.scss';

const CardSection = ({
  children,
  title = '',
  noStatus,
  status = 'success',
  padding,
  noTitle,
  className,
  borderDirection = 'top',
  onClick,
  titleClassName = '',
  upperCase = false,
}) => {
  const cls = classNames(
    `CardSection`,
    noStatus && 'CardSection--without-status',
    !noStatus && status && `CardSection__${borderDirection}--${status}`,
    padding,
    className
  );
  return (
    <div className={cls} tabIndex={0} onClick={onClick} onKeyPress={onClick}>
      {!noTitle && (
        <h6
          className={classNames(
            'CardSection__title',
            titleClassName,
            upperCase && 'text-uppercase'
          )}
        >
          {title}
        </h6>
      )}
      {children}
    </div>
  );
};

CardSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  noStatus: PropTypes.bool,
  padding: PropTypes.string,
  noTitle: PropTypes.bool,
  className: PropTypes.string,
  borderDirection: PropTypes.string,
  onClick: PropTypes.func,
  titleClassName: PropTypes.bool,
  status: PropTypes.string,
  upperCase: PropTypes.bool,
};

export default CardSection;

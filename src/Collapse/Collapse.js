import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ChevronDown, ChevronRight, CirclePlus } from '../Icons';

function getIcon(show, isNew) {
  if (show) {
    return ChevronDown;
  }
  if (!isNew) {
    return ChevronRight;
  }
  return CirclePlus;
}
function Collapse(props) {
  const {
    children,
    className,
    disabled,
    name,
    onClick,
    show,
    title: Title,
    titleProps,
    isNew,
  } = props;
  const Icon = getIcon(show, isNew);
  const headerClassName = classnames(show && 'show', isNew && 'disabled');

  return (
    <div className={`card ${className}`}>
      <div
        onClick={() => {
          if (!disabled) {
            onClick(name);
          }
        }}
        className={`card-header ${headerClassName}`}
      >
        <h5 className="mb-0">
          {typeof Title === 'string' ? Title : <Title {...titleProps} />}
        </h5>
        <span className="card-header-icon">{disabled ? '' : <Icon />}</span>
      </div>
      <div className={`collapse ${show ? 'show' : ''}`}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  show: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Collapse.defaultProps = {
  show: false,
  disabled: false,
  className: '',
};

export default Collapse;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useOutsideAlerter } from '../../hooks';

function OutsideAlerter(props) {
  const { children, className } = props;
  const wrapperRef = useRef(null);
  useOutsideAlerter({ ...props, ref: wrapperRef });

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;

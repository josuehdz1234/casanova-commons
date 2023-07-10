import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loader from '../Loader';

function Body({ showLoader, className, aside, children, centerClass }) {
  const bodyClass = classNames('col', centerClass);
  const mainClassName = classNames('main-content', className);
  return (
    <div className="row">
      <div className={bodyClass}>
        <div className={mainClassName}>
          <Loader show={showLoader} />
          {children}
        </div>
      </div>
      {aside}
    </div>
  );
}

Body.propTypes = {
  showLoader: PropTypes.bool,
  children: PropTypes.any,
};

export default Body;

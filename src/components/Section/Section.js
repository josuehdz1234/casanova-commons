import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const FormSection = ({
  title,
  right,
  children,
  upperCase,
  className,
  topBar = true,
}) => {
  const componentCls = classnames('form_container', className);

  return (
    <div className={componentCls}>
      <div className="section">
        <legend className="section__title">
          {' '}
          {upperCase ? title.toUpperCase() : title}{' '}
        </legend>
        <div className="section__right">{right}</div>
      </div>
      {topBar && <hr style={{ marginTop: '0' }} width="100%" />}
      {children}
    </div>
  );
};

FormSection.propTypes = {
  title: PropTypes.string,
  right: PropTypes.node,
  upperCase: PropTypes.bool,
  topBar: PropTypes.bool,
};

FormSection.defaultProps = {
  title: '',
  upperCase: false,
};

export default FormSection;

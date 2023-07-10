import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import i18n from '@i18n';
import './TextField.scss';

const TextField = ({ value = '', title = '', status, noMb }) => {
  const cls = classNames(status && `text-${status}`);

  return (
    <div className={`form-group TextField ${noMb ? 'TextField--no-mb' : ''}`}>
      <label>{title.toUpperCase()}</label>
      <br />
      <span className={cls}>{value || i18n('COMMONS__NOT_INFO')}</span>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
};

export default TextField;

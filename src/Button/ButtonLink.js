import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ButtonLink(props) {
  const { className, color, block, outline, ...rest } = props;
  const cn = classNames(
    'btn',
    `btn-${outline ? 'outline-' : ''}${color}`,
    block && 'btn-block',
    className
  );

  return <a className={cn} {...rest} rel="noopener norefer" />;
}

ButtonLink.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  href: PropTypes.string,
};

ButtonLink.defaultProps = {
  color: 'primary',
  block: false,
  outline: false,
};

export default ButtonLink;

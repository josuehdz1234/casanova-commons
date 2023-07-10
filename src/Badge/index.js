import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ variation, outline, pill, closeable, onClose, children }) => {
  const cn = classNames(
    `badge badge-${variation}`,
    pill && 'badge-pill',
    outline && 'badge-outline'
  );
  return (
    <span className={cn}>
      {children}{' '}
      {closeable && (
        <span onClick={onClose} className="badge-closeable">
          X
        </span>
      )}
    </span>
  );
};

Badge.propTypes = {
  outline: PropTypes.bool,
  pill: PropTypes.bool,
  variation: PropTypes.string,
  closeable: PropTypes.bool,
  onClose: PropTypes.func,
};

Badge.defaultProps = {
  outline: false,
  variation: 'primary',
  closeable: false,
  pill: false,
};

export default Badge;

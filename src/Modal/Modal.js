import React, { useCallback, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import branch from 'recompose/branch';
import renderNothing from 'recompose/renderNothing';
import _noop from 'lodash/noop';
import classNames from 'classnames';
import { useScroll } from '@hooks';
import Times from '../Icons/Times';
import Button from '../Button';
import './Modal.scss';

function Modal(props) {
  const {
    topContainerClassName = '',
    backdropClassName = '',
    containerClassName = '',
    contentClassName = '',
    className,
    open,
    id,
    children,
    header,
    footer,
    onClose,
    closeButton,
    data,
    bigModal = false,
    disableScroll = false,
  } = props;

  useScroll({ disableScroll });

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose(data);
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleClose = useCallback(() => {
    onClose(data);
  }, [onClose]);

  const modalClassNames = useMemo(() => {
    const topContainer = classNames(topContainerClassName);

    const modal = classNames('modal', bigModal && 'BigModal', className);

    const container = classNames(
      'modal-dialog modal-md modal-dialog-centered',
      bigModal && 'BigModal__Container',
      containerClassName
    );

    const content = classNames(
      'modal-content',
      bigModal && 'BigModal__Content px-4 py-4',
      contentClassName
    );

    return {
      topContainer,
      container,
      content,
      modal,
    };
  }, [
    bigModal,
    topContainerClassName,
    containerClassName,
    contentClassName,
    className,
  ]);

  return ReactDOM.createPortal(
    <div className={modalClassNames.topContainer}>
      <div className={`modal-backdrop fade show ${backdropClassName}`} />
      <div
        className={modalClassNames.modal}
        id={id}
        role="dialog"
        style={{ display: 'block' }}
      >
        {closeButton && (
          <Button outline onClick={handleClose} className="close">
            <span style={{ width: '1rem', display: 'inline-block' }}>
              <Times />
            </span>
          </Button>
        )}
        <div className={modalClassNames.container} role="document">
          <div className={modalClassNames.content}>
            {header}
            {children}
            {footer}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('root')
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  closeButton: PropTypes.bool,
};

Modal.defaultProps = {
  onClose: _noop,
  closeButton: false,
};

export default branch((props) => !props.open, renderNothing)(Modal);

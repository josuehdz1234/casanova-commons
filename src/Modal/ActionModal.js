import React from 'react';
import { makeBold } from '@utils/transformers';
import Button from '../Button';
import Modal from './Modal';

function ActionModal({
  open,
  message,
  id,
  title,
  icon,
  onClose,
  onAction,
  actionLabel,
  modalType,
  closeLabel,
  closeButton,
  code,
  messageBold = false,
  textBold = '',
  withBr = [],
  subDescription = '',
  onClickSubDescription,
  topContainerClassName = '',
  backdropClassName = '',
}) {
  const header = (
    <div className="modal-header justify-content-center align-items-center">
      <div className="icon">{icon}</div>
      <h5 className="modal-title text-center" id={`${id}-label`}>
        {title}
      </h5>
    </div>
  );
  const footer = (
    <div className="modal-footer container">
      {(modalType === 'action' || !modalType) && modalType !== 'empty' && (
        <div className="row">
          <div className="col-md-6">
            <Button block outline onClick={onClose}>
              {closeLabel}
            </Button>
          </div>
          <div className="col-md-6">
            <Button block onClick={onAction}>
              {actionLabel}
            </Button>
          </div>
        </div>
      )}

      {modalType === 'confirmation' && (
        <div className="row">
          <div className="offset-3 col-6">
            <Button block onClick={onAction}>
              {actionLabel}
            </Button>
          </div>
        </div>
      )}

      {modalType === 'inverted' && (
        <div className="row">
          <div className="col-md-6">
            <Button block outline onClick={onAction}>
              {actionLabel}
            </Button>
          </div>
          <div className="col-md-6">
            <Button block onClick={onClose}>
              {closeLabel}
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Modal
      open={open}
      closeButton={closeButton}
      onClose={onClose}
      header={header}
      footer={modalType !== 'empty' ? footer : null}
      className="action-modal"
      topContainerClassName={topContainerClassName}
      backdropClassName={backdropClassName}
    >
      <div className="modal-body">
        {messageBold && message && textBold ? (
          <p
            className="text-center"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: makeBold({ section: message, keyword: textBold, withBr }),
            }}
          />
        ) : (
          <p className="text-center">{message}</p>
        )}

        {subDescription && (
          <div className="row">
            <div className="col-12 text-center m-0 p-0">
              <button
                onClick={onClickSubDescription}
                className="btn text-secondary m-0 p-0"
                type="button"
              >
                <p className="text-center m-0 p-0">{subDescription}</p>
              </button>
            </div>
          </div>
        )}

        <p className="text-center modal-code">{code}</p>
      </div>
    </Modal>
  );
}

ActionModal.defaultProps = {
  closeLabel: 'Cancelar',
};

export default ActionModal;

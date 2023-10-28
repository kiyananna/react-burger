import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ScModal, ScTitle, ScCloseBtn } from './modal.styled';

export const Modal = ({ children, handleModalClose, modalTitle = '' }) => {
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') handleModalClose();
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [handleModalClose]);

  const modalWrapper = document.getElementById('portal-modal-id');

  if (!modalWrapper) return null;

  return createPortal(
    <>
      <ModalOverlay handleModalClose={handleModalClose} />
      <ScModal>
        <ScCloseBtn onClick={handleModalClose}>
          <CloseIcon type="primary" />
        </ScCloseBtn>
        <ScTitle>{modalTitle}</ScTitle>
        <div>{children}</div>
      </ScModal>
    </>,
    modalWrapper,
  );
};

Modal.propTypes = {
  modalTitle: PropTypes.string,
  handleModalClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

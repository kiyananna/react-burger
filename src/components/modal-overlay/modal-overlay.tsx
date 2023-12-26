import PropTypes from 'prop-types';
import { ScWrapper } from './modal-overlay.styled';
import { FC } from 'react';

export const ModalOverlay:FC <IProps> = ({ handleModalClose }) => {
  return <ScWrapper onClick={handleModalClose} />;
};

ModalOverlay.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};


type IProps = {
  handleModalClose: ()=> void;
}
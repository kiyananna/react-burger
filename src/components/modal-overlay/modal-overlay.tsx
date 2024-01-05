import { ScWrapper } from './modal-overlay.styled';
import { FC } from 'react';

export const ModalOverlay:FC <IProps> = ({ handleModalClose }) => {
  return <ScWrapper onClick={handleModalClose} />;
};




type IProps = {
  handleModalClose: ()=> void;
}
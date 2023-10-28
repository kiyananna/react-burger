import PropTypes from 'prop-types';
import { ScWrapper } from './modal-overlay.styled';

export const ModalOverlay = ({ handleModalClose }) => {
  return <ScWrapper onClick={handleModalClose} />;
};

ModalOverlay.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

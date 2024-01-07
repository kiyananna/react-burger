import styled from 'styled-components';

export const ScWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  position: fixed;
  overflow: hidden;
  inset: 0;
  transition: all 0.3s ease-in-out;
`;

import styled from 'styled-components';

export const ScCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const ScTitle = styled.div`
  min-height: 62px;
  text-align: left;
  padding-right: 60px;
  margin-bottom: 16px;
  font-family: 'Jet Brains Mono';
  font-size: 36px;
  font-weight: bold;
  line-height: 1.1;
`;

export const ScModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 720px;
  position: relative;
  padding: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 999;
  border-radius: 40px;
  border: 1px solid var(--interface-modal-edge, rgba(76, 76, 255, 0.2));
  background: var(--interface-modal-bg, #1c1c21);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.04),
    0px 24px 32px 0px rgba(0, 0, 0, 0.04);
`;

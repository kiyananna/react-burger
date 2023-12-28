import styled from 'styled-components';

export const ScOrderCard = styled.div`
  max-width: 532px;
  border-radius: 40px;
  border: 2px solid #1C1C21;
  background: var(--interface-modal-bg, #1C1C21);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 0px 2px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  text-decoration: none;
`;

export const ScOrderCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ScOrderCardIngredients = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ScCardIngredientsIcons = styled.div`
  display: flex;
`;

export const ScIconWrapper = styled.div`
  border-radius: 100px;
  max-width: 60px;
  max-height: 60px;
  border: 2px solid var(--button-normal, #801AB2);
  background: var(--interface-bg, #131316);
  position: relative;
`;

export const ScIconWrapperCount = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
  line-height: 1.2;
`;

export const ScCardIngredientIcon = styled.img`
  max-width: 60px;
  max-height: 60px;
  object-fit: cover;
`;

export const ScOrderCardPrice = styled.div`
  display: flex;
  align-items: center;
`;
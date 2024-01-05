import styled from 'styled-components';

export const ScContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

export const ScIngredientsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 312px;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
`;

export const ScIngredient = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  margin: 16px 24px 0 0;

  &:first-child {
    margin-top: 0;
  }
`;

export const ScDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ScPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ScPicture = styled.div`
  display: flex;
  align-items: center;
`;

export const ScFooter = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const ScNumber = styled.div`
  text-align: center;
`;

export const ScDone = styled.span`
  color: #00cccc;
`;

export const ScIcon = styled.img`
  max-width: 64px;
  border-radius: 100px;
  border: 2px solid var(--button-normal, #801ab2);
  background: var(--interface-bg, #131316);
  object-fit: cover;
`;

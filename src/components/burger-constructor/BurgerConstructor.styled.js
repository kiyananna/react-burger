import styled from 'styled-components';

export const ScBurgerConstructorWrapper = styled.div`
  width: 100%;
`;

export const ScIngredientItem = styled.div`
  padding-right: 16px;
  margin-left: 32px;
  margin-top: 16px;
`;

export const ScIngredients = styled.ul`
  ${
    '' /* margin: 0;
  overflow-y: scroll;
  padding: 0;
  height: calc(100vh - 536px); */
  }
  margin: 0;
  padding: 0;
  max-height: calc(100vh - 536px);
  overflow-y: scroll;
`;

export const PriceWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2px;
`;

export const ScIngredient = styled.li`
  margin-left: 32px;
  padding-right: 16px;
  list-style-type: none;
`;

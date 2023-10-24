import styled from 'styled-components';

export const ScIngredientItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

import styled from 'styled-components';

export const ScList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  max-height: 160px;
`;

export const ScItem = styled.li`
  list-style: none;
  padding-right: 10px;

  &:not(:nth-child(5n)) {
    margin-bottom: 8px;
  }
`;

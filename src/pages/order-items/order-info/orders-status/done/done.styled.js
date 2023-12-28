import styled from 'styled-components';

export const ScNumber = styled.div`
  text-shadow: 0px 4px 32px rgba(51, 51, 255, 0.5),
    0px 0px 8px rgba(51, 51, 255, 0.25), 0px 0px 16px rgba(51, 51, 255, 0.25);
`;

export const ScWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 60px;
  }
`;

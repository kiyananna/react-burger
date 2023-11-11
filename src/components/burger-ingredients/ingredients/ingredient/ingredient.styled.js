import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  max-width: 272px;
  list-style: none;
  cursor: pointer;
`;

export const CardImage = styled.img`
  display: block;
  margin: 0 auto 4px;
`;

export const CardCost = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CardTitle = styled.h3`
  text-align: center;
  min-height: 48px;
`;

export const ScCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

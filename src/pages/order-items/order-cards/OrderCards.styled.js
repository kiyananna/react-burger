import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ScOrderCards = styled.div`
  width: 50%;
  max-height: calc(100vh - 188px);
  overflow: hidden;
  overflow-y: scroll;
`;

export const ScLink = styled(Link)`
  text-decoration: none;
  color: unset;
`;

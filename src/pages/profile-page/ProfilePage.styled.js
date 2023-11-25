import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ScWrapper = styled.div`
  display: flex;
`;

export const ScNavSidebar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin-right: 40px;
`;

export const ScNavSidebarLink = styled(NavLink)`
  padding: 17px 0;
  color: #fff;
  text-decoration: none;
`;

export const ScNavSidebarBtn = styled.button`
  padding: 17px 0;
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
`;

import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  background-color: var(--interface-modal-bg, #1c1c21);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.04),
    0px 24px 32px 0px rgba(0, 0, 0, 0.04);
  margin-bottom: 40px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 40px;
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  color: #fff;
  padding: 16px 20px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  width: 35%;
`;

export const ProfileWrapper = styled.div`
  width: 35%;
`;

export const MenuIcon = styled.div`
  display: flex;
  padding-right: 8px;
`;

export const AppHeaderLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  color: #fff;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const AppHeaderIcon = styled.div`
  display: flex;
`;

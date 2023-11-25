import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  AppHeaderWrapper,
  Header,
  MenuWrapper,
  MenuLink,
  MenuIcon,
  AppHeaderLink,
  AppHeaderIcon,
} from './AppHeader.styled';
import { NavLink } from 'react-router-dom';

export const AppHeader = () => {
  return (
    <AppHeaderWrapper>
      <Header>
        <MenuWrapper>
          <MenuLink href="/#">
            <MenuIcon>
              <BurgerIcon type="primary" />
            </MenuIcon>
            Конструктор
          </MenuLink>
          <MenuLink href="/#">
            <MenuIcon>
              <ListIcon type="secondary" />
            </MenuIcon>
            Лента заказов
          </MenuLink>
        </MenuWrapper>
        <Logo />
        <NavLink
          to={'/profile'}
          // style={profileStyles}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {({ isActive }) => (
            <AppHeaderLink className="text text_type_main-default pl-5 pr-5 pt-4 pb-4">
              <AppHeaderIcon className="pr-2">
                <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
              </AppHeaderIcon>
              <span className={!isActive ? 'text_color_inactive' : ''}>
                Личный кабинет
              </span>
            </AppHeaderLink>
          )}
        </NavLink>
      </Header>
    </AppHeaderWrapper>
  );
};

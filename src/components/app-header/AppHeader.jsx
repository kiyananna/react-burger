import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import {
  AppHeaderWrapper,
  Header,
  AppHeaderMenu,
  AppHeaderLink,
  AppHeaderIcon,
} from './AppHeader.styled';

export const AppHeader = () => {
  return (
    <AppHeaderWrapper className="mb-10">
      <Header className="pt-4 pb-4 mb-10">
        <AppHeaderMenu>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
              <AppHeaderLink className="text text_type_main-default pl-5 pr-5 pt-4 pb-4">
                <AppHeaderIcon className="pr-2">
                  <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
                </AppHeaderIcon>
                <span className={!isActive ? 'text_color_inactive' : ''}>
                  Конструктор
                </span>
              </AppHeaderLink>
            )}
          </NavLink>
          <NavLink
            to={'/order-list'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
              <AppHeaderLink className="text text_type_main-default pl-5 pr-5 pt-4 pb-4">
                <AppHeaderIcon className="pr-2">
                  <ListIcon type={isActive ? 'primary' : 'secondary'} />
                </AppHeaderIcon>
                <span className={!isActive ? 'text_color_inactive' : ''}>
                  Лента заказов
                </span>
              </AppHeaderLink>
            )}
          </NavLink>
        </AppHeaderMenu>
        <Logo />
        <NavLink
          to={'/profile'}
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

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
import {
  AppHeaderWrapper,
  Header,
  MenuWrapper,
  MenuLink,
  MenuIcon,
  ProfileWrapper,
} from './AppHeader.styled';

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
        <ProfileWrapper>
          <MenuLink href="/#">
            <MenuIcon>
              <ProfileIcon type="secondary" />
            </MenuIcon>
            Личный кабинет
          </MenuLink>
        </ProfileWrapper>
      </Header>
    </AppHeaderWrapper>
  );
};

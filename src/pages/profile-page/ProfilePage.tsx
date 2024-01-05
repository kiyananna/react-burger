import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import { logOut } from '../../services/logout/actions';
import { useAppDispatch } from "../../hooks/index";
import { getCookie } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import {
  ScWrapper,
  ScNavSidebar,
  ScNavSidebarLink,
  ScNavSidebarBtn,
} from './ProfilePage.styled';

export const ProfilePage: FC = () => {
  const dispatch: any = useAppDispatch();
  const token = getCookie('refreshToken');
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logOut(token));
    if (token) {
      navigate('/');
    }
  };
  return (
    <ScWrapper className="mt-30">
      <ScNavSidebar>
        <ScNavSidebarLink
          to={'/profile'}
          className="text text_type_main-medium"
        >
          {({ isActive }) => (
            <span className={!isActive ? 'text_color_inactive' : ''}>
              Профиль
            </span>
          )}
        </ScNavSidebarLink>
        <ScNavSidebarLink
          to={'/profile/orders'}
          className="text text_type_main-medium"
        >
          {({ isActive }) => (
            <span className={!isActive ? 'text_color_inactive' : ''}>
              История заказов
            </span>
          )}
        </ScNavSidebarLink>
        <ScNavSidebarBtn
          onClick={logoutHandler}
          className="text text_type_main-medium text_color_inactive mb-20"
        >
          Выход
        </ScNavSidebarBtn>
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </ScNavSidebar>
      <Outlet />
    </ScWrapper>
  );
};

import { Navigate, Outlet } from 'react-router-dom';
import { FC } from 'react';

export const ProtectedRoute: FC<IProps> = ({ isAuthorized, children, link }) => {
  if (!isAuthorized) {
    return <Navigate to={`/${link}`} replace />;
  }

  return children ? children : <Outlet />;
};

type IProps = {
  isAuthorized?: boolean;
  link?: string;
  children: React.JSX.Element
}
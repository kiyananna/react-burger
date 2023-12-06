import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ isAuthorized, children, link }) => {
  if (!isAuthorized) {
    return <Navigate to={`/${link}`} replace />;
  }

  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element,
  isAuthorized: PropTypes.bool,
  link: PropTypes.string,
};

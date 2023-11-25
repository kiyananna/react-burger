import { AppHeader } from './components/app-header/AppHeader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from './services/ingredients/actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/login-page/login-page';
import { ForgotPasswordPage } from './pages/forgot-password-page/forgot-password-page';
import { ResetPasswordPage } from './pages/reset-password-page/reset-password-page';
import { OrderItems } from './pages/order-items/order-items';
import { Orders } from './pages/profile-page/orders/orders';
import { BurgerConstructorPage } from './pages/burger-constructor-page/burger-constructor-page';
import { ProfileSettings } from './pages/profile-page/profile-settings/profile-settings';
import { RegisterPage } from './pages/register-page/register-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { ProtectedRoute } from './components/protected-route/protected-route';
import { getCookie } from './utils/utils';
import { Wrapper } from './components/layout/wrapper';
import { IngredientPage } from './pages/ingredient-page/ingredient-page';
import { NotFoundPage } from './pages/404-page/404-page';

function App() {
  const dispatch = useDispatch();
  const isAuthorized = getCookie('accessToken') ? true : false;
  const location = useLocation();
  const forgotPasswordState = useSelector(
    (state) => state.recoverPassword.emailRecoverSuccess,
  );
  const state = location.state;

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <AppHeader />
        <Wrapper>
          <Routes location={state?.backgroundLocation || location}>
            <Route path="/" element={<BurgerConstructorPage />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute isAuthorized={!isAuthorized} link={'profile'}>
                  <LoginPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute isAuthorized={!isAuthorized} link={'profile'}>
                  <RegisterPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <ProtectedRoute isAuthorized={!isAuthorized} link={'profile'}>
                  <ForgotPasswordPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reset-password"
              element={
                <ProtectedRoute
                  isAuthorized={forgotPasswordState}
                  link={'forgot-password'}
                >
                  <ResetPasswordPage />
                </ProtectedRoute>
              }
            />
            <Route path="/ingredients/:id" element={<IngredientPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthorized={isAuthorized} link={'login'}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            >
              <Route path="/profile" element={<ProfileSettings />} />
              <Route path="/profile/orders" element={<Orders />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/order-list" element={<OrderItems />} />
          </Routes>
        </Wrapper>
      </div>
    </DndProvider>
  );
}

export default App;

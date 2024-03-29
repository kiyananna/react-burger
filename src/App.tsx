import { AppHeader } from './components/app-header/AppHeader';
import React, { useEffect , FC } from 'react';
import { getIngredients } from './services/ingredients/actions';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Routes, Route, useLocation , useNavigate } from 'react-router-dom';
import { LoginPage } from './pages/login-page/LoginPage';
import { ForgotPasswordPage } from './pages/forgot-password-page/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/reset-password-page/ResetPasswordPage';
import { OrderItems } from './pages/order-items/OrderItems';
import { OrderInfo } from './components/order-info/OrderInfo';
import { Orders } from './pages/profile-page/orders/orders';
import { BurgerConstructorPage } from './pages/burger-constructor-page/BurgerConstructorPage';
import { ProfileSettings } from './pages/profile-page/profile-settings/ProfileSettings';
import { RegisterPage } from './pages/register-page/RegisterPage';
import { ProfilePage } from './pages/profile-page/ProfilePage';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';
import { getCookie } from './utils/utils';
import { Wrapper } from './components/layout/wrapper';
import { IngredientPage } from './pages/ingredient-page/IngredientPage';
import { NotFoundPage } from './pages/404-page/404-page';
import { useAppSelector, useAppDispatch  } from './hooks/index';
import { Modal } from './components/modal/modal';
import { IngredientDetail } from './components/burger-ingredients/ingredients/ingredient-detail/ingredient-detail';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = getCookie('accessToken') ? true : false;
  const location = useLocation();
  const forgotPasswordState  = useAppSelector(
    (state) => state.recoverPassword.emailRecoverSuccess,
  );
  const state = location.state;
  const navigate = useNavigate()
  const handleClose = () => {
    navigate(-1)
  }

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
            <Route path='/feed/:feedId' element={<OrderInfo />}/>
            <Route path='/profile/orders/:orderId' element={<OrderInfo />}/>
          </Routes>
          { state?.backgroundLocation && (
            <Routes location={location}>
              <Route path='/profile/orders/:orderId' element={
                <Modal handleModalClose={handleClose}>
                  <OrderInfo />
                  </Modal>
                }/>
                <Route path='/feed/:feedId' element={
                  <Modal handleModalClose={handleClose}>
                    <OrderInfo />
                  </Modal>}
                /> 
            </Routes>
          )}
        </Wrapper>
      </div>
    </DndProvider>
  );
}

export default App;

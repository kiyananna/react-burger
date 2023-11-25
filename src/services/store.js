import { ingredientDetailReducer } from './ingredient-detail/reducers';
import { orderReducer } from './order-detail/reducers';
import { ingredientsReducer } from './ingredients/reducers';
import { constructorReducer } from './constructor-ingredients/reducers';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './register/reducers';
import { logOutReduser } from './logout/reducers';
import { loginReducer } from './login/reducers';
import { userReduser } from './user/reducers';
import { recoverPasswordReducer } from './forgot-password/reducers';
import { passwordResetReduser } from './reset-password/reducers';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientsConstructor: constructorReducer,
  ingredientDetail: ingredientDetailReducer,
  orderDetail: orderReducer,
  register: registerReducer,
  logout: logOutReduser,
  login: loginReducer,
  user: userReduser,
  recoverPassword: recoverPasswordReducer,
  resetPassword: passwordResetReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});

import { ingredientDetailReducer } from './ingredient-detail/reducers';
import { orderReducer } from './order-detail/reducers';
import { ingredientsReducer } from './ingredients/reducers';
import { constructorReducer } from './constructor-ingredients/reducers';
import { Action, combineReducers , compose , ActionCreator } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './register/reducers';
import { logOutReduser } from './logout/reducers';
import { loginReducer } from './login/reducers';
import { userReduser } from './user/reducers';
import { recoverPasswordReducer } from './forgot-password/reducers';
import { passwordResetReduser } from './reset-password/reducers';
import thunk, { ThunkAction } from 'redux-thunk';
import { socketMiddleware } from "./middleware/customMiddleware";
import { orderFeedActions, TOrderFeedActions } from "./order-feed/actions";
import { orderHistoryActions, TOrderHistoryActions } from "./order-history/actions";
import { TBurgerConstructorActions } from "./constructor-ingredients/actions";
import { ICleanUserInfo } from "./user/actions";
import { orderHistoryReducer } from "./order-history/reducers";

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
  historySocket: orderHistoryReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, socketMiddleware(orderFeedActions), socketMiddleware(orderHistoryActions)],
  enhancers: [compose]
});


export default store
export type IRootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>

type TApplicationActions = TWsApplicationActions | TBurgerConstructorActions | ICleanUserInfo; 
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>

export type TWsApplicationActions = 
| TOrderFeedActions
| TOrderHistoryActions

export type AppDispatch = typeof store.dispatch
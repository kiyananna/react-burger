import { ingredientDetailReducer } from './ingredient-detail/reducers';
import { orderReducer } from './order-detail/reducers';
import { ingredientsReducer } from './ingredients/reducers';
import { constructorReducer } from './constructor-ingredients/reducers';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientsConstructor: constructorReducer,
  ingredientDetail: ingredientDetailReducer,
  orderDetail: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

import {
  GET_CONSTRUCTOR_ELEMENT,
  DELETE_CONSTRUCTOR_ELEMENT,
  GET_BUN,
  MOVE_CONSTRUCTOR_ELEMENT,
  CLEAR_CONSTRUCTOR,
  TBurgerConstructorActions
} from './actions';
import update from 'immutability-helper';
import { TItemState } from '../../utils/types';

type TConstructorState = {
  constructorList: TItemState[]
}

const initialState = {
  constructorList: [],
};

export const constructorReducer = (state: TConstructorState = initialState, action: TBurgerConstructorActions ) => {
  switch (action.type) {
    case GET_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        constructorList:
          !state.constructorList.find((element: TItemState) => element.type === 'bun') ||
          action.element.type !== 'bun'
            ? [action.element, ...state.constructorList]
            : [...state.constructorList],
      };
    }
    case DELETE_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        constructorList:
          action.element.type !== 'bun'
            ? state.constructorList.filter(
                (element: TItemState) => element.id !== action.element.id,
              )
            : [...state.constructorList],
      };
    }
    case GET_BUN: {
      return {
        ...state,
        constructorList:
          action.element.type === 'bun'
            ? [
                ...state.constructorList.filter(
                  (element: TItemState) => element.type !== 'bun',
                ),
                action.element,
              ]
            : [...state.constructorList],
      };
    }
    case MOVE_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        constructorList: [
          ...update(state.constructorList, {
            $splice: [
              [action.dragIndex, 1],
              [action.hoverIndex, 0, state.constructorList[action.dragIndex]],
            ],
          }),
        ],
      };
    }
    case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        constructorList: [],
      };
    }
    default: {
      return state;
    }
  }
};

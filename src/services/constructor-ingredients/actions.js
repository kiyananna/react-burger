export const GET_CONSTRUCTOR_ELEMENT = 'GET_CONSTRUCTOR_ELEMENT';
export const DELETE_CONSTRUCTOR_ELEMENT = 'DELETE_CONSTRUCTOR_ELEMENT';
export const GET_BUN = 'GET_BUN';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';
export const MOVE_CONSTRUCTOR_ELEMENT = 'CONSTRUCTOR_ITEM';

export const getBun = (element) => ({
  type: GET_BUN,
  element,
});

export const getConstructorElement = (element) => ({
  type: GET_CONSTRUCTOR_ELEMENT,
  element,
});

export const moveConstructorElement = (dragIndex, hoverIndex) => ({
  type: MOVE_CONSTRUCTOR_ELEMENT,
  dragIndex,
  hoverIndex,
});

export const deleteConstructorElement = (element) => ({
  type: DELETE_CONSTRUCTOR_ELEMENT,
  element,
});

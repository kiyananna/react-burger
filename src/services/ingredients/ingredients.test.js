import { ingredientsReducer, defaultState } from './reducers';
import {
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_FAILED,
} from './actions';

describe('Проверка Получения ингредиента', () => {
  const data = [
    {
      _id: '643d69a5c3f7b9001cfa093e',
      name: 'Ингредиент 1',
      type: 'main',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/meat-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      uniqueId: '777',
    },
    {
      _id: '643d69a5c3f7b9001cfa0935',
      name: 'Ингредиент 2',
      type: 'main',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/meat-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      uniqueId: '666',
    },
    {
      _id: '643d69a5c3f7b9001cfa0932',
      name: 'Ингредиент 3',
      type: 'main',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/meat-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      uniqueId: '444',
    },
  ];

  it('Проверка начального состояния', () => {
    expect(ingredientsReducer(undefined, {})).toEqual({
      ingredients: [],
      constructorIngredients: [],
    });
  });

  it('Проверка запроса получения', () => {
    const result = ingredientsReducer(defaultState, {
      type: GET_INGREDIENTS_REQUEST,
    });
    expect(result).toEqual({
      ingredients: [],
      constructorIngredients: [],
    });
  });
  it('Проверка успеха запроса получения', () => {
    const result = ingredientsReducer(defaultState, {
      type: GET_INGREDIENTS_SUCCESS,
      payload: data,
    });
    expect(result.ingredients).toEqual(data);
  });
});

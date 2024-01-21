import {
  getBun,
  getConstructorElement,
  deleteConstructorElement,
  moveConstructorElement,
} from './actions';
import { constructorReducer, initialState } from './reducers';
import update from 'immutability-helper';

describe('Проверка логики работы редьюсера конструктора', () => {
  const ingredient = {
    data: {
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
    },
    id: 777,
    type: 'sauce',
  };

  const ingredientBun = {
    data: {
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
    },
    id: 777,
    type: 'bun',
  };

  const ingredients = [
    {
      data: {
        _id: '643d69a5c3f7b9001cfa093e',
        name: 'Ингредиент 1',
        type: 'main',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      },
      id: 777,
      type: 'sauce',
    },
    {
      data: {
        _id: '643d69a5c3f7b9001cfa093e',
        name: 'Ингредиент 2',
        type: 'main',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      },
      id: 666,
      type: 'sauce',
    },
    {
      data: {
        _id: '643d69a5c3f7b9001cfa093e',
        name: 'Ингредиент 3',
        type: 'main',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      },
      id: 555,
      type: 'sauce',
    },
  ];

  it('Проверка начального состояния', () => {
    expect(constructorReducer(undefined, [])).toEqual({ constructorList: [] });
  });

  it('getConstructorElement должен правильно обрабатывать добавление ингредиента в массив ингредиентов', () => {
    const result = constructorReducer(
      initialState,
      getConstructorElement(ingredient),
    );
    expect(result.constructorList[0]).toBe(ingredient);
  });

  it('При использовании deleteConstructorElement ингредиент должен быть корректно удален из массива ингредиентов', () => {
    const result = constructorReducer(
      initialState,
      deleteConstructorElement(ingredient),
    );
    expect(result).toEqual({ constructorList: [] });
  });

  it('При перетаскивании ингредиента с позиции А на позицию B в конструкторе, массив должен быть корректно отсортирован', () => {
    const state = {
      ...initialState,
      constructorList: [...ingredients],
    };
    const dragIndex = 0;
    const hoverIndex = 1;
    const sorted = update(ingredients, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, ingredients[dragIndex]],
      ],
    });

    const result = constructorReducer(state, moveConstructorElement(1, 0));
    expect(result.constructorList).toEqual(sorted);
  });

  it('getBun должен исправно обрабатывать добавление булки', () => {
    const result = constructorReducer(initialState, getBun(ingredientBun));
    expect(result).toEqual({
      ...initialState,
      constructorList: [
        {
          ...ingredientBun,
        },
      ],
    });
  });
});

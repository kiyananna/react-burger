import { ingredientDetailReducer, initialState } from './reducers';
import {
  getIngredientDescription,
  clearIngredientDescription,
} from './actions';

describe('Проверка получения ингредиента', () => {
  const ingredient = {
    _id: '643d69a5c3f7b9001cfa093e',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
    uid: '643d69',
    index: 1,
    id: '777',
  };

  it('Проверка начального состояния', () => {
    expect(ingredientDetailReducer(undefined, {})).toEqual({
      ingredientDetail: null,
    });
  });
  it('getIngredientDetail должен корректно добавлять ингредиент в хранилище', () => {
    const result = ingredientDetailReducer(
      initialState,
      getIngredientDescription(ingredient),
    );
    expect(result.ingredientDetail).toEqual(ingredient);
  });

  it('Очистка состояние', () => {
    const result = ingredientDetailReducer(
      initialState,
      clearIngredientDescription(),
    );
    expect(result.ingredientDetail).toEqual(null);
  });
});

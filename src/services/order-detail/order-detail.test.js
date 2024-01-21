import { orderReducer, initialState } from './reducers';
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from './actions';

describe('Проверка описания заказа', () => {
  const orderResponse = {
    name: 'string',
    order: {
      createdAt: 'string',
      ingredients: [
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
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-03-large.png',
          uniqueId: '777',
        },
      ],
      name: 'string',
      number: '515',
      owner: {
        name: 'Ингредиент',
        email: 'string',
        createdAt: 'string',
        updatedAt: 'string',
      },
      price: 234,
      status: 'string',
      updatedAt: 'string',
      _id: 'string',
    },
    success: true,
  };

  it('Проверка начального состояния', () => {
    expect(orderReducer(undefined, {})).toEqual({ orderID: '' });
  });

  it('Проверка запроса заказа', () => {
    const result = orderReducer(initialState, {
      type: GET_ORDER_REQUEST,
    });
    expect(result.orderID).toEqual('');
  });
  it('Проверка успешного запроса заказа', () => {
    const result = orderReducer(initialState, {
      type: GET_ORDER_SUCCESS,
      element: orderResponse,
    });
    expect(result.orderID).toEqual(orderResponse);
  });
});

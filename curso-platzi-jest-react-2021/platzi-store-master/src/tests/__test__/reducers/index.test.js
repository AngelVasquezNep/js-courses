import reducer from '../../../reducers';

import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Return initial state', () => {
    const INITIAL_STATE = {};
    const UNEXIST_ACTION = { type: 'UNEXIST_ACTION' };

    expect(reducer(INITIAL_STATE, UNEXIST_ACTION)).toEqual(INITIAL_STATE);
  });

  test('ADD_TO_CART', () => {
    const INITIAL_STATE = {
      cart: [],
    };

    const payload = ProductMock;

    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(expected);
  });
});

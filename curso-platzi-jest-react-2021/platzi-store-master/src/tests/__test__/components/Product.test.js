import React from 'react';

import { mount } from 'enzyme';

import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';

import Product from '../../../components/Product';

describe('Components | <Product />', () => {
  const handleAddToCart = jest.fn();

  const product = mount(
    <ProviderMock>
      <Product product={ProductMock} handleAddToCart={handleAddToCart} />
    </ProviderMock>
  );

  test('Render', () => {
    expect(product.length).toBe(1);
  });

  test('Buy button calls once', () => {
    product.find('button').simulate('click');

    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});

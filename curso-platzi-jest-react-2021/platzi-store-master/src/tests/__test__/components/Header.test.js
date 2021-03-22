import React from 'react';
import { mount } from 'enzyme';

import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../../components/Header';

describe('Components | <Header />', () => {
  const header = mount(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  test('Render', () => {
    expect(header.length).toBe(1);
  });

  test('Title', () => {
    expect(header.find('.Header-title').text()).toBe('Platzi Store');
  });
});

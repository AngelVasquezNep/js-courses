import React from 'react';

import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

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

describe('Components | <Header /> | Snapshot', () => {
  test('Header UI', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
});

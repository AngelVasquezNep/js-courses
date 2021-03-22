import React from 'react';

import { mount } from 'enzyme';

import Footer from '../../../components/Footer';

describe('Components | <Footer />', () => {
  test('Render', () => {
    const footer = mount(<Footer />);

    expect(footer.length).toBe(1);
  });

  test('Title render', () => {
    const footer = mount(<Footer />);

    expect(footer.find('.Footer-title').text()).toBe('Platzi Store');
  });
});

import * as React from 'react';
import {mount} from 'enzyme';
import Layout from '../lib/Layout';

describe('Layout', () => {
  test('Layout should spread extra props', () => {
    const component = mount(
      <Layout data-propspread="test">
        <Layout.Column />
      </Layout>
    );
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

describe('Column', () => {
  test('Column should spread extra props', () => {
    const component = mount(<Layout.Column data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

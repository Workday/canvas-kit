import * as React from 'react';
import {mount} from 'enzyme';
import Banner from '../lib/Banner';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';

describe('Banner', () => {
  test('Banner should spread extra props', () => {
    const component = mount(<Banner data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

describe('Banner Accessibility', () => {
  test('Banner should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(<Banner />);
    expect(await axe(html)).toHaveNoViolations();
  });
});

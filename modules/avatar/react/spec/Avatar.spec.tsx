import * as React from 'react';
import Avatar from '../lib/Avatar';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';

describe('Avatar', () => {
  test('render a div with id', () => {
    const component = mount(<Avatar id="myAvatar" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('id')).toBe('myAvatar');
    component.unmount();
  });

  test('Avatar should spread extra props', () => {
    const component = mount(<Avatar data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

describe('Avatar Accessibility', () => {
  test('Avatar should be using <div> tag', () => {
    const component = mount(<Avatar />);
    expect(component.getDOMNode().tagName.toLowerCase()).toEqual('div');
    component.unmount();
  });

  test('Avatar should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(<Avatar />);
    expect(await axe(html)).toHaveNoViolations();
  });

  test('Avatar with image should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <Avatar
        url={'https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png'}
      />
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});

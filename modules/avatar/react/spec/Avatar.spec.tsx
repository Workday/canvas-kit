import * as React from 'react';
import Avatar from '../lib/Avatar';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';

describe('Avatar', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render a button with id', () => {
    const component = mount(<Avatar id="myAvatar" />);
    expect(component.find('button').props().id).toBe('myAvatar');
    component.unmount();
  });

  test('should call a callback function', () => {
    const component = mount(<Avatar onClick={cb} />);
    const avatar = component.find('button');
    avatar.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
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
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('Avatar should be using HTML5 <button> tag', () => {
    const component = mount(<Avatar />);
    expect(component.getDOMNode().tagName.toLowerCase()).toEqual('button');
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

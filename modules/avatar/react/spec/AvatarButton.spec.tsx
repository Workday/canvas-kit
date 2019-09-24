import * as React from 'react';
import AvatarButton from '../lib/AvatarButton';
import {mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';

describe('AvatarButton', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render a button with id', () => {
    const component = mount(<AvatarButton id="myAvatarButton" />);
    expect(component.find('button').props().id).toBe('myAvatarButton');
    component.unmount();
  });

  test('AvatarButton without onClick props should have disabled attribute set', () => {
    const component = mount(<AvatarButton id="myAvatarButton" />);
    expect(component.find('button').props().id).toBe('myAvatarButton');
    expect(
      component
        .find('button')
        .getDOMNode()
        .hasAttribute('disabled')
    ).toEqual(true);
    component.unmount();
  });

  test('should call a callback function', () => {
    const component = mount(<AvatarButton onClick={cb} />);
    const avatar = component.find('button');
    avatar.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('AvatarButton with onClick props should NOT have disabled attribute set', () => {
    const component = mount(<AvatarButton onClick={cb} />);
    expect(
      component
        .find('button')
        .getDOMNode()
        .hasAttribute('disabled')
    ).toEqual(false);
    component.unmount();
  });

  test('AvatarButton should spread extra props', () => {
    const component = mount(<AvatarButton data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

describe('AvatarButton Accessibility', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('AvatarButton should be using HTML5 <button> tag', () => {
    const component = mount(<AvatarButton />);
    expect(component.getDOMNode().tagName.toLowerCase()).toEqual('button');
    component.unmount();
  });

  test('AvatarButton should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(<AvatarButton />);
    expect(await axe(html)).toHaveNoViolations();
  });

  test('AvatarButton with image should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(
      <AvatarButton
        url={'https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png'}
      />
    );
    expect(await axe(html)).toHaveNoViolations();
  });
});

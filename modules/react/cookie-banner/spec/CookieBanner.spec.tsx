import * as React from 'react';
import CookieBanner from '../lib/CookieBanner';
import {mount} from 'enzyme';

function noop() {
  // noop
}

describe('Cookie Banner', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should display a custom notice', () => {
    const customNotice = (
      <React.Fragment>
        {CookieBanner.DefaultNotice} Please review our{' '}
        <a href="https://www.workday.com/en-us/privacy.html" target="__blank">
          Privacy Policy
        </a>
        .
      </React.Fragment>
    );
    const component = mount(<CookieBanner onAccept={noop} notice={customNotice} />);
    expect(component.find('a').text()).toEqual('Privacy Policy');
  });

  test('should execute callback upon accepting notice', () => {
    const component = mount(<CookieBanner onAccept={cb} />);
    component.find('button').simulate('click');
    expect(cb).toHaveBeenCalled();
  });

  test('should execute callback upon clicking settings button', () => {
    const component = mount(<CookieBanner onAccept={noop} onClickSettings={cb} />);
    component.find('button[children="Cookie Settings"]').simulate('click');
    expect(cb).toHaveBeenCalled();
  });

  test('Cookie Banner should spread extra props', () => {
    const component = mount(<CookieBanner onAccept={noop} data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

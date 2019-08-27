import * as React from 'react';
import {shallow, mount} from 'enzyme';
import Hint from '../lib/Hint';

describe('Hint', () => {
  test('Error label is set', () => {
    const component = shallow(<Hint error={Hint.ErrorType.Error} />);

    expect(component.render().text()).toEqual(expect.stringContaining('Error:'));

    component.unmount();
  });

  test('Alert label is set', () => {
    const component = shallow(<Hint error={Hint.ErrorType.Alert} />);

    expect(component.render().text()).toEqual(expect.stringContaining('Alert:'));

    component.unmount();
  });

  test('Hint should spread extra props', () => {
    const component = mount(<Hint data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

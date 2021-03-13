import * as React from 'react';
import {shallow, mount} from 'enzyme';
import TableRow from '../lib/TableRow';

describe('TableRow', () => {
  test('Custom class is applied', () => {
    const customClassName = 'custom-class-name';
    const testProps = {
      className: customClassName,
    };
    const component = shallow(<TableRow {...testProps} />);

    expect(component.props().className.includes(customClassName));

    component.unmount();
  });

  test('TableRow should spread extra props', () => {
    const component = mount(<TableRow data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

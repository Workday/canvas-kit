import * as React from 'react';
import {shallow, mount} from 'enzyme';
import Table from '../lib/Table';

describe('Table', () => {
  test('Custom class is applied', () => {
    const customClassName = 'custom-class-name';
    const testProps = {
      className: customClassName,
    };
    const component = shallow(<Table {...testProps} />);

    expect(component.props().className.includes(customClassName));

    component.unmount();
  });

  test('Table should spread extra props', () => {
    const component = mount(<Table data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

import * as React from 'react';
import {shallow} from 'enzyme';
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
});

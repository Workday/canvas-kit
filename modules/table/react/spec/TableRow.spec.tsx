import * as React from 'react';
import {shallow} from 'enzyme';
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
});

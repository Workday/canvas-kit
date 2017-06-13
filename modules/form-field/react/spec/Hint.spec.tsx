import * as React from 'react';
import {shallow} from 'enzyme';
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
});

import * as React from 'react';
import {shallow} from 'enzyme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import InputIconContainer from '../lib/InputIconContainer';

describe('InputIconContainer', () => {
  test('Icon is set', () => {
    const icon = <SystemIcon icon={exclamationCircleIcon} />;
    const component = shallow(<InputIconContainer icon={icon} />);

    expect(component.contains(icon)).toBeTruthy();

    component.unmount();
  });
});

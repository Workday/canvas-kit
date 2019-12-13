import * as React from 'react';
import {mount, shallow} from 'enzyme';
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

  test('InputIconContainer should grow', () => {
    const component = mount(<InputIconContainer  grow={true}>Content</InputIconContainer>);
    
    const input = component
      .find('div');
      expect(getComputedStyle(input.getDOMNode()).getPropertyValue('display')).toBe('block');
    component.unmount();
  });

  test('InputIconContainer should not grow', () => {
    const component = mount(<InputIconContainer  grow={false}>Content</InputIconContainer>);
    
    const input = component
      .find('div');
      expect(getComputedStyle(input.getDOMNode()).getPropertyValue('display')).toBe('inline-block');
    component.unmount();
  });
});

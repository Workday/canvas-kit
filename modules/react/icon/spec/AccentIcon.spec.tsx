import * as React from 'react';
import {mount} from 'enzyme';
import AccentIcon, {accentIconStyles} from '../lib/AccentIcon';
import {colors} from '@workday/canvas-kit-react/tokens';
import {shieldIcon} from '@workday/canvas-accent-icons-web';

describe('Accent Icon', () => {
  test('Defaults styles are set correctly', () => {
    const componentStyle = accentIconStyles({});
    expect(componentStyle['& .color-500']).toHaveProperty('fill', colors.blueberry500);
    expect(componentStyle['& .french-vanilla-100']).toHaveProperty('fill', colors.frenchVanilla100);
  });

  test('Can set icon as transparent', () => {
    const componentStyle = accentIconStyles({transparent: true});
    expect(componentStyle['& .french-vanilla-100']).toHaveProperty('fill', 'transparent');
  });

  test('Can set icon color correctly', () => {
    const componentStyle = accentIconStyles({color: colors.cinnamon500});
    expect(componentStyle['& .color-500']).toHaveProperty('fill', colors.cinnamon500);
  });

  test('AccentIcon should spread extra props', () => {
    const component = mount(<AccentIcon icon={shieldIcon} data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

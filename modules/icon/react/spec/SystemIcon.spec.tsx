import * as React from 'react';
import {mount} from 'enzyme';
import SystemIcon, {systemIconStyles} from '../lib/SystemIcon';
import {colors, iconColors} from '@workday/canvas-kit-react-core';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('System Icon', () => {
  test('Defaults styles are set correctly', () => {
    const componentStyle = systemIconStyles({});
    expect(componentStyle['& .wd-icon-fill']).toHaveProperty('fill', iconColors.standard);
    expect(componentStyle[':hover .wd-icon-fill']).toHaveProperty('fill', iconColors.hover);
    expect(componentStyle['& .wd-icon-background']).toHaveProperty('fill', 'transparent');
    expect(componentStyle[':hover .wd-icon-background']).toHaveProperty('fill', 'transparent');
  });

  test('color and background props are set correctly', () => {
    const color = 'peachpuff';
    const background = 'peachpuff';
    const colorHover = 'goldenrod';
    const backgroundHover = 'goldenrod';
    const componentStyle = systemIconStyles({color, colorHover, background, backgroundHover});
    expect(componentStyle['& .wd-icon-fill']).toHaveProperty('fill', color);
    expect(componentStyle[':hover .wd-icon-fill']).toHaveProperty('fill', colorHover);
    expect(componentStyle['& .wd-icon-accent']).toHaveProperty('fill', color);
    expect(componentStyle[':hover .wd-icon-accent']).toHaveProperty('fill', colorHover);
    expect(componentStyle['& .wd-icon-background']).toHaveProperty('fill', color);
    expect(componentStyle[':hover .wd-icon-background']).toHaveProperty('fill', colorHover);
  });

  test('accent and fill props override color if set', () => {
    const color = 'peachpuff';
    const colorHover = 'goldenrod';
    const accent = colors.blueberry200;
    const accentHover = colors.blueberry500;
    const fill = colors.cinnamon200;
    const fillHover = colors.cinnamon500;
    const componentStyle = systemIconStyles({
      color,
      colorHover,
      accent,
      accentHover,
      fill,
      fillHover,
    });
    expect(componentStyle['& .wd-icon-fill']).toHaveProperty('fill', fill);
    expect(componentStyle[':hover .wd-icon-fill']).toHaveProperty('fill', fillHover);
    expect(componentStyle['& .wd-icon-accent']).toHaveProperty('fill', accent);
    expect(componentStyle[':hover .wd-icon-accent']).toHaveProperty('fill', accentHover);
  });

  test('SystemIcon should spread extra props', () => {
    const component = mount(<SystemIcon icon={activityStreamIcon} data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

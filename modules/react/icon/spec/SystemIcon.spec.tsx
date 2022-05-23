import * as React from 'react';
import {render} from '@testing-library/react';

import {colors, iconColors} from '@workday/canvas-kit-react/tokens';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

import SystemIcon, {systemIconStyles} from '../lib/SystemIcon';

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
    expect(componentStyle['& .wd-icon-accent, & .wd-icon-accent2']).toHaveProperty('fill', color);
    expect(componentStyle[':hover .wd-icon-accent, :hover .wd-icon-accent2']).toHaveProperty(
      'fill',
      colorHover
    );
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
    expect(componentStyle['& .wd-icon-accent, & .wd-icon-accent2']).toHaveProperty('fill', accent);
    expect(componentStyle[':hover .wd-icon-accent, :hover .wd-icon-accent2']).toHaveProperty(
      'fill',
      accentHover
    );
  });

  it('should forward extra props to containing element', () => {
    const {container} = render(<SystemIcon icon={activityStreamIcon} data-propspread="test" />);

    // container is not a semantic element
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});

import * as React from 'react';
import {render} from '@testing-library/react';

import {colors} from '@workday/canvas-kit-react/tokens';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import AccentIcon, {accentIconStyles} from '../lib/AccentIcon';

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

  it('should spread extra props to the icon element', () => {
    const {container} = render(<AccentIcon icon={shieldIcon} data-propspread="test" />);

    // the container is not a semantic element
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});

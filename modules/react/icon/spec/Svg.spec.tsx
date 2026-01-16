import {render} from '@testing-library/react';
import * as React from 'react';

import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {CanvasIconTypes} from '@workday/design-assets-types';

import {Svg} from '../lib/Svg';

describe('Icon component', () => {
  test('Mismatched icon types catches error and returns null', () => {
    const consoleErrorSpy = vi.spyOn(global.console, 'error');
    render(<Svg src={shieldIcon} type={CanvasIconTypes.System} />);

    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  test('SVG is set in innerHTML', () => {
    const {container} = render(<Svg src={shieldIcon} type={CanvasIconTypes.Accent} />);

    // container is not a semantic element
    expect(container.firstChild).toContainHTML('<svg');
  });
});

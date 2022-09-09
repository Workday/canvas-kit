import * as React from 'react';
import {render} from '@testing-library/react';
import {Svg} from '../lib/Svg';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {mergeProps} from '@workday/canvas-kit-react/common';

describe('Icon component', () => {
  test('Mismatched icon types catches error and returns null', () => {
    const consoleErrorSpy = jest.spyOn(global.console, 'error');
    render(<Svg src={shieldIcon} type={CanvasIconTypes.System} />);

    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  test('SVG is set in innerHTML', () => {
    const {container} = render(<Svg src={shieldIcon} type={CanvasIconTypes.Accent} />);

    // container is not a semantic element
    expect(container.firstChild).toContainHTML('<svg');
  });
});

import {render} from '@testing-library/react';

import {CanvasIconTypes, searchIcon} from '@workday/canvas-system-icons-web';

import {Svg} from '../lib/Svg';

describe('Icon component', () => {
  test('Mismatched icon types catches error and returns null', () => {
    const consoleErrorSpy = vi.spyOn(global.console, 'error');
    render(<Svg src={searchIcon as any} type={CanvasIconTypes.Expressive} />);

    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  test('SVG is set in innerHTML', () => {
    const {container} = render(<Svg src={searchIcon} type={CanvasIconTypes.System} />);

    // container is not a semantic element
    expect(container.firstChild).toContainHTML('<svg');
  });
});

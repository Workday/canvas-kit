import {render} from '@testing-library/react';

import {CanvasIconTypes, sendIcon} from '@workday/canvas-system-icons-web';

import {Svg} from '../lib/Svg';

describe('Icon component', () => {
  test('Mismatched icon types catches error and returns null', () => {
    const consoleErrorSpy = vi.spyOn(global.console, 'error');
    render(<Svg src={sendIcon} type={CanvasIconTypes.System} />);

    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  test('SVG is set in innerHTML', () => {
    const {container} = render(<Svg src={sendIcon} type={CanvasIconTypes.System} />);
    // container is not a semantic element
    expect(container.firstChild).toContainHTML('<svg');
  });
});

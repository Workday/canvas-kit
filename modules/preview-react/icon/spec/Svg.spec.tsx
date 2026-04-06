import {render} from '@testing-library/react';

import {CanvasIconTypes, sendIcon} from '@workday/canvas-system-icons-web';

import {SVG} from '../lib/SVG';

describe('Icon component', () => {
  test('Mismatched icon types catches error and returns null', () => {
    const consoleErrorSpy = vi.spyOn(global.console, 'error');
    render(<SVG src={{type: 'expressive'} as any} type={CanvasIconTypes.System} />);

    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
  });

  test('SVG is set in innerHTML', () => {
    const {container} = render(<SVG src={sendIcon} type={CanvasIconTypes.System} />);
    // container is not a semantic element
    expect(container.firstChild).toContainHTML('<svg');
  });
});

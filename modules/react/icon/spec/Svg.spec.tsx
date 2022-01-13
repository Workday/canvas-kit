import * as React from 'react';
import {render} from '@testing-library/react';
import Svg from '../lib/Svg';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';

describe('Icon component', () => {
  test('Mismatched icon types catches error and returns null', () => {
    const consoleErrorSpy = spyOn(global.console, 'error');
    render(<Svg src={shieldIcon} type={CanvasIconTypes.System} />);

    expect(consoleErrorSpy).toHaveBeenCalled();
  });

  test('SVG is set in innerHTML', () => {
    const {container} = render(<Svg src={shieldIcon} type={CanvasIconTypes.Accent} />);

    // container is not a semantic element
    expect(container.firstChild).toContainHTML('<svg');
  });

  test('Custom className overrides base iconStyle class', () => {
    const customClassName = 'custom-class-name';

    const {container} = render(
      <Svg src={shieldIcon} className={customClassName} type={CanvasIconTypes.Accent} styles={{}} />
    );

    expect(container.firstChild).toHaveClass(customClassName);

    // The user defined class (customClassName), should always be last
    expect(
      container
        .querySelector('span')!
        .className.split(' ')
        .reverse()[0]
    ).toBe(customClassName);
  });
});

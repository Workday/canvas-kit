import * as React from 'react';
import {shallow, render} from 'enzyme';
import {render as rtlRender} from '@testing-library/react';
import Svg from '../lib/Svg';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';

describe('Icon component', () => {
  test('Mismatched icon types catches error and returns null', () => {
    const consoleErrorSpy = spyOn(global.console, 'error');
    const component = shallow(<Svg src={shieldIcon} type={CanvasIconTypes.System} />);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(component.type()).toBeNull();
    component.unmount();
  });

  test('SVG is set in innerHTML', () => {
    const component = render(<Svg src={shieldIcon} type={CanvasIconTypes.Accent} />);
    expect(component.find('svg')).toHaveLength(1);
  });
});

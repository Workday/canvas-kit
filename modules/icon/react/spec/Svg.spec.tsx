import * as React from 'react';
import {shallow, render} from 'enzyme';
import Svg from '../lib/Svg';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {createMatchers} from 'jest-emotion';
import * as emotion from 'emotion';

expect.extend(createMatchers(emotion)); // TODO: This syntax changes in jest-emotion 10

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

  test('Custom className overrides base iconStyle class', () => {
    const customClassName = 'custom-class-name';
    const testProps = {
      className: customClassName,
    };
    const component = shallow(
      <Svg src={shieldIcon} elemProps={testProps} type={CanvasIconTypes.Accent} styles={{}} />
    );
    const classNames = component.props().className.split(' ');

    expect(component.props().className.includes(customClassName));

    // The user defined class (customClassName), should always be last
    expect(classNames.pop()).toBe(customClassName);
    component.unmount();
  });
});

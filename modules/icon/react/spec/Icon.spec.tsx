import * as React from 'react';
import {shallow, render} from 'enzyme';
import Icon from '../lib/Icon';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {matchers} from 'jest-emotion';

expect.extend(matchers);

describe('Icon component', () => {
  test('Sets size correctly', () => {
    const size = 14;
    const component = shallow(
      <Icon src={shieldIcon} size={size} type={CanvasIconTypes.Accent} styles={{}} />
    );
    expect(component).toHaveStyleRule('height', size + 'px');
    expect(component).toHaveStyleRule('width', size + 'px');
    component.unmount();
  });

  test('SVG is set in innerHTML', () => {
    const component = render(<Icon src={shieldIcon} type={CanvasIconTypes.Accent} styles={{}} />);
    expect(component.find('svg')).toHaveLength(1);
  });
});

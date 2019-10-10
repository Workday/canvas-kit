import * as React from 'react';
import {render} from '@testing-library/react';
import Icon from '../lib/Icon';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {matchers} from 'jest-emotion';

expect.extend(matchers);

describe('Icon component', () => {
  test('SVG is set in innerHTML', () => {
    const {container} = render(<Icon src={shieldIcon} type={CanvasIconTypes.Accent} styles={{}} />);
    expect(container.querySelector('svg')).toBeTruthy();
  });
});

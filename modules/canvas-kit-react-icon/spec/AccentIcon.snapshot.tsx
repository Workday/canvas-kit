import * as renderer from 'react-test-renderer';
import AccentIcon from '../lib/AccentIcon';
import * as React from 'react';
import {shieldIcon} from '@workday/canvas-accent-icons-web';

describe('Accent Icon Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<AccentIcon icon={shieldIcon} />);
    expect(component).toMatchSnapshot();
  });
});

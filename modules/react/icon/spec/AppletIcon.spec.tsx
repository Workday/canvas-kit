import * as React from 'react';
import {mount} from 'enzyme';
import AppletIcon, {appletIconStyles} from '../lib/AppletIcon';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';

describe('Applet Icon', () => {
  test('Throws error if using unofficial color names', () => {
    const unknownColor = 'peachpuff';

    const iconOfUnknownColor = () => {
      // @ts-ignore TS catches error, so we have to squelch to test the throw
      appletIconStyles({color: unknownColor});
      // in case it doesn't throw
    };

    expect(iconOfUnknownColor).toThrow();
  });

  test('AppletIcon should spread extra props', () => {
    const component = mount(<AppletIcon icon={benefitsIcon} data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

import * as React from 'react';
import {render} from '@testing-library/react';

import {benefitsIcon} from '@workday/canvas-applet-icons-web';
import {AppletIcon, appletIconStyles} from '../lib/AppletIcon';

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

  it('should render extra props to containing element', () => {
    const {container} = render(<AppletIcon icon={benefitsIcon} data-propspread="test" />);

    // containing element is not a semantic element
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});

import * as React from 'react';
import {render} from '@testing-library/react';

import StatusIndicator from '../lib/StatusIndicator';

describe('StatusIndicator', () => {
  it('Card should spread extra props', () => {
    const {container} = render(
      <StatusIndicator label="test" type={StatusIndicator.Type.Gray} data-propspread="test" />
    );

    // container is not a semantic element
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});

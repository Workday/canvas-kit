import * as React from 'react';
import {render} from '@testing-library/react';

import Tabs from '../lib/Tabs';

describe('Tabs', () => {
  it('should render extra props passed down to the container', () => {
    const screen = render(
      <Tabs id="bar" data-testid="foo">
        <div />
        <div />
      </Tabs>
    );
    expect(screen.getByTestId('foo')).toHaveAttribute('id', 'bar');
  });

  // intent tab is covered by visual and Cypress tests
});

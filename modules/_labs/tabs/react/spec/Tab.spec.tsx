import * as React from 'react';
import {render} from '@testing-library/react';

import {Tab} from '../lib/Tab';
import {Tabs} from '../lib/Tabs';

describe('Tab', () => {
  it('should have a role of "tab"', () => {
    const screen = render(
      <Tabs>
        <Tab id="bar">First Tab</Tab>
      </Tabs>
    );
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });

  it('should render extra props passed down to the container', () => {
    const screen = render(
      <Tabs>
        <Tab id="bar">First Tab</Tab>
      </Tabs>
    );
    expect(screen.getByRole('tab')).toHaveAttribute('id', 'bar');
  });

  it('should render children', () => {
    const screen = render(
      <Tabs>
        <Tab>First Tab</Tab>
      </Tabs>
    );
    expect(screen.getByRole('tab')).toHaveTextContent('First Tab');
  });

  it('should forward refs', () => {
    const ref = {current: null};
    render(
      <Tabs>
        <Tab ref={ref}>First Tab</Tab>
      </Tabs>
    );
    expect(ref.current).toHaveAttribute('role', 'tab');
  });
});

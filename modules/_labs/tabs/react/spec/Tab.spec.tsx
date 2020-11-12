import * as React from 'react';
import {render} from '@testing-library/react';

import Tab from '../lib/Tab';

describe('Tab', () => {
  it('should have a role of "tab"', () => {
    const screen = render(<Tab id="bar">First Tab</Tab>);
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });

  it('should render extra props passed down to the container', () => {
    const screen = render(<Tab id="bar">First Tab</Tab>);
    expect(screen.getByRole('tab')).toHaveAttribute('id', 'bar');
  });

  it('should render children', () => {
    const screen = render(<Tab>First Tab</Tab>);
    expect(screen.getByRole('tab')).toHaveTextContent('First Tab');
  });
});

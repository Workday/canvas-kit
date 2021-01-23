import * as React from 'react';
import {render} from '@testing-library/react';

import TabList from '../lib/TabList';

describe('TabList', () => {
  it('should have a role of "tablist"', () => {
    const screen = render(
      <TabList>
        <div />
        <div />
      </TabList>
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should render extra props passed down to the container', () => {
    const screen = render(
      <TabList id="bar">
        <div />
        <div />
      </TabList>
    );
    expect(screen.getByRole('tablist')).toHaveAttribute('id', 'bar');
  });

  it('should render child elements', () => {
    const screen = render(
      <TabList>
        <div>First Item</div>
        <div />
      </TabList>
    );
    expect(screen.getByRole('tablist')).toHaveTextContent('First Item');
  });
});

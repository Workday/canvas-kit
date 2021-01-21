import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {TabList} from '../lib/TabList';
import {Tabs} from '../lib/Tabs';

describe('TabList', () => {
  it('should have a role of "tablist"', () => {
    render(
      <Tabs>
        <TabList>
          <div />
          <div />
        </TabList>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should render extra props passed down to the container', () => {
    render(
      <Tabs>
        <TabList id="bar">
          <div />
          <div />
        </TabList>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toHaveAttribute('id', 'bar');
  });

  it('should render child elements', () => {
    render(
      <Tabs>
        <TabList>
          <div>First Item</div>
          <div />
        </TabList>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toHaveTextContent('First Item');
  });

  it('should forward refs', () => {
    const ref = {current: null};
    render(
      <Tabs>
        <TabList ref={ref}>
          <div>First Item</div>
          <div />
        </TabList>
      </Tabs>
    );
    expect(ref.current).toHaveAttribute('role', 'tablist');
  });
});

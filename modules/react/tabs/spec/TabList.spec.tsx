import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {Tabs} from '../lib/Tabs';
import {useTabsModel2} from '../lib/useTabsModel';

describe('TabList', () => {
  verifyComponent(Tabs.List, {modelFn: useTabsModel2});

  it('should have a role of "tablist"', () => {
    render(
      <Tabs>
        <Tabs.List>
          <div />
        </Tabs.List>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should render child elements', () => {
    render(
      <Tabs>
        <Tabs.List>
          <div>First Item</div>
          <div />
        </Tabs.List>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toHaveTextContent('First Item');
  });
});

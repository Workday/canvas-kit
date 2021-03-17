import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {TabList} from '../lib/TabList';
import {Tabs} from '../lib/Tabs';
import {useTabsModel} from '../lib/useTabsModel';

describe('TabList', () => {
  verifyComponent(TabList, {modelFn: useTabsModel});

  it('should have a role of "tablist"', () => {
    render(
      <Tabs>
        <TabList>
          <div />
        </TabList>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toBeInTheDocument();
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
});

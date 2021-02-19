import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {TabPanel} from '../lib/TabPanel';
import {Tabs} from '../lib/Tabs';
import {useTabsModel} from '../lib/useTabsModel';

describe('TabPanel', () => {
  verifyComponent(TabPanel, {modelFn: useTabsModel});

  it('should have a role of "tabpanel"', () => {
    render(
      <Tabs>
        <Tabs.Item>First</Tabs.Item>
        <TabPanel>
          <div />
          <div />
        </TabPanel>
      </Tabs>
    );
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('should render child elements', () => {
    render(
      <Tabs>
        <Tabs.Item>First</Tabs.Item>
        <TabPanel>
          <div>First Item</div>
          <div />
        </TabPanel>
      </Tabs>
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent('First Item');
  });
});

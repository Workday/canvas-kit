import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {Tabs} from '../lib/Tabs';
import {useTabsModel} from '../lib/useTabsModel';

describe('TabPanel', () => {
  verifyComponent(Tabs.Panel, {modelFn: useTabsModel});

  it('should have a role of "tabpanel"', () => {
    render(
      <Tabs>
        <Tabs.Item>First</Tabs.Item>
        <Tabs.Panel>
          <div />
          <div />
        </Tabs.Panel>
      </Tabs>
    );
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('should render child elements', () => {
    render(
      <Tabs>
        <Tabs.Item>First</Tabs.Item>
        <Tabs.Panel>
          <div>First Item</div>
          <div />
        </Tabs.Panel>
      </Tabs>
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent('First Item');
  });
});

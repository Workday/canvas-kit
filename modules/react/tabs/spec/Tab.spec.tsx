import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {Tabs} from '../lib/Tabs';
import {useTabsModel} from '../lib/useTabsModel';

describe('Tab', () => {
  verifyComponent(Tabs.Item, {modelFn: useTabsModel});

  it('should have a role of "tab"', () => {
    render(
      <Tabs>
        <Tabs.Item id="bar">First Tab</Tabs.Item>
      </Tabs>
    );
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <Tabs>
        <Tabs.Item>First Tab</Tabs.Item>
      </Tabs>
    );
    screen.debug(); //?
    expect(screen.getByRole('tab')).toHaveTextContent('First Tab');
  });
});

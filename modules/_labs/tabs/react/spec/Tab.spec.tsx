import * as React from 'react';
import {render} from '@testing-library/react';

import {Tab} from '../lib/Tab';
import {Tabs} from '../lib/Tabs';
import {useTabsModel} from '../lib/useTabsModel';

describe('Tab', () => {
  verifyComponent(Tab, {modelFn: useTabsModel});

  it('should have a role of "tab"', () => {
    const screen = render(
      <Tabs>
        <Tab id="bar">First Tab</Tab>
      </Tabs>
    );
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });

  it('should render children', () => {
    const screen = render(
      <Tabs>
        <Tab>First Tab</Tab>
      </Tabs>
    );
    expect(screen.getByRole('tab')).toHaveTextContent('First Tab');
  });
});

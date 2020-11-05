import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Tabs from '../lib/Tabs';

describe('Tabs', () => {
  it('should render extra props passed down to the container', () => {
    const screen = render(
      <Tabs id="bar" data-testid="foo">
        <div />
        <div />
      </Tabs>
    );
    expect(screen.getByTestId('foo')).toHaveAttribute('id', 'bar');
  });

  // intent tab is covered by visual and Cypress tests

  it('should call "onChange" when tab is activated', () => {
    const cb = jest.fn();
    const screen = render(
      <Tabs onTabChange={cb}>
        <Tabs.List>
          <Tabs.Item name="first">First Tab</Tabs.Item>
          <Tabs.Item name="second">Second Tab</Tabs.Item>
        </Tabs.List>
        <Tabs.Panel>First Tab contents</Tabs.Panel>
      </Tabs>
    );

    fireEvent.click(screen.getByRole('tab', {name: 'Second Tab'}));

    expect(cb).toHaveBeenCalledWith('second');
  });
});

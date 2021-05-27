import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {screen, render, fireEvent} from '@testing-library/react';

import {Tabs} from '../lib/Tabs';

describe('Tabs', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Tabs>
          <Tabs.List>
            <Tabs.Item name="first">First Tab</Tabs.Item>
            <Tabs.Item name="second">Second Tab</Tabs.Item>
          </Tabs.List>
          <Tabs.Panel>First Tab contents</Tabs.Panel>
        </Tabs>
      );

    expect(ssrRender).not.toThrow();
  });

  // intent tab is covered by visual and Cypress tests

  it('should call "onActivate" when tab is activated', () => {
    const cb = jest.fn();
    render(
      <Tabs onActivate={cb}>
        <Tabs.List>
          <Tabs.Item name="first">First Tab</Tabs.Item>
          <Tabs.Item name="second">Second Tab</Tabs.Item>
        </Tabs.List>
        <Tabs.Panel>First Tab contents</Tabs.Panel>
      </Tabs>
    );

    fireEvent.click(screen.getByRole('tab', {name: 'Second Tab'}));
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({data: {tab: 'second'}}));
  });
});

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

  it('should call "onSelect" when tab is selected', () => {
    const cb = jest.fn();
    const {container} = render(
      <Tabs onSelect={cb} initialSelectedIds={['first']}>
        <Tabs.List>
          <Tabs.Item name="first">First Tab</Tabs.Item>
          <Tabs.Item name="second">Second Tab</Tabs.Item>
        </Tabs.List>
        <Tabs.Panel>First Tab contents</Tabs.Panel>
      </Tabs>
    );

    fireEvent.click(screen.getByRole('tab', {name: 'Second Tab'}));
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({id: 'second'}), expect.anything());
  });
});

/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Menu} from '../';

describe('Menu', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Menu>
          <Menu.Target>Open Menu</Menu.Target>
          <Menu.Popper>
            <Menu.Card>
              <Menu.List>
                <Menu.Item>First</Menu.Item>
              </Menu.List>
            </Menu.Card>
          </Menu.Popper>
        </Menu>
      );
    expect(ssrRender).not.toThrow();
  });
});

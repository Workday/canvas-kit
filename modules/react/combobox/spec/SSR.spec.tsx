/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Combobox} from '../';

describe('Combobox', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Combobox>
          <Combobox.Target>Target</Combobox.Target>
          <Combobox.Target />
          <Combobox.Menu.Popper>
            <Combobox.Menu.Card>
              <Combobox.Menu.List maxHeight={200}>
                <Combobox.Menu.Item>Option 1</Combobox.Menu.Item>
              </Combobox.Menu.List>
            </Combobox.Menu.Card>
          </Combobox.Menu.Popper>
        </Combobox>
      );
    expect(ssrRender).not.toThrow();
  });
});

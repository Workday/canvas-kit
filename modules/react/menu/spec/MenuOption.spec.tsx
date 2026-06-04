import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import React from 'react';

import {Combobox} from '@workday/canvas-kit-react/combobox';

describe('Menu.Option (via Combobox multiselect)', () => {
  const FruitCombobox = () => (
    <Combobox
      items={['Apple', 'Banana', 'Cherry']}
      initialVisibility="visible"
      mode="multiple"
      shouldVirtualize={false}
    >
      <Combobox.Input />
      <Combobox.Menu.Popper>
        <Combobox.Menu.Card>
          <Combobox.Menu.List maxHeight={200}>
            {(item: string) => <Combobox.Menu.Item data-id={item}>{item}</Combobox.Menu.Item>}
          </Combobox.Menu.List>
        </Combobox.Menu.Card>
      </Combobox.Menu.Popper>
    </Combobox>
  );

  it('moves the active cursor to the pointer-selected option after keyboard navigation', async () => {
    render(<FruitCombobox />);

    const combobox = await screen.findByRole('combobox');
    const cherry = await screen.findByRole('option', {name: 'Cherry'});

    combobox.focus();

    // Land on Banana and select it; menu stays open in multiselect mode.
    fireEvent.keyDown(combobox, {key: 'ArrowDown'});
    fireEvent.keyDown(combobox, {key: 'ArrowDown'});
    fireEvent.keyDown(combobox, {key: 'Enter'});

    // Move the keyboard cursor away from the row we will click.
    fireEvent.keyDown(combobox, {key: 'ArrowUp'});

    fireEvent.mouseDown(cherry, {button: 0});

    await waitFor(() => {
      const activeId = combobox.getAttribute('aria-activedescendant');
      expect(activeId).toBeTruthy();
      expect(document.getElementById(activeId!)?.getAttribute('data-id')).toBe('Cherry');
    });
  });
});

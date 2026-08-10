import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import {describe, expect, it, vi} from 'vitest';

import {Menu} from '../lib/Menu';
import {NestedSiblings} from '../stories/examples/NestedSiblings';

describe('Menu disabled and submenu bugs', () => {
  it('should not fire onSelect when disabled Menu.Item is clicked', async () => {
    const onSelect = vi.fn();
    const onClick = vi.fn();

    render(
      <Menu onSelect={onSelect}>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Item data-id="enabled">Enabled</Menu.Item>
              <Menu.Item aria-disabled data-id="disabled" onClick={onClick}>
                Disabled
              </Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    );

    fireEvent.click(screen.getByRole('button', {name: 'Open Menu'}));
    const disabledItem = await screen.findByRole('menuitem', {name: 'Disabled'});

    expect(disabledItem).toHaveAttribute('aria-disabled', 'true');

    fireEvent.click(disabledItem);

    expect(onSelect).not.toHaveBeenCalled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should not open submenu when disabled TargetItem is clicked', async () => {
    render(
      <Menu>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Submenu>
                <Menu.Submenu.TargetItem aria-disabled data-id="sub">
                  Submenu
                </Menu.Submenu.TargetItem>
                <Menu.Submenu.Popper>
                  <Menu.Submenu.Card>
                    <Menu.Submenu.List>
                      <Menu.Submenu.Item data-id="sub-item">Sub Item</Menu.Submenu.Item>
                    </Menu.Submenu.List>
                  </Menu.Submenu.Card>
                </Menu.Submenu.Popper>
              </Menu.Submenu>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    );

    fireEvent.click(screen.getByRole('button', {name: 'Open Menu'}));
    const target = await screen.findByRole('menuitem', {name: 'Submenu'});

    expect(target).toHaveAttribute('aria-disabled', 'true');

    fireEvent.click(target);

    expect(screen.queryByRole('menuitem', {name: 'Sub Item'})).not.toBeInTheDocument();
    expect(target).toHaveAttribute('aria-expanded', 'false');
  });

  it('should not open submenu when TargetItem is disabled via nonInteractiveIds', async () => {
    render(
      <Menu nonInteractiveIds={['sub']}>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Submenu>
                <Menu.Submenu.TargetItem data-id="sub">Submenu</Menu.Submenu.TargetItem>
                <Menu.Submenu.Popper>
                  <Menu.Submenu.Card>
                    <Menu.Submenu.List>
                      <Menu.Submenu.Item data-id="sub-item">Sub Item</Menu.Submenu.Item>
                    </Menu.Submenu.List>
                  </Menu.Submenu.Card>
                </Menu.Submenu.Popper>
              </Menu.Submenu>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    );

    fireEvent.click(screen.getByRole('button', {name: 'Open Menu'}));
    const target = await screen.findByRole('menuitem', {name: 'Submenu'});

    expect(target).toHaveAttribute('disabled');

    fireEvent.click(target);

    expect(screen.queryByRole('menuitem', {name: 'Sub Item'})).not.toBeInTheDocument();
    expect(target).toHaveAttribute('aria-expanded', 'false');
  });

  it('should not fire onSelect when Menu.Item is disabled via nonInteractiveIds', async () => {
    const onSelect = vi.fn();

    render(
      <Menu nonInteractiveIds={['disabled']} onSelect={onSelect}>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Item data-id="enabled">Enabled</Menu.Item>
              <Menu.Item data-id="disabled">Disabled</Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    );

    fireEvent.click(screen.getByRole('button', {name: 'Open Menu'}));
    const disabledItem = await screen.findByRole('menuitem', {name: 'Disabled'});

    expect(disabledItem).toHaveAttribute('disabled');

    fireEvent.click(disabledItem);

    expect(onSelect).not.toHaveBeenCalled();
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('should move focus to the first item when reopened while a disabled item holds the cursor', async () => {
    render(
      <Menu>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Item data-id="first">First</Menu.Item>
              <Menu.Item data-id="second">Second</Menu.Item>
              <Menu.Item aria-disabled data-id="last">
                Last
              </Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    );

    const target = screen.getByRole('button', {name: 'Open Menu'});

    fireEvent.click(target);
    await screen.findByRole('menu');

    // Arrow up from the first item wraps the cursor onto the disabled last item.
    fireEvent.keyDown(screen.getByRole('menuitem', {name: 'First'}), {key: 'ArrowUp'});
    await waitFor(() => {
      expect(screen.getByRole('menuitem', {name: 'Last'})).toHaveFocus();
    });

    fireEvent.keyDown(screen.getByRole('menuitem', {name: 'Last'}), {key: 'Escape'});
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    fireEvent.click(target);
    await screen.findByRole('menu');

    await waitFor(() => {
      expect(screen.getByRole('menuitem', {name: 'First'})).toHaveFocus();
    });
    expect(screen.getByRole('menuitem', {name: 'Last'})).not.toHaveFocus();
  });

  it('should apply default maxHeight to Menu.List for scrolling', async () => {
    render(
      <Menu>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              {Array.from({length: 25}, (_, i) => (
                <Menu.Item key={i} data-id={`item-${i}`}>
                  Item {i}
                </Menu.Item>
              ))}
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    );

    fireEvent.click(screen.getByRole('button', {name: 'Open Menu'}));
    const menu = await screen.findByRole('menu');
    const scrollContainer = menu.parentElement;

    expect(scrollContainer).toHaveStyle({maxHeight: '100%'});
    expect(scrollContainer).toHaveStyle({overflowY: 'auto'});
  });

  it('should close sibling submenu when another is opened by click', async () => {
    render(<NestedSiblings />);

    fireEvent.click(screen.getByRole('button', {name: 'Open Menu'}));
    await screen.findByRole('menu');

    const secondItem = screen.getByRole('menuitem', {name: 'Second Item'});
    const thirdItem = screen.getByRole('menuitem', {name: 'Third Item'});

    fireEvent.click(secondItem);
    await waitFor(() => {
      expect(screen.getByRole('menuitem', {name: 'Second: First Sub Item'})).toBeInTheDocument();
    });
    expect(secondItem).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(thirdItem);
    await waitFor(() => {
      expect(
        screen.queryByRole('menuitem', {name: 'Second: First Sub Item'})
      ).not.toBeInTheDocument();
    });
    expect(secondItem).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('menuitem', {name: 'Third: First Sub Item'})).toBeInTheDocument();
    expect(screen.getAllByRole('menu')).toHaveLength(2);
  });
});

import {fireEvent, render, screen} from '@testing-library/react';
import * as React from 'react';

import {SelectionGroup} from '../lib/SelectionGroup';

const renderGroup = (props: Partial<React.ComponentProps<typeof SelectionGroup>> = {}) =>
  render(
    <SelectionGroup mode="single" {...props}>
      <SelectionGroup.List aria-label="Options">
        <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-b">Option B</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
      </SelectionGroup.List>
    </SelectionGroup>
  );

describe('SelectionGroup', () => {
  describe('in single mode', () => {
    it('should render a radiogroup containing radio items', () => {
      renderGroup();

      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });

    it('should not select an item until the user interacts', () => {
      renderGroup();

      screen.getAllByRole('radio').forEach(item => {
        expect(item).toHaveAttribute('aria-checked', 'false');
      });
    });

    it('should not call onSelect on mount', () => {
      const onSelect = vi.fn();
      renderGroup({onSelect});

      expect(onSelect).not.toHaveBeenCalled();
    });

    it('should call onSelect once per click', () => {
      const onSelect = vi.fn();
      renderGroup({onSelect});

      fireEvent.click(screen.getByRole('radio', {name: 'Option B'}));

      expect(onSelect).toHaveBeenCalledTimes(1);
      expect(onSelect).toHaveBeenCalledWith(
        expect.objectContaining({id: 'option-b'}),
        expect.anything()
      );
    });

    it('should select the clicked item and deselect the previous one', () => {
      renderGroup({initialSelectedIds: ['option-a']});

      fireEvent.click(screen.getByRole('radio', {name: 'Option B'}));

      expect(screen.getByRole('radio', {name: 'Option A'})).toHaveAttribute(
        'aria-checked',
        'false'
      );
      expect(screen.getByRole('radio', {name: 'Option B'})).toHaveAttribute('aria-checked', 'true');
    });

    it('should use a single roving tab stop', () => {
      renderGroup({initialSelectedIds: ['option-a']});

      const tabStops = screen
        .getAllByRole('radio')
        .filter(item => item.getAttribute('tabindex') === '0');

      expect(tabStops).toHaveLength(1);
    });
  });

  describe('in multiple mode', () => {
    it('should render a group containing checkbox items', () => {
      renderGroup({mode: 'multiple'});

      expect(screen.getAllByRole('checkbox')).toHaveLength(3);
    });

    it('should keep every item in the tab order', () => {
      renderGroup({mode: 'multiple'});

      screen.getAllByRole('checkbox').forEach(item => {
        expect(item).not.toHaveAttribute('tabindex', '-1');
      });
    });

    it('should allow more than one item to be selected', () => {
      renderGroup({mode: 'multiple'});

      fireEvent.click(screen.getByRole('checkbox', {name: 'Option A'}));
      fireEvent.click(screen.getByRole('checkbox', {name: 'Option B'}));

      expect(screen.getByRole('checkbox', {name: 'Option A'})).toHaveAttribute(
        'aria-checked',
        'true'
      );
      expect(screen.getByRole('checkbox', {name: 'Option B'})).toHaveAttribute(
        'aria-checked',
        'true'
      );
    });
  });

  describe('when disabled', () => {
    it('should disable every item when the group is disabled', () => {
      renderGroup({disabled: true});

      screen.getAllByRole('radio').forEach(item => {
        expect(item).toBeDisabled();
      });
    });

    it('should not set aria-disabled alongside the native disabled attribute', () => {
      renderGroup({disabled: true});

      screen.getAllByRole('radio').forEach(item => {
        expect(item).not.toHaveAttribute('aria-disabled');
      });
    });

    it('should not call onSelect when a disabled item is clicked', () => {
      const onSelect = vi.fn();
      render(
        <SelectionGroup mode="single" onSelect={onSelect}>
          <SelectionGroup.List aria-label="Options">
            <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
            <SelectionGroup.Item data-id="option-b" disabled>
              Option B
            </SelectionGroup.Item>
          </SelectionGroup.List>
        </SelectionGroup>
      );

      fireEvent.click(screen.getByRole('radio', {name: 'Option B'}));

      expect(onSelect).not.toHaveBeenCalled();
    });
  });

  describe('when controlled', () => {
    it('should render what is passed to selectedIds', () => {
      renderGroup({selectedIds: ['option-c']});

      expect(screen.getByRole('radio', {name: 'Option C'})).toHaveAttribute('aria-checked', 'true');
    });

    it('should not change selection on its own when the consumer ignores onSelect', () => {
      renderGroup({selectedIds: ['option-a'], onSelect: () => undefined});

      fireEvent.click(screen.getByRole('radio', {name: 'Option B'}));

      expect(screen.getByRole('radio', {name: 'Option A'})).toHaveAttribute('aria-checked', 'true');
      expect(screen.getByRole('radio', {name: 'Option B'})).toHaveAttribute(
        'aria-checked',
        'false'
      );
    });
  });

  describe('notification states', () => {
    it('should mark the group invalid when error is set', () => {
      renderGroup({error: 'error'});

      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
    });

    it('should not mark the group invalid for a caution state', () => {
      renderGroup({error: 'caution'});

      expect(screen.getByRole('radiogroup')).not.toHaveAttribute('aria-invalid');
    });
  });
});

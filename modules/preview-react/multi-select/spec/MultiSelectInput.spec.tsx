import {fireEvent, render, screen} from '@testing-library/react';

import {MultiSelect} from '../lib/MultiSelect';

describe('MultiSelect.SearchInput', () => {
  it('should open the popup once when the user starts typing', async () => {
    const onFilterChange = vi.fn();
    const onShow = vi.fn();

    render(
      <MultiSelect items={['Apple', 'Banana']} onFilterChange={onFilterChange} onShow={onShow}>
        <span id="fruits-label">Fruits</span>
        <MultiSelect.SearchInput aria-labelledby="fruits-label" />
        <MultiSelect.Popper>
          <MultiSelect.Card>
            <MultiSelect.List>
              {item => (
                <MultiSelect.Item data-id={item}>
                  <MultiSelect.Item.Text>{item}</MultiSelect.Item.Text>
                </MultiSelect.Item>
              )}
            </MultiSelect.List>
          </MultiSelect.Card>
        </MultiSelect.Popper>
      </MultiSelect>
    );

    const input = screen.getByRole('combobox', {name: 'Fruits'});

    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});
    fireEvent.keyDown(input, {key: 'Tab', code: 'Tab'});
    fireEvent.keyDown(input, {key: 'Escape', code: 'Escape'});
    fireEvent.keyDown(input, {key: 'a', code: 'KeyA', altKey: true});
    fireEvent.keyDown(input, {key: 'a', code: 'KeyA', ctrlKey: true});
    fireEvent.keyDown(input, {key: 'a', code: 'KeyA', metaKey: true});

    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(onShow).not.toHaveBeenCalled();

    fireEvent.keyDown(input, {key: 'a', code: 'KeyA'});
    fireEvent.change(input, {target: {value: 'a'}});

    expect(await screen.findByRole('listbox')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('option', {name: 'Apple'})).toBeInTheDocument();
    expect(onFilterChange).toHaveBeenCalledTimes(1);
    expect(onShow).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(input, {key: 'p', code: 'KeyP'});
    fireEvent.change(input, {target: {value: 'ap'}});

    expect(onFilterChange).toHaveBeenCalledTimes(2);
    expect(onShow).toHaveBeenCalledTimes(1);
  });
});

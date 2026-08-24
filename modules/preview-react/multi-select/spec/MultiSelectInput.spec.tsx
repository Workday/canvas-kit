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

    fireEvent.keyPress(input, {key: 'a', code: 'KeyA', charCode: 97});
    fireEvent.change(input, {target: {value: 'a'}});

    expect(await screen.findByRole('listbox')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('option', {name: 'Apple'})).toBeInTheDocument();
    expect(onFilterChange).toHaveBeenCalledTimes(1);
    expect(onShow).toHaveBeenCalledTimes(1);

    fireEvent.keyPress(input, {key: 'p', code: 'KeyP', charCode: 112});
    fireEvent.change(input, {target: {value: 'ap'}});

    expect(onFilterChange).toHaveBeenCalledTimes(2);
    expect(onShow).toHaveBeenCalledTimes(1);
  });
});

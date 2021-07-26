import * as React from 'react';
import {SearchBar} from '../lib/parts/SearchBar';
import {render, screen, fireEvent} from '@testing-library/react';
import {searchThemes} from '../lib/shared/themes';
import {SearchTheme} from '../lib/shared/types';
import chroma from 'chroma-js';

describe('Header Search', () => {
  const cb = jest.fn().mockImplementation((event: Event) => event);

  afterEach(() => {
    cb.mockReset();
  });

  test('Searching empty string should focus input', () => {
    const inputLabelText = `label`;
    render(<SearchBar onSubmit={cb} inputLabel={inputLabelText} />);

    fireEvent.submit(screen.getByRole('search', {name: inputLabelText}));

    expect(cb).toHaveBeenCalledTimes(0);
    expect(screen.getByRole('combobox', {name: inputLabelText})).toHaveFocus();
  });

  test('Searching something should call callback', () => {
    const role = `search`;
    render(<SearchBar onSubmit={cb} initialValue="hello" />);

    fireEvent.submit(screen.getByRole(role));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Searching with icon should call callback', () => {
    const label = `submitLabel`;
    render(<SearchBar onSubmit={cb} initialValue="world" submitAriaLabel={label} />);

    fireEvent.click(screen.getByLabelText(label));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Clear button should clear input', () => {
    const label = `clearLabel`;
    const text = `initial text`;
    const inputLabelText = `label`;
    render(
      <SearchBar
        onSubmit={cb}
        initialValue={text}
        clearButtonAriaLabel={label}
        inputLabel={inputLabelText}
      />
    );

    expect(screen.getByRole('combobox', {name: inputLabelText})).toHaveValue(text);
    fireEvent.click(screen.getByLabelText(label));
    expect(screen.getByRole('combobox', {name: inputLabelText})).toHaveValue('');
  });

  test('Input change should fire callback', () => {
    const inputLabelText = `label`;
    const newValue = `label`;
    render(<SearchBar onSubmit={jest.fn()} onInputChange={cb} inputLabel={inputLabelText} />);

    const input = screen.getByRole('combobox', {name: inputLabelText});
    fireEvent.change(input, {target: {value: newValue}});

    expect(input).toHaveValue(newValue);
    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Collapsed prop should render search icon (without form) until clicked', () => {
    const inputLabel = `inputLabel`;
    const closeLabel = `closeLabel`;
    const openLabel = `openLabel`;

    render(
      <SearchBar
        onSubmit={cb}
        inputLabel={inputLabel}
        openButtonAriaLabel={openLabel}
        closeButtonAriaLabel={closeLabel}
        isCollapsed={true}
      />
    );

    const openButton = screen.getByLabelText(openLabel);
    const closeButton = screen.getByLabelText(closeLabel);

    expect(screen.queryByRole('combobox', {name: inputLabel})).toEqual(null);
    expect(closeButton).not.toBeVisible();
    expect(openButton).toBeVisible();

    fireEvent.click(openButton);

    expect(screen.getByRole('combobox', {name: inputLabel})).toBeVisible();
    expect(closeButton).toBeVisible();
    expect(openButton).not.toBeVisible();
    expect(screen.getByRole('combobox', {name: inputLabel})).toHaveFocus();

    fireEvent.click(closeButton);

    expect(screen.queryByRole('combobox', {name: inputLabel})).toEqual(null);
    expect(closeButton).not.toBeVisible();
    expect(openButton).toBeVisible();
    expect(openButton).toHaveFocus();
  });

  test('Search Bar can accept custom themes', () => {
    const inputLabelText = `label`;
    render(
      <SearchBar
        onSubmit={jest.fn()}
        inputLabel={inputLabelText}
        searchTheme={{
          background: 'black',
          backgroundFocus: 'white',
          color: 'black',
          colorFocus: 'white',
          boxShadow: '0 0 0 1px black',
          boxShadowFocus: '0 0 0 1px white',
        }}
      />
    );

    const input = screen.getByRole('combobox', {name: inputLabelText});
    const style = window.getComputedStyle(input);

    expect(style.background).toBe('black');
    expect(style.color).toBe('black');
    expect(style.boxShadow).toBe('0 0 0 1px black');
    // Checking placeholder programmatically currently only works in Firefox

    fireEvent.focus(input);
    const styleFocused = window.getComputedStyle(input);

    expect(styleFocused.background).toBe('white');
    expect(styleFocused.color).toBe('white');
    expect(styleFocused.boxShadow).toBe('0 0 0 1px white');
  });

  test('Search Bar can accept default themes', () => {
    const inputLabelText = `label`;
    const theme = SearchTheme.Dark;
    render(<SearchBar onSubmit={jest.fn()} inputLabel={inputLabelText} searchTheme={theme} />);

    const input = screen.getByRole('combobox', {name: inputLabelText});
    const style = window.getComputedStyle(input);

    expect(style.background).toBe(searchThemes[theme].background);
    expect(chroma(style.color || '').hex()).toBe(searchThemes[theme].color);
    expect(style.boxShadow).toBe(searchThemes[theme].boxShadow);
  });

  test('Search Bar should spread extra props', async () => {
    const cb = jest.fn();
    const data = 'test';
    render(<SearchBar onSubmit={cb} data-propspread={data} />);

    expect(screen.getByRole('search')).toHaveAttribute('data-propspread', data);
  });
});

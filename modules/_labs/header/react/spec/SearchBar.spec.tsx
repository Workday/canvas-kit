import * as React from 'react';
import {SearchBar} from '../lib/parts/SearchBar';
import {render, fireEvent} from '@testing-library/react';
import {searchThemes} from '../lib/shared/themes';
import {SearchTheme} from '../lib/shared/types';
import chroma from 'chroma-js';

describe('Header Search', () => {
  const cb = jest.fn().mockImplementation((event: Event) => event);

  afterEach(() => {
    cb.mockReset();
  });

  test('Searching empty string should focus input', async () => {
    const inputLabelText = `label`;
    const {getByLabelText} = render(<SearchBar onSubmit={cb} inputLabel={inputLabelText} />);

    fireEvent.submit(await getByLabelText(inputLabelText));

    expect(cb).toHaveBeenCalledTimes(0);
    expect(await getByLabelText(inputLabelText)).toHaveFocus();
  });

  test('Searching something should call callback', async () => {
    const role = `search`;
    const {findByRole} = render(<SearchBar onSubmit={cb} initialValue="hello" />);

    fireEvent.submit(await findByRole(role));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Searching with icon should call callback', async () => {
    const label = `submitLabel`;
    const {findByLabelText} = render(
      <SearchBar onSubmit={cb} initialValue="world" submitAriaLabel={label} />
    );

    fireEvent.click(await findByLabelText(label));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Clear button should clear input', async () => {
    const label = `clearLabel`;
    const text = `initial text`;
    const inputLabelText = `label`;
    const {findByLabelText, getByLabelText} = render(
      <SearchBar
        onSubmit={cb}
        initialValue={text}
        clearButtonAriaLabel={label}
        inputLabel={inputLabelText}
      />
    );

    expect(getByLabelText(inputLabelText)).toHaveValue(text);
    fireEvent.click(await findByLabelText(label));
    expect(getByLabelText(inputLabelText)).toHaveValue('');
  });

  test('Input change should fire callback', async () => {
    const inputLabelText = `label`;
    const newValue = `label`;
    const {findByLabelText} = render(
      <SearchBar onSubmit={jest.fn()} onInputChange={cb} inputLabel={inputLabelText} />
    );

    const input = await findByLabelText(inputLabelText);
    fireEvent.change(input, {target: {value: newValue}});

    expect(input).toHaveValue(newValue);
    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Collapsed prop should render search icon (without form) until clicked', async () => {
    const inputLabel = `inputLabel`;
    const closeLabel = `closeLabel`;
    const openLabel = `openLabel`;

    const {findByLabelText} = render(
      <SearchBar
        onSubmit={cb}
        inputLabel={inputLabel}
        openButtonAriaLabel={openLabel}
        closeButtonAriaLabel={closeLabel}
        isCollapsed={true}
      />
    );

    const input = await findByLabelText(inputLabel);
    const openButton = await findByLabelText(openLabel);
    const closeButton = await findByLabelText(closeLabel);

    expect(input).not.toBeVisible();
    expect(closeButton).not.toBeVisible();
    expect(openButton).toBeVisible();

    fireEvent.click(openButton);

    expect(input).toBeVisible();
    expect(closeButton).toBeVisible();
    expect(openButton).not.toBeVisible();
    expect(input).toHaveFocus();

    fireEvent.click(closeButton);

    expect(input).not.toBeVisible();
    expect(closeButton).not.toBeVisible();
    expect(openButton).toBeVisible();
    expect(openButton).toHaveFocus();
  });

  test('Search Bar can accept custom themes', async () => {
    const inputLabelText = `label`;
    const {findByLabelText} = render(
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

    const input = await findByLabelText(inputLabelText);
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

  test('Search Bar can accept default themes', async () => {
    const inputLabelText = `label`;
    const theme = SearchTheme.Dark;
    const {findByLabelText} = render(
      <SearchBar onSubmit={jest.fn()} inputLabel={inputLabelText} searchTheme={theme} />
    );

    const input = await findByLabelText(inputLabelText);
    const style = window.getComputedStyle(input);

    expect(style.background).toBe(searchThemes[theme].background);
    expect(chroma(style.color || '').hex()).toBe(searchThemes[theme].color);
    expect(style.boxShadow).toBe(searchThemes[theme].boxShadow);
  });

  test('Search Bar should spread extra props', async () => {
    const cb = jest.fn();
    const data = 'test';
    const {container} = render(<SearchBar onSubmit={cb} data-propspread={data} />);

    expect(container.firstChild).toHaveAttribute('data-propspread', data);
  });
});

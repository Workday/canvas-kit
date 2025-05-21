import * as React from 'react';
import {SearchForm} from '../lib/SearchForm';
import {render, screen, fireEvent} from '@testing-library/react';
import {searchThemes, SearchTheme} from '../lib/themes';
import chroma from 'chroma-js';

describe('SearchForm', () => {
  const cb = jest.fn().mockImplementation((event: Event) => event);

  afterEach(() => {
    cb.mockReset();
  });

  test('Searching empty string should focus input', () => {
    const inputLabelText = `label`;
    render(<SearchForm onSubmit={cb} inputLabel={inputLabelText} />);

    fireEvent.submit(screen.getByRole('search', {name: inputLabelText}));

    expect(cb).toHaveBeenCalledTimes(0);
    expect(screen.getByRole('combobox', {name: inputLabelText})).toHaveFocus();
  });

  test('Searching empty string should call callback, when allowEmptyStringSearch is true', () => {
    const role = `search`;
    render(<SearchForm onSubmit={cb} allowEmptyStringSearch={true} />);

    fireEvent.submit(screen.getByRole(role));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Searching something should call callback', () => {
    const role = `search`;
    render(<SearchForm onSubmit={cb} initialValue="hello" />);

    fireEvent.submit(screen.getByRole(role));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Searching with icon should call callback', () => {
    const label = `submitLabel`;
    render(<SearchForm onSubmit={cb} initialValue="world" submitAriaLabel={label} />);

    fireEvent.click(screen.getByLabelText(label));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Clear button should clear input', () => {
    const label = `clearLabel`;
    const text = `initial text`;
    const inputLabelText = `label`;
    render(
      <SearchForm
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
    render(<SearchForm onSubmit={jest.fn()} onInputChange={cb} inputLabel={inputLabelText} />);

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
      <SearchForm
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

  test('SearchForm should spread extra props', () => {
    const cb = jest.fn();
    const data = 'test';
    render(<SearchForm onSubmit={cb} data-propspread={data} />);

    expect(screen.getByRole('search')).toHaveAttribute('data-propspread', data);
  });

  test('SearchForm supports overriding the generated labelId', () => {
    const cb = jest.fn();
    const labelId = 'search-form-fixed-label-id';

    const {container} = render(<SearchForm onSubmit={cb} labelId={labelId} />);

    expect(container.querySelector(`#${labelId}`)).toHaveTextContent('Search');
  });
});

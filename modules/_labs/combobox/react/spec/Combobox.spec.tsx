import * as React from 'react';
import Combobox from '../lib/Combobox';
import {MenuItem} from '../../../menu/react/index';
import {TextInput} from '../../../../text-input/react';
import {render, fireEvent} from '@testing-library/react';

describe('Combobox', () => {
  const cb = jest.fn().mockImplementation((event: Event) => event);

  afterEach(() => {
    cb.mockReset();
  });

  test('Autocomplete items should show when focused', async () => {
    const menuText = 'test 1';
    const placeholderText = 'placeholder';
    const autocompleteItems = [<MenuItem>{menuText}</MenuItem>, <MenuItem>{menuText}</MenuItem>];
    const {queryByRole, findAllByText, findByPlaceholderText} = render(
      <Combobox autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    expect(await queryByRole('listbox')).toBeNull();

    fireEvent.focus(await findByPlaceholderText(placeholderText));
    const menuItems = await findAllByText(menuText);

    expect(await queryByRole('listbox')).toBeVisible();
    expect(menuItems.length).toBe(2);
  });

  test('Selected autocomplete items should loop around using down arrow', async () => {
    const id = 'my-id';
    const placeholderText = 'placeholder';
    const autocompleteItems = [<MenuItem />, <MenuItem />];
    const {findByPlaceholderText} = render(
      <Combobox id={id} autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);
    const down = {keyCode: 40, key: 'ArrowDown'};

    fireEvent.keyDown(input, down);
    expect(input.getAttribute('aria-activedescendant')).toEqual(`${id}-option-0`);
    fireEvent.keyDown(input, down);
    expect(input.getAttribute('aria-activedescendant')).toEqual(`${id}-option-1`);
    fireEvent.keyDown(input, down);
    expect(input.getAttribute('aria-activedescendant')).toEqual(`${id}-option-0`);
  });

  test('Selected autocomplete items should loop around using up arrow', async () => {
    const id = 'my-id';
    const placeholderText = 'placeholder';
    const autocompleteItems = [<MenuItem />, <MenuItem />];
    const {findByPlaceholderText} = render(
      <Combobox id={id} autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);
    const up = {keyCode: 38, key: 'ArrowUp'};

    fireEvent.keyDown(input, up);
    expect(input.getAttribute('aria-activedescendant')).toEqual(`${id}-option-1`);
    fireEvent.keyDown(input, up);
    expect(input.getAttribute('aria-activedescendant')).toEqual(`${id}-option-0`);
  });

  test('Combobox selected item should reset after typing more', async () => {
    const id = 'my-id';
    const placeholderText = 'placeholder';
    const autocompleteItems = [<MenuItem />, <MenuItem />];
    const {findByPlaceholderText} = render(
      <Combobox id={id} autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);
    const down = {keyCode: 40, key: 'ArrowDown'};
    const bKey = {keyCode: 66, key: 'b'};

    expect(input.getAttribute('aria-activedescendant')).toEqual('');
    fireEvent.keyDown(input, down);
    expect(input.getAttribute('aria-activedescendant')).toEqual(`${id}-option-0`);
    fireEvent.keyDown(input, bKey);
    expect(input.getAttribute('aria-activedescendant')).toEqual('');
  });

  test('Escape key should clear value', async () => {
    const placeholderText = 'placeholder';
    const newText = 'new text';
    const autocompleteItems = [<MenuItem />, <MenuItem />];
    const {findByPlaceholderText} = render(
      <Combobox autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);
    const escape = {keyCode: 27, key: 'Escape'};

    fireEvent.change(input, {target: {value: newText}});
    expect(input).toHaveValue(newText);
    fireEvent.keyDown(input, escape);
    expect(input).toHaveValue('');
    expect(input).toHaveFocus();
  });

  test('Clear button should clear value', async () => {
    const placeholderText = 'placeholder';
    const clearLabel = 'clearLabel';
    const text = 'initial text';
    const {findByPlaceholderText, findByLabelText} = render(
      <Combobox showClearButton={true} clearButtonLabel={clearLabel} initialValue={text}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);

    expect(input).toHaveValue(text);
    fireEvent.click(await findByLabelText(clearLabel));
    expect(input).toHaveValue('');
    expect(input).toHaveFocus();
  });

  test('Call callback function when enter is pressed', async () => {
    const placeholderText = 'placeholder';
    const menuText = 'menuText';
    const autocompleteItems = [<MenuItem onClick={cb}>{menuText}</MenuItem>];
    const {findByPlaceholderText, queryByRole} = render(
      <Combobox autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);
    const down = {keyCode: 40, key: 'ArrowDown'};
    const enter = {keyCode: 13, key: 'Enter'};

    fireEvent.keyDown(input, down);
    fireEvent.keyDown(input, enter);

    expect(input).toHaveValue(menuText);
    expect(await queryByRole('listbox')).not.toBeNull();
    expect(input.getAttribute('aria-activedescendant')).toEqual('');
    expect(cb.mock.calls.length).toBe(1);
  });

  test('Call callback function when list item is clicked', async () => {
    const placeholderText = 'placeholder';
    const menuText = 'menuText';
    const autocompleteItems = [
      <MenuItem onClick={cb}>
        <span>{menuText}</span>
      </MenuItem>,
    ];
    const {findByPlaceholderText, queryByRole, findByText} = render(
      <Combobox autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);

    fireEvent.focus(input);
    fireEvent.click(await findByText(menuText));

    expect(input).toHaveValue(menuText);
    expect(await queryByRole('listbox')).toBeNull();
    expect(input.getAttribute('aria-activedescendant')).toEqual('');
    expect(cb.mock.calls.length).toBe(1);
  });

  test('Do not call callback function when enter is pressed on disabled item', async () => {
    const placeholderText = 'placeholder';
    const menuText = 'menuText';
    const id = 'my-id';
    const autocompleteItems = [
      <MenuItem isDisabled={true} onClick={cb}>
        {menuText}
      </MenuItem>,
    ];
    const {findByPlaceholderText, findByRole} = render(
      <Combobox id={id} autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);
    const down = {keyCode: 40, key: 'ArrowDown'};
    const enter = {keyCode: 13, key: 'Enter'};

    fireEvent.focus(input);
    fireEvent.keyDown(input, down);
    fireEvent.keyDown(input, enter);

    expect(input).toHaveValue('');
    expect(await findByRole('listbox')).toBeVisible();
    expect(input.getAttribute('aria-activedescendant')).toEqual(`${id}-option-0`);
    expect(cb.mock.calls.length).toBe(0);
  });

  test('Do not call callback function when meta key is pressed', async () => {
    const placeholderText = 'placeholder';
    const menuText = 'menuText';
    const id = 'my-id';
    const autocompleteItems = [<MenuItem onClick={cb}>{menuText}</MenuItem>];
    const {findByPlaceholderText, findByRole} = render(
      <Combobox id={id} autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);
    const down = {keyCode: 40, key: 'ArrowDown'};
    const metaEnter = {keyCode: 13, key: 'Enter', metaKey: true};

    fireEvent.focus(input);
    fireEvent.keyDown(input, down);
    fireEvent.keyDown(input, metaEnter);

    expect(input).toHaveValue('');
    expect(await findByRole('listbox')).toBeVisible();
    expect(input.getAttribute('aria-activedescendant')).toEqual(`${id}-option-0`);
    expect(cb.mock.calls.length).toBe(0);
  });

  test('Call change function when input value changes', async () => {
    const placeholderText = 'placeholder';
    const newText = 'text';
    const {findByPlaceholderText} = render(
      <Combobox onChange={cb}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);

    fireEvent.change(input, {target: {value: newText}});
    expect(cb.mock.calls.length).toBe(1);
  });

  test('Call focus function when input is focused', async () => {
    const placeholderText = 'placeholder';
    const {findByPlaceholderText} = render(
      <Combobox onFocus={cb}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);

    fireEvent.focus(input);
    expect(cb.mock.calls.length).toBe(1);
  });

  test('Call blur function when input is blurred', async () => {
    const placeholderText = 'placeholder';
    const {findByPlaceholderText} = render(
      <Combobox onBlur={cb}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);

    fireEvent.blur(input);
    expect(cb.mock.calls.length).toBe(1);
  });

  test('Do not call blur function when clicking on disabled menu item', async () => {
    const placeholderText = 'placeholder';
    const menuText = 'menuText';
    const autocompleteItems = [
      <MenuItem isDisabled={true} onClick={cb}>
        {menuText}
      </MenuItem>,
    ];
    const {findByPlaceholderText, findByText} = render(
      <Combobox onBlur={cb} autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);

    fireEvent.focus(input);
    fireEvent.click(await findByText(menuText));

    expect(cb.mock.calls.length).toBe(0);
  });

  test('Status should change when autocomplete items do', async () => {
    const placeholderText = 'placeholder';
    const autocompleteItems = [<MenuItem />];
    const {findByPlaceholderText, findByRole} = render(
      <Combobox onChange={cb} autocompleteItems={autocompleteItems}>
        <TextInput placeholder={placeholderText} />
      </Combobox>
    );

    const input = await findByPlaceholderText(placeholderText);
    const status = await findByRole('status');

    fireEvent.focus(input);
    expect(status).toHaveTextContent('There is 1 suggestion.');
  });

  test('Combobox should spread extra props', async () => {
    const data = 'test';
    const {container} = render(
      <Combobox data-propspread={data}>
        <TextInput />
      </Combobox>
    );

    expect(container.firstChild).toHaveAttribute('data-propspread', data);
  });
});

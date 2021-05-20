import * as React from 'react';
import Combobox, {ComboboxProps} from '../lib/Combobox';
import {MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {TextInput} from '../../../react/text-input';
import {render, fireEvent} from '@testing-library/react';

const renderCombobox = (props: ComboboxProps) => render(<Combobox {...props} />);

describe('Combobox', () => {
  let defaultProps: ComboboxProps;
  const placeholderText = 'placeholder';
  const cb = jest.fn().mockImplementation((event: Event) => event);

  beforeEach(() => {
    defaultProps = {
      autocompleteItems: [<MenuItem />, <MenuItem />],
      children: <TextInput placeholder={placeholderText} />,
    };
  });

  afterEach(() => {
    cb.mockReset();
  });

  describe('props', () => {
    it('should render children inputs', () => {
      const screen = renderCombobox({
        children: <TextInput data-testid="test" />,
      });

      expect(screen.getByTestId('test')).toBeInTheDocument();
    });

    it('should pass initialValue to input', () => {
      const screen = renderCombobox({
        ...defaultProps,
        initialValue: 'test',
      });

      expect(screen.getByRole('combobox')).toHaveValue('test');
    });

    it('should render a clear icon when `showClearButton` is `true`', () => {
      const screen = renderCombobox({
        ...defaultProps,
        showClearButton: true,
      });

      expect(screen.getByLabelText('Reset Search Input')).toBeInTheDocument();
    });

    it('should not render a clear icon when `showClearButton` is `false`', () => {
      const screen = renderCombobox({
        ...defaultProps,
        showClearButton: false,
      });

      expect(screen.queryByLabelText('Reset Search Input')).toBeNull();
    });

    it('should not render a clear icon when `showClearButton` is not provided', () => {
      const screen = renderCombobox({
        ...defaultProps,
      });

      expect(screen.queryByLabelText('Reset Search Input')).toBeNull();
    });

    it('should change the clear button label when `clearButtonAriaLabel` is provided', () => {
      const screen = renderCombobox({
        ...defaultProps,
        showClearButton: true,
        clearButtonAriaLabel: 'My Label',
      });

      expect(screen.getByLabelText('My Label')).toBeInTheDocument();
    });

    it('should render correct status text', () => {
      const screen = renderCombobox({
        ...defaultProps,
        autocompleteItems: [<MenuItem />, <MenuItem />],
        getStatusText(listCount: number) {
          return `Item count: ${listCount}`;
        },
      });
      fireEvent.focus(screen.getByRole('combobox'));

      expect(screen.getByRole('log')).toHaveTextContent('Item count: 2');
    });
  });

  test('Call callback function when enter is pressed', async () => {
    const menuText = 'menuText';
    const autocompleteItems = [<MenuItem onClick={cb}>{menuText}</MenuItem>];
    const {findByRole} = renderCombobox({
      ...defaultProps,
      autocompleteItems,
    });

    const input = await findByRole('combobox');
    const down = {keyCode: 40, key: 'ArrowDown'};
    const enter = {keyCode: 13, key: 'Enter'};

    fireEvent.keyDown(input, down);
    fireEvent.keyDown(input, enter);

    expect(cb.mock.calls.length).toBe(1);
  });

  test('Call callback function when list item is clicked', async () => {
    const menuText = 'menuText';
    const autocompleteItems = [
      <MenuItem onClick={cb}>
        <span>{menuText}</span>
      </MenuItem>,
    ];
    const {findByRole, findByText} = renderCombobox({
      ...defaultProps,
      autocompleteItems,
    });
    const input = await findByRole('combobox');

    fireEvent.focus(input);
    fireEvent.click(await findByText(menuText));

    expect(cb.mock.calls.length).toBe(1);
  });

  test('Do not call callback function when enter is pressed on disabled item', async () => {
    const menuText = 'menuText';
    const id = 'my-id';
    const autocompleteItems = [
      <MenuItem isDisabled={true} onClick={cb}>
        {menuText}
      </MenuItem>,
    ];
    const {findByRole} = renderCombobox({
      ...defaultProps,
      autocompleteItems,
      id,
    });

    const input = await findByRole('combobox');
    const down = {keyCode: 40, key: 'ArrowDown'};
    const enter = {keyCode: 13, key: 'Enter'};

    fireEvent.focus(input);
    fireEvent.keyDown(input, down);
    fireEvent.keyDown(input, enter);

    expect(cb.mock.calls.length).toBe(0);
  });

  test('Do not call callback function when meta key is pressed', async () => {
    const menuText = 'menuText';
    const id = 'my-id';
    const autocompleteItems = [<MenuItem onClick={cb}>{menuText}</MenuItem>];
    const {findByRole} = renderCombobox({
      ...defaultProps,
      autocompleteItems,
      id,
    });

    const input = await findByRole('combobox');
    const down = {keyCode: 40, key: 'ArrowDown'};
    const metaEnter = {keyCode: 13, key: 'Enter', metaKey: true};

    fireEvent.focus(input);
    fireEvent.keyDown(input, down);
    fireEvent.keyDown(input, metaEnter);

    expect(cb.mock.calls.length).toBe(0);
  });

  test('Call change function when input value changes', async () => {
    const newText = 'text';
    const {findByRole} = renderCombobox({
      ...defaultProps,
      onChange: cb,
    });

    const input = await findByRole('combobox');

    fireEvent.change(input, {target: {value: newText}});
    expect(cb.mock.calls.length).toBe(1);
  });

  test('Call focus function when input is focused', async () => {
    const {findByRole} = renderCombobox({
      ...defaultProps,
      onFocus: cb,
    });

    const input = await findByRole('combobox');

    fireEvent.focus(input);
    expect(cb.mock.calls.length).toBe(1);
  });

  test('Call blur function when input is blurred', async () => {
    const {findByRole} = renderCombobox({
      ...defaultProps,
      onBlur: cb,
    });
    const input = await findByRole('combobox');

    fireEvent.blur(input);
    expect(cb.mock.calls.length).toBe(1);
  });

  test('Do not call blur function when clicking on disabled menu item', async () => {
    const menuText = 'menuText';
    const autocompleteItems = [
      <MenuItem isDisabled={true} onClick={cb}>
        {menuText}
      </MenuItem>,
    ];
    const {findByRole, findByText} = renderCombobox({
      ...defaultProps,
      onBlur: cb,
      autocompleteItems,
    });

    const input = await findByRole('combobox');

    fireEvent.focus(input);
    fireEvent.click(await findByText(menuText));

    expect(cb.mock.calls.length).toBe(0);
  });

  test('Combobox should spread extra props', async () => {
    const data = 'test';
    const {container} = render(
      <Combobox data-prop-spread={data}>
        <TextInput />
      </Combobox>
    );

    expect(container.firstChild).toHaveAttribute('data-prop-spread', data);
  });
});

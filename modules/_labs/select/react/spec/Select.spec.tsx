import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Select from '../lib/Select';

describe('Select', () => {
  const cb = jest.fn();

  const selectButtonRole = 'button';
  const optionRole = 'option';

  const options = [{label: 'E-mail', value: 'email'}, {label: 'Phone', value: 'phone'}];

  // TODO: Delete helpers related to old tests

  // const getFirstMatchingOption = (options: HTMLElement[], value: string) => {
  //   return options.filter((option: HTMLElement) => option.getAttribute('data-value') === value)[0];
  // };

  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered with the id prop', () => {
    it('should render a button with that id', () => {
      const id = 'selectButton';
      const {getByRole} = render(<Select id={id} onChange={cb} options={options} />);
      expect(getByRole(selectButtonRole)).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with the disabled prop', () => {
    it('should render a disabled button', () => {
      const {getByRole} = render(<Select disabled={true} onChange={cb} options={options} />);
      expect(getByRole(selectButtonRole)).toHaveProperty('disabled', true);
    });
  });

  // TODO: when rendered with two options as children
  // it should render two options

  // TODO: these tests no longer work now that the menu is removed from
  // the DOM when it's inactive
  /*
  describe('when rendered with a value that matches the value of one (or more) of its options', () => {
    const value = 'option2';
    const testContent = () => {
      return (
        <Select onChange={cb} value={value}>
          <SelectOption value="option1" label="Option 1" />
          <SelectOption value={value} label="Option 2" />
        </Select>
      );
    };

    it('should render a button whose text is equal to the text of the first matching option', () => {
      const {getAllByRole, getByRole} = render(testContent());
      const button = getByRole(selectButtonRole);
      const firstMatchingOption = getFirstMatchingOption(getAllByRole(optionRole), value);
      expect(button.textContent).toEqual(firstMatchingOption.textContent);
    });

    it('should render the first matching option with aria-selected="true"', () => {
      const {getAllByRole} = render(testContent());
      const firstMatchingOption = getFirstMatchingOption(getAllByRole(optionRole), value);
      expect(firstMatchingOption).toHaveAttribute('aria-selected', 'true');
    });
  });
  */

  // TODO: these tests no longer work now that the menu is removed from
  // the DOM when it's inactive
  /*
  describe('when rendered with a value that does NOT match the value of any of its options', () => {
    const value = 'option3';
    const testContent = () => {
      return (
        <Select onChange={cb} value={value}>
          <SelectOption value="option1" label="Option 1" />
          <SelectOption value="option2" label="Option 2" />
        </Select>
      );
    };

    it('should render a button whose text is equal to the text of the first option', () => {
      const {getAllByRole, getByRole} = render(testContent());
      const button = getByRole(selectButtonRole);
      const firstOption = getAllByRole(optionRole)[0];
      expect(button.textContent).toEqual(firstOption.textContent);
    });

    it('should render the first option with aria-selected="true"', () => {
      const {getAllByRole} = render(testContent());
      const firstOption = getAllByRole(optionRole)[0];
      expect(firstOption).toHaveAttribute('aria-selected', 'true');
    });
  });
  */

  describe('when the mouse button is pressed down on an option with a different value than the current value of the select', () => {
    it('should call the onChange callback', () => {
      const {getAllByRole, getByRole} = render(<Select onChange={cb} options={options} />);
      fireEvent.click(getByRole(selectButtonRole));
      fireEvent.mouseDown(getAllByRole(optionRole)[1]);
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  // TODO: test change event firing with correct value
});

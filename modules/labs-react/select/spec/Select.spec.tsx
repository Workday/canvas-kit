import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Select from '../lib/Select';

describe('Select', () => {
  const cb = jest.fn();

  const selectButtonRole = 'button';
  const listboxRole = 'listbox';
  const optionRole = 'option';

  const options = [
    {label: 'E-mail', value: 'email'},
    {label: 'Phone', value: 'phone'},
  ];

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

  describe('when rendered with the aria-required prop', () => {
    it('should apply aria-required to its menu listbox when the menu is activated', () => {
      const {getByRole} = render(<Select onChange={cb} options={options} aria-required={true} />);
      fireEvent.click(getByRole(selectButtonRole));
      expect(getByRole(listboxRole)).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('when rendered with the required prop', () => {
    it('should apply aria-required to its menu listbox when the menu is activated', () => {
      const {getByRole} = render(<Select onChange={cb} options={options} required={true} />);
      fireEvent.click(getByRole(selectButtonRole));
      expect(getByRole(listboxRole)).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('when an option with a different value than the current value of the select is clicked', () => {
    it('should call the onChange callback', () => {
      const {getAllByRole, getByRole} = render(<Select onChange={cb} options={options} />);
      fireEvent.click(getByRole(selectButtonRole));
      fireEvent.click(getAllByRole(optionRole)[1]);
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Select from '../lib/Select';

describe('Select', () => {
  const cb = jest.fn();

  const selectButtonRole = 'button';
  const optionRole = 'option';

  const options = [{label: 'E-mail', value: 'email'}, {label: 'Phone', value: 'phone'}];

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

  describe('when an option with a different value than the current value of the select is clicked', () => {
    it('should call the onChange callback', () => {
      const {getAllByRole, getByRole} = render(<Select onChange={cb} options={options} />);
      fireEvent.click(getByRole(selectButtonRole));
      fireEvent.click(getAllByRole(optionRole)[1]);
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});

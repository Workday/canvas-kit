import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import SelectOption from '../lib/SelectOption';
import Select from '../lib/Select';

describe('Select', () => {
  const cb = jest.fn();

  const role = 'listbox';

  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered with an id', () => {
    it('should render a select with id', () => {
      const id = 'mySelect';
      const {getByRole} = render(<Select id={id} onChange={cb}></Select>);
      expect(getByRole(role)).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled select', () => {
      const {getByRole} = render(<Select disabled={true} onChange={cb}></Select>);
      expect(getByRole(role)).toHaveProperty('disabled', true);
    });
  });

  describe('when rendered with extra, arbitrary props', () => {
    it('should spread extra props onto the select', () => {
      const attr = 'test';
      const {getByRole} = render(<Select data-propspread={attr} onChange={cb}></Select>);
      expect(getByRole(role)).toHaveAttribute('data-propspread', attr);
    });
  });

  describe('when rendered with two select options as children', () => {
    it('should render two options', () => {
      const {getAllByRole} = render(
        <Select onChange={cb}>
          <SelectOption value="testValue1" label="testValue1" />
          <SelectOption value="testValue2" label="testValue2" />
        </Select>
      );
      expect(getAllByRole('option')).toHaveLength(2);
    });
  });

  describe('when changed', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(<Select onChange={cb}></Select>);
      fireEvent.change(getByRole(role));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});

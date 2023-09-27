import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Select} from '../lib/Select';

describe('Select', () => {
  const cb = jest.fn();

  const role = 'combobox';

  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered with a single child', () => {
    it('should not throw an error', () => {
      const {getAllByRole} = render(
        <Select items={['Foo']} initialVisibility="visible">
          <Select.Input id="contact-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return <Select.Item>{item}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      );
      expect(getAllByRole('option')).toHaveLength(1);
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled select', () => {
      const {getByRole} = render(
        <Select items={['Foo']}>
          <Select.Input disabled id="contact-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return <Select.Item>{item}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      );
      expect(getByRole(role)).toHaveProperty('disabled', true);
    });
  });

  describe('when rendered with a value', () => {
    it('it should render a select whose selected option matches value', () => {
      const selectedValue = 'Foo';
      const {getByDisplayValue} = render(
        <Select items={['Foo']} initialSelectedIds={['Foo']}>
          <Select.Input id="contact-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return <Select.Item>{item}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      );
      expect(getByDisplayValue(selectedValue)).toBeDefined();
    });
  });

  describe('when changed', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(
        <Select items={['Foo']} initialSelectedIds={['Foo']}>
          <Select.Input onChange={cb} id="contact-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return <Select.Item>{item}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </Select>
      );
      fireEvent.change(getByRole(role), {
        target: {value: 'F'},
      });
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});

import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Select} from '../lib/Select';
import {useSelectModel} from '../lib/hooks';

describe.only('Select', () => {
  const cb = jest.fn();

  const role = 'combobox';

  afterEach(() => {
    cb.mockReset();
  });

  verifyComponent(Select, {modelFn: useSelectModel});
  verifyComponent(Select.Input, {modelFn: useSelectModel});

  describe('when rendered with a single child', () => {
    it('should not throw an error', () => {
      const {getAllByRole} = render(
        <Select items={['Foo']} initialVisibility="visible">
          <Select.Input id="contact-select" />
          <Select.Popup>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return <Select.Item>{item.id}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popup>
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
          <Select.Popup>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return <Select.Item>{item.id}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popup>
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
          <Select.Popup>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return <Select.Item>{item.id}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popup>
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
          <Select.Popup>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return <Select.Item>{item.id}</Select.Item>;
                }}
              </Select.List>
            </Select.Card>
          </Select.Popup>
        </Select>
      );
      fireEvent.change(getByRole(role));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});

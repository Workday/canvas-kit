import {render, screen} from '@testing-library/react';
import React from 'react';

import {Select} from '../lib/Select';

describe('Select', () => {
  const cb = vi.fn();

  const role = 'combobox';

  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered with a single child', () => {
    it('should not throw an error', () => {
      render(
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
      expect(screen.getAllByRole('option')).toHaveLength(1);
    });

    it('should render in React Strict Mode', () => {
      render(
        <React.StrictMode>
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
        </React.StrictMode>
      );
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled select', () => {
      render(
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
      expect(screen.getByRole(role)).toHaveProperty('disabled', true);
    });
  });

  describe('when rendered with a value', () => {
    it('it should render a select whose selected option matches value', () => {
      const selectedValue = 'Foo';
      render(
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
      expect(screen.getAllByDisplayValue(selectedValue)[0]).toBeDefined();
    });
  });
});

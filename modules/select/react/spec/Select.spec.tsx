import * as React from 'react';
import {mount} from 'enzyme';
import SelectOption from '../lib/SelectOption';
import Select from '../lib/Select';

describe('Select', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('renders two select options as expected', () => {
    const component = mount(
      <Select name="contact">
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
      </Select>
    );

    const options = component.find('option');

    expect(options.length).toEqual(2);
  });

  test('Select should spread extra props', () => {
    const component = mount(
      <Select name="contact" data-propspread="test">
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
      </Select>
    );
    const select = component
      .find('select') // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(select.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});

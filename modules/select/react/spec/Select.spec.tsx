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
});

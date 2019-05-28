import * as React from 'react';
import Select from '../lib/Select';
import SelectOption from '../lib/SelectOption';
import * as renderer from 'react-test-renderer';
import {ErrorType} from '@workday/canvas-kit-react';

describe('Select Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <Select name="contact">
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
      </Select>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Select name="contact">
        <SelectOption value="email" label="E-mail" disabled={true} />
        <SelectOption value="phone" label="Phone" />
      </Select>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Select name="contact" disabled={true}>
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
      </Select>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Select name="contact" grow={true}>
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
      </Select>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Select name="contact" error={ErrorType.Alert}>
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
      </Select>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const component = renderer.create(
      <Select name="contact" error={ErrorType.Error}>
        <SelectOption value="email" label="E-mail" />
        <SelectOption value="phone" label="Phone" />
      </Select>
    );
    expect(component).toMatchSnapshot();
  });
});

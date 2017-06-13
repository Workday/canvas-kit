import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FormField from '../lib/FormField';

describe('FormField Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <FormField>
        <input type="text" />
      </FormField>
    );
    expect(component).toMatchSnapshot();
  });

  test('left label', () => {
    const component = renderer.create(
      <FormField labelPosition={FormField.LabelPosition.Left}>
        <input type="text" />
      </FormField>
    );
    expect(component).toMatchSnapshot();
  });

  test('grow', () => {
    const component = renderer.create(
      <FormField grow={true}>
        <input type="text" />
      </FormField>
    );
    expect(component).toMatchSnapshot();
  });

  test('grow with left label', () => {
    const component = renderer.create(
      <FormField labelPosition={FormField.LabelPosition.Left} grow={true}>
        <input type="text" />
      </FormField>
    );
    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import {mount} from 'enzyme';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import FormField, {FormFieldErrorBehavior} from '../lib/FormField';

describe('FormField', () => {
  test('Set a string label', () => {
    const label = 'Label';
    const component = mount(
      <FormField label={label}>
        <input type="text" />
      </FormField>
    );

    expect(component.find('label').text()).toBe(label);

    component.unmount();
  });

  test('Set a custom component', () => {
    const label = <label>Custom Label</label>;
    const component = mount(
      <FormField label={label}>
        <input type="text" />
      </FormField>
    );

    expect(component.contains(label)).toBeDefined();

    component.unmount();
  });

  test('Set hint text', () => {
    const hintText = 'Hint Text';
    const component = mount(
      <FormField hintText={hintText}>
        <input type="text" />
      </FormField>
    );

    expect(component.render().text()).toEqual(expect.stringContaining(hintText));

    component.unmount();
  });

  test('Set aria-describedby', () => {
    const InputComponent: React.SFC<GrowthBehavior> = () => <input type="text" />;
    const hintText = 'Hint Text';
    const hintId = 'hint-id';
    const component = mount(
      <FormField error={FormField.ErrorType.Error} hintText={hintText} hintId={hintId}>
        <InputComponent />
      </FormField>
    );

    expect(
      component
        .find('Hint')
        .at(0)
        .prop('id')
    ).toEqual(hintId);
    expect(component.find(InputComponent).prop('aria-describedby')).toEqual(hintId);

    component.unmount();
  });

  test('Sets id on input & htmlFor on label', () => {
    const InputComponent: React.SFC = () => <input type="text" />;
    const inputId = 'input-id';

    const component = mount(
      <FormField inputId={inputId} label="Label">
        <InputComponent />
      </FormField>
    );

    expect(component.find(InputComponent).prop('id')).toEqual(inputId);
    expect(component.find('Label').prop('htmlFor')).toEqual(inputId);

    component.unmount();
  });

  test('Sets grow prop', () => {
    const InputComponent: React.SFC<GrowthBehavior> = () => <input type="text" />;

    const component = mount(
      <FormField grow={true}>
        <InputComponent />
      </FormField>
    );

    expect(component.find(InputComponent).props().grow).toEqual(true);

    component.unmount();
  });

  test('Sets error prop with aria label', () => {
    const InputComponent: React.SFC<FormFieldErrorBehavior> = () => <input type="text" />;

    const component = mount(
      <FormField error={FormField.ErrorType.Error}>
        <InputComponent />
      </FormField>
    );

    expect(component.find(InputComponent).props().error).toEqual(FormField.ErrorType.Error);
    expect(component.find(InputComponent).prop('aria-invalid')).toBeTruthy();

    component.unmount();
  });

  test('String child', () => {
    const component = mount(<FormField>Text</FormField>);

    expect(component.children().text()).toBe('Text');

    component.unmount();
  });

  test('Uses fieldset and legend when useFieldset=true (for RadioGroup)', () => {
    const InputComponent: React.SFC<FormFieldErrorBehavior> = () => <input type="text" />;

    const component = mount(
      <FormField useFieldset={true} label="Label">
        <InputComponent />
      </FormField>
    );

    expect(component.find('fieldset')).toHaveLength(1);
    expect(component.find('legend')).toHaveLength(1);

    component.unmount();
  });
});

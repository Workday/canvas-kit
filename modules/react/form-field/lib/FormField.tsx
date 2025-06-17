import React from 'react';

import {createContainer, GrowthBehavior} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';

import {useFormFieldModel} from './hooks';
import {FormFieldInput} from './FormFieldInput';
import {FormFieldLabel} from './FormFieldLabel';
import {FormFieldHint} from './FormFieldHint';
import {FormFieldContainer} from './FormFieldContainer';
import {formFieldStencil} from './formFieldStencil';
import {FormFieldField} from './FormFieldField';

export interface FormFieldProps extends FlexProps, GrowthBehavior {
  /**
   * The direction the child elements should stack. In v13, `horizontal` will be removed. Please use `horizontalStart` or `horizontalEnd` for horizontal alignment.
   * @default vertical
   */
  orientation?: 'vertical' | 'horizontalStart' | 'horizontalEnd';
  children: React.ReactNode;
}

/**
 * Use `FormField` to wrap input components to make them accessible. You can customize the field
 * by passing in `TextInput`, `Select`, `RadioGroup` and other form elements to `FormField.Input` through the `as` prop.
 *
 * ```tsx
 * <FormField>
 *    <FormField.Label>First Name</FormField.Label>
 *    <FormField.Input as={TextInput} value={value} onChange={(e) => console.log(e)} />
 *  </FormField>
 * ```
 *
 * @stencil formFieldStencil
 */
export const FormField = createContainer('div')({
  displayName: 'FormField',
  modelHook: useFormFieldModel,
  subComponents: {
    /**
     * `FormField.Input` will render any `inputs` passed to it via the `as` prop, including `TextInput`, `Select`, `Switch`, `TextArea`, `RadioGroup` or any custom input.
     * `FromField.Input` will be associated with `FormField.Label` and `FormField.Hint` by a generated `id`. You can customize this `id` by passing `id` to `FormField`.
     *
     * **Note: If you pass in a custom input that is *not* as Canvas Kit input, you will have to handle the `error` prop, validation and styling. For a custom approach, reference our Custom storybook example.**
     *
     * ```tsx
     *  <FormField id='my-unique-id'>
     *    <FormField.Label>My Label Text</FormField.Label>
     *    <FormField.Input as={TextInput} onChange={(e) => console.log(e)} />
     *  <FormField>
     * ```
     */
    Input: FormFieldInput,
    /**
     * `FormField.Label` will render a `label` element that has a matching `id` to the `FormField.Input`.
     *
     * ```tsx
     * <FormField>
     *    <FormField.Label>First Name</FormField.Label>
     *    <FormField.Input as={TextInput} value={value} onChange={(e) => console.log(e)} />
     *  </FormField>
     * ```
     *
     * @stencil formFieldLabelStencil
     */
    Label: FormFieldLabel,
    /**
     * `FormField.Hint` will render any additional information you want to provide to the `FormField.Input`. If you
     * set the `orientation` prop to `horizontal` you should use `FormField.Field` to properly align the hint with your `FormField.Input`.
     *
     * ```tsx
     * <FormField>
     *    <FormField.Label>First Name</FormField.Label>
     *    <FormField.Input as={TextInput} value={value} onChange={(e) => console.log(e)} />
     *    <FormField.Hint>This is your hint text</FormField.Hint>
     *  </FormField>
     * ```
     *
     * @stencil formFieldHintStencil
     */
    Hint: FormFieldHint,
    /**
     * `FormField.Field` allows you to properly center `FormField.Label` when the `orientation` is set to `horizontal` and there is hint text..
     *
     * ```tsx
     * <FormField orientation="horizontalStart">
     *    <FormField.Label>First Name</FormField.Label>
     *    <FormField.Container>
     *      <FormField.Input as={TextInput} value={value} onChange={(e) => console.log(e)} />
     *      <FormField.Hint>This is your hint text</FormField.Hint>
     *    </FormField.Container>
     *  </FormField>
     * ```
     *
     * @stencil formFieldContainerStencil
     * @deprecated `FormField.Container` is deprecated and will be removed in a future major version. Please use `FormField.Field` to always wrap `FormField.Input` and `FormField.Hint` to always ensure correct label and input alignment.
     */
    Container: FormFieldContainer,
    /**
     * `FormField.Field` allows you to customize container alignment and styles when wrapping your input and hint text.
     * ```tsx
     * <FormField orientation="horizontalStart">
     *    <FormField.Label>First Name</FormField.Label>
     *    <FormField.Field>
     *      <FormField.Input as={TextInput} value={value} onChange={(e) => console.log(e)} />
     *      <FormField.Hint>This is your hint text</FormField.Hint>
     *    </FormField.Field>
     *  </FormField>
     * ```
     */
    Field: FormFieldField,
  },
})<FormFieldProps>(({children, grow, orientation = 'vertical', ...elemProps}, Element, model) => {
  return (
    <Element
      {...mergeStyles(
        elemProps,
        formFieldStencil({
          grow,
          orientation: model.state.orientation,
          error: model.state.error,
          required: model.state.isRequired,
        })
      )}
    >
      {children}
    </Element>
  );
});

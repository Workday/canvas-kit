import React from 'react';

import {createContainer, GrowthBehavior} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useFormFieldModel, useFormFieldOrientation} from './hooks';
import {FormFieldInput} from './FormFieldInput';
import {FormFieldLabel} from './FormFieldLabel';
import {FormFieldHint} from './FormFieldHint';
import {FormFieldContainer} from './FormFieldContainer';

export interface FormFieldProps extends FlexProps, GrowthBehavior {
  children: React.ReactNode;
}

const formFieldStencil = createStencil({
  base: {
    border: 'none',
    padding: system.space.zero,
    margin: `${system.space.zero} ${system.space.zero} ${system.space.x6}`,
  },
  modifiers: {
    grow: {
      true: {
        width: '100%',
        '[data-width="ck-formfield-width"]': {
          width: '100%',
        },
      },
    },
  },
});
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
     */
    Label: FormFieldLabel,
    /**
     * `FormField.Hint` will render any additional information you want to provide to the `FormField.Input`. If you
     * set the `orientation` prop to `horizontal` you should use `FormField.Container` to properly align the hint with your `FormField.Input`.
     *
     * ```tsx
     * <FormField>
     *    <FormField.Label>First Name</FormField.Label>
     *    <FormField.Input as={TextInput} value={value} onChange={(e) => console.log(e)} />
     *    <FormField.Hint>This is your hint text</FormField.Hint>
     *  </FormField>
     * ```
     */
    Hint: FormFieldHint,
    /**
     * `FormField.Container` allows you to properly center `FormField.Label` when the `orientation` is set to `horizontal` and there is hint text..
     *
     * ```tsx
     * <FormField orientation="horizontal">
     *    <FormField.Label>First Name</FormField.Label>
     *    <FormField.Container>
     *      <FormField.Input as={TextInput} value={value} onChange={(e) => console.log(e)} />
     *      <FormField.Hint>This is your hint text</FormField.Hint>
     *    </FormField.Container>
     *  </FormField>
     * ```
     */
    Container: FormFieldContainer,
  },
})<FormFieldProps>(({children, ...elemProps}, Element, model) => {
  const layoutProps = useFormFieldOrientation(model.state.orientation);

  return (
    <Flex
      as={Element}
      {...layoutProps}
      {...mergeStyles(elemProps, formFieldStencil({grow: elemProps.grow}))}
    >
      {children}
    </Flex>
  );
});

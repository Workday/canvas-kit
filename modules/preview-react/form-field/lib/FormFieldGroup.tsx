import React from 'react';

import {createContainer, GrowthBehavior} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';

import {useFormFieldModel} from './hooks';
import {FormFieldLabel} from './FormFieldLabel';
import {formFieldStencil} from './formFieldStencil';

export interface FormFieldGroupProps extends FlexProps, GrowthBehavior {
  /**
   * The direction the child elements should stack
   * @default vertical
   */
  orientation?: 'vertical' | 'horizontal';
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
export const FormFieldGroup = createContainer('fieldset')({
  displayName: 'FormFieldGroup',
  modelHook: useFormFieldModel,
  subComponents: {
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
    Legend: FormFieldLabel.as('legend'),
  },
})<FormFieldGroupProps>(({children, grow, orientation, ...elemProps}, Element, model) => {
  return (
    <Element
      {...mergeStyles(
        elemProps,
        formFieldStencil({
          grow,
          orientation,
          error: model.state.error,
          required: model.state.isRequired,
        })
      )}
    >
      {children}
    </Element>
  );
});

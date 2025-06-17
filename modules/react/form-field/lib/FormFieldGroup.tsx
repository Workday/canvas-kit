import React from 'react';

import {createContainer, GrowthBehavior} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';

import {FormFieldGroupList} from './FormFieldGroupList';
import {FormFieldGroupInput} from './FormFieldGroupInput';
import {FormFieldGroupLabel} from './FormFieldGroupLabel';
import {FormField} from './FormField';

import {useFormFieldModel} from './hooks';
import {formFieldStencil} from './formFieldStencil';

//TODO: Remove `horizontal` option in v13 and the console warn message.
export interface FormFieldGroupProps extends FlexProps, GrowthBehavior {
  /**
   * The direction the child elements should stack. In v13, `horizontal` will be removed. Please use `horizontalStart` or `horizontalEnd` for horizontal alignment.
   * @default vertical
   */
  orientation?: 'vertical' | 'horizontalStart' | 'horizontalEnd';
  children: React.ReactNode;
}

/**
 * Use `FormFieldGroup` to wrap a group of inputs to make them accessible.
 *
 * ```tsx
 * <FormFieldGroup>
 *    <FormFieldGroup.Label>Choose a Pet</FormFieldGroup.Label>
 *    <FormFiledGroup.Field>
 *      <FormFieldGroup.List as={RadioGroup} />
 *        <FromFieldGroup.Input as={RadioGroup.RadioButton} value='dog'>Dog</FormFieldGroup.Input>
 *        <FromFieldGroup.Input as={RadioGroup.RadioButton} value='cat'>Cat</FormFieldGroup.Input>
 *      </FormFieldGroup.List>
 *    </FormFieldGroup.Field>
 * </FormFieldGroup>
 * ```
 *
 * @stencil formFieldStencil
 */
export const FormFieldGroup = createContainer('div')({
  displayName: 'FormFieldGroup',
  modelHook: useFormFieldModel,
  subComponents: {
    /**
     * `FormFieldGroup.Input` will render any `inputs` passed to it via the `as` prop. Use this component with checkboxes or radio inputs.
     * `FormFieldGroup.Input` will apply `aria-invalid` when there is an error on `FromFieldGroup` or `aria-describedby` when an `id` is added on the `FormFieldGroup`.
     *
     * **Note: If you pass in a custom input that is *not* as Canvas Kit input, you will have to handle the `error` prop, validation and styling. For a custom approach, reference our Custom storybook example.**
     *
     * ```tsx
     * <FormFieldGroup>
     *    <FormField.Label>Choose a Pet</FormField.Label>
     *    <FormFieldGroup.List as={RadioGroup} />
     *      <FromFieldGroup.Input as={RadioGroup.RadioButton} value='dog'>Dog</FormFieldGroup.Input>
     *      <FromFieldGroup.Input as={RadioGroup.RadioButton} value='cat'>Cat</FormFieldGroup.Input>
     *    </FormFieldGroup.List>
     * </FormFieldGroup>
     * ```
     */
    Input: FormFieldGroupInput,
    /**
     * `FormFieldGroup.Label` this element labels the contents of the group of inputs..
     *
     * ```tsx
     * <FormFieldGroup>
     *    <FormFieldGroup.Label>Choose a pet</FormFieldGroup.Label>
     *    //...
     *  </FormFieldGroup>
     * ```
     *
     * @stencil formFieldLabelStencil
     */
    Label: FormFieldGroupLabel,
    /**
     * `FormFieldGroup.List` will render a `div`. This element is used to apply the visual error states around the group of inputs. It's contents will be your inputs.
     */
    List: FormFieldGroupList,
    /**
     * `FormFieldGroup.Hint` will render any additional information you want to provide to the `FormFieldGroup`.
     *
     * ```tsx
     * <FormFieldGroup>
     *    <FormFieldGroup.Label>Choose a pet</FormFieldGroup.Label>
     *    <FormFieldGroup.List>
     *      //...
     *    <FormFieldGroup.List>
     *    <FormField.Hint>This is your hint text</FormField.Hint>
     *  </FormFieldGroup>
     * ```
     *
     * @stencil formFieldHintStencil
     */
    Hint: FormField.Hint,
    /**
     * `FormFieldGroup.Field` allows you to properly align the legend to the group of inputs.
     *
     * ```tsx
     * <FormFieldGroup orientation="horizontalStart">
     *    <FormFieldGroup.Label>Choose a pet</FormFieldGroup.Label>
     *    <FormFieldGroup.Field>
     *      <FormFieldGroup.List>
     *        <FromFieldGroup.Input as={RadioGroup.RadioButton} value='dog'>Dog</FormFieldGroup.Input>
     *        <FromFieldGroup.Input as={RadioGroup.RadioButton} value='cat'>Cat</FormFieldGroup.Input>
     *      </FormFieldGroup.List>
     *      <FormFieldGroup.Hint>This is your hint text</FormField.Hint>
     *    </FormFieldGroup.Field>
     *  </FormFieldGroup>
     * ```
     *
     */
    Field: FormField.Field,
  },
})<FormFieldGroupProps>(({children, grow, orientation, ...elemProps}, Element, model) => {
  return (
    <Element
      aria-labelledby={`label-${model.state.id}`}
      role="group"
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

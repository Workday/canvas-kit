import React from 'react';

import {createContainer, GrowthBehavior} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';

import {FormFieldGroupList} from './FormFieldGroupList';
import {FormFieldGroupInput} from './FormFieldGroupInput';
import {FormField} from './FormField';

import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {useFormFieldModel} from './hooks';
import {formFieldStencil} from './formFieldStencil';

export const formFieldGroupStencil = createStencil({
  base: {
    display: 'flex',
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
    orientation: {
      horizontal: {
        flexDirection: 'row',
        gap: system.space.x8,
      },
      vertical: {
        flexDirection: 'column',
        gap: system.space.x1,
        alignItems: 'flex-start',
      },
    },
  },
  defaultModifiers: {
    orientation: 'vertical',
  },
});

export interface FormFieldGroupProps extends FlexProps, GrowthBehavior {
  /**
   * The direction the child elements should stack
   * @default vertical
   */
  orientation?: 'vertical' | 'horizontal';
  children: React.ReactNode;
}

/**
 * Use `FormFieldGroup` to wrap a group of inputs to make them accessible. `FormFieldGroup` will render a `fieldset` element with the purpose of grouping input controls.
 *
 * ```tsx
 * <FormFieldGroup>
 *    <FormField.Legend>Choose a Pet</FormField.Label>
 *    <FormFieldGroup.List as={RadioGroup} />
 *      <FromFieldGroup.Input as={RadioGroup.RadioButton} value='dog'>Dog</FormFieldGroup.Input>
 *      <FromFieldGroup.Input as={RadioGroup.RadioButton} value='cat'>Cat</FormFieldGroup.Input>
 *    </FormFieldGroup.List>
 * </FormFieldGroup>
 * ```
 *
 * @stencil formFieldStencil
 */
export const FormFieldGroup = createContainer('fieldset')({
  displayName: 'FormFieldGroup',
  modelHook: useFormFieldModel,
  subComponents: {
    /**
     * `FormFieldGroup.Input` will render any `inputs` passed to it via the `as` prop, including `TextInput`, `Select`, `Switch`, `TextArea`, `RadioGroup.RadioButton` or any custom input.
     * `FormFieldGroup.Input` will apply `aria-invalid` when there is an error on `FromFieldGroup` or `aria-describedby` when an `id` is added on the `FormFieldGroup`.
     *
     * **Note: If you pass in a custom input that is *not* as Canvas Kit input, you will have to handle the `error` prop, validation and styling. For a custom approach, reference our Custom storybook example.**
     *
     * ```tsx
     * <FormFieldGroup>
     *    <FormField.Legend>Choose a Pet</FormField.Label>
     *    <FormFieldGroup.List as={RadioGroup} />
     *      <FromFieldGroup.Input as={RadioGroup.RadioButton} value='dog'>Dog</FormFieldGroup.Input>
     *      <FromFieldGroup.Input as={RadioGroup.RadioButton} value='cat'>Cat</FormFieldGroup.Input>
     *    </FormFieldGroup.List>
     * </FormFieldGroup>
     * ```
     */
    Input: FormFieldGroupInput,
    /**
     * `FormFieldGroup.Legend` will render a `legend` element. This element labels the contents of a `fieldset`.
     *
     * ```tsx
     * <FormFieldGroup>
     *    <FormFieldGroup.Legend>Choose a pet</FormFieldGroup.Legend>
     *    //...
     *  </FormFieldGroup>
     * ```
     *
     * @stencil formFieldLabelStencil
     */
    Legend: FormField.Label.as('legend'),
    /**
     * `FormFieldGroup.List` will render a `div`. This element is used to apply the visual error states around the group of inputs. It's contents will be your inputs.
     */
    List: FormFieldGroupList,
    /**
     * `FormFieldGroup.Hint` will render any additional information you want to provide to the `FormFieldGroup`. If you
     * set the `orientation` prop to `horizontal` you should use `FormFieldGroup.Container` to properly align the hint with your `FormField.List`.
     *
     * ```tsx
     * <FormFieldGroup>
     *    <FormFieldGroup.Legend>Choose a pet</FormFieldGroup.Legend>
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
     * `FormFieldGroup.Container` allows you to properly center `FormField.Legend` when the `orientation` is set to `horizontal` and there is hint text..
     *
     * ```tsx
     * <FormFieldGroup orientation="horizontal">
     *    <FormFieldGroup.Legend>Choose a pet</FormFieldGroup.Legend>
     *    <FormFieldGroup.Container>
     *      <FormFieldGroup.List>
     *        <FromFieldGroup.Input as={RadioGroup.RadioButton} value='dog'>Dog</FormFieldGroup.Input>
     *        <FromFieldGroup.Input as={RadioGroup.RadioButton} value='cat'>Cat</FormFieldGroup.Input>
     *      </FormFieldGroup.List>
     *      <FormFieldGroup.Hint>This is your hint text</FormField.Hint>
     *    </FormFieldGroup.Container>
     *  </FormFieldGroup>
     * ```
     *
     * @stencil formFieldContainerStencil
     */
    Container: FormField.Container,
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

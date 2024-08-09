import React from 'react';

import {createContainer, GrowthBehavior} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';

import {FormFieldGroupList} from './FormFieldGroupList';
import {FormFieldGroupLegend} from './FormFieldGroupLegend';
import {FormFieldGroupInput} from './FormFieldGroupInput';
import {useFormFieldGroupModel} from './hooks/useFormFieldGroupModel';
import {FormFieldGroupHint} from './FormFieldGroupHint';
import {FormField} from './FormField';

import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
  modelHook: useFormFieldGroupModel,
  subComponents: {
    Input: FormFieldGroupInput,
    Legend: FormFieldGroupLegend,
    List: FormFieldGroupList,
    Hint: FormFieldGroupHint,
    Container: FormField.Container,
  },
})<FormFieldGroupProps>(({children, grow, orientation, ...elemProps}, Element, model) => {
  return (
    <Element
      {...mergeStyles(
        elemProps,
        formFieldGroupStencil({
          grow,
          orientation,
        })
      )}
    >
      {children}
    </Element>
  );
});

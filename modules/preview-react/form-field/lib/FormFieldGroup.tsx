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
 * Use `FormField` to wrap a group of inputs to make them accessible. You can customize the field
 *
 * ```tsx
 * <FormFieldGroup>
 *    <FormField.Legend>Choose a Pet</FormField.Label>
 *    <FormField.List as={RadioGroup} />
 *      <FromField.Group
 *    </FormField.List>
 *  </FormField>
 * ```
 *
 * @stencil formFieldStencil
 */
export const FormFieldGroup = createContainer('fieldset')({
  displayName: 'FormFieldGroup',
  modelHook: useFormFieldModel,
  subComponents: {
    Input: FormFieldGroupInput,
    Legend: FormField.Label.as('legend'),
    List: FormFieldGroupList,
    Hint: FormField.Hint,
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
        })
      )}
    >
      {children}
    </Element>
  );
});

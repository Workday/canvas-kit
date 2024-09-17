import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {createStencil, parentModifier, px2rem} from '@workday/canvas-kit-styling';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {brand, system} from '@workday/canvas-tokens-web';

import {useFormFieldLabel, useFormFieldModel} from './hooks';
import {formFieldStencil} from './formFieldStencil';

export interface FormFieldLabelProps
  extends FlexProps,
    Omit<ExtractProps<typeof Text, never>, 'display'> {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
}

export const formFieldGroupLabelStencil = createStencil({
  extends: textStencil,
  // @ts-ignore Still weird about CSS variables
  base: {
    fontWeight: system.fontWeight.medium,
    color: system.color.text.default,
    paddingInlineStart: system.space.zero,
    display: 'flex',
    alignItems: 'center',
    minWidth: px2rem(180),

    // asterisk
    [parentModifier(formFieldStencil.modifiers.required.true)]: {
      '&::after': {
        content: '"*"',
        fontSize: system.fontSize.body.large,
        fontWeight: system.fontWeight.normal,
        color: brand.error.base,
        textDecoration: 'unset',
        marginInlineStart: system.space.x1,
      },
    },

    // orientation modifier from parent FormField
    [parentModifier(formFieldStencil.modifiers.orientation.horizontalStart)]: {
      justifyContent: 'flex-start',
      float: 'left',
      maxHeight: system.space.x10,
    },
    // orientation modifier from parent FormField
    [parentModifier(formFieldStencil.modifiers.orientation.horizontalEnd)]: {
      maxHeight: system.space.x10,
      float: 'left',
      justifyContent: 'flex-end',
    },
    [parentModifier(formFieldStencil.modifiers.orientation.vertical)]: {
      width: '100%',
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.large',
  },
});

export const FormFieldGroupLabel = createSubcomponent('div')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({children, typeLevel, variant, ...elemProps}, Element, model) => {
  return (
    <Element
      id={model.state.id}
      {...mergeStyles(elemProps, formFieldGroupLabelStencil({typeLevel, variant}))}
    >
      {children}
    </Element>
  );
});

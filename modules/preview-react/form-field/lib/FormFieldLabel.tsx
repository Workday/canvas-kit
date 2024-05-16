import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {useFormFieldLabel, useFormFieldModel} from './hooks';
import {createStencil, parentModifier, px2rem} from '@workday/canvas-kit-styling';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {brand, system} from '@workday/canvas-tokens-web';
import {formFieldStencil} from './formFieldStencil';

export interface FormFieldLabelProps extends FlexProps {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
}

export const formFieldLabelStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    fontWeight: system.fontWeight.medium,
    color: system.color.text.default,
    paddingInlineStart: system.space.zero,
    marginBottom: system.space.x1,
    display: 'flex',
    alignItems: 'center',
    minWidth: px2rem(180),

    // @ts-ignore The nested selectors don't like CSS variables yet
    '& :where([data-element=asterisk])': {
      display: 'none',
      fontSize: system.fontSize.body.large,
      fontWeight: system.fontWeight.normal,
      color: brand.error.base,
      textDecoration: 'unset',
      marginInlineStart: system.space.x1,
    },

    // asterisk element
    [parentModifier(formFieldStencil.modifiers.required.true)]: {
      display: 'inline',
    },

    // orientation modifier from parent FormField
    [parentModifier(formFieldStencil.modifiers.orientation.horizontal)]: {
      float: 'left',
      maxHeight: system.space.x10,
    },
    [parentModifier(formFieldStencil.modifiers.orientation.vertical)]: {
      width: '100%',
    },
  },
});

export const FormFieldLabel = createSubcomponent('label')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({children, ...elemProps}, Element) => {
  return (
    <Element {...mergeStyles(elemProps, formFieldLabelStencil())}>
      {children}
      <span data-element="asterisk" aria-hidden="true">
        *
      </span>
    </Element>
  );
});

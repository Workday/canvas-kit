import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {useFormFieldLabel, useFormFieldModel} from './hooks';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {brand, system} from '@workday/canvas-tokens-web';

export interface FormFieldLabelProps {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
  /**
   * Will style the text as disabled
   */
  disabled?: boolean;
  /**
   * Changes the color of the text
   */
  variant?: 'error' | 'hint' | 'inverse';
}

const formFieldLabelAsteriskStencil = createStencil({
  base: {
    fontSize: system.fontSize.body.large,
    fontWeight: system.fontWeight.normal,
    color: brand.error.base,
    textDecoration: 'unset',
    marginInlineStart: system.space.x1,
  },
});

const formFieldLabelStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    fontWeight: system.fontWeight.medium,
    color: system.color.text.default,
    paddingInlineStart: system.space.zero,
    marginBottom: system.space.x1,
    display: 'flex',
    alignItems: 'center',
    minWidth: px2rem(180),
  },
  modifiers: {
    orientation: {
      horizontal: {
        float: 'left',
        maxHeight: system.space.x10,
      },
      vertical: {
        width: '100%',
      },
    },
    variant: {
      error: {
        color: system.color.text.critical.default,
      },
      hint: {
        color: system.color.text.hint,
      },
      inverse: {
        color: system.color.text.inverse,
      },
    },
    disabled: {
      true: {
        cursor: 'default',
        color: system.color.text.disabled,
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', disabled: true},
      styles: {
        opacity: system.opacity.disabled,
        color: system.color.text.inverse,
      },
    },
  ],
});

export const FormFieldLabel = createSubcomponent('label')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({children, disabled, variant, ...elemProps}, Element, model) => {
  return (
    <Element
      {...mergeStyles(elemProps, [
        formFieldLabelStencil({orientation: model.state.orientation, disabled, variant}),
      ])}
    >
      {children}
      {model.state.isRequired && (
        <span aria-hidden="true" {...formFieldLabelAsteriskStencil()}>
          *
        </span>
      )}
    </Element>
  );
});

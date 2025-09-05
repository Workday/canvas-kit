import React from 'react';

import {createSubcomponent, ExtractProps, accessibleHide} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {brand, system} from '@workday/canvas-tokens-web';

import {useFormFieldLabel, useFormFieldModel} from './hooks';

export interface FormFieldLabelProps
  extends FlexProps,
    Omit<ExtractProps<typeof Text, never>, 'display'> {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
  /**
   * When true, will apply `accessibleHide` to the label. This is useful in cases where you still need accessibility but don't want to show the label, like a search input.
   */
  isHidden?: boolean;
}

export const formFieldLabelStencil = createStencil({
  extends: textStencil,
  base: {
    fontWeight: system.fontWeight.medium,
    color: system.color.text.default,
    paddingInlineStart: system.space.zero,
    display: 'flex',
    alignItems: 'center',
    minWidth: px2rem(180),
  },
  modifiers: {
    isRequired: {
      true: {
        '&::after': {
          content: '"*"',
          fontSize: system.fontSize.body.large,
          fontWeight: system.fontWeight.normal,
          color: brand.error.base,
          textDecoration: 'unset',
          marginInlineStart: system.space.x1,
        },
      },
    },
    orientation: {
      horizontalStart: {
        justifyContent: 'flex-start',
        float: 'left',
        maxHeight: system.space.x10,
      },
      horizontalEnd: {
        maxHeight: system.space.x10,
        float: 'left',
        justifyContent: 'flex-end',
      },
      vertical: {
        width: '100%',
      },
    },
    isHidden: {
      true: {
        ...accessibleHide,
      },
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.large',
  },
});

export const FormFieldLabel = createSubcomponent('label')({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(
  ({children, typeLevel, variant, isHidden, ...elemProps}, Element, model) => {
    return (
      <Element
        {...mergeStyles(
          elemProps,
          formFieldLabelStencil({
            typeLevel,
            variant,
            isHidden: isHidden ? 'true' : undefined,
            isRequired: model.state.isRequired as any,
            orientation: model.state.orientation,
          })
        )}
      >
        {children}
      </Element>
    );
  }
);

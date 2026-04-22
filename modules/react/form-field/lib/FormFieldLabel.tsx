import React from 'react';

import {ExtractProps, accessibleHide, createSubcomponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
    color: system.color.fg.default,
    paddingInlineStart: 0,
    display: 'flex',
    alignItems: 'center',
    minWidth: px2rem(180),
  },
  modifiers: {
    isRequired: {
      true: {
        '&::after': {
          content: '"*"',
          fontSize: system.fontSize.body.lg,
          fontWeight: system.fontWeight.normal,
          color: system.color.brand.fg.critical.default,
          textDecoration: 'unset',
          marginInlineStart: system.gap.xs,
        },
      },
    },
    orientation: {
      horizontalStart: {
        justifyContent: 'flex-start',
        float: 'left',
        maxHeight: system.size.md,
      },
      horizontalEnd: {
        maxHeight: system.size.md,
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

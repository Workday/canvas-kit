import React from 'react';

import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useFormFieldModel} from './hooks';

export interface FormFieldGroupLabelProps
  extends FlexProps,
    Omit<ExtractProps<typeof Text, never>, 'display'> {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
}

export const formFieldGroupLabelStencil = createStencil({
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
      vertical: {
        width: '100%',
      },
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
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.large',
  },
});

export const FormFieldGroupLabel = createSubcomponent('div')({
  displayName: 'FormFieldGroup.Label',
  modelHook: useFormFieldModel,
})<FormFieldGroupLabelProps>(({children, typeLevel, variant, ...elemProps}, Element, model) => {
  return (
    <Element
      id={`label-${model.state.id}`}
      {...mergeStyles(
        elemProps,
        formFieldGroupLabelStencil({
          typeLevel,
          variant,
          isRequired: model.state.isRequired as any,
          orientation: model.state.orientation,
        })
      )}
    >
      {children}
    </Element>
  );
});

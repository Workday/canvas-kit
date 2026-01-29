import React from 'react';

import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    color: cssVar(system.color.fg.default, system.color.text.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    paddingInlineStart: cssVar(system.padding.none, system.space.zero),
    display: 'flex',
    alignItems: 'center',
  },
  modifiers: {
    isRequired: {
      true: {
        '&::after': {
          content: '"*"',
          fontSize: system.fontSize.body.large,
          fontWeight: system.fontWeight.normal,
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          color: cssVar(system.color.brand.fg.critical.default, brand.error.base),
          textDecoration: 'unset',
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          marginInlineStart: cssVar(system.padding.xxs, system.space.x1),
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
        maxHeight: system.space.x10,
      },
      horizontalEnd: {
        maxHeight: system.space.x10,
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

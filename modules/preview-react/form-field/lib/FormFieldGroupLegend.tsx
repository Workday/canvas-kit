import React from 'react';

import {
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, parentModifier, px2rem} from '@workday/canvas-kit-styling';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {FlexProps} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

import {useFormFieldGroupModel} from './hooks/useFormFieldGroupModel';
import {formFieldGroupStencil} from './FormFieldGroup';

export interface FormFieldLabelProps
  extends FlexProps,
    Omit<ExtractProps<typeof Text, never>, 'display'> {
  /**
   * The text of the legend.
   */
  children: React.ReactNode;
}

export const formFieldGroupLegendStencil = createStencil({
  extends: textStencil,
  // @ts-ignore Still weird about CSS variables
  base: {
    fontWeight: system.fontWeight.medium,
    color: system.color.text.default,
    paddingInlineStart: system.space.zero,
    marginBottom: system.space.x1,
    display: 'flex',
    alignItems: 'center',
    minWidth: px2rem(180),

    // orientation modifier from parent FormFieldGroup
    [parentModifier(formFieldGroupStencil.modifiers.orientation.horizontal)]: {
      float: 'left',
      maxHeight: system.space.x10,
    },
    [parentModifier(formFieldGroupStencil.modifiers.orientation.vertical)]: {
      width: '100%',
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.large',
  },
});

export const useFormFieldGroupLegend = createElemPropsHook(useFormFieldGroupModel)(({state}) => {
  return {
    htmlFor: `input-${state.id}`,
  };
});

export const FormFieldGroupLegend = createSubcomponent('legend')({
  displayName: 'FormFieldGroup.Legend',
  modelHook: useFormFieldGroupModel,
  elemPropsHook: useFormFieldGroupLegend,
})<FormFieldLabelProps>(({children, typeLevel, variant, ...elemProps}, Element) => {
  return (
    <Element {...handleCsProp(elemProps, formFieldGroupLegendStencil({typeLevel, variant}))}>
      {children}
    </Element>
  );
});

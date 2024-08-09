import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {system, brand} from '@workday/canvas-tokens-web';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {Text, textStencil} from '@workday/canvas-kit-react/text';

import {useFormFieldHint} from './hooks';

import {useFormFieldGroupModel} from './hooks/useFormFieldGroupModel';

export const formFieldGroupHintStencil = createStencil({
  extends: textStencil,
  base: {
    margin: `${system.space.x2} ${system.space.zero} ${system.space.zero}`,
  },
  modifiers: {
    error: {
      error: {
        color: brand.error.base,
      },
      alert: {},
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.medium',
  },
});

export const FormFieldGroupHint = createSubcomponent('p')({
  displayName: 'FormField.Hint',
  modelHook: useFormFieldGroupModel,
  elemPropsHook: useFormFieldHint,
})<ExtractProps<typeof Text, never>>(
  ({children, typeLevel, variant, ...elemProps}, Element, model) => {
    if (!children) {
      // If there is no hint text just skip rendering
      return null;
    }

    return (
      <Element
        {...handleCsProp(
          elemProps,
          formFieldGroupHintStencil({typeLevel, variant, error: model.state.error})
        )}
      >
        {children}
      </Element>
    );
  }
);

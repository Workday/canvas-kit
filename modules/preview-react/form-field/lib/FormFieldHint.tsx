import React from 'react';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {system, brand} from '@workday/canvas-tokens-web';
import {createStencil} from '@workday/canvas-kit-styling';

import {useFormFieldHint, useFormFieldModel} from './hooks';
import {Subtext} from '@workday/canvas-kit-react/text';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

const formFieldHintStencil = createStencil({
  base: {
    margin: `${system.space.x2} 0 0`,
  },
  modifiers: {
    error: {
      error: {
        color: brand.error.base,
      },
      alert: {},
    },
  },
});

export const FormFieldHint = createSubcomponent('p')({
  displayName: 'FormField.Hint',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldHint,
})<Omit<ExtractProps<typeof Subtext, never>, 'size'>>(
  ({children, ...elemProps}, Element, model) => {
    console.log(formFieldHintStencil);
    if (!children) {
      // If there is no hint text just skip rendering
      return null;
    }

    return (
      <Subtext
        as={Element}
        size="medium"
        {...mergeStyles(elemProps, formFieldHintStencil({error: model.state.error}))}
      >
        {children}
      </Subtext>
    );
  }
);

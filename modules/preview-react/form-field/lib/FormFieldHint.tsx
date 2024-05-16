import React from 'react';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {system, brand} from '@workday/canvas-tokens-web';
import {createStencil, handleCsProp, parentModifier} from '@workday/canvas-kit-styling';

import {useFormFieldHint, useFormFieldModel} from './hooks';
import {Subtext} from '@workday/canvas-kit-react/text';
import {formFieldStencil} from './formFieldStencil';

export const formFieldHintStencil = createStencil({
  base: {
    margin: `${system.space.x2} ${system.space.zero} ${system.space.zero}`,

    [parentModifier(formFieldStencil.modifiers.error.error)]: {
      color: brand.error.base,
    },
  },
});

export const FormFieldHint = createSubcomponent('p')({
  displayName: 'FormField.Hint',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldHint,
})<Omit<ExtractProps<typeof Subtext, never>, 'size'>>(({children, ...elemProps}, Element) => {
  if (!children) {
    // If there is no hint text just skip rendering
    return null;
  }

  return (
    <Subtext as={Element} size="medium" {...handleCsProp(elemProps, formFieldHintStencil())}>
      {children}
    </Subtext>
  );
});

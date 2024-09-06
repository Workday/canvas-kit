import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil, parentModifier} from '@workday/canvas-kit-styling';

import {useFormFieldModel} from './hooks';
import {formFieldStencil} from './formFieldStencil';

export const formFieldFieldStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    // [parentModifier(formFieldStencil.modifiers.orientation.horizontal)]: {
    //   flexDirection:
    // },
  },
});

export const FormFieldField = createSubcomponent('div')({
  displayName: 'FormField.Field',
  modelHook: useFormFieldModel,
})<CSProps>((elemProps, Element, model) => {
  return (
    <Element
      data-width="ck-formfield-width"
      {...handleCsProp(elemProps, formFieldFieldStencil())}
    />
  );
});

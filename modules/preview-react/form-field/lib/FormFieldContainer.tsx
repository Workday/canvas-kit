import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil} from '@workday/canvas-kit-styling';

import {useFormFieldModel} from './hooks';

export const formFieldContainerStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const FormFieldContainer = createSubcomponent('div')({
  displayName: 'FormField.Container',
  modelHook: useFormFieldModel,
})<CSProps>((elemProps, Element, model) => {
  return (
    <Element
      data-width="ck-formfield-width"
      {...handleCsProp(elemProps, formFieldContainerStencil())}
    />
  );
});

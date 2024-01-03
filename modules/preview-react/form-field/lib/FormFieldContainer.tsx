import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil} from '@workday/canvas-kit-styling';

import {useFormFieldModel} from './hooks';

const containerBaseStyles = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  modifiers: {
    grow: {
      true: {
        width: '100%',
      },
    },
  },
});

export const FormFieldContainer = createSubcomponent('div')({
  displayName: 'FormField.Container',
  modelHook: useFormFieldModel,
})<CSProps>((elemProps, Element, model) => {
  return <Element {...handleCsProp(elemProps, [containerBaseStyles({grow: model.state.grow})])} />;
});

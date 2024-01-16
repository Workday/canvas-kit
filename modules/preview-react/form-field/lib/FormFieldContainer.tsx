import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, createStyles, CSProps} from '@workday/canvas-kit-styling';

import {useFormFieldModel} from './hooks';

const containerBaseStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
});

export const FormFieldContainer = createSubcomponent('div')({
  displayName: 'FormField.Container',
  modelHook: useFormFieldModel,
})<CSProps>((elemProps, Element) => {
  return <Element {...handleCsProp(elemProps, [containerBaseStyles])} />;
});

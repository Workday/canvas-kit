import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useFormFieldModel} from './hooks';

export const formFieldFieldStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: cssVar(system.gap.sm, system.space.x2),
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

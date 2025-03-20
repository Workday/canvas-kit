import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil} from '@workday/canvas-kit-styling';

import {useFormFieldModel} from './hooks';
import {system} from '@workday/canvas-tokens-web';

export const formFieldFieldStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x2,
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

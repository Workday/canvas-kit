import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil} from '@workday/canvas-kit-styling';

import {useFormFieldModel} from './hooks';
import {system} from '@workday/canvas-tokens-web';

/**
 * @deprecated `formFieldContainerStencil` is deprecated and will be removed in a future major version. Please use `FormField.Field` to always wrap `FormField.Input` and `FormField.Hint` to always ensure correct label and input alignment.
 */
export const formFieldContainerStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x2,
  },
});

/**
 * @deprecated `FormField.Container` is deprecated and will be removed in a future major version. Please use `FormField.Field` to always wrap `FormField.Input` and `FormField.Hint` to always ensure correct label and input alignment.
 */
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

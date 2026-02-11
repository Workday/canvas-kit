import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useFormFieldModel} from './hooks';

/**
 * @deprecated `formFieldContainerStencil` is deprecated and will be removed in a future major version. Please use `FormField.Field` to always wrap `FormField.Input` and `FormField.Hint` to always ensure correct label and input alignment.
 */
export const formFieldContainerStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.sm, system.space.x2),
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

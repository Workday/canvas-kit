import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {FlexProps} from '@workday/canvas-kit-react/layout';
import {
  CSProps,
  calc,
  createStencil,
  handleCsProp,
  px2rem,
  withCornerShape,
} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useFormFieldModel} from './hooks';

export interface FormFieldGroupListProps extends CSProps, FlexProps {}

const formFieldGroupListStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    ...withCornerShape(system.legacy.shape.md),
    gap: system.legacy.gap.sm,
    padding: `${px2rem(10)} ${base.legacy.size150} ${system.legacy.padding.xs}`,
    margin: `0 ${calc.negate(base.legacy.size150)}`,
    transition: '100ms box-shadow',
    width: 'fit-content',
  },
  modifiers: {
    error: {
      error: {
        backgroundColor: system.legacy.color.brand.surface.critical.default,
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${system.legacy.color.brand.border.critical}`,
      },
      caution: {
        backgroundColor: system.legacy.color.brand.surface.caution.default,
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${system.legacy.color.brand.border.caution}, inset 0 0 0 ${px2rem(3)} ${system.legacy.color.brand.focus.caution.inner}`,
      },
    },
  },
});

export const FormFieldGroupList = createSubcomponent('div')({
  displayName: 'FormFieldGroup.List',
  modelHook: useFormFieldModel,
})<FormFieldGroupListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      data-width="ck-formfield-width"
      {...handleCsProp(elemProps, formFieldGroupListStencil({error: model.state.error}))}
    >
      {children}
    </Element>
  );
});

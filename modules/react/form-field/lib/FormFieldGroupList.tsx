import {cornerShapeStencil, createSubcomponent} from '@workday/canvas-kit-react/common';
import {FlexProps} from '@workday/canvas-kit-react/layout';
import {CSProps, calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useFormFieldModel} from './hooks';

export interface FormFieldGroupListProps extends CSProps, FlexProps {}

const formFieldGroupListStencil = createStencil({
  extends: cornerShapeStencil,
  base: {
    [cornerShapeStencil.vars.shape]: system.legacy.shape.lg,
    display: 'flex',
    flexDirection: 'column',
    gap: system.legacy.gap.sm,
    padding: `${system.legacy.padding.xs} ${system.legacy.padding.sm}`,
    margin: `0 ${calc.negate(base.legacy.size150)}`,
    transition: '100ms box-shadow',
    width: 'fit-content',
  },
  modifiers: {
    error: {
      error: {
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${system.legacy.color.brand.border.critical}`,
        '@media (forced-colors: active)': {
          outline: `solid ${px2rem(2)} ButtonBorder`,
        },
      },
      caution: {
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${system.legacy.color.brand.border.caution}, inset 0 0 0 ${px2rem(3)} ${system.legacy.color.brand.focus.caution.inner}`,
        '@media (forced-colors: active)': {
          outline: `solid ${px2rem(2)} ButtonBorder`,
        },
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

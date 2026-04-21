import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {FlexProps} from '@workday/canvas-kit-react/layout';
import {
  CSProps,
  calc,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {useFormFieldModel} from './hooks';

export interface FormFieldGroupListProps extends CSProps, FlexProps {}

const formFieldGroupListStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: system.shape.md,
    gap: system.gap.sm,
    padding: `${px2rem(10)} ${cssVar(base.size150, system.space.x3)} ${system.padding.xs}`,
    margin: `0 ${calc.negate(cssVar(base.size150, system.space.x3))}`,
    transition: '100ms box-shadow',
    width: 'fit-content',
  },
  modifiers: {
    error: {
      error: {
        backgroundColor: cssVar(system.color.brand.surface.critical.default, brand.error.lightest),
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.border.critical, brand.common.errorInner)}`,
      },
      caution: {
        backgroundColor: cssVar(system.color.brand.surface.caution.default, brand.alert.lightest),
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${cssVar(system.color.brand.border.caution, brand.common.alertOuter)}, inset 0 0 0 ${px2rem(3)} ${cssVar(
          system.color.brand.focus.caution.inner,
          brand.common.alertInner
        )}`,
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

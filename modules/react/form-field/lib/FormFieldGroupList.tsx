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
import {brand, system} from '@workday/canvas-tokens-web';

import {useFormFieldModel} from './hooks';

export interface FormFieldGroupListProps extends CSProps, FlexProps {}

const formFieldGroupListStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.md, system.shape.x1Half),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.sm, system.space.x2),
    padding: `${px2rem(10)} ${system.space.x3} ${system.space.x2}`,
    margin: `0 ${calc.negate(system.space.x3)}`,
    transition: '100ms box-shadow',
    width: 'fit-content',
  },
  modifiers: {
    error: {
      error: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.surface.critical.default, brand.error.lightest),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.border.critical, brand.common.errorInner)}`,
      },
      caution: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.surface.caution.default, brand.alert.lightest),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
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

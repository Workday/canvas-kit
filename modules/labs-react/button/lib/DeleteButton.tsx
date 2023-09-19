import * as React from 'react';

import {BaseButton, buttonVars, BaseButtonContainerProps} from './BaseButton';
import {createComponent, cs, cssVar} from '@workday/canvas-kit-react/common';
import {base, brand, system} from '@workday/canvas-tokens-web';

export type DeleteButtonVariant = 'primary' | 'inverse';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface DeleteButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {}

const deleteStyles = cs({
  [buttonVars.default.background]: cssVar(brand.error.base),
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
  [buttonVars.default.color]: cssVar(brand.error.accent),
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(brand.error.dark),
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.color]: cssVar(brand.error.accent),
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: cssVar(brand.error.base),
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.color]: cssVar(brand.error.accent),
    [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100),
    [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline),
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(brand.error.darkest),
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.color]: cssVar(brand.error.accent),
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: cssVar(brand.error.light),
    [buttonVars.disabled.color]: cssVar(brand.error.accent),
    opacity: 1,
  },
});

export const DeleteButton = createComponent('button')({
  displayName: 'DeleteButton',
  Component: ({children, colors, size, ...elemProps}: DeleteButtonProps, ref, Element) => {
    return (
      <BaseButton
        as={Element}
        ref={ref}
        type="button"
        size={size}
        cs={[deleteStyles]}
        {...elemProps}
      >
        {children}
      </BaseButton>
    );
  },
});

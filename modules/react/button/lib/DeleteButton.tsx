import * as React from 'react';

import {buttonVars, ButtonContainerProps} from './BaseButton';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';
import {Button} from './Button';

/**
 * Extends all the style properties from Box to our buttons as well as props from ButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface DeleteButtonProps extends Omit<ButtonContainerProps, 'ref'> {}

const deleteStyles = createStyles({
  [buttonVars.default.background]: cssVar(brand.error.base),
  [buttonVars.default.border]: 'transparent',
  [buttonVars.default.borderRadius]: cssVar(system.shape.circle),
  [buttonVars.default.label]: cssVar(brand.error.accent),
  '&:hover, &.hover': {
    [buttonVars.hover.background]: cssVar(brand.error.dark),
    [buttonVars.hover.border]: 'transparent',
    [buttonVars.hover.label]: cssVar(brand.error.accent),
  },
  '&:focus-visible, &.focus': {
    [buttonVars.focus.background]: cssVar(brand.error.base),
    [buttonVars.focus.border]: 'transparent',
    [buttonVars.focus.label]: cssVar(brand.error.accent),
    [buttonVars.focus.boxShadowInner]: cssVar(base.frenchVanilla100),
    [buttonVars.focus.boxShadowOuter]: cssVar(brand.common.focusOutline),
  },
  '&:active, &.active': {
    [buttonVars.active.background]: cssVar(brand.error.darkest),
    [buttonVars.active.border]: 'transparent',
    [buttonVars.active.label]: cssVar(brand.error.accent),
  },
  '&:disabled, &:active:disabled, &:focus:disabled, &:hover:disabled': {
    [buttonVars.disabled.background]: cssVar(brand.error.light),
    [buttonVars.disabled.label]: cssVar(brand.error.accent),
    opacity: 1,
  },
});

export const DeleteButton = createComponent('button')({
  displayName: 'DeleteButton',
  Component: ({children, colors, size, ...elemProps}: DeleteButtonProps, ref, Element) => {
    return (
      <Button as={Element} ref={ref} type="button" size={size} cs={[deleteStyles]} {...elemProps}>
        {children}
      </Button>
    );
  },
});

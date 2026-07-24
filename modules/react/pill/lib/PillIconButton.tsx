import {buttonStencil} from '@workday/canvas-kit-react/button';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {component, system} from '@workday/canvas-tokens-web';

import {usePillModel} from './usePillModel';

export interface PillIconButtonProps extends Partial<SystemIconProps> {
  /**
   * The aria label for the removable icon. You must provide a valid string to represent the action.
   */
  'aria-label'?: string;
}

export const pillIconButtonStencil = createStencil({
  extends: buttonStencil,
  base: {
    marginInlineEnd: calc.negate(px2rem(7)), // visually pull in the pill to the right size  by -7px
    marginInlineStart: 0, // leave room for the 24x24 focus ring
    [buttonStencil.vars.borderRadius]: system.legacy.shape.sm,
    height: system.legacy.size.xxxs,
    width: system.legacy.size.xxxs,
    padding: 0,
    overflow: 'visible',
    flex: '0 0 auto',
    [buttonStencil.vars.border]: system.color.border.transparent,
    [buttonStencil.vars.background]: system.legacy.color.surface.transparent,

    [systemIconStencil.vars.color]: system.color.fg.default,
    [systemIconStencil.vars.size]: component.legacy.systemIcon.size.xs,
    '::after': {
      content: '""',
      boxSizing: 'border-box',
      position: 'absolute',
      top: calc.negate(px2rem(5)),
      right: calc.negate(px2rem(5)),
      bottom: calc.negate(px2rem(5)),
      left: calc.negate(px2rem(5)),
      margin: 0,
      pointerEvents: 'all',
      borderRadius: system.legacy.shape.sm,
      borderStyle: 'solid',
      borderWidth: px2rem(2),
      borderColor: 'transparent',
    },

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      boxShadow: 'none',
      '::after': {
        borderColor: system.legacy.color.brand.border.primary,
      },
    },
    '&:hover, &.hover': {
      [buttonStencil.vars.border]: system.color.border.transparent,
    },
    '&:active, &.active': {
      [buttonStencil.vars.border]: system.color.border.transparent,
    },
    '&:disabled, &.disabled': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
  },
});

export const PillIconButton = createSubcomponent('button')({
  modelHook: usePillModel,
})<PillIconButtonProps>(
  ({size, icon, children, 'aria-label': ariaLabel = '', ...elemProps}, Element, model) => {
    return (
      <Element
        disabled={model.state.disabled}
        aria-labelledby={`removable-${model.state.id} label-${model.state.id}`}
        {...mergeStyles(elemProps, pillIconButtonStencil())}
      >
        <SystemIcon
          aria-label={ariaLabel}
          id={`removable-${model.state.id}`}
          icon={icon || xSmallIcon}
          aria-hidden // This works for Chrome but not needed in Safari
          role="img"
        />
      </Element>
    );
  }
);

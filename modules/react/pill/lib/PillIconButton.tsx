import {buttonStencil} from '@workday/canvas-kit-react/button';
import {createSubcomponent, focusRing} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

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
    marginInlineStart: calc.negate(px2rem(2)), // visually create space between label and the button by -2px
    borderRadius: px2rem(2),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.xxs, calc.add(system.space.x4, system.space.x1)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(system.size.xxs, calc.add(system.space.x4, system.space.x1)),
    padding: 0,
    overflow: 'visible',
    flex: '0 0 auto',
    [buttonStencil.vars.border]: system.color.border.transparent,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.background]: cssVar(
      system.color.surface.transparent,
      system.color.bg.alt.default
    ),
    [systemIconStencil.vars.color]: system.color.fg.strong,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.size]: cssVar(system.size.xs, system.space.x6),
    '::after': {
      content: '""',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      height: cssVar(system.size.sm, system.space.x8),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      width: cssVar(system.size.sm, system.space.x8),
      position: 'absolute',
      left: calc.negate(px2rem(7)),
      bottom: calc.negate(px2rem(7)),
      margin: 0,
      pointerEvents: 'all',
    },

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      ...focusRing({
        innerColor: system.color.border.transparent,
      }),
    },
    '&:hover, &.hover': {
      [buttonStencil.vars.border]: system.color.border.transparent,
    },
    '&:active, &.active': {
      [buttonStencil.vars.border]: system.color.border.transparent,
    },
    '&:disabled, &.disabled': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
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

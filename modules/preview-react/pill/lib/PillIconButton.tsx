import {focusRing, createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {buttonStencil} from '@workday/canvas-kit-react/button';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

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
    borderRadius: system.shape.half,
    height: calc.add(system.space.x4, system.space.x1),
    width: calc.add(system.space.x4, system.space.x1),
    padding: system.space.zero,
    overflow: 'visible',
    flex: '0 0 auto',
    [buttonStencil.vars.border]: system.color.border.transparent,
    [buttonStencil.vars.background]: system.color.bg.alt.default,
    [systemIconStencil.vars.color]: system.color.fg.strong,
    [systemIconStencil.vars.size]: system.space.x6,
    '::after': {
      content: '""',
      height: system.space.x8,
      width: system.space.x8,
      position: 'absolute',
      left: calc.negate(px2rem(7)),
      bottom: calc.negate(px2rem(7)),
      margin: system.space.zero,
      pointerEvents: 'all',
    },

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      [buttonStencil.vars.background]: system.color.bg.alt.default,
      ...focusRing({
        innerColor: system.color.border.transparent,
      }),
    },
    '&:hover, &.hover': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      [buttonStencil.vars.background]: system.color.bg.alt.strong,
    },
    '&:active, &.active': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      [buttonStencil.vars.background]: system.color.bg.alt.stronger,
    },
    '&:disabled, &.disabled': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      [buttonStencil.vars.background]: system.color.bg.alt.default,
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

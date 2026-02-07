import * as React from 'react';

import {
  TransformOrigin,
  createComponent,
  getTransformOrigin,
} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  calc,
  createStencil,
  createVars,
  cssVar,
  keyframes,
  px2rem,
} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export interface TooltipContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The origin from which the Tooltip will animate. Pass in `null` for no animation
   * @default {horizontal: 'center', vertical: 'top'}
   */
  transformOrigin?: TransformOrigin | null;
  /**
   * HTML id of the tooltip container - useful for accessibility.
   * Should link the tooltip container to a `aria-describedby` on the target
   */
  id?: string;
  /**
   * Whether the anchor element has focus-visible. Used to adjust tooltip styling.
   * @private
   */
  elementHasFocus?: boolean;
}

const defaultTransformOrigin = {
  vertical: 'bottom',
  horizontal: 'center',
} as const;

const tooltipTranslateVars = createVars('positionX', 'positionY');

/**
 * Keyframe for the Tooltip animation.
 */
const tooltipAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: `translate(${tooltipTranslateVars.positionX}, ${tooltipTranslateVars.positionY})`,
  },
  '100%': {
    opacity: 1,
    transform: 'translate(0)',
  },
});

export const tooltipContainerStencil = createStencil({
  vars: {
    tooltipTransformOriginHorizontal: '',
    tooltipTransformOriginVertical: '',
  },
  base: ({tooltipTransformOriginHorizontal, tooltipTransformOriginVertical}) => ({
    ...system.type.subtext.medium,
    display: 'inline-flex',
    position: 'relative',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token, padding token is not available in v4
    padding: cssVar(system.padding.sm, system.space.x3),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    color: cssVar(system.color.fg.inverse, system.color.text.inverse),
    animationName: tooltipAnimation,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${tooltipTransformOriginVertical} ${tooltipTransformOriginHorizontal}`,
    a: {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.inverse, system.color.text.inverse),
      textDecoration: 'underline',
    },
    // use :before vs margin to increase the tooltip hit-box
    '&:before': {
      content: '""',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderRadius: cssVar(system.shape.md, system.shape.x1),
      outline: `${px2rem(1)} solid transparent`,
      outlineOffset: `-${px2rem(1)}`,
      zIndex: -1,
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      margin: cssVar(system.padding.xxs, system.space.x1),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      backgroundColor: cssVar(system.color.surface.contrast.default, system.color.bg.translucent),
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      boxShadow: system.depth[2],
    },
    // Hide tooltip when the reference element is either clipped or fully hidden
    '[data-popper-reference-hidden] &': {
      visibility: 'hidden',
      pointerEvents: 'none',
    },

    // Fix offsets based on placement
    '[data-popper-placement="top-start"] &, [data-popper-placement="bottom-start"] &': {
      //TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      left: calc.negate(cssVar(base.size50, system.space.x1)),
    },
    '[data-popper-placement="top-end"] &, [data-popper-placement="bottom-end"] &': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      right: calc.negate(cssVar(base.size50, system.space.x1)),
    },
    '[data-popper-placement="left-start"] &, [data-popper-placement="right-start"] &': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      top: calc.negate(cssVar(base.size50, system.space.x1)),
    },
    '[data-popper-placement="left-end"] &, [data-popper-placement="right-end"] &': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      bottom: calc.negate(cssVar(base.size50, system.space.x1)),
    },
  }),
  modifiers: {
    elementHasFocus: {
      true: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        padding: calc.subtract(
          cssVar(system.padding.md, system.space.x4),
          calc.divide(cssVar(system.padding.xxs, system.space.x1), 2)
        ),
        '&:before': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token, margin token is not available in v4
          margin: calc.add(
            cssVar(system.padding.xxs, system.space.x1),
            calc.divide(cssVar(system.padding.xxs, system.space.x1), 2)
          ),
        },
      },
    },
  },
});

export const TooltipContainer = createComponent('div')<TooltipContainerProps>({
  displayName: 'TooltipContainer',
  Component: (
    {children, transformOrigin = defaultTransformOrigin, elementHasFocus = false, ...elemProps},
    ref,
    Element
  ) => {
    const translate = getTransformOrigin(
      transformOrigin || defaultTransformOrigin,
      cssVar(system.space.x2)
    );

    return (
      <Element
        ref={ref}
        {...mergeStyles(elemProps, [
          tooltipContainerStencil({
            tooltipTransformOriginHorizontal: transformOrigin?.horizontal,
            tooltipTransformOriginVertical: transformOrigin?.vertical,
            elementHasFocus,
          }),
          tooltipTranslateVars({positionX: translate.x, positionY: translate.y}),
        ])}
      >
        {children}
      </Element>
    );
  },
});

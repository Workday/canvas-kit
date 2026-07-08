import * as React from 'react';

import {
  TransformOrigin,
  createComponent,
  getTransformOrigin,
} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, createVars, keyframes, px2rem} from '@workday/canvas-kit-styling';
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
    ...system.legacy.type.subtext.lg,
    display: 'inline-flex',
    position: 'relative',
    padding: `${px2rem(6)} ${system.legacy.padding.sm}`,
    color: system.color.fg.default,
    animationName: tooltipAnimation,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${tooltipTransformOriginVertical} ${tooltipTransformOriginHorizontal}`,
    margin: system.legacy.gap.xs,
    a: {
      color: system.color.fg.default,
      textDecoration: 'underline',
    },
    // use :before vs margin to increase the tooltip hit-box
    '&:before': {
      content: '""',
      borderRadius: system.legacy.shape.full,
      border: `${px2rem(1)} solid ${system.color.border.default}`,
      zIndex: -1,
      margin: 0,
      backgroundColor: system.legacy.color.surface.default,
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
      left: calc.negate(base.legacy.size50),
    },
    '[data-popper-placement="top-end"] &, [data-popper-placement="bottom-end"] &': {
      right: calc.negate(base.legacy.size50),
    },
    '[data-popper-placement="left-start"] &, [data-popper-placement="right-start"] &': {
      top: calc.negate(base.legacy.size50),
    },
    '[data-popper-placement="left-end"] &, [data-popper-placement="right-end"] &': {
      bottom: calc.negate(base.legacy.size50),
    },
  }),
  modifiers: {
    elementHasFocus: {
      true: {
        margin: px2rem(6),
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
      system.legacy.gap.sm
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

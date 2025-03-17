import * as React from 'react';

import {
  TransformOrigin,
  createComponent,
  getTransformOrigin,
} from '@workday/canvas-kit-react/common';

import {
  calc,
  createStencil,
  createVars,
  cssVar,
  keyframes,
  px2rem,
} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
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
   * optional popper properties if `placement` is set
   */
  popperProps?: {
    open: boolean;
    anchorElement: HTMLElement | null;
  };
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
    padding: system.space.x3,
    color: system.color.text.inverse,
    animationName: tooltipAnimation,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${tooltipTransformOriginVertical} ${tooltipTransformOriginHorizontal}`,
    a: {
      color: system.color.text.inverse,
      textDecoration: 'underline',
    },
    // use :before vs margin to increase the tooltip hit-box
    '&:before': {
      content: '""',
      borderRadius: system.shape.x1,
      outline: `${px2rem(1)} solid transparent`,
      outlineOffset: `-${px2rem(1)}`,
      zIndex: -1,
      margin: system.space.x1,
      backgroundColor: system.color.bg.translucent,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    // offset tooltips by 2 pixels when a keyboard focus ring is detected
    'body:has(:focus-visible, .focus) &': {
      padding: calc.subtract(system.space.x4, calc.divide(system.space.x1, 2)),
      '&:before': {
        margin: calc.add(system.space.x1, calc.divide(system.space.x1, 2)),
      },
    },

    // Hide tooltip when the reference element is either clipped or fully hidden
    '[data-popper-reference-hidden] &': {
      visibility: 'hidden',
      pointerEvents: 'none',
    },

    // Fix offsets based on placement
    '[data-popper-placement="top-start"] &, [data-popper-placement="bottom-start"] &': {
      left: calc.negate(system.space.x1),
    },
    '[data-popper-placement="top-end"] &, [data-popper-placement="bottom-end"] &': {
      right: calc.negate(system.space.x1),
    },
    '[data-popper-placement="left-start"] &, [data-popper-placement="right-start"] &': {
      top: calc.negate(system.space.x1),
    },
    '[data-popper-placement="left-end"] &, [data-popper-placement="right-end"] &': {
      bottom: calc.negate(system.space.x1),
    },
  }),
});

export const TooltipContainer = createComponent('div')<TooltipContainerProps>({
  displayName: 'TooltipContainer',
  Component: ({children, transformOrigin = defaultTransformOrigin, ...elemProps}, ref, Element) => {
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
          }),
          tooltipTranslateVars({positionX: translate.x, positionY: translate.y}),
        ])}
      >
        {children}
      </Element>
    );
  },
});

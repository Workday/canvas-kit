import * as React from 'react';

import {
  TransformOrigin,
  createComponent,
  getTransformOrigin,
} from '@workday/canvas-kit-react/common';

import {createStencil, createVars, cssVar, keyframes} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
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
    color: base.frenchVanilla100,
    animationName: tooltipAnimation,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${tooltipTransformOriginVertical} ${tooltipTransformOriginHorizontal}`,
    a: {
      color: base.frenchVanilla100,
      textDecoration: 'underline',
    },
    // use :before vs margin to increase the tooltip hit-box
    '&:before': {
      content: '""',
      borderRadius: system.shape.x1,
      zIndex: 1,
      margin: system.space.x1,
      backgroundColor: 'rgba(0,0,0,.85)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    // offset tooltips by 2 pixels when a keyboard focus ring is detected
    '[data-whatinput=keyboard] &': {
      padding: `calc(${system.space.x4} - 0.125rem)`,
      '&:before': {
        margin: `calc(${system.space.x1} + 0.125rem)`,
      },
    },

    // Hide tooltip when the reference element is either clipped or fully hidden
    '[data-popper-reference-hidden] &': {
      visibility: 'hidden',
      pointerEvents: 'none',
    },

    // Fix offsets based on placement
    '[data-popper-placement="top-start"] &, [data-popper-placement="bottom-start"] &': {
      left: `-${system.space.x1}`,
    },
    '[data-popper-placement="top-end"] &, [data-popper-placement="bottom-end"] &': {
      right: `-${system.space.x1}`,
    },
    '[data-popper-placement="left-start"] &, [data-popper-placement="right-start"] &': {
      top: `-${system.space.x1}`,
    },
    '[data-popper-placement="left-end"] &, [data-popper-placement="right-end"] &': {
      bottom: `-${system.space.x1}`,
    },
  }),
});

export const TooltipContainer = createComponent('div')<TooltipContainerProps>({
  displayName: 'TooltipContainer',
  Component: ({children, transformOrigin = defaultTransformOrigin, ...elemProps}, ref, Element) => {
    const translate = getTransformOrigin(transformOrigin, cssVar(system.space.x2));
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

// export const TooltipContainer = styled('div')<TooltipContainerProps>(

//   ({transformOrigin = defaultTransformOrigin}) => {
//     if (transformOrigin === null) {
//       return {};
//     }
//     return {
//       animation: tooltipAnimation(transformOrigin),
//       animationDuration: '150ms',
//       animationTimingFunction: 'ease-out',
//       transformOrigin: transformOrigin
//         ? `${transformOrigin.vertical} ${transformOrigin.horizontal}`
//         : 'top center',
//     };
//   }
// );

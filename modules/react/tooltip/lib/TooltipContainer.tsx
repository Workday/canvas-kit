import * as React from 'react';
import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';
import {TransformOrigin, getTranslateFromOrigin} from '@workday/canvas-kit-react/common';

const tooltipAnimation = (transformOrigin: TransformOrigin) => {
  const translate = getTranslateFromOrigin(transformOrigin, space.xxxs);

  return keyframes`
    0% {
      opacity: 0;
      transform: translate(${translate.x}px, ${translate.y}px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  `;
};

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

export const TooltipContainer = styled('div')<TooltipContainerProps>(
  {
    ...type.levels.subtext.medium,
    display: 'inline-flex',
    position: 'relative',
    padding: space.xs,
    color: colors.frenchVanilla100,
    a: {
      color: colors.frenchVanilla100,
      textDecoration: 'underline',
    },
    // use :before vs margin to increase the tooltip hit-box
    ':before': {
      content: '""',
      borderRadius: borderRadius.m,
      zIndex: -1,
      margin: space.xxxs,
      backgroundColor: 'rgba(0,0,0,.85)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    // offset tooltips by 2 pixels when a keyboard focus ring is detected
    '[data-whatinput=keyboard] &': {
      padding: `calc(${space.s} - 0.125rem)`,
      ':before': {
        margin: `calc(${space.xxxs} + 0.125rem)`,
      },
    },

    // Hide tooltip when the reference element is either clipped or fully hidden
    '[data-popper-reference-hidden] &': {
      visibility: 'hidden',
      pointerEvents: 'none',
    },

    // Fix offsets based on placement
    '[data-popper-placement="top-start"] &, [data-popper-placement="bottom-start"] &': {
      left: `-${space.xxxs}`,
    },
    '[data-popper-placement="top-end"] &, [data-popper-placement="bottom-end"] &': {
      right: `-${space.xxxs}`,
    },
    '[data-popper-placement="left-start"] &, [data-popper-placement="right-start"] &': {
      top: `-${space.xxxs}`,
    },
    '[data-popper-placement="left-end"] &, [data-popper-placement="right-end"] &': {
      bottom: `-${space.xxxs}`,
    },
  },
  ({transformOrigin = defaultTransformOrigin}) => {
    if (transformOrigin === null) {
      return {};
    }
    return {
      animation: tooltipAnimation(transformOrigin),
      animationDuration: '150ms',
      animationTimingFunction: 'ease-out',
      transformOrigin: transformOrigin
        ? `${transformOrigin.vertical} ${transformOrigin.horizontal}`
        : 'top center',
    };
  }
);

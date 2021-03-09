import * as React from 'react';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';

import {borderRadius, colors, spacing, spacingNumbers, type} from '@workday/canvas-kit-react/core';
import {TransformOrigin, getTranslateFromOrigin} from '@workday/canvas-kit-react/common';

const tooltipAnimation = (transformOrigin: TransformOrigin) => {
  const translate = getTranslateFromOrigin(transformOrigin, spacing.xxxs);

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
    ...type.body,
    display: 'inline-flex',
    padding: spacingNumbers.xxs + spacingNumbers.xxxs,
    color: colors.frenchVanilla100,
    fontSize: 13,
    a: {
      color: colors.frenchVanilla100,
      textDecoration: 'underline',
    },
    // use :before vs margin to increase the tooltip hit-box
    ':before': {
      content: '""',
      borderRadius: borderRadius.m,
      zIndex: -1,
      margin: spacingNumbers.xxxs,
      backgroundColor: 'rgba(0,0,0,.85)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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

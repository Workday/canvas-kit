import * as React from 'react';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';

import {borderRadius, colors, spacing, type} from '@workday/canvas-kit-react-core';
import {TransformOrigin, getTranslateFromOrigin} from '@workday/canvas-kit-react-common';

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
    borderRadius: borderRadius.m,
    padding: spacing.xxs,
    backgroundColor: 'rgba(0,0,0,.85)',
    color: colors.frenchVanilla100,
    fontSize: 13,
    margin: spacing.xxxs,
    a: {
      color: colors.frenchVanilla100,
      textDecoration: 'underline',
    },
  },
  ({transformOrigin}) => {
    if (transformOrigin === null) {
      return {};
    }
    return {
      animation: tooltipAnimation(transformOrigin || defaultTransformOrigin),
      animationDuration: '150ms',
      animationTimingFunction: 'ease-out',
      transformOrigin: transformOrigin
        ? `${transformOrigin.vertical} ${transformOrigin.horizontal}`
        : 'top center',
    };
  }
);

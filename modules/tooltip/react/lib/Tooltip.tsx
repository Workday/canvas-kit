import * as React from 'react';
import styled from '@emotion/styled';
import {borderRadius, colors, spacing, type} from '@workday/canvas-kit-react-core';
import {TransformOrigin, getTranslateFromOrigin} from '@workday/canvas-kit-react-common';
import {keyframes} from '@emotion/core';
import uuid from 'uuid/v4';

export interface TooltipProps {
  /**
   * The origin from which the Tooltip will animate.
   * @default {horizontal: 'center', vertical: 'top'}
   */
  transformOrigin: TransformOrigin;
  /**
   * HTML id of the tooltip container - useful for accessibility.
   * Should link the tooltip container to a `aria-describedby` on the target
   */
  id?: string;
}

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

const TooltipContainer = styled('div')<TooltipProps>(
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
  ({transformOrigin}) => ({
    // animation: tooltipAnimation(transformOrigin),
    // animationDuration: '150ms',
    // animationTimingFunction: 'ease-out',
    // transformOrigin: transformOrigin
    //   ? `${transformOrigin.vertical} ${transformOrigin.horizontal}`
    //   : 'top center',
  })
);

export default class Tooltip extends React.Component<TooltipProps, {}> {
  static defaultProps = {
    transformOrigin: {
      horizontal: 'center',
      vertical: 'bottom',
    },
  };

  public render() {
    return (
      <TooltipContainer {...this.props} role="tooltip">
        {this.props.children}
      </TooltipContainer>
    );
  }
}

/**
 * Convenience hook for creating components with tooltips
 */
export function useTooltip() {
  const [isOpen, setOpen] = React.useState(false);
  const [ref, setRef] = React.useState<null | HTMLElement>(null);
  const id = React.useRef<string>();
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = (event: React.SyntheticEvent<HTMLElement>) => {
    setRef(event.currentTarget);
    if (!id.current) {
      id.current = uuid();
    }
    setOpen(true);
  };

  return {
    targetProps: {
      'aria-describedby': id.current,
      onMouseEnter: onOpen,
      onMouseLeave: onClose,
      onFocus: onOpen,
      onBlur: onClose,
    },
    popperProps: {
      open: isOpen,
      anchorElement: ref,
    },
    tooltipProps: {
      id: id.current,
    },
  };
}

import React from 'react';

import {createComponent, focusRing, styled, StyledType} from '@workday/canvas-kit-react/common';

import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {PillIcon} from './Pill.Icon';
import {PillCount} from './Pill.Count';
import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';

export interface BasePillProps extends BoxProps {
  variant?: 'removable' | 'readOnly' | 'interactive';
  maxWidth?: number;
  children: React.ReactNode;
}

export const BasePillsContext = React.createContext({});

const StyledPillContainer = styled(Box.as('span'))<StyledType & BasePillProps>(
  {
    border: `1px solid ${colors.licorice200}`,
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: borderRadius.m,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexShrink: 0,
    ...type.levels.body.small,
    boxShadow: 'none',
    outline: 'none',
    fontWeight: 500,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  ({variant}) => {
    switch (variant) {
      case 'interactive': {
        return {
          cursor: 'pointer',
          backgroundColor: colors.soap300,
          transition:
            'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
          '&:hover:active': {transitionDuration: '40ms'},

          '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},
          '&:hover': {
            backgroundColor: colors.soap400,
            borderColor: colors.licorice400,
          },
          '&:focus': {
            ...focusRing({width: 1}),
          },
          '&:active': {
            backgroundColor: colors.soap500,
            borderColor: colors.licorice500,
          },
        };
      }
      default:
        return {
          cursor: 'default',
          background: colors.frenchVanilla100,
        };
    }
  }
);

export const BasePill = createComponent('span')({
  displayName: 'BasePill',
  Component: (
    {children, maxWidth = 200, variant = 'interactive', ...elemProps}: BasePillProps,
    ref,
    Element
  ) => {
    console.warn(children);
    return (
      <BasePillsContext.Provider value={{variant}}>
        <OverflowTooltip>
          <StyledPillContainer
            ref={ref}
            variant={variant}
            as={variant === 'interactive' ? 'button' : Element}
            maxWidth={maxWidth}
            height={space.m}
            {...elemProps}
          >
            {children}
          </StyledPillContainer>
        </OverflowTooltip>
      </BasePillsContext.Provider>
    );
  },
  subComponents: {
    Icon: PillIcon,
    Count: PillCount,
  },
});

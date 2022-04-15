import React from 'react';

import {
  createComponent,
  focusRing,
  styled,
  StyledType,
  useDefaultModel,
} from '@workday/canvas-kit-react/common';

import {usePillModel, PillModel, PillModelConfig} from './usePillModel';

import {PillIcon} from './Pill.Icon';
import {PillIconButton} from './Pill.IconButton';
import {PillCount} from './Pill.Count';
import {PillAvatar} from './Pill.Avatar';
import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';
import {BoxProps, boxStyleFn, HStack} from '@workday/canvas-kit-react/layout';
import {CSSObject} from '@emotion/react';
import {PillLabel} from './Pill.Label';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

export const PillModelContext = React.createContext<PillModel>({} as any);

export interface PillProps extends PillModelConfig, BoxProps {
  model?: PillModel;
  children: React.ReactNode;
  maxWidth?: number;
}

const pillBaseStyles: CSSObject = {
  border: `1px solid ${colors.licorice200}`,
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: borderRadius.m,
  flexShrink: 0,
  ...type.levels.subtext.large,
  boxShadow: 'none',
  outline: 'none',
  fontWeight: 500,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  width: 'fit-content',
  padding: `2px ${space.xxs}`,
  height: space.m,
  position: 'relative',
};

const StyledReadOnlyPillContainer = styled('span')<StyledType & PillProps>(
  {
    ...pillBaseStyles,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  boxStyleFn
);

const StyledInteractivePillContainer = styled('button')<StyledType & PillProps>(
  {
    ...pillBaseStyles,
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
    ':before': {
      content: '""',
      borderRadius: borderRadius.m,
      zIndex: -1,
      margin: space.xxxs,
      backgroundColor: 'transparent',
      position: 'absolute',
      top: `-${space.xxxs}`,
      left: `-${space.xxxs}`,
      right: `-${space.xxxs}`,
      bottom: `-${space.xxxs}`,
    },
  },
  boxStyleFn
);

const StyledRemovablePillContainer = styled('span')<StyledType & PillProps>(
  {
    ...pillBaseStyles,
    cursor: 'default',
    backgroundColor: colors.soap300,
    transition:
      'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
    '&:hover:active': {transitionDuration: '40ms'},

    '&:disabled, &:disabled:active': {cursor: 'default', boxShadow: 'none'},

    '&:active': {
      backgroundColor: colors.soap500,
      borderColor: colors.licorice500,
    },
  },
  boxStyleFn
);

export const Pill = createComponent()({
  displayName: 'Pill',
  Component: ({children, model, ...config}: PillProps, ref, Element) => {
    const value = useDefaultModel(model, config, usePillModel);
    const {onClick, onDelete, ...rest} = config;
    return (
      <PillModelContext.Provider value={value}>
        <>
          {!config.onClick && !config.onDelete && (
            <StyledReadOnlyPillContainer as={Element} ref={ref} {...rest}>
              <OverflowTooltip>
                <>{children}</>
              </OverflowTooltip>
            </StyledReadOnlyPillContainer>
          )}
          {config.onClick && !config.onDelete && (
            <StyledInteractivePillContainer
              as={Element}
              ref={ref}
              onClick={config.onClick}
              {...rest}
            >
              <HStack
                shouldWrapChildren
                spacing="xxxs"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
              >
                {children}
              </HStack>
            </StyledInteractivePillContainer>
          )}
          {config.onDelete && !config.onClick && (
            <StyledRemovablePillContainer as={Element} ref={ref} {...rest}>
              <HStack
                shouldWrapChildren
                spacing="xxxs"
                alignItems="center"
                justifyContent="center"
                // flexDirection="row"
              >
                {children}
              </HStack>
            </StyledRemovablePillContainer>
          )}
        </>
      </PillModelContext.Provider>
    );
  },
  subComponents: {
    Icon: PillIcon,
    Avatar: PillAvatar,
    Count: PillCount,
    Label: PillLabel,
    IconButton: PillIconButton,
  },
});

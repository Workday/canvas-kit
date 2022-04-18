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
import {BaseButton} from '@workday/canvas-kit-react/button';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

export const PillModelContext = React.createContext<PillModel>({} as any);

export interface PillProps extends PillModelConfig {
  model?: PillModel;
  children: React.ReactNode;
}

const getButtonPillColors = () => {
  return {
    default: {
      background: colors.soap300,
      icon: colors.licorice200,
      label: colors.blackPepper400,
    },

    hover: {
      icon: colors.licorice500,
      background: colors.soap300,
      border: colors.licorice400,
    },
    active: {
      icon: colors.licorice500,
      background: colors.soap500,
      border: colors.licorice200,
    },
    focus: {
      icon: colors.licorice500,
      background: colors.soap300,
      focusRing: focusRing({width: 0, innerColor: 'transparent', outerColor: 'transparent'}),
    },
    disabled: {
      icon: colors.licorice100,
      label: colors.licorice100,
      background: colors.soap100,
      border: colors.licorice100,
      opacity: '1',
    },
  };
};

const getRemovablePillColors = () => {
  return {
    default: {
      background: colors.soap300,
      icon: colors.licorice200,
      label: colors.blackPepper400,
    },

    hover: {
      icon: colors.licorice500,
      background: colors.soap300,
      border: colors.licorice200,
    },
    active: {
      icon: colors.licorice500,
      background: colors.soap500,
      border: colors.licorice500,
    },
    focus: {
      icon: colors.licorice200,
      background: colors.soap300,
      focusRing: focusRing({width: 1}),
    },
    disabled: {
      icon: colors.licorice100,
      label: colors.licorice100,
      background: 'red',
      border: colors.licorice100,
      opacity: '1',
    },
  };
};

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

const StyledBasePill = styled(BaseButton.as('button'))<StyledType & PillProps>(
  {
    ...pillBaseStyles,
  },
  // ({maxWidth}) => ({
  //   maxWidth: maxWidth,
  // }),
  boxStyleFn
);

const StyledEllipsisText = styled('span')({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const StyledNonInteractivePill = styled(StyledBasePill)({
  cursor: 'default',
  overflow: 'revert',
});

export const Pill = createComponent()({
  displayName: 'Pill',
  Component: ({children, model, ...config}: PillProps, ref, Element) => {
    const value = useDefaultModel(model, config, usePillModel);
    const {onClick, onDelete, maxWidth, ...rest} = config;

    return (
      <PillModelContext.Provider value={value}>
        <>
          {!config.onClick && !config.onDelete && (
            <OverflowTooltip>
              <StyledNonInteractivePill
                maxWidth={value.state.maxWidth}
                as={Element || 'span'}
                ref={ref}
                {...rest}
              >
                <StyledEllipsisText>{children}</StyledEllipsisText>
              </StyledNonInteractivePill>
            </OverflowTooltip>
          )}
          {config.onClick && !config.onDelete && (
            <StyledBasePill
              colors={getButtonPillColors()}
              as={Element}
              ref={ref}
              onClick={config.onClick}
              {...rest}
            >
              <HStack shouldWrapChildren spacing="xxxs" alignItems="center" justifyContent="center">
                {React.Children.map(children, (child, index) => {
                  if (typeof child === 'string') {
                    return <span>{child}</span>;
                  }
                  return child;
                })}
              </HStack>
            </StyledBasePill>
          )}
          {config.onDelete && !config.onClick && (
            <StyledNonInteractivePill
              colors={getRemovablePillColors()}
              as={Element || 'span'}
              ref={ref}
              {...rest}
            >
              {/* <HStack shouldWrapChildren spacing="xxxs" alignItems="center" justifyContent="center"> */}
              {children}
              {/* </HStack> */}
            </StyledNonInteractivePill>
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

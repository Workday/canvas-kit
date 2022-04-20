import React from 'react';

import {
  createComponent,
  focusRing,
  styled,
  StyledType,
  useConstant,
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

export interface PillProps extends PillModelConfig, BoxProps {
  model?: PillModel;
  children: React.ReactNode;
}

const getButtonPillColors = () => {
  return {
    default: {
      background: colors.soap300,
      icon: colors.licorice200,
      label: colors.blackPepper400,
      border: colors.licorice200,
    },

    hover: {
      icon: colors.licorice500,
      background: colors.soap400,
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
      border: colors.blueberry400,
      focusRing: focusRing({
        width: 1,
      }),
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

const getRemovablePillColors = (disabled?: boolean) => {
  return {
    default: {
      background: colors.soap300,
      icon: colors.licorice200,
      label: colors.blackPepper400,
      border: disabled ? colors.licorice100 : colors.licorice200,
    },

    hover: {
      icon: disabled ? colors.licorice100 : colors.licorice500,
      background: disabled ? colors.soap100 : colors.soap300,
      border: disabled ? colors.licorice100 : colors.licorice200,
      label: disabled ? colors.licorice100 : colors.blackPepper400,
    },
    active: {
      icon: disabled ? colors.licorice100 : colors.licorice500,
      background: disabled ? colors.soap100 : colors.soap300,
      border: disabled ? colors.licorice100 : colors.licorice500,
      label: disabled ? colors.licorice100 : colors.blackPepper400,
    },
    focus: {
      icon: colors.licorice200,
      background: colors.soap300,
      label: colors.blackPepper400,
      focusRing: focusRing({width: 0, innerColor: 'transparent', outerColor: 'transparent'}),
    },
    disabled: {},
  };
};

const pillBaseStyles: CSSObject = {
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

    '&:active, &active:hover': {
      'span[data-count="ck-pill-count"]': {
        backgroundColor: colors.soap600,
      },
    },
  },
  boxStyleFn
);

const StyledNonInteractivePill = styled(StyledBasePill)({
  cursor: 'default',
  overflow: 'revert', // override BaseButton overflow styles so the click target exists outside the pill for removable
});

export const Pill = createComponent('button')({
  displayName: 'Pill',
  Component: ({children, model, ...config}: PillProps, ref, Element) => {
    const value = useDefaultModel(model, config, usePillModel);
    const {onClick, onDelete, maxWidth, ...elemProps} = config;
    const actualEl = useConstant(() => {
      if (Element === 'button') {
        return !!onDelete || !onClick ? 'span' : 'button';
      }
      return Element;
    });
    return (
      <PillModelContext.Provider value={value}>
        <>
          {!config.onClick && !config.onDelete && (
            <StyledNonInteractivePill
              maxWidth={value.state.maxWidth}
              as={actualEl}
              ref={ref}
              border={`1px solid ${colors.licorice200}`}
              {...elemProps}
            >
              <PillLabel>{children}</PillLabel>
            </StyledNonInteractivePill>
          )}
          {config.onClick && !config.onDelete && (
            <StyledBasePill
              colors={getButtonPillColors()}
              as={Element}
              ref={ref}
              onClick={config.onClick}
              {...elemProps}
            >
              <HStack spacing="xxxs">
                {React.Children.map(children, (child, index) => {
                  if (typeof child === 'string') {
                    return <PillLabel key={index}>{child}</PillLabel>;
                  }
                  return child;
                })}
              </HStack>
            </StyledBasePill>
          )}
          {config.onDelete && !config.onClick && (
            <StyledNonInteractivePill
              colors={getRemovablePillColors(config.disabled)}
              as={actualEl}
              ref={ref}
              backgroundColor={config.disabled ? colors.soap100 : colors.soap300}
              color={config.disabled ? colors.licorice100 : colors.blackPepper400}
              borderColor={config.disabled ? colors.licorice100 : colors.licorice200}
              {...elemProps}
            >
              <HStack spacing="xxxs" height="inherit" alignItems="center">
                {React.Children.map(children, (child, index) => {
                  if (typeof child === 'string') {
                    return <PillLabel key={index}>{child}</PillLabel>;
                  }
                  return child;
                })}
              </HStack>
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

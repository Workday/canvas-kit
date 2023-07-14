import * as React from 'react';

import {ButtonLabelIcon} from './parts/ButtonLabelIcon';
import {ButtonLabel} from './parts/ButtonLabel';

import {
  createComponent,
  GrowthBehavior,
  cs,
  createVars,
  newTheme,
  cssVar,
} from '@workday/canvas-kit-react/common';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {Box} from '@workday/canvas-kit-react/layout';
import {borderRadius, space, type} from '@workday/canvas-kit-react/tokens';

import {ButtonColors, ButtonSizes} from './types';

export interface BaseButtonContainerProps extends Partial<SystemIconProps>, GrowthBehavior {
  /**
   * Override default colors of a button. The default will depend on the button type
   */
  colors?: ButtonColors;
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   */
  size?: ButtonSizes;
}

/**
 * Extends all the style properties from Box to our buttons as well as props from BaseButtonContainerProps.
 * We omit `ref` since all of our buttons use `createComponent` and already give access to `ref`.
 * Use this type to extend and customize any one off buttons that you want full control over styling.
 */
export interface BaseButtonProps extends Omit<BaseButtonContainerProps, 'ref'> {}

export const buttonVars = {
  default: createVars('background', 'border', 'icon', 'iconFill', 'color', 'opacity'),
  hover: createVars('background', 'border', 'icon', 'iconFill', 'color', 'opacity'),
  active: createVars('background', 'border', 'icon', 'iconFill', 'color', 'opacity'),
  focus: createVars('background', 'border', 'icon', 'iconFill', 'color', 'opacity'),
  disabled: createVars('background', 'border', 'icon', 'iconFill', 'color', 'opacity'),
};

const BaseButtonStyles = cs({
  ...type.levels.subtext.large,
  backgroundColor: cssVar(buttonVars.default.background),
  color: cssVar(buttonVars.default.color),
  border: `1px solid ${cssVar(buttonVars.default.border)}`,
  maxWidth: 'min-content',
  cursor: 'pointer',
  display: 'inline-flex',
  gap: space.xxs,
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  paddingInline: space.m,
  fontWeight: cssVar(newTheme.fontWeights.bold),
  lineHeight: 'normal',
  whiteSpace: 'nowrap',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  borderRadius: borderRadius.circle,
  position: 'relative',
  verticalAlign: 'middle',
  overflow: 'hidden',
  transition:
    'box-shadow 120ms linear, border 120ms linear, background-color 120ms linear, color 120ms linear',
  '&:disabled, &:disabled:active': {
    cursor: 'default',
    boxShadow: 'none',
    opacity: 0.4,
  },
  '&:hover:active': {transitionDuration: '40ms'},
  '&:active': {
    backgroundColor: cssVar(buttonVars.active.background),
    border: `1px solid ${cssVar(buttonVars.active.border)}`,
  },
  '&:focus-visible': {
    backgroundColor: cssVar(buttonVars.focus.background),
    border: `1px solid ${cssVar(buttonVars.focus.border)}`,
  },
  '& span .wd-icon-fill': {
    transitionDuration: '40ms',
    fill: cssVar(buttonVars.default.icon),
  },
  '&:hover': {
    backgroundColor: cssVar(buttonVars.hover.background),
    color: cssVar(buttonVars.hover.color),
    '& span .wd-icon-fill': {
      fill: cssVar(buttonVars.hover.icon),
    },
  },
});

export const BaseButton = createComponent('button')({
  displayName: 'Button',
  Component: (
    {children, colors, size, cs, ...elemProps}: BaseButtonContainerProps,
    ref,
    Element
  ) => {
    return (
      <Box as={Element} ref={ref} type="button" cs={[BaseButtonStyles, cs]} {...elemProps}>
        {children}
      </Box>
    );
  },
  subComponents: {
    Icon: ButtonLabelIcon,
    Label: ButtonLabel,
  },
});

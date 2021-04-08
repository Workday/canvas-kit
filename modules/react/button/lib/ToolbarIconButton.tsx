import * as React from 'react';
import {colors, space, borderRadius} from '@workday/canvas-kit-react/core';
import {
  focusRing,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {ButtonColors} from './types';
import {ButtonContainer} from './parts';
import {IconButtonProps} from './IconButton';

export interface ToolbarIconButtonProps
  extends Omit<IconButtonProps, 'size' | 'variant'>,
    Themeable {}

const containerStyles = {
  padding: 0,
  minWidth: space.l,
  width: space.l,
  height: space.l,
  borderRadius: borderRadius.m,
  ['& .wd-icon']: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 20,
    height: 20,
  },
};

export const ToolbarIconButton = createComponent('button')({
  displayName: 'ToolbarIconButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      onToggleChange,
      icon,
      toggled,
      children,
      ...elemProps
    }: ToolbarIconButtonProps,
    ref,
    Element
  ) => {
    const isInitialMount = React.useRef(true);

    // Only call onToggleChange on update - not on first mount
    React.useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        if (toggled && typeof onToggleChange === 'function') {
          onToggleChange(toggled);
        }
      }
    }, [toggled, onToggleChange]);

    return (
      <ButtonContainer
        ref={ref}
        as={Element}
        colors={getToolbarIconButtonColors(theme, toggled)}
        size={'small'}
        fillIcon={toggled}
        extraStyles={containerStyles}
        aria-pressed={toggled}
        {...elemProps}
      >
        {icon ? <SystemIcon icon={icon} /> : children}
      </ButtonContainer>
    );
  },
});

const getToolbarIconButtonColors = (theme: EmotionCanvasTheme, toggled?: boolean): ButtonColors => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;
  return {
    default: {
      icon: toggled ? themePrimary.main : colors.licorice200,
      background: toggled ? themePrimary.lightest : 'transparent',
    },
    hover: {
      icon: toggled ? themePrimary.dark : colors.licorice500,
      background: colors.soap300,
    },
    active: {
      icon: toggled ? themePrimary.dark : colors.licorice500,
      background: colors.soap500,
    },
    focus: {
      icon: toggled ? themePrimary.main : colors.licorice200,
      focusRing: focusRing({width: 2, separation: 0}, theme),
      background: toggled ? themePrimary.lightest : 'transparent',
    },
    disabled: {
      icon: toggled ? themePrimary.light : colors.soap600,
      background: toggled ? themePrimary.lightest : 'transparent',
    },
  };
};

/** @jsx jsx */
import {jsx} from '@emotion/core';
import {colors, space, borderRadius} from '@workday/canvas-kit-react/tokens';
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
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {ToolbarIconButtonProps} from './ToolbarIconButton';

export interface ToolbarDropdownButtonProps
  extends Omit<ToolbarIconButtonProps, 'toggled' | 'onToggleChange'>,
    Themeable {}

const containerStyles = {
  padding: space.zero,
  minWidth: space.l,
  width: 'auto',
  height: space.l,
  borderRadius: borderRadius.m,
  '& .wd-icon': {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 20,
    height: 20,
  },
  '& .wdc-toolbar-dropdown-btn-arrow': {
    margin: '0 2px 0 0',
  },
  '& .wdc-toolbar-dropdown-btn-custom-icon': {
    marginLeft: `${space.xxxs}`,
    marginRight: 0,
    width: 18, // decrease the space between a custom icon and the chevron per design
  },
};

export const ToolbarDropdownButton = createComponent('button')({
  displayName: 'ToolbarDropdownButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      icon,
      shouldMirrorIcon = false,
      children,
      ...elemProps
    }: ToolbarDropdownButtonProps,
    ref,
    Element
  ) => {
    return (
      <ButtonContainer
        ref={ref}
        as={Element}
        colors={getToolbarDropdownButtonColors(theme)}
        extraStyles={containerStyles}
        {...elemProps}
      >
        {icon ? (
          <SystemIcon
            className={'wdc-toolbar-dropdown-btn-custom-icon'}
            icon={icon}
            shouldMirror={shouldMirrorIcon}
          />
        ) : (
          children
        )}
        <SystemIcon
          className={'wdc-toolbar-dropdown-btn-arrow'}
          icon={chevronDownSmallIcon}
          shouldMirror={shouldMirrorIcon}
        />
      </ButtonContainer>
    );
  },
});

const getToolbarDropdownButtonColors = (theme: EmotionCanvasTheme): ButtonColors => {
  return {
    default: {
      icon: colors.licorice200,
    },
    hover: {
      icon: colors.licorice500,
      background: colors.soap300,
    },
    active: {
      icon: colors.licorice500,
      background: colors.soap500,
    },
    focus: {
      icon: colors.licorice200,
      focusRing: focusRing({width: 2, separation: 0}, theme),
      background: 'transparent',
    },
    disabled: {
      icon: colors.soap600,
      background: 'transparent',
    },
  };
};

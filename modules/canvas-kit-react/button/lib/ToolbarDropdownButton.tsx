/** @jsx jsx */
import {jsx} from '@emotion/core';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, useTheme, Themeable, EmotionCanvasTheme} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {ButtonColors} from './types';
import {ButtonContainer} from './parts';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {ToolbarIconButtonProps} from './ToolbarIconButton';

export interface ToolbarDropdownButtonProps
  extends Omit<ToolbarIconButtonProps, 'toggled' | 'onToggleChange'>,
    Themeable {}

const containerStyles = {
  padding: spacing.zero,
  minWidth: spacing.l,
  width: 'auto',
  height: spacing.l,
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
    marginLeft: `${spacing.xxxs}`,
    marginRight: 0,
    width: 18, // decrease the space between a custom icon and the chevron per design
  },
};

const ToolbarDropdownButton = ({
  // TODO: Fix useTheme and make it a real hook
  // eslint-disable-next-line react-hooks/rules-of-hooks
  theme = useTheme(),
  buttonRef,
  'aria-label': iconArialabel,
  icon,
  children,
  ...elemProps
}: ToolbarDropdownButtonProps) => {
  return (
    <ButtonContainer
      colors={getToolbarDropdownButtonColors(theme)}
      ref={buttonRef}
      extraStyles={containerStyles}
      aria-label={iconArialabel}
      {...elemProps}
    >
      {icon ? (
        <SystemIcon className={'wdc-toolbar-dropdown-btn-custom-icon'} icon={icon} />
      ) : (
        children
      )}
      <SystemIcon className={'wdc-toolbar-dropdown-btn-arrow'} icon={chevronDownSmallIcon} />
    </ButtonContainer>
  );
};

export default ToolbarDropdownButton;

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

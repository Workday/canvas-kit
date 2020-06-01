/** @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, useTheme, Themeable, EmotionCanvasTheme} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {ButtonColors} from './types';
import {ButtonContainer} from './parts';
import {IconButtonProps} from './IconButton';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';

export interface ToolbarDropdownButtonProps
  extends Omit<IconButtonProps, 'size' | 'variant' | 'toggled' | 'onToggleChange'>,
    Themeable {}

const ToolbarDropdownButton = ({
  theme = useTheme(),
  buttonRef,
  'aria-label': iconArialabel,
  icon,
  children,
  ...elemProps
}: ToolbarDropdownButtonProps) => {
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
  };

  const StyledChevronIcon = styled(SystemIcon)({
    margin: '0 2px 0 0 !important',
  });

  const StyledCustomIcon = styled(SystemIcon)({
    marginLeft: `${spacing.xxxs} !important`,
    marginRight: 0,
    width: 18, // decrease the space between a custom icon and the chevron per design
  });

  return (
    <ButtonContainer
      colors={getToolbarDropdownButtonColors(theme)}
      ref={buttonRef}
      extraStyles={containerStyles}
      aria-label={iconArialabel}
      {...elemProps}
    >
      {icon ? <StyledCustomIcon icon={icon} /> : children}
      <StyledChevronIcon icon={chevronDownSmallIcon} />
    </ButtonContainer>
  );
};

export default ToolbarDropdownButton;

const getToolbarDropdownButtonColors = (theme: EmotionCanvasTheme): ButtonColors => {
  return {
    default: {
      icon: colors.licorice200,
      background: 'transparent',
    },
    hover: {
      icon: colors.licorice500,
      background: colors.soap400,
    },
    active: {
      icon: colors.licorice500,
      background: colors.soap400,
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

import * as React from 'react';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, useTheme, Themeable, EmotionCanvasTheme} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors} from './types';
import {ButtonContainer} from './parts';
import {IconButtonProps} from './IconButton';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';

export interface ToolbarDropdownButtonProps
  extends Omit<IconButtonProps, 'size' | 'variant'>,
    Themeable {
  /**
   * The accessibility label to indicate the action triggered by clicking the IconButton.
   */
  'aria-label': string;
  /**
   * The toggled state of the button. If defined as a boolean, then it manages the toggled state: on (`true`) or off (`false`).
   * @default undefined
   */
  toggled?: boolean;
  /**
   * The ref to the button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
  /**
   * The icon of the IconButton.
   */
  icon?: CanvasSystemIcon;
  /**
   * The function called when the IconButton toggled state changes.
   */
  onToggleChange?: (toggled: boolean | undefined) => void;
}

const ToolbarDropdownButton = ({
  theme = useTheme(),
  buttonRef,
  onToggleChange,
  'aria-label': iconArialabel,
  icon,
  toggled,
  children,
  ...elemProps
}: ToolbarDropdownButtonProps) => {
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

  const containerStyles = {
    padding: 0,
    minWidth: spacing.l,
    width: 'auto',
    height: spacing.l,
    borderRadius: borderRadius.m,
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: '20px',
      height: '20px',
    },
  };

  const chevronStyles = {
    margin: '0 2px 0 0',
  };

  return (
    <ButtonContainer
      colors={getToolbarIconButtonColors(theme)}
      ref={buttonRef}
      fillIcon={toggled}
      extraStyles={containerStyles}
      //   aria-label={iconArialabel}
      {...elemProps}
    >
      {icon ? <SystemIcon style={{marginLeft: '2px'}} icon={icon} /> : children}
      <SystemIcon style={chevronStyles} icon={chevronDownSmallIcon} />
    </ButtonContainer>
  );
};

export default ToolbarDropdownButton;

const getToolbarIconButtonColors = (theme: EmotionCanvasTheme): ButtonColors => {
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

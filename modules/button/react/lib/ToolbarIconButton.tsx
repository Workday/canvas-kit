import * as React from 'react';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, useTheme, Themeable, EmotionCanvasTheme} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors} from './types';
import {ButtonContainer} from './parts';
import {IconButtonProps} from './IconButton';

export interface ToolbarIconButtonProps
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

const ToolbarIconButton = ({
  theme = useTheme(),
  buttonRef,
  onToggleChange,
  'aria-label': iconArialabel,
  icon,
  toggled,
  children,
  ...elemProps
}: ToolbarIconButtonProps) => {
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
    width: spacing.l,
    height: spacing.l,
    borderRadius: borderRadius.m,
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: '20px',
      height: '20px',
    },
  };

  return (
    <ButtonContainer
      colors={getToolbarIconButtonColors(theme, toggled)}
      size={'small'}
      ref={buttonRef}
      fillIcon={toggled}
      extraStyles={containerStyles}
      aria-pressed={toggled}
      aria-label={iconArialabel}
      {...elemProps}
    >
      {icon ? <SystemIcon icon={icon} /> : children}
    </ButtonContainer>
  );
};

export default ToolbarIconButton;

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
      background: toggled ? colors.soap400 : colors.soap400,
    },
    active: {
      icon: toggled ? themePrimary.dark : colors.licorice500,
      background: colors.soap400,
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

import * as React from 'react';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, useTheme, Themeable, EmotionCanvasTheme} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {IconButtonVariant, ButtonColors, ButtonOrAnchorComponent} from './types';
import {ButtonContainer} from './parts';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Themeable {
  /**
   * The accessibility label to indicate the action triggered by clicking the IconButton.
   */
  'aria-label': string;
  /**
   * The type of the IconButton.
   * @default IconButtonVariant.Circle
   */
  variant?: IconButtonVariant;
  /**
   * The size of the IconButton.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
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
  /**
   * The alternative container type for the button. Uses Emotion's special `as` prop.
   * Will render an `a` tag instead of a `button` when defined.
   */
  as?: 'a';
}

const IconButton: ButtonOrAnchorComponent<
  IconButtonProps,
  typeof IconButtonVariant,
  'aria-label'
> = ({
  // TODO: Fix useTheme and make it a real hook
  // eslint-disable-next-line react-hooks/rules-of-hooks
  theme = useTheme(),
  variant = IconButtonVariant.Circle,
  size = 'medium',
  buttonRef,
  onToggleChange,
  'aria-label': iconArialabel,
  icon,
  toggled,
  children,
  ...elemProps
}: IconButtonProps) => {
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
    margin: variant === IconButtonVariant.Plain ? '-8px' : undefined,
    minWidth: size === 'small' ? spacing.l : spacing.xl, // min-width is set so buttons don't collapse in IE11
    width: size === 'small' ? spacing.l : spacing.xl,
    height: size === 'small' ? spacing.l : spacing.xl,
    ...getIconButtonBorderRadius(variant),
    ['& .wd-icon']: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: size === 'small' ? '20px' : undefined,
      height: size === 'small' ? '20px' : undefined,
    },
  };

  return (
    <ButtonContainer
      colors={getIconButtonColors(variant, theme, toggled)}
      size={size}
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

IconButton.Variant = IconButtonVariant;
IconButton.Size = {
  Small: 'small',
  Medium: 'medium',
} as const;

export default IconButton;

const getIconButtonBorderRadius = (variant: IconButtonVariant) => {
  switch (variant) {
    case IconButtonVariant.Square:
    case IconButtonVariant.SquareFilled:
      return {borderRadius: borderRadius.m};
    default:
      return {borderRadius: borderRadius.circle};
  }
};

const getIconButtonColors = (
  variant: IconButtonVariant,
  theme: EmotionCanvasTheme,
  toggled?: boolean
): ButtonColors => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  switch (variant) {
    case IconButton.Variant.Square:
    case IconButtonVariant.Circle:
    default:
      return {
        default: {
          background: toggled ? themePrimary.main : undefined,
          icon: toggled ? themePrimary.contrast : colors.licorice200,
        },
        hover: {
          background: toggled ? themePrimary.dark : colors.soap300,
          icon: toggled ? themePrimary.contrast : colors.licorice500,
        },
        active: {
          background: toggled ? themePrimary.dark : colors.soap500,
          icon: toggled ? themePrimary.contrast : colors.licorice500,
        },
        focus: {
          background: toggled ? themePrimary.main : undefined,
          icon: toggled ? themePrimary.contrast : colors.licorice500,
        },
        disabled: {
          background: toggled ? themePrimary.lightest : 'transparent',
          icon: toggled ? themePrimary.light : colors.soap600,
        },
      };
    case IconButtonVariant.SquareFilled:
    case IconButtonVariant.CircleFilled:
      return {
        default: {
          background: toggled ? themePrimary.main : colors.soap200,
          icon: toggled ? themePrimary.contrast : colors.licorice200,
        },
        hover: {
          background: toggled ? themePrimary.dark : colors.soap400,
          icon: toggled ? themePrimary.contrast : colors.licorice500,
        },
        active: {
          background: toggled ? themePrimary.dark : colors.soap500,
          icon: toggled ? themePrimary.contrast : colors.licorice500,
        },
        focus: {
          background: toggled ? themePrimary.main : colors.soap200,
          icon: toggled ? themePrimary.contrast : colors.licorice500,
        },
        disabled: {
          background: toggled ? themePrimary.lightest : colors.soap100,
          icon: toggled ? themePrimary.light : colors.soap600,
        },
      };
    case IconButtonVariant.Plain:
      return {
        default: {
          icon: toggled ? themePrimary.main : colors.licorice200,
        },
        hover: {
          icon: toggled ? themePrimary.main : colors.licorice500,
        },
        active: {
          icon: toggled ? themePrimary.main : colors.licorice500,
        },
        focus: {
          icon: toggled ? themePrimary.main : colors.licorice500,
          focusRing: focusRing({}, theme),
        },
        disabled: {
          icon: toggled ? themePrimary.light : colors.soap600,
        },
      };
    case IconButtonVariant.Inverse:
      return {
        default: {
          background: toggled ? themePrimary.contrast : undefined,
          icon: toggled ? themePrimary.main : themePrimary.contrast,
        },
        hover: {
          background: toggled ? themePrimary.contrast : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? themePrimary.main : themePrimary.contrast,
        },
        active: {
          background: toggled ? themePrimary.contrast : 'rgba(0, 0, 0, 0.3)',
          icon: toggled ? themePrimary.main : themePrimary.contrast,
        },
        focus: {
          background: toggled ? themePrimary.contrast : undefined,
          icon: toggled ? themePrimary.main : themePrimary.contrast,
          focusRing: focusRing(
            {
              separation: 2,
              innerColor: 'currentColor',
              outerColor: themePrimary.contrast,
            },
            theme
          ),
        },
        disabled: {
          background: toggled ? 'rgba(255,255,255,0.75)' : 'transparent',
          icon: toggled ? themePrimary.main : 'rgba(255, 255, 255, 0.75)',
        },
      };
    case IconButtonVariant.InverseFilled:
      return {
        default: {
          background: toggled ? themePrimary.contrast : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? themePrimary.main : themePrimary.contrast,
        },
        hover: {
          background: toggled ? themePrimary.contrast : 'rgba(0, 0, 0, 0.3)',
          icon: toggled ? themePrimary.main : themePrimary.contrast,
        },
        active: {
          background: toggled ? themePrimary.contrast : 'rgba(0, 0, 0, 0.4)',
          icon: toggled ? themePrimary.main : themePrimary.contrast,
        },
        focus: {
          background: toggled ? themePrimary.contrast : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? themePrimary.main : themePrimary.contrast,
          focusRing: focusRing(
            {
              separation: 2,
              innerColor: 'currentColor',
              outerColor: themePrimary.contrast,
            },
            theme
          ),
        },
        disabled: {
          background: toggled ? 'rgba(255,255,255,0.75)' : 'rgba(0, 0, 0, 0.2)',
          icon: toggled ? themePrimary.main : 'rgba(255, 255, 255, 0.75)',
        },
      };
  }
};

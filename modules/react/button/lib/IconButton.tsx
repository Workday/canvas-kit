import * as React from 'react';
import {colors, spacing, borderRadius} from '@workday/canvas-kit-react/core';
import {
  focusRing,
  useTheme,
  Themeable,
  EmotionCanvasTheme,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonColors} from './types';
import {ButtonContainer} from './parts';

export interface IconButtonProps extends Themeable {
  /**
   * The accessibility label to indicate the action triggered by clicking the IconButton.
   */
  'aria-label': string;
  /**
   * The type of the IconButton.
   * @default 'circle'
   */
  variant?:
    | 'square'
    | 'squareFilled'
    | 'plain'
    | 'circle'
    | 'circleFilled'
    | 'inverse'
    | 'inverseFilled';
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
   * The icon of the IconButton.
   */
  icon?: CanvasSystemIcon;
  /**
   * The function called when the IconButton toggled state changes.
   */
  onToggleChange?: (toggled: boolean | undefined) => void;
  value?: string | string[] | number;
  children?: React.ReactNode;
}

export const IconButton = createComponent('button')({
  displayName: 'IconButton',
  Component: (
    {
      // TODO: Fix useTheme and make it a real hook
      // eslint-disable-next-line react-hooks/rules-of-hooks
      theme = useTheme(),
      variant = 'circle',
      size = 'medium',
      onToggleChange,
      icon,
      toggled,
      children,
      ...elemProps
    }: IconButtonProps,
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

    const containerStyles = {
      padding: 0,
      margin: variant === 'plain' ? '-8px' : undefined,
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
        ref={ref}
        as={Element}
        colors={getIconButtonColors(variant, theme, toggled)}
        size={size}
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

const getIconButtonBorderRadius = (variant: IconButtonProps['variant']) => {
  switch (variant) {
    case 'square':
    case 'squareFilled':
      return {borderRadius: borderRadius.m};
    default:
      return {borderRadius: borderRadius.circle};
  }
};

const getIconButtonColors = (
  variant: IconButtonProps['variant'],
  theme: EmotionCanvasTheme,
  toggled?: boolean
): ButtonColors => {
  const {
    canvas: {
      palette: {primary: themePrimary},
    },
  } = theme;

  switch (variant) {
    case 'square':
    case 'circle':
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
    case 'squareFilled':
    case 'circleFilled':
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
    case 'plain':
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
    case 'inverse':
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
    case 'inverseFilled':
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

import * as React from 'react';

import {
  GrowthBehavior,
  useTheme,
  Themeable,
  createComponent,
  newTheme,
} from '@workday/canvas-kit-react/common';
import {cssVar} from '@workday/canvas-kit-styling';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {
  BaseButton,
  BaseButtonProps,
  ButtonSizes,
  IconPositions,
} from '@workday/canvas-kit-labs-react/button';

export interface PrimaryButtonProps extends Themeable, GrowthBehavior, BaseButtonProps {
  /**
   * The variant of the PrimaryButton.
   */
  variant?: 'inverse';
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   * If no size is provided, it will default to `medium`.
   */
  size?: ButtonSizes;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   */
  iconPosition?: IconPositions;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   */
  shouldMirrorIcon?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary Buttons are high emphasis. Use once per screen to draw attention to the highest priority
 * action. Multiple primary buttons make it confusing for the user to understand what action they
 * should take. Not all screens require a Primary Button.
 *
 * Primary Buttons have four sizes: `extraSmall`, `small`, `medium`, and `large`. Icons are
 * supported for every size and can be positioned at the `start` or `end` with the `iconPosition`
 * prop.
 */
export const BaseButtonExample = createComponent('button')({
  displayName: 'BaseButtonExample',
  Component: (
    {
      size = 'medium',
      iconPosition = 'start',
      variant,
      icon,
      shouldMirrorIcon = false,
      children,
      ...elemProps
    }: PrimaryButtonProps,
    ref,
    Element
  ) => {
    const theme = useTheme();
    return (
      <BaseButton
        ref={ref}
        size={size}
        as={Element}
        {...elemProps}
        colors={{
          default: {
            label: cssVar(newTheme.colors.primary.contrast),
            background: cssVar(newTheme.colors.primary.main),
          },
        }}
      >
        {icon && iconPosition === 'start' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
        {children && <BaseButton.Label>{children}</BaseButton.Label>}
        Button
        {icon && iconPosition === 'end' && (
          <BaseButton.Icon
            size={size}
            iconPosition={iconPosition}
            icon={icon}
            shouldMirrorIcon={shouldMirrorIcon}
          />
        )}
      </BaseButton>
    );
  },
});

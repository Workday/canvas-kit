import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {accessoryStencil} from './Accessory';

/**
 * The color treatment of `Accessory.Icon`.
 */
export type AccessoryIconVariant =
  | 'grey'
  | 'green'
  | 'blue'
  | 'purple'
  | 'amber'
  | 'magenta'
  | 'red'
  | 'orange'
  | 'outline';

export interface AccessoryIconProps extends CSProps {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: SystemIconProps['icon'];
  /**
   * The color treatment of the icon and, at `medium` and above, the tile fill.
   * @default 'grey'
   */
  variant?: AccessoryIconVariant;
  /**
   * The color of the icon. When set, this overrides the icon color from `variant`.
   */
  color?: string;
  /**
   * The background color of the tile. When set, this overrides the fill from `variant` and is
   * painted at every size, including `small` and `extraSmall`.
   */
  background?: string;
  /**
   * The accessible name of the icon. When set, the tile is exposed as an image with this name.
   * Omit it when the icon is decorative.
   */
  'aria-label'?: string;
  /**
   * Overrides the role of the tile. When `aria-label` is set and this is omitted, the tile uses
   * `img`.
   */
  role?: string;
  /**
   * Hides the tile from assistive technology. Decorative icons are hidden unless this is set.
   */
  'aria-hidden'?: boolean;
}

const variantFill =
  (backgroundColor: string, iconColor: string) =>
  ({
    iconColor: iconColorVar = '',
    tileBackground = '',
  }: {
    iconColor?: string;
    tileBackground?: string;
  }) => ({
    backgroundColor: cssVar(tileBackground, backgroundColor),
    [systemIconStencil.vars.color]: cssVar(iconColorVar, iconColor),
  });

export const accessoryIconStencil = createStencil({
  extends: systemIconStencil,
  vars: {
    iconColor: '',
    tileBackground: '',
  },
  base: {},
  modifiers: {
    variant: {
      grey: variantFill(system.legacy.color.surface.alt.strong, base.legacy.slate800),
      green: variantFill(system.legacy.color.surface.success.strong, base.legacy.green800),
      blue: variantFill(
        system.legacy.color.surface.info.strong,
        system.legacy.color.fg.info.strong
      ),
      purple: variantFill(base.legacy.purpleA50, base.legacy.purple700),
      amber: variantFill(
        system.legacy.color.surface.warning.strong,
        system.legacy.color.fg.warning.strong
      ),
      magenta: variantFill(base.legacy.magentaA50, base.legacy.magenta800),
      red: variantFill(
        system.legacy.color.surface.danger.strong,
        system.legacy.color.fg.danger.strong
      ),
      orange: variantFill(base.legacy.orangeA50, base.legacy.orange700),
      outline: ({iconColor, tileBackground}) =>
        variantFill(
          system.legacy.color.surface.transparent,
          base.legacy.slate800
        )({
          iconColor,
          tileBackground,
        }),
    },
  },
});

export const AccessoryIcon = createComponent('span')({
  displayName: 'Accessory.Icon',
  Component: (
    {icon, variant = 'grey', color, background, ...elemProps}: AccessoryIconProps,
    ref,
    Element
  ) => {
    const accessibleName = elemProps['aria-label'];

    return (
      <SystemIcon
        as={Element}
        ref={ref}
        icon={icon}
        {...handleCsProp(
          elemProps,
          accessoryIconStencil({
            variant,
            iconColor: color,
            tileBackground: background,
          })
        )}
        {...accessoryStencil.parts.icon}
        data-variant={variant}
        role={elemProps.role ?? (accessibleName ? 'img' : undefined)}
        aria-hidden={elemProps['aria-hidden'] ?? (accessibleName ? undefined : true)}
      />
    );
  },
});

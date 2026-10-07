import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {Accessory, AccessoryProps, accessoryStencil} from './Accessory';

/**
 * The color treatment of `AccessoryIcon`.
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

export interface AccessoryIconProps extends AccessoryProps {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: SystemIconProps['icon'];
  /**
   * The color treatment of the icon and, at `medium` and above, the tile fill. `color` and
   * `background` from `Accessory` override these. Variant fills stay hidden at `small` and
   * `extraSmall` unless `background` is set.
   * @default 'grey'
   */
  variant?: AccessoryIconVariant;
}

export const accessoryIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    // Inherit optional `color` from the `Accessory` shell when no variant sets a fallback.
    [systemIconStencil.vars.color]: cssVar(accessoryStencil.vars.iconColor),
  },
  modifiers: {
    variant: {
      grey: {
        backgroundColor: cssVar(
          accessoryStencil.vars.tileBackground,
          system.legacy.color.surface.alt.strong
        ),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          base.legacy.slate800
        ),
      },
      green: {
        backgroundColor: cssVar(
          accessoryStencil.vars.tileBackground,
          system.legacy.color.surface.success.strong
        ),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          base.legacy.green800
        ),
      },
      blue: {
        backgroundColor: cssVar(
          accessoryStencil.vars.tileBackground,
          system.legacy.color.surface.info.strong
        ),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          system.legacy.color.fg.info.strong
        ),
      },
      purple: {
        backgroundColor: cssVar(accessoryStencil.vars.tileBackground, base.legacy.purpleA50),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          base.legacy.purple700
        ),
      },
      amber: {
        backgroundColor: cssVar(
          accessoryStencil.vars.tileBackground,
          system.legacy.color.surface.warning.strong
        ),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          system.legacy.color.fg.warning.strong
        ),
      },
      magenta: {
        backgroundColor: cssVar(accessoryStencil.vars.tileBackground, base.legacy.magentaA50),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          base.legacy.magenta800
        ),
      },
      red: {
        backgroundColor: cssVar(
          accessoryStencil.vars.tileBackground,
          system.legacy.color.surface.danger.strong
        ),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          system.legacy.color.fg.danger.strong
        ),
      },
      orange: {
        backgroundColor: cssVar(accessoryStencil.vars.tileBackground, base.legacy.orangeA50),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          base.legacy.orange700
        ),
      },
      outline: {
        backgroundColor: cssVar(
          accessoryStencil.vars.tileBackground,
          system.legacy.color.surface.transparent
        ),
        [systemIconStencil.vars.color]: cssVar(
          accessoryStencil.vars.iconColor,
          base.legacy.slate800
        ),
        borderWidth: px2rem(1),
        borderStyle: 'solid',
        borderColor: system.legacy.color.border.default,
      },
    },
  },
});

export interface AccessoryIconGraphicProps {
  /**
   * The icon to display from `@workday/canvas-system-icons-web`.
   */
  icon: SystemIconProps['icon'];
  /**
   * The color treatment of the icon and tile fill.
   */
  variant?: AccessoryIconVariant;
}

/**
 * Icon graphic without a tile shell. Used inside `AccessoryMedia`. Glyph size,
 * color, and fill overrides come from the parent `Accessory` via the icon `data-part` and stencil
 * vars.
 */
export const AccessoryIconGraphic = createComponent('span')({
  displayName: 'AccessoryIconGraphic',
  Component: ({icon, variant, ...elemProps}: AccessoryIconGraphicProps, ref, Element) => {
    return (
      <SystemIcon
        as={Element}
        ref={ref}
        icon={icon}
        {...handleCsProp(elemProps, accessoryIconStencil({variant}))}
        {...accessoryStencil.parts.icon}
        aria-hidden={true}
      />
    );
  },
});

/**
 * `AccessoryIcon` renders a system icon in an accessory tile. `variant` sets the tile fill and
 * icon color. `color` and `background` on the shared `Accessory` props override the variant. The
 * glyph size comes from `size` on `Accessory` through the icon `data-part`. Always decorative.
 */
export const AccessoryIcon = createComponent('span')({
  displayName: 'AccessoryIcon',
  Component: (
    {
      icon,
      size = 'extraLarge',
      variant = 'grey',
      color,
      background,
      ...elemProps
    }: AccessoryIconProps,
    ref,
    Element
  ) => {
    return (
      <Accessory
        as={Element}
        ref={ref}
        background={background}
        color={color}
        size={size}
        {...handleCsProp(elemProps)}
      >
        <AccessoryIconGraphic icon={icon} variant={variant} />
      </Accessory>
    );
  },
});

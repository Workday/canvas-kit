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

/**
 * Color treatment for `AccessoryIcon`. `variant` paints the icon part. `extraSmall` and `small`
 * clear that fill and border unless `background` sets the tile variable. `color` and `background`
 * on `Accessory` still override the variant.
 */
export const accessoryIconStencil = createStencil({
  parts: {
    icon: 'accessory-icon',
  },
  base: {},
  modifiers: {
    variant: {
      grey: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(
            accessoryStencil.vars.tileBackground,
            system.legacy.color.surface.alt.strong
          ),
          [systemIconStencil.vars.color]: cssVar(
            accessoryStencil.vars.iconColor,
            base.legacy.slate800
          ),
        },
      }),
      green: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(
            accessoryStencil.vars.tileBackground,
            system.legacy.color.surface.success.strong
          ),
          [systemIconStencil.vars.color]: cssVar(
            accessoryStencil.vars.iconColor,
            base.legacy.green800
          ),
        },
      }),
      blue: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(
            accessoryStencil.vars.tileBackground,
            system.legacy.color.surface.info.strong
          ),
          [systemIconStencil.vars.color]: cssVar(
            accessoryStencil.vars.iconColor,
            system.legacy.color.fg.info.strong
          ),
        },
      }),
      purple: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(accessoryStencil.vars.tileBackground, base.legacy.purpleA50),
          [systemIconStencil.vars.color]: cssVar(
            accessoryStencil.vars.iconColor,
            base.legacy.purple700
          ),
        },
      }),
      amber: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(
            accessoryStencil.vars.tileBackground,
            system.legacy.color.surface.warning.strong
          ),
          [systemIconStencil.vars.color]: cssVar(
            accessoryStencil.vars.iconColor,
            system.legacy.color.fg.warning.strong
          ),
        },
      }),
      magenta: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(accessoryStencil.vars.tileBackground, base.legacy.magentaA50),
          [systemIconStencil.vars.color]: cssVar(
            accessoryStencil.vars.iconColor,
            base.legacy.magenta800
          ),
        },
      }),
      red: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(
            accessoryStencil.vars.tileBackground,
            system.legacy.color.surface.danger.strong
          ),
          [systemIconStencil.vars.color]: cssVar(
            accessoryStencil.vars.iconColor,
            system.legacy.color.fg.danger.strong
          ),
        },
      }),
      orange: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(accessoryStencil.vars.tileBackground, base.legacy.orangeA50),
          [systemIconStencil.vars.color]: cssVar(
            accessoryStencil.vars.iconColor,
            base.legacy.orange700
          ),
        },
      }),
      outline: ({iconPart}) => ({
        [iconPart]: {
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
      }),
    },
    size: {
      extraSmall: {},
      small: {},
      medium: {},
      large: {},
      extraLarge: {},
    },
  },
  compound: [
    {
      modifiers: {size: 'extraSmall'},
      styles: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(accessoryStencil.vars.tileBackground, 'transparent'),
          borderWidth: 0,
        },
      }),
    },
    {
      modifiers: {size: 'small'},
      styles: ({iconPart}) => ({
        [iconPart]: {
          backgroundColor: cssVar(accessoryStencil.vars.tileBackground, 'transparent'),
          borderWidth: 0,
        },
      }),
    },
  ],
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
        {...handleCsProp(elemProps, accessoryIconStencil({size, variant}))}
      >
        <SystemIcon icon={icon} {...accessoryStencil.parts.icon} aria-hidden={true} />
      </Accessory>
    );
  },
});

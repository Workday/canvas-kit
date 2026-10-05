import {cornerShapeStencil, createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, component, system} from '@workday/canvas-tokens-web';

import {AccessoryIcon, accessoryIconStencil} from './AccessoryIcon';
import {AccessoryImage} from './AccessoryImage';

/**
 * The size of an `Accessory` tile.
 *
 * * `extraSmall` — 16px tile, 10px icon
 * * `small` — 20px tile, 12px icon
 * * `medium` — 24px tile, 16px icon
 * * `large` — 32px tile, 18px icon
 * * `extraLarge` — 40px tile, 20px icon
 */
export type AccessorySize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export interface AccessoryProps extends CSProps {
  /**
   * The size of the tile. `Accessory.Icon` glyph size follows the tile: 10px, 12px, 16px, 18px,
   * and 20px from `extraSmall` to `extraLarge`. Variant fills are painted at `medium` and above.
   * `small` and `extraSmall` stay transparent unless `Accessory.Icon` sets `background`.
   *
   * * `extraSmall` — 16px
   * * `small` — 20px
   * * `medium` — 24px
   * * `large` — 32px
   * * `extraLarge` — 40px
   *
   * @default 'extraLarge'
   */
  size?: AccessorySize;
}

export const accessoryStencil = createStencil({
  extends: cornerShapeStencil,
  parts: {
    icon: 'accessory-icon',
    image: 'accessory-image',
  },
  base: ({iconPart, imagePart}) => ({
    display: 'inline-flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
    verticalAlign: 'middle',
    [iconPart]: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
    [imagePart]: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
    },
  }),
  modifiers: {
    size: {
      extraSmall: ({iconPart}) => ({
        width: system.legacy.size.xxxs,
        height: system.legacy.size.xxxs,
        [cornerShapeStencil.vars.shape]: system.legacy.shape.sm,
        [iconPart]: {
          [systemIconStencil.vars.size]: base.legacy.size125,
          backgroundColor: cssVar(accessoryIconStencil.vars.tileBackground, 'transparent'),
          borderWidth: 0,
        },
      }),
      small: ({iconPart}) => ({
        width: system.legacy.size.xxs,
        height: system.legacy.size.xxs,
        [cornerShapeStencil.vars.shape]: base.legacy.size75,
        [iconPart]: {
          [systemIconStencil.vars.size]: base.legacy.size150,
          backgroundColor: cssVar(accessoryIconStencil.vars.tileBackground, 'transparent'),
          borderWidth: 0,
        },
      }),
      medium: ({iconPart}) => ({
        width: system.legacy.size.xs,
        height: system.legacy.size.xs,
        [cornerShapeStencil.vars.shape]: system.legacy.shape.md,
        [iconPart]: {
          [systemIconStencil.vars.size]: component.legacy.systemIcon.size.xs,
        },
        '&:has([data-variant="outline"])': {
          borderWidth: px2rem(1),
          borderStyle: 'solid',
          borderColor: system.legacy.color.border.default,
        },
      }),
      large: ({iconPart}) => ({
        width: system.legacy.size.sm,
        height: system.legacy.size.sm,
        [cornerShapeStencil.vars.shape]: base.legacy.size125,
        [iconPart]: {
          [systemIconStencil.vars.size]: component.legacy.systemIcon.size.sm,
        },
        '&:has([data-variant="outline"])': {
          borderWidth: px2rem(1),
          borderStyle: 'solid',
          borderColor: system.legacy.color.border.default,
        },
      }),
      extraLarge: ({iconPart}) => ({
        width: system.legacy.size.md,
        height: system.legacy.size.md,
        [cornerShapeStencil.vars.shape]: system.legacy.shape.lg,
        [iconPart]: {
          [systemIconStencil.vars.size]: component.legacy.systemIcon.size.md,
        },
        '&:has([data-variant="outline"])': {
          borderWidth: px2rem(1),
          borderStyle: 'solid',
          borderColor: system.legacy.color.border.default,
        },
      }),
    },
  },
});

/**
 * `Accessory` is a presentational tile for a leading visual. It owns the tile size, corner radius,
 * and clipping. Place an `Accessory.Icon` or `Accessory.Image` inside it.
 *
 * ```tsx
 * <Accessory>
 *   <Accessory.Icon icon={activityIcon} />
 * </Accessory>
 * ```
 */
export const Accessory = createComponent('span')({
  displayName: 'Accessory',
  Component: ({size = 'extraLarge', ...elemProps}: AccessoryProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, accessoryStencil({size}))} />;
  },
  subComponents: {
    /**
     * `Accessory.Icon` renders a system icon inside the tile. `variant` sets the tile fill and icon
     * color. The glyph size comes from the `size` prop on `Accessory`. `color` and `background`
     * override the variant colors.
     *
     * Pass `aria-label` when the icon conveys information that is not available in adjacent text.
     * Omit it when the icon is decorative.
     */
    Icon: AccessoryIcon,
    /**
     * `Accessory.Image` renders an image that fills the tile. Pass `icon` to center an
     * `Accessory.Icon` on top of the image. `alt` is required. Use an empty string when the image
     * is decorative.
     */
    Image: AccessoryImage,
  },
});

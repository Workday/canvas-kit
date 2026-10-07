import {cornerShapeStencil, createComponent} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, component, system} from '@workday/canvas-tokens-web';

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
   * The size of the tile. Icon glyph size follows the tile through the icon `data-part`: 10px,
   * 12px, 16px, 18px, and 20px from `extraSmall` to `extraLarge`.
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
  /**
   * The color of the icon. When set, this overrides the icon color from `variant` on
   * `AccessoryIcon`. Inherited by the icon `data-part` via a CSS variable.
   */
  color?: string;
  /**
   * The background color of the icon tile. When set, this overrides the fill from `variant` and is
   * painted at every size, including `small` and `extraSmall`. Inherited by the icon `data-part`
   * via a CSS variable.
   */
  background?: string;
}

/**
 * Tile shell for accessory visuals. Owns size, corner radius, icon glyph size, and optional icon
 * color / fill overrides through the icon `data-part`. Prefer `AccessoryIcon`, `AccessoryFile`, or
 * `AccessoryMedia`, which render this shell.
 */
export const accessoryStencil = createStencil({
  extends: cornerShapeStencil,
  vars: {
    iconColor: '',
    tileBackground: '',
  },
  parts: {
    icon: 'accessory-icon',
  },
  base: ({iconColor, iconPart}) => ({
    display: 'inline-flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    verticalAlign: 'middle',
    [iconPart]: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: cssVar(cornerShapeStencil.vars.shape),
      cornerShape: 'superellipse(1.1)',
      [systemIconStencil.vars.color]: cssVar(iconColor),
    },
  }),
  modifiers: {
    size: {
      extraSmall: ({iconPart, tileBackground}) => ({
        width: system.legacy.size.xxxs,
        height: system.legacy.size.xxxs,
        [cornerShapeStencil.vars.shape]: system.legacy.shape.sm,
        [iconPart]: {
          [systemIconStencil.vars.size]: base.legacy.size200,
          backgroundColor: cssVar(tileBackground, 'transparent'),
          borderWidth: 0,
        },
      }),
      small: ({iconPart, tileBackground}) => ({
        width: system.legacy.size.xxs,
        height: system.legacy.size.xxs,
        [cornerShapeStencil.vars.shape]: base.legacy.size75,
        [iconPart]: {
          [systemIconStencil.vars.size]: base.legacy.size225,
          backgroundColor: cssVar(tileBackground, 'transparent'),
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
      }),
      large: ({iconPart}) => ({
        width: system.legacy.size.sm,
        height: system.legacy.size.sm,
        [cornerShapeStencil.vars.shape]: base.legacy.size125,
        [iconPart]: {
          [systemIconStencil.vars.size]: component.legacy.systemIcon.size.sm,
        },
      }),
      extraLarge: ({iconPart}) => ({
        width: system.legacy.size.md,
        height: system.legacy.size.md,
        [cornerShapeStencil.vars.shape]: system.legacy.shape.lg,
        [iconPart]: {
          [systemIconStencil.vars.size]: component.legacy.systemIcon.size.md,
        },
      }),
    },
  },
});

/**
 * `Accessory` is the small rounded visual that sits beside text, most often the leading element in
 * a list item or other row. It owns the tile size and corner radius so a system icon, file type,
 * image, or custom content stays one consistent shape. `AccessoryIcon`, `AccessoryFile`, and
 * `AccessoryMedia` render this shell. Accessories are decorative and always hidden from assistive
 * technology.
 *
 * ```tsx
 * <AccessoryIcon icon={activityIcon} />
 * ```
 */
export const Accessory = createComponent('span')({
  displayName: 'Accessory',
  Component: (
    {size = 'extraLarge', color, background, ...elemProps}: AccessoryProps,
    ref,
    Element
  ) => {
    return (
      <Element
        ref={ref}
        {...handleCsProp(
          elemProps,
          accessoryStencil({size, iconColor: color, tileBackground: background})
        )}
        aria-hidden={true}
      />
    );
  },
});

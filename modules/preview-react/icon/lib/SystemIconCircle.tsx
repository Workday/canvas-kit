import {createComponent} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  calc,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {CanvasSystemIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {SystemIcon, systemIconStencil} from './SystemIcon';

type SystemIconCircleCommonProps = {
  /**
   * The icon to display from `@workday/canvas-accent-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size token of the SystemIconCircle.
   * @default SystemIconCircleSize.l
   */
  size?: string | number;
  /**
   * If set to `true`, transform the SVG's x-axis to mirror the graphic. Use this if you want to
   * always mirror the icon regardless of the content direction. If the SVG should mirror only when
   * in an right-to-left language, use `shouldMirrorInRTL` instead.
   * @default false
   */
  shouldMirror?: boolean;
  /**
   * If set to `true`, transform the SVG's x-axis to mirror the graphic when the content direction
   * is `rtl`. Icons don't have enough context to know if they should be mirrored in all cases.
   * Setting this to `true` indicates the icon should be mirrored in right-to-left languages.
   * @default false
   */
  shouldMirrorInRTL?: boolean;
  /**
   * If set to `true`, the icon will be displayed in inverse mode.
   * @default false
   */
  inverse?: boolean;
} & CSProps;

/**
 * Circle fill and icon color. When `background` is set, `color` is required so foreground/background
 * stay paired for contrast.
 */
export type SystemIconCircleProps =
  | (SystemIconCircleCommonProps & {background?: never; color?: never})
  | (SystemIconCircleCommonProps & {background: string; color: string});

export const systemIconCircleStencil = createStencil({
  vars: {
    background: '',
    color: '',
    size: '',
  },
  base: ({background, color, size}) => ({
    // TODO: Revisit token, using v4 token and fallback to v3 token
    background: cssVar(
      background,
      cssVar(system.color.surface.alt.default, system.color.bg.alt.soft)
    ),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 'none',
    // TODO: Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    overflow: 'hidden',
    // TODO: Revisit token, using v4 token and fallback to v3 token
    width: cssVar(size, cssVar(system.size.md, system.space.x10)),
    // TODO: Revisit token, using v4 token and fallback to v3 token
    height: cssVar(size, cssVar(system.size.md, system.space.x10)),
    // TODO: Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.size]: calc.multiply(
      cssVar(size, cssVar(system.size.md, system.space.x10)),
      0.625
    ),
    [systemIconStencil.vars.color]: color,
    '& img': {
      width: '100%',
      height: '100%',
    },
  }),
  modifiers: {
    inverse: {
      true: ({background, color}) => ({
        // TODO: Revisit token, using v4 token and fallback to v3 token
        background: cssVar(
          background,
          cssVar(system.color.accent.info, system.color.bg.primary.default)
        ),
        [systemIconStencil.vars.color]: cssVar(color, system.color.fg.inverse),
      }),
    },
  },
});

export const SystemIconCircle = createComponent('span')({
  displayName: 'SystemIconCircle',
  Component: (
    {size, icon, shouldMirror, shouldMirrorInRTL, inverse, ...elemProps}: SystemIconCircleProps,
    ref,
    Element
  ) => {
    const {background, color} = elemProps;

    return (
      <div
        {...handleCsProp(
          elemProps,
          systemIconCircleStencil({
            size: typeof size === 'number' ? px2rem(size) : size,
            background,
            color,
            inverse,
          })
        )}
      >
        <SystemIcon
          as={Element}
          ref={ref}
          icon={icon}
          shouldMirror={shouldMirror}
          shouldMirrorInRTL={shouldMirrorInRTL}
        />
      </div>
    );
  },
});

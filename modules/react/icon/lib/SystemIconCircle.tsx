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

import {resolveSize} from './Svg';
import {SystemIcon, systemIconStencil} from './SystemIcon';

/* @deprecated Use tokens instead. Deprecated in v15.0.0. */
export enum SystemIconCircleSize {
  xs = 16,
  s = 24,
  m = 32,
  l = 40,
  xl = 64,
  xxl = 120,
}

/** Mapping utility for the SystemIconCircleSize enum to the system size tokens.
 * @deprecated Use tokens instead. Deprecated in v15.0.0.
 * */
const sizes = {
  xs: system.size.xxxs,
  s: system.size.xs,
  m: system.size.sm,
  l: system.size.md,
  xl: system.size.xxl,
  xxl: px2rem(120),
};

type SystemIconCircleCommonProps = {
  /**
   * The icon to display from `@workday/canvas-accent-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size token of the SystemIconCircle.
   * @default SystemIconCircleSize.l
   */
  size?: SystemIconCircleSize | string | number;
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
    background: cssVar(background, system.color.surface.alt.default),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 'none',
    borderRadius: system.shape.full,
    overflow: 'hidden',
    width: cssVar(size, system.size.md),
    height: cssVar(size, system.size.md),
    // There is no `component.systemIcon.size.*` token for `40px` so leaving `size` here.
    [systemIconStencil.vars.size]: calc.multiply(cssVar(size, system.size.md), 0.625),
    [systemIconStencil.vars.color]: color,
    '& img': {
      width: '100%',
      height: '100%',
    },
  }),
  modifiers: {
    inverse: {
      true: ({background, color}) => ({
        background: cssVar(background, system.color.accent.info),
        [systemIconStencil.vars.color]: cssVar(color, system.color.fg.inverse),
      }),
    },
  },
});

export const SystemIconCircle = createComponent('span')({
  displayName: 'SystemIconCircle',
  Component: (
    {
      background,
      color,
      size,
      icon,
      shouldMirror,
      shouldMirrorInRTL,
      inverse,
      ...elemProps
    }: SystemIconCircleProps,
    ref,
    Element
  ) => {
    return (
      <div
        {...handleCsProp(
          elemProps,
          systemIconCircleStencil({
            size: resolveSize(size, sizes),
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

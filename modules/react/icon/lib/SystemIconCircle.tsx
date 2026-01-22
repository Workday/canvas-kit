import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon, systemIconStencil} from './SystemIcon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {createComponent, pickForegroundColor} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, cssVar, px2rem, CSProps} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {transformColorNameToToken} from './Svg';

export enum SystemIconCircleSize {
  xs = 16,
  s = 24,
  m = 32,
  l = 40,
  xl = 64,
  xxl = 120,
}

export interface SystemIconCircleProps extends CSProps {
  /**
   * The background color of the SystemIconCircle
   * @default base.soap300
   */
  background?: string;
  /**
   * The icon color for the SystemIconCircle. Required if background specified as a CSS variable.
   * If not specified, it will be calculated based on the background color.
   * @default rgba(0,0,0,0.65)
   */
  color?: string;
  /**
   * The icon to display from `@workday/canvas-accent-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIconCircle.
   * @default SystemIconCircleSize.l
   */
  size?: SystemIconCircleSize | number;
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
}

export const systemIconCircleStencil = createStencil({
  vars: {
    containerSize: '',
    background: '',
    color: '',
  },
  base: ({background, containerSize, color}) => ({
    background: cssVar(background, system.color.bg.alt.soft),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: system.space.zero,
    border: 'none',
    borderRadius: system.shape.round,
    overflow: 'hidden',
    width: cssVar(containerSize, system.space.x10),
    height: cssVar(containerSize, system.space.x10),
    [systemIconStencil.vars.size]: calc.multiply(cssVar(containerSize, system.space.x10), 0.625),
    [systemIconStencil.vars.color]: color,
    '& img': {
      width: '100%',
      height: '100%',
    },
  }),
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
      ...elemProps
    }: SystemIconCircleProps,
    ref,
    Element
  ) => {
    // `pickForegroundColor` hasn't support to use css variables to generate foregroundColor
    const backgroundFallback =
      background && !background.startsWith('--') ? background : colors.soap200;

    const iconColor = pickForegroundColor(
      backgroundFallback,
      'rgba(0,0,0,0.65)',
      colors.frenchVanilla100
    );

    return (
      <div
        {...mergeStyles(
          elemProps,
          systemIconCircleStencil({
            containerSize: typeof size === 'number' ? px2rem(size) : size,
            background: transformColorNameToToken(background),
            color: color || iconColor,
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

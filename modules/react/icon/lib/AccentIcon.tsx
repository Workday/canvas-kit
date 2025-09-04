import {colors} from '@workday/canvas-kit-react/tokens';
import {CanvasAccentIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {CSSObject} from '@emotion/styled';
import {createComponent, getColor} from '@workday/canvas-kit-react/common';
import {SystemPropValues} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {Svg, SvgProps, svgStencil, transformColorNameToToken} from './Svg';

/**
 * @deprecated Interface `AccentIconStyles` will be removed in a future version. All props will be moved inside `AccentIconProps`. Consider to use the new tokens set to set `color` prop: `color={base.blueberry500}`.
 */
export interface AccentIconStyles {
  /**
   * The fill color of the AccentIcon.
   * @default base.blueberry500
   */
  color?: SystemPropValues['color'];
  /**
   * If true, set the background fill of the AccentIcon to `transparent`.
   * If false, set the background fill of the AccentIcon to `base.frenchVanilla100`.
   * @default false
   */
  transparent?: boolean;
}

export interface AccentIconProps extends AccentIconStyles, Omit<SvgProps, 'src' | 'type'> {
  /**
   *  The icon to display from `@workday/canvas-accent-icons-web`.
   */
  icon: CanvasAccentIcon;
  /**
   * The size of the AccentIcon in `px`.
   * @default 56
   */
  size?: number;
}

/**
 * @deprecated `accentIconStyles` will be removed in in a future version as a part of implementation of stencils and new tokens. Consider to use `accentIconStencil` instead.
 */
export const accentIconStyles = ({
  color = colors.blueberry500,
  transparent = false,
}: AccentIconStyles): CSSObject => ({
  '& .color-500': {
    fill: getColor(color),
  },
  '& .french-vanilla-100': {
    fill: transparent ? 'transparent' : colors.frenchVanilla100,
  },
});

export const accentIconStencil = createStencil({
  extends: svgStencil,
  vars: {
    color: '',
  },
  base: ({color, size}) => ({
    [size]: px2rem(56),
    '& .color-500': {
      fill: cssVar(color, base.blueberry500),
    },
    '& .french-vanilla-100': {
      fill: base.frenchVanilla100,
    },
  }),
  modifiers: {
    transparent: {
      true: {
        '& .french-vanilla-100': {
          fill: 'transparent',
        },
      },
    },
  },
});

export const AccentIcon = createComponent('span')({
  displayName: 'AccentIcon',
  Component: (
    {transparent, size, icon, color, shouldMirror, ...elemProps}: AccentIconProps,
    ref,
    Element
  ) => {
    return (
      <Svg
        src={icon}
        type={CanvasIconTypes.Accent}
        as={Element}
        ref={ref}
        {...handleCsProp(elemProps, [
          accentIconStencil({
            color: transformColorNameToToken(color),
            size: typeof size === 'number' ? px2rem(size) : undefined,
            shouldMirror,
            transparent,
          }),
        ])}
      />
    );
  },
});

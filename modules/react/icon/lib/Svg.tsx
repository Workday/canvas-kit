import {CanvasIcon, CanvasIconTypes} from '@workday/design-assets-types';
import {validateIconType} from './utils';
import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

export interface SvgProps extends BoxProps {
  src: CanvasIcon;
  type: CanvasIconTypes;
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

export const svgStencil = createStencil({
  vars: {
    /** sets width of svg element */
    width: '',
    /** sets height of svg element */
    height: '',
    /** sets width and height of svg element */
    size: '',
  },
  base: ({width, height, size}) => ({
    display: 'inline-block',
    '> svg': {
      display: 'block',
      width: cssVar(width, size),
      height: cssVar(height, size),
    },
  }),
  modifiers: {
    shouldMirror: {
      true: {
        transform: 'scaleX(-1)',
      },
    },
    shouldMirrorInRTL: {
      true: {
        '&:dir(rtl)': {
          transform: 'scaleX(-1)',
        },
      },
    },
  },
});

/** @deprecated */
export const transformColorNameToToken = (color?: string) => {
  if (color && color in base) {
    return cssVar(base[color as keyof typeof base]);
  }

  if (color?.startsWith('--')) {
    return cssVar(color);
  }

  return color;
};

export const Svg = createComponent('span')({
  displayName: 'Svg',
  Component: (
    {shouldMirror, shouldMirrorInRTL, src, type, ...elemProps}: SvgProps,
    ref,
    Element
  ) => {
    try {
      validateIconType(src, type);
    } catch (e) {
      console.error(e);
      return null;
    }

    return (
      <Element
        ref={ref}
        dangerouslySetInnerHTML={{__html: src.svg}}
        {...mergeStyles(elemProps, svgStencil({shouldMirror, shouldMirrorInRTL}))}
      />
    );
  },
});

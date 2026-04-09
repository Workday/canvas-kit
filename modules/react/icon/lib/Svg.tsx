import {HTMLAttributes} from 'react';

import {CanvasExpressiveIcon} from '@workday/canvas-expressive-icons-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {CanvasIconTypes, CanvasSystemIcon} from '@workday/canvas-system-icons-web';
import {CanvasIcon} from '@workday/design-assets-types';

export interface SvgProps extends CSProps, HTMLAttributes<HTMLSpanElement> {
  src: CanvasSystemIcon | CanvasExpressiveIcon | CanvasIcon;
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
    /** sets width of svg element
     * @deprecated use size instead or svg selector
     */
    width: '',
    /** sets height of svg element
     * @deprecated use size instead or svg selector
     */
    height: '',
    /** sets width and height of svg element */
    size: '',
  },
  base: ({height, size, width}) => ({
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

/**
 * Resolves the size of the SVG based on the size token or string / numeric (px) value.
 * @param size - The size variant or string / numeric (px) value.
 * @param tokens - The tokens to use to resolve the size.
 * @returns The resolved size.
 */
export const resolveSize = <T extends string>(
  size: T | string | number | undefined,
  tokens: Record<T, string>
): string => {
  if (size) {
    return size in tokens
      ? tokens[size as keyof typeof tokens]
      : typeof size === 'number'
        ? px2rem(size)
        : size;
  }

  return '';
};

export const Svg = createComponent('span')({
  displayName: 'Svg',
  Component: (
    {shouldMirror, shouldMirrorInRTL, src, type, ...elemProps}: SvgProps,
    ref,
    Element
  ) => {
    if (src?.type !== type) {
      console.error(`Icon type "${src.type}" does not match expected type "${type}"`);
      return null;
    }

    return (
      <Element
        ref={ref}
        dangerouslySetInnerHTML={{__html: src.svg}}
        {...handleCsProp(elemProps, svgStencil({shouldMirror, shouldMirrorInRTL}))}
      />
    );
  },
});

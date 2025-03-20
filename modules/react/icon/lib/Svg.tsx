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
   * If set to `true`, transform the SVG's x-axis to mirror the graphic
   * @default false
   */
  shouldMirror?: boolean;
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
  Component: ({shouldMirror, src, type, ...elemProps}: SvgProps, ref, Element) => {
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
        {...mergeStyles(elemProps, svgStencil({shouldMirror}))}
      />
    );
  },
});

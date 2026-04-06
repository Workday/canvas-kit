import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import {CanvasExpressiveIcon} from '@workday/canvas-expressive-icons-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {CanvasIconTypes, CanvasSystemIcon} from '@workday/canvas-system-icons-web';

export interface SVGProps extends CSProps {
  src: CanvasSystemIcon | CanvasExpressiveIcon;
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
    /** sets width and height of svg element */
    size: '',
  },
  base: ({size}) => ({
    display: 'inline-block',
    '> svg': {
      display: 'block',
      width: size,
      height: size,
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

export const SVG = createComponent('span')({
  displayName: 'SVG',
  Component: (
    {shouldMirror, shouldMirrorInRTL, src, type, ...elemProps}: SVGProps,
    ref,
    Element
  ) => {
    if (src.type !== type) {
      console.error(`Icon type "${src.type}" does not match expected type "${type}"`);
      return null;
    }

    const sanitizedSvg = DOMPurify.sanitize(src.svg);

    return (
      <Element
        ref={ref}
        {...handleCsProp(elemProps, svgStencil({shouldMirror, shouldMirrorInRTL}))}
      >
        {parse(sanitizedSvg)}
      </Element>
    );
  },
});

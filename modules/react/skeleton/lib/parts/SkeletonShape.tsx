import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

/** Default Surface/Shimmer fill for skeleton placeholders (Shape, Header, Text lines). */
export const skeletonSurfaceFillStencil = createStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    background: cssVar(
      backgroundColor,
      `linear-gradient(to left, ${system.legacy.color.surface.alt.strong}, ${system.legacy.color.surface.loading})`
    ),
    border: `${px2rem(1)} solid transparent`,
    '@media (forced-colors: active)': {
      borderColor: 'CanvasText',
    },
  }),
});

export interface SkeletonShapeProps extends CSProps {
  /**
   *  The width of the shape in `px` or `%`.
   * @default 100%
   */
  width?: number | string;
  /**
   * The height of the shape in `px` or `%`.
   * @default 100%
   */
  height?: number | string;
  /**
   * The borderRadius of the shape in `px` or `%`.
   * @default 0
   */
  borderRadius?: number | string;
  /**
   * The background color of the skeleton
   * @default Surface shimmer gradient (`surface.alt.strong` → `surface.loading`); override with a solid color
   */
  backgroundColor?: string;
}

export const skeletonShapeStencil = createStencil({
  extends: skeletonSurfaceFillStencil,
  vars: {
    width: '',
    height: '',
    borderRadius: '',
    backgroundColor: '',
  },
  base: ({width, height, borderRadius}) => ({
    borderRadius: cssVar(borderRadius, '0'),
    height: cssVar(height, '100%'),
    width: width,
    marginBlockEnd: system.legacy.size.xxxs,
  }),
});

export const SkeletonShape = createComponent('div')({
  displayName: 'Skeleton.Shape',
  Component: (
    {width = '100%', height, backgroundColor, borderRadius, ...elemProps}: SkeletonShapeProps,
    ref,
    Element
  ) => {
    return (
      <Element
        ref={ref}
        {...handleCsProp(
          elemProps,
          skeletonShapeStencil({
            width: typeof width === 'number' ? px2rem(width) : width,
            height: typeof height === 'number' ? px2rem(height) : height,
            backgroundColor,
            borderRadius: typeof borderRadius === 'number' ? px2rem(borderRadius) : borderRadius,
          })
        )}
      />
    );
  },
});

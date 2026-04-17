import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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
   * @default `system.color.bg.alt.strong`
   */
  backgroundColor?: string;
}

export const skeletonShapeStencil = createStencil({
  vars: {
    width: '',
    height: '',
    borderRadius: '',
    backgroundColor: '',
  },
  base: ({width, height, borderRadius, backgroundColor}) => ({
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(
      backgroundColor,
      cssVar(system.color.surface.loading, system.color.bg.alt.strong)
    ),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(borderRadius, '0'),
    height: cssVar(height, '100%'),
    width: width,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginBottom: cssVar(system.size.xxxs, system.space.x4),
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

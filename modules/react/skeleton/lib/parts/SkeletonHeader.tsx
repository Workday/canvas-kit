import {createComponent} from '@workday/canvas-kit-react/common';
import {
  CSProps,
  calc,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {SkeletonShape} from './SkeletonShape';

export interface SkeletonHeaderProps extends CSProps {
  /**
   * The background color of the skeleton
   * @default `system.color.bg.alt.strong`
   */
  backgroundColor?: string;
  /**
   * The height of the shape in `px` or `%`.
   * @default 28px
   */
  height?: number | string;
  /**
   *  The width of the shape in `px` or `%`.
   * @default 100%
   */
  width?: number | string;
}

export const skeletonHeaderStencil = createStencil({
  vars: {
    width: '',
    height: '',
    backgroundColor: '',
  },
  base: ({width, backgroundColor, height}) => ({
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(
      backgroundColor,
      cssVar(system.color.surface.loading, system.color.bg.alt.strong)
    ),
    borderRadius: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(
      height,
      cssVar(system.size.xs, calc.multiply(cssVar(system.gap.xs, system.space.x1), 7))
    ),
    width: width,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginBottom: cssVar(system.size.xxxs, system.space.x4),
  }),
});

export const SkeletonHeader = createComponent('div')<SkeletonHeaderProps>({
  displayName: 'Skeleton.Header',
  Component: (
    {width = '100%', backgroundColor, height, ...elemProps}: SkeletonHeaderProps,
    ref,
    Element
  ) => (
    <SkeletonShape
      ref={ref}
      as={Element}
      {...handleCsProp(
        elemProps,
        skeletonHeaderStencil({
          width: typeof width === 'number' ? px2rem(width) : width,
          backgroundColor,
          height: typeof height === 'number' ? px2rem(height) : height,
        })
      )}
    />
  ),
});

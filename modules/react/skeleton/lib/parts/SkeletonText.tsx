import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface SkeletonTextProps extends CSProps {
  /**
   * The number of "lines" that SkeletonText will display. If there is more than one line, the last line will have a width of `60%`.
   * @default 2
   */
  lineCount?: number;
  /**
   * The background color of the skeleton
   * @default `system.color.bg.alt.strong`
   */
  backgroundColor?: string;
}

export const skeletonTextStencil = createStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginBottom: cssVar(system.size.xs, system.space.x6),
    '& [data-part="skeleton-text-lines"]': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      backgroundColor: cssVar(
        backgroundColor,
        cssVar(system.color.surface.loading, system.color.bg.alt.strong)
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      height: cssVar(system.size.xxxs, px2rem(21)),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      // We do not have a `gap` token for 0.75renm so `padding` is being used here
      marginBlockEnd: cssVar(system.padding.sm, system.space.x3),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderRadius: cssVar(system.shape.md, system.shape.half),
      width: '100%',
    },
    '& [data-part="skeleton-text-lines"]:last-child': {
      width: '60%',
    },
  }),
});

export const SkeletonText = createComponent('div')({
  displayName: 'Skeleton.Text',
  Component: ({backgroundColor, lineCount = 2, ...elemProps}: SkeletonTextProps, ref, Element) => {
    const lines = new Array(lineCount).fill(null);
    return lineCount > 0 ? (
      <Element ref={ref} {...handleCsProp(elemProps, skeletonTextStencil({backgroundColor}))}>
        {lines.map((_value, index) => (
          <div data-part={'skeleton-text-lines'} key={index}></div>
        ))}
      </Element>
    ) : null;
  },
});

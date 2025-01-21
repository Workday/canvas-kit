import * as React from 'react';

import {accessibleHide, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, keyframes} from '@workday/canvas-kit-styling';

import {SkeletonHeader} from './parts/SkeletonHeader';
import {SkeletonShape} from './parts/SkeletonShape';
import {SkeletonText} from './parts/SkeletonText';

export interface SkeletonProps {
  /**
   * For accessibility reasons, `aria-label` is transformed into a text representation
   * (visually hidden, but announced by screen readers) of the loader.
   *
   * IMPORTANT: Since we take over the use of `aria-label` here, the attribute
   * does not get applied to the container element. We anticipate that this will change
   * in a future major version.
   * @default 'Loading'
   */
  'aria-label'?: string;
  children?: React.ReactNode;
}

const fade = keyframes({
  from: {opacity: 0.4},
  to: {opacity: 1},
});

export const skeletonStencil = createStencil({
  base: () => ({
    animation: `${fade} 0.8s linear infinite alternate`,
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    '& [data-part="skeleton-accessible-hide"]': {
      ...accessibleHide,
    },
  }),
});

/**
 * Skeleton subcomponents **must** be wrapped by the `Skeleton` container component.
 *
 * ```tsx
 * <Skeleton>
 *   <Skeleton.Header />
 *   <Skeleton.Text />
 * </Skeleton>
 * ```
 *
 * `Skeleton` places its children in a container element with `aria-hidden` set to `true` and
 * announces itself using a visually hidden element.
 */
export const Skeleton = createComponent('div')({
  displayName: 'Skeleton',
  Component: (
    {children, 'aria-label': loadingAriaLabel = 'Loading', ...elemProps}: SkeletonProps,
    ref,
    Element
  ) => (
    <Element ref={ref} {...handleCsProp(elemProps, skeletonStencil())}>
      <div data-part="skeleton-accessible-hide">{loadingAriaLabel}</div>
      <div aria-hidden={true}>{children}</div>
    </Element>
  ),
  subComponents: {
    /**
     * `Skeleton.Header` renders a placeholder for header content such as headings.
     */
    Header: SkeletonHeader,
    /**
     * `Skeleton.Text` renders a placeholder for text content such as paragraphs. Each placeholder
     * line has a width of `100%` and a fixed height of `21px`, with the last line having a width of
     * `60%` if there are multiple lines.
     */
    Text: SkeletonText,
    /**
     * `Skeleton.Shape` renders a placeholder for graphic elements such as icons, avatars and small
     * images. Set the `height`, `width`, and `borderRadius` props of the `Skeleton.Shape` to create
     * various rectangular and circular shapes.
     */
    Shape: SkeletonShape,
  },
});

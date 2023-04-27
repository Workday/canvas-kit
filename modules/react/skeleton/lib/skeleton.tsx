import * as React from 'react';
import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

import {accessibleHide, createComponent, StyledType} from '@workday/canvas-kit-react/common';

import {SkeletonHeader} from './parts/skeletonHeader';
import {SkeletonShape} from './parts/skeletonShape';
import {SkeletonText} from './parts/skeletonText';

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

const AccessibleHide = styled('div')(accessibleHide);

const fade = keyframes({
  from: {opacity: 0.4},
  to: {opacity: 1},
});

const animation = `${fade} 0.8s linear infinite alternate`;

const SkeletonAnimator = styled('div')<SkeletonProps & StyledType>({
  animation,
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  position: 'relative',
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
    <SkeletonAnimator ref={ref} as={Element} {...elemProps}>
      <AccessibleHide>{loadingAriaLabel}</AccessibleHide>

      <div aria-hidden={true}>{children}</div>
    </SkeletonAnimator>
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

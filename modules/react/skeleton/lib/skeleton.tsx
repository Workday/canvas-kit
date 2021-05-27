import * as React from 'react';
import {keyframes} from '@emotion/core';
import {accessibleHide, createComponent, styled} from '@workday/canvas-kit-react/common';

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
  children: React.ReactNode;
}

const AccessibleHide = styled('div')(accessibleHide);

const fade = keyframes({
  from: {opacity: 0.4},
  to: {opacity: 1},
});
const animation = `${fade} 0.8s linear infinite alternate`;

const SkeletonContainer = styled('div')<SkeletonProps>({
  animation,
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const Skeleton = createComponent()({
  displayName: 'SkeletonTest',
  Component: ({
    children,
    'aria-label': loadingAriaLabel = 'Loading',
    ...elemProps
  }: SkeletonProps) => (
    <SkeletonContainer {...elemProps}>
      <AccessibleHide>{loadingAriaLabel}</AccessibleHide>

      <div aria-hidden={true}>{children}</div>
    </SkeletonContainer>
  ),
  subComponents: {
    Container: SkeletonContainer,
  },
});

export default Skeleton;

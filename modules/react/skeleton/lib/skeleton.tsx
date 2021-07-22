import * as React from 'react';
import {keyframes} from '@emotion/core';
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
    Header: SkeletonHeader,
    Shape: SkeletonShape,
    Text: SkeletonText,
  },
});

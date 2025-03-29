import * as React from 'react';

import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';

import {useBannerLabel, useBannerModel} from './hooks';

export interface BannerLabelProps extends ExtractProps<typeof Flex, never> {
  /**
   * The text of the Banner.
   */
  children: React.ReactNode;
}

export const bannerLabelStencil = createStencil({
  base: {
    display: 'flex',
    flex: '1 1 0%',
  },
});

export const BannerLabel = createSubcomponent('div')({
  displayName: 'Banner.Label',
  modelHook: useBannerModel,
  elemPropsHook: useBannerLabel,
})<BannerLabelProps>(({children, ...elemProps}, Element) => {
  return <Element {...mergeStyles(elemProps, bannerLabelStencil())}>{children}</Element>;
});

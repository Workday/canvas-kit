import * as React from 'react';

import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';

import {useBannerActionText, useBannerModel} from './hooks';
import {createStencil} from '@workday/canvas-kit-styling';

export interface BannerActionTextProps extends ExtractProps<typeof Box, never> {
  /**
   * The text of the Banner action.
   * @default 'View All'
   */
  children?: React.ReactNode;
}

export const actionBarTextStencil = createStencil({
  base: {
    textDecoration: 'underline',
    display: 'inline',
  },
  modifiers: {
    isSticky: {
      true: {
        display: 'none',
      },
    },
  },
});

export const BannerActionText = createSubcomponent('span')({
  displayName: 'Banner.ActionTextText',
  modelHook: useBannerModel,
  elemPropsHook: useBannerActionText,
})<BannerActionTextProps>(({children = 'View All', ...elemProps}, Element, model) => {
  return (
    <Element {...mergeStyles(elemProps, actionBarTextStencil({isSticky: model.state.isSticky}))}>
      {children}
    </Element>
  );
});

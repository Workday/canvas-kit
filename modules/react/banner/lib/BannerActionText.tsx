import * as React from 'react';

import {ExtractProps, createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-labs-react/common';

import {BannerModelContext} from './Banner';
import {BannerModel, useBannerActionText} from './hooks';

export interface BannerActionTextProps extends ExtractProps<typeof Box, never> {
  model?: BannerModel;
  /**
   * The text of the Banner action.
   * @default 'View All'
   */
  children?: React.ReactNode;
}

export const BannerActionText = createComponent('span')({
  displayName: 'Banner.ActionTextText',
  Component: (
    {children = 'View All', model, ...elemProps}: BannerActionTextProps,
    ref,
    Element
  ) => {
    const localModel = useModelContext(BannerModelContext, model);
    const props = useBannerActionText(localModel, elemProps, ref);

    return (
      <Box
        display={localModel.state.isSticky ? 'none' : 'inline'}
        as={Element}
        style={{textDecoration: 'underline'}}
        {...props}
      >
        {children}
      </Box>
    );
  },
});

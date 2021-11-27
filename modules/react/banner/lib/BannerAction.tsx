/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';

import {ExtractProps, createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {CSSProperties} from '@workday/canvas-kit-react/tokens';

import {BannerModelContext} from './Banner';
import {BannerModel, useBannerAction} from './hooks';

export interface BannerActionProps extends ExtractProps<typeof Box, never> {
  model?: BannerModel;
  /**
   * The text of the Banner action.
   * @default 'View All'
   */
  children?: React.ReactNode;
}

const styles: CSSProperties = {
  textDecoration: 'underline',
};

export const BannerAction = createComponent('span')({
  displayName: 'Banner.Action',
  Component: ({children = 'View All', model, ...elemProps}: BannerActionProps, ref, Element) => {
    const localModel = useModelContext(BannerModelContext, model);
    const props = useBannerAction(localModel, elemProps, ref);

    return (
      <Box
        display={localModel.state.isSticky ? 'none' : 'inline'}
        as={Element}
        css={[styles]}
        {...props}
      >
        {children}
      </Box>
    );
  },
});

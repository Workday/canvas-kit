import * as React from 'react';

import {
  ExtractProps,
  createComponent,
  useModelContext,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
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

const StyledActionBarText = styled(Box.as('span'))<StyledType>({
  textDecoration: 'underline',
});

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
      <StyledActionBarText
        display={localModel.state.isSticky ? 'none' : 'inline'}
        ref={ref}
        as={Element}
        {...props}
      >
        {children}
      </StyledActionBarText>
    );
  },
});

import * as React from 'react';

import {
  ExtractProps,
  createSubcomponent,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

import {useBannerActionText, useBannerModel} from './hooks';

export interface BannerActionTextProps extends ExtractProps<typeof Box, never> {
  /**
   * The text of the Banner action.
   * @default 'View All'
   */
  children?: React.ReactNode;
}

const StyledActionBarText = styled(Box.as('span'))<StyledType>({
  textDecoration: 'underline',
});

export const BannerActionText = createSubcomponent('span')({
  displayName: 'Banner.ActionTextText',
  modelHook: useBannerModel,
  elemPropsHook: useBannerActionText,
})<BannerActionTextProps>(({children = 'View All', ...elemProps}, Element, model) => {
  return (
    <StyledActionBarText
      as={Element}
      display={model.state.isSticky ? 'none' : 'inline'}
      {...elemProps}
    >
      {children}
    </StyledActionBarText>
  );
});

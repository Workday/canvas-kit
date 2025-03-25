import * as React from 'react';

import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

import {useBannerLabel, useBannerModel} from './hooks';

const parentContainerStyles = createStyles({
  flex: '1 1 0%',
});

export interface BannerLabelProps extends ExtractProps<typeof Flex, never> {
  /**
   * The text of the Banner.
   */
  children: React.ReactNode;
}

export const BannerLabel = createSubcomponent('div')({
  displayName: 'Banner.Label',
  modelHook: useBannerModel,
  elemPropsHook: useBannerLabel,
})<BannerLabelProps>(({children, ...elemProps}, Element) => {
  return (
    <Flex as={Element} cs={parentContainerStyles} {...elemProps}>
      {children}
    </Flex>
  );
});

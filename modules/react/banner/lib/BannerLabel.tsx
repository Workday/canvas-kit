import * as React from 'react';

import {ExtractProps, createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-labs-react/layout';

import {BannerModelContext} from './Banner';
import {BannerModel, useBannerLabel} from './hooks';

export interface BannerLabelProps extends ExtractProps<typeof Flex, never> {
  model?: BannerModel;
  /**
   * The text of the Banner.
   */
  children: React.ReactNode;
}

export const BannerLabel = createComponent('div')({
  displayName: 'Banner.Label',
  Component: ({children, model, ...elemProps}: BannerLabelProps, ref, Element) => {
    const localModel = useModelContext(BannerModelContext, model);
    const props = useBannerLabel(localModel, elemProps, ref);

    return (
      <Flex as={Element} flex="1 1 0%" {...props}>
        {children}
      </Flex>
    );
  },
});

import * as React from 'react';

import {space, commonColors} from '@workday/canvas-kit-react/core';
import {
  composeHooks,
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {useRovingFocusList} from './cursor';
import {TabsModelContext} from './Tabs';
import {useResetCursorOnBlur} from './hooks';
import {TabsModel} from './useTabsModel';

export interface TabListProps {
  /**
   *
   */
  children: React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases.
   */
  model?: TabsModel;
}

const TabsListContainer = styled('div')({
  display: 'inline-block',
  position: 'relative',
  width: `100%`,
  borderBottom: `1px solid ${commonColors.divider}`,
});

const TabsListInnerContainer = styled('div')<StyledType>({
  display: `flex`,
  margin: `0 ${space.m}`,
});

export const TabList = createComponent('div')({
  displayName: 'Tabs.List',
  Component: ({children, model, ...elemProps}: TabListProps, ref, Element) => {
    const localModel = useModelContext(TabsModelContext, model);
    const props = composeHooks(useRovingFocusList, useResetCursorOnBlur)(
      localModel,
      elemProps,
      ref
    );

    return (
      <TabsListContainer>
        <TabsListInnerContainer as={Element} ref={ref} role="tablist" {...props}>
          {children}
        </TabsListInnerContainer>
      </TabsListContainer>
    );
  },
});

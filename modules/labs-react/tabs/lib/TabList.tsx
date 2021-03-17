import * as React from 'react';

import {spacing, commonColors} from '@workday/canvas-kit-react/core';
import {
  composeHooks,
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {useRovingFocus, getNext} from './cursor';
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
  margin: `0 ${spacing.m}`,
});

export const TabList = createComponent('div')({
  displayName: 'Tabs.List',
  Component: ({children, model, ...elemProps}: TabListProps, ref, Element) => {
    const {state, events} = useModelContext(TabsModelContext, model);
    const props = composeHooks(useRovingFocus, useResetCursorOnBlur)({state, events}, elemProps);

    events.useSubscription('unregisterItem', ({data, prevState}) => {
      if (prevState.cursorId === data.id && document.activeElement === document.body) {
        // refs are null right now, wait for before painting to update focus
        requestAnimationFrame(() => {
          // only if at least one ref is not null
          if (prevState.items.some(i => i.ref.current !== null)) {
            const item = getNext(prevState.cursorId, prevState.items);
            events.activate({tab: item.id});
          }
        });
      }
    });

    return (
      <TabsListContainer>
        <TabsListInnerContainer as={Element} ref={ref} role="tablist" {...props}>
          {children}
        </TabsListInnerContainer>
      </TabsListContainer>
    );
  },
});

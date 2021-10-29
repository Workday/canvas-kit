import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  composeHooks,
  createComponent,
  createHook,
  ExtractProps,
  subModelHook,
  useLocalRef,
  useModelContext,
  useMountLayout,
  useWindowSize,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-labs-react/layout';

import {TabsModelContext} from './Tabs';
import {useResetCursorOnBlur} from './hooks';
import {TabsModel} from './useTabsModel';
import {OverflowModel} from './overflow';

export interface TabListProps<T> extends ExtractProps<typeof Flex, never> {
  /**
   *
   */
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases.
   */
  model?: TabsModel<T>;
  overflowButton?: () => React.ReactNode;
}

const useMeasureOverflowContainer = createHook(
  (model: OverflowModel<unknown>, ref?: React.Ref<HTMLElement>) => {
    const {elementRef, localRef} = useLocalRef(ref);

    const onResize = () => {
      if (localRef.current) {
        model.events.setContainerWidth({
          width: localRef.current.offsetWidth,
        });
      }
    };

    useMountLayout(() => {
      if (localRef.current) {
        model.events.setContainerWidth({
          width: localRef.current.offsetWidth,
        });
      }
    });

    useMountLayout(() => {
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
      };
    });

    return {
      ref: elementRef,
    };
  }
);

const useTabList = composeHooks(
  createHook((model: TabsModel<unknown>) => {
    return {role: 'tablist'};
  }),
  subModelHook(model => model.visibleTabs, useMeasureOverflowContainer),
  useResetCursorOnBlur
);

export const TabsList = createComponent('div')({
  displayName: 'Tabs.List',
  Component: (
    {children, model, overflowButton, ...elemProps}: TabListProps<unknown>,
    ref,
    Element
  ) => {
    const localModel = useModelContext(TabsModelContext, model);
    const props = useTabList(localModel, elemProps, ref);

    return (
      <Flex
        as={Element}
        position="relative"
        borderBottom={`1px solid ${commonColors.divider}`}
        marginX="m"
        {...props}
      >
        {typeof children === 'function'
          ? localModel.visibleTabs.state.items.map(item => children(item))
          : children}
        {overflowButton?.()}
      </Flex>
    );
  },
});

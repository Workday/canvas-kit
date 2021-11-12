import * as React from 'react';

import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {
  createComponent,
  useModelContext,
  createHook,
  composeHooks,
  subModelHook,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';
import {StyledTabItem} from './TabsItem';
import {useOverflowTarget} from './overflow';
import {useMenuTarget} from './menu/MenuTarget';

export interface OverflowButtonProps {
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: TabsModel;
}

export const TabsOverflowButton = createComponent('button')({
  displayName: 'Tabs.OverflowButton',
  Component: ({model, children, ...elemProps}: OverflowButtonProps, ref, Element) => {
    const localModel = useModelContext(TabsModelContext, model);

    const props = useTabsOverflowButton(localModel, elemProps, ref);

    return (
      <StyledTabItem hasIcon={true} type="button" as={Element} {...props}>
        {children} <SystemIcon style={{paddingLeft: 4}} icon={chevronDownSmallIcon} />
      </StyledTabItem>
    );
  },
});

export const useTabsOverflowButton = composeHooks(
  createHook(
    (model: TabsModel, _?: React.Ref<HTMLButtonElement>, elemProps: {name?: string} = {}) => {
      return {
        'aria-haspopup': true,
      };
    }
  ),
  useOverflowTarget,
  subModelHook((m: TabsModel) => m.menu, useMenuTarget)
);

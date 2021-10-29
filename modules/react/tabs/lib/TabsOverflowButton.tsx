import * as React from 'react';

import {
  createComponent,
  useModelContext,
  createHook,
  composeHooks,
  subModelHook,
  useLocalRef,
  useMountLayout,
} from '@workday/canvas-kit-react/common';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';
import {StyledButton} from './TabsItem';
import {usePopupTarget} from '../..';
import {OverflowModel} from './overflow';

export interface OverflowButtonProps {
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: TabsModel<unknown>;
}

const hiddenStyle = {
  position: 'absolute',
  left: -99999,
};

const useOverflowTarget = createHook(
  (model: OverflowModel<unknown>, ref?: React.Ref<HTMLButtonElement>) => {
    const {elementRef, localRef} = useLocalRef(ref);
    // track first render to force correct size calculations
    const firstRender = React.useRef(true);

    useMountLayout(() => {
      firstRender.current = false;
      if (localRef.current) {
        const styles = getComputedStyle(localRef.current);

        model.events.setOverflowTargetWidth({
          width:
            localRef.current.offsetWidth +
            parseFloat(styles.marginLeft) +
            parseFloat(styles.marginRight),
        });
      }
    });

    const isHidden = !model.state.hiddenKeys.length;

    return {
      ref: elementRef,
      // hidden: isHidden,
      style: isHidden ? hiddenStyle : {},
    };
  }
);

const useOverflowButton = composeHooks(
  createHook(
    (
      model: TabsModel<unknown>,
      _?: React.Ref<HTMLButtonElement>,
      elemProps: {name?: string} = {}
    ) => {
      return {
        'aria-haspopup': true,
      };
    }
  ),
  subModelHook((m: TabsModel<unknown>) => m.visibleTabs, useOverflowTarget),
  subModelHook((m: TabsModel<unknown>) => m.menu, usePopupTarget)
);

export const TabsOverflowButton = createComponent('button')({
  displayName: 'Tabs.Item',
  Component: ({model, children, ...elemProps}: OverflowButtonProps, ref, Element) => {
    const localModel = useModelContext(TabsModelContext, model);

    const props = useOverflowButton(localModel, elemProps, ref);

    return (
      <StyledButton type="button" as={Element} {...props}>
        {children}
      </StyledButton>
    );
  },
});

import * as React from 'react';

import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {
  createComponent,
  useModelContext,
  createHook,
  composeHooks,
  subModelHook,
  useLocalRef,
  useMountLayout,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';
import {StyledTabItem} from './TabsItem';
import {OverflowModel} from './overflow';
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

// use a hidden style instead of `hidden` attribute for measurement purposes. `hidden` elements have no dimensions
const hiddenStyle = {
  position: 'absolute',
  left: -99999,
};

const useOverflowTarget = createHook((model: OverflowModel, ref?: React.Ref<HTMLButtonElement>) => {
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
    'aria-hidden': isHidden,
    style: isHidden ? hiddenStyle : {},
  };
});

const useTabsOverflowButton = composeHooks(
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

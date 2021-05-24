import * as React from 'react';

import {
  createComponent,
  useModelContext,
  createHook,
  useForkRef,
  composeHooks,
  composeHooks2,
  composeHooks3,
  mergeProps,
} from '@workday/canvas-kit-react/common';
import {Button} from '@workday/canvas-kit-react/button';

import {PopupModel} from '@workday/canvas-kit-react/popup';
import {PopupModelContext} from './Popup';

export interface PopupTargetProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
  children?: React.ReactNode;
}

export const usePopupTargetButton = createHook(({events, state}: PopupModel, ref) => {
  const elementRef = useForkRef(ref, state.targetRef);
  return {
    ref: elementRef,
    onClick: events.show,
  };
});

const useTemp = createHook((model: PopupModel) => {
  return {
    foo: 'bar',
  };
});

const useTemp2 = (model: PopupModel, elemProps: {}) => {
  return mergeProps(
    {
      foo: 'bar',
    },
    elemProps
  );
};

const useTemp1 = (model: PopupModel, elemProps: {}) => {
  return mergeProps(
    {
      button: 'bar',
    },
    elemProps
  );
};

export const PopupTarget = createComponent(Button)({
  displayName: 'Popup.Target',
  Component: ({children, model, ...elemProps}: PopupTargetProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = usePopupTargetButton(localModel, {foo: 'bar'}, ref);

    const useNewHook = composeHooks(usePopupTargetButton, useTemp); //(localModel, {bar: 'baz'}, ref);
    const props2 = useNewHook(localModel, {bar: 'baz'}, ref);

    return <Element {...props}>{children}</Element>;
  },
});

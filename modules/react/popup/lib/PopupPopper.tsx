import * as React from 'react';

import {
  createComponent,
  useModelContext,
  createHook,
  useForkRef,
} from '@workday/canvas-kit-react/common';

import {PopupModel} from './usePopupModel';
import {PopupModelContext} from './Popup';
import {Placement, PopperOptions, Popper} from './Popper';

export interface PopupPopperProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
  /**
   * The placement of the `Popper` contents relative to the `anchorElement`. Accepts `auto`, `top`,
   * `right`, `bottom`, or `left`. Each placement can also be modified using any of the following
   * variations: `-start` or `-end`.
   * @default bottom
   */
  placement?: Placement;
  /**
   * The additional options passed to the Popper's `popper.js` instance.
   */
  popperOptions?: Partial<PopperOptions>;
  children?: React.ReactNode;
}

/**
 * Hooks a Popper up to a PopupModel
 */
export const usePopupPopper = createHook(({state, events}: PopupModel, ref) => {
  const elementRef = useForkRef(ref, state.stackRef);
  const onPlacementChange = React.useCallback(
    (placement: Placement) => {
      if (placement !== state.placement) {
        // only update if the placement has changed
        events.updatePlacement({placement});
      }
    },
    [events, state.placement]
  );

  return {
    open: state.visibility !== 'hidden',
    anchorElement: state.targetRef,
    ref: elementRef,
    onPlacementChange,
  };
});

export const PopupPopper = createComponent('div')({
  displayName: 'Popup.Popper',
  Component: ({children, model, ...elemProps}: PopupPopperProps, ref) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = usePopupPopper(localModel, elemProps, ref);
    return <Popper {...props}>{children}</Popper>;
  },
});

import * as React from 'react';
import {createEventMap, Model, ToModelConfig, useEventMap} from '@workday/canvas-kit-react/common';

import {
  DisclosureEvents,
  DisclosureState,
  useDisclosureModel,
  disclosureEventMap,
  BaseDisclosureModelConfig,
  DisclosureModelConfig,
} from '@workday/canvas-kit-react/disclosure';
import type {Placement} from '@workday/canvas-kit-react/popup';

export type PopupState = DisclosureState & {
  /**
   * Reference of the stack item used in the PopupStack. This value will be used in all
   * Popup-related behaviors.
   */
  stackRef: React.RefObject<HTMLDivElement>;
  /**
   * Reference of the target element. This will point to the element that triggered the showing of a
   * Popup and is used in Popup-related behaviors.
   */
  targetRef: React.RefObject<HTMLButtonElement>;
  /**
   * Optional reference to an element that should receive focus when a popup is shown. If left blank,
   * focus will be moved to the first focusable element inside the popup.
   */
  initialFocusRef?: React.RefObject<any>;
  /**
   * Optional reference to an element that should receive focus when a popup is hidden. If left
   * blank, focus will return to the `targetRef`
   */
  returnFocusRef?: React.RefObject<any>;
  /**
   * The placement chosen by the positioning Popper. This should get set prior to showing the popup
   * content.
   * @default 'bottom'
   */
  placement: Placement;
};

export type PopupEvents = DisclosureEvents & {
  /**
   * Called whenever a popup placement changes around a target. This is useful for animations that
   * depend on the placement chosen.
   */
  updatePlacement(data: {placement: Placement}): void;
};

export type PopupModel = Model<PopupState, PopupEvents>;

export const popupEventMap = createEventMap<PopupEvents>()({
  guards: {
    ...disclosureEventMap.guards,
    /**
     * Determines if the `placement` state should be updated. This might be useful to keep the
     * animation going a certain direction regardless of placement chosen by PopperJS.
     */
    shouldUpdatePlacement: 'updatePlacement',
  },
  callbacks: {
    ...disclosureEventMap.callbacks,
    /**
     * Called whenever the placement changes. This callback only fires when placement changes. For
     * example, if the preferred placement of a Popper is 'bottom' and there's enough room to place
     * a Popup on the bottom, the Popup will render below a target element without firing this
     * callback. If there is not enough room and PopperJS chooses to update, this callback will be
     * called to inform of the change in placement.
     */
    onUpdatePlacement: 'updatePlacement',
  },
});

export type BasePopupModelConfig = BaseDisclosureModelConfig & {
  /**
   * Optional reference to an element that should receive focus when a popup is hidden. If left
   * blank, focus will return to the `targetRef`
   */
  returnFocusRef?: React.RefObject<any>;
  /**
   * Optional reference to an element that should receive focus when a popup is shown. If left blank,
   * focus will be moved to the first focusable element inside the popup.
   */
   initialFocusRef?: React.RefObject<any>;
};

export type PopupModelConfig = BasePopupModelConfig &
  Partial<ToModelConfig<PopupState, PopupEvents, typeof popupEventMap>>;

export const usePopupModel = (config: PopupModelConfig = {}): PopupModel => {
  const stackRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);
  const [placement, setPlacement] = React.useState<Placement>('bottom');
  const disclosure = useDisclosureModel(config as DisclosureModelConfig);

  const state = {
    ...disclosure.state,
    stackRef,
    targetRef,
    initialFocusRef: config.initialFocusRef,
    returnFocusRef: config.returnFocusRef,
    placement,
  };

  const events = useEventMap(popupEventMap, state, config, {
    ...disclosure.events,
    updatePlacement({placement}) {
      setPlacement(placement);
    },
  });

  return {
    state,
    events,
  };
};

// eslint-disable-next-line no-empty-function
const noop = () => {};

// create enough of a model to use `Popup.Card` without a `Popup` container component.
export const PopupModelContext = React.createContext<PopupModel>({
  state: {},
  events: {show: noop, hide: noop},
} as any);

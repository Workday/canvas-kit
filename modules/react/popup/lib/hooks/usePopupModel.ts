import * as React from 'react';
import {createModelHook, ModelExtras, ToEventConfig} from '@workday/canvas-kit-react/common';

import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {Placement} from '@workday/canvas-kit-react/popup';

// eslint-disable-next-line no-empty-function
const noop = () => {};

const foo = {
  bar: 'baz',
};

export const usePopupModel = createModelHook({
  // create enough of a model to use `Popup.Card` without a `Popup` container component.
  // defaultContext: {state: {}, events: {show: noop, hide: noop}},
  defaultConfig: {
    ...useDisclosureModel.defaultConfig,
    /**
     * Optional reference to an element that should receive focus when a popup is hidden. If left
     * blank, focus will return to the `targetRef`
     */
    returnFocusRef: undefined as undefined | React.RefObject<any>,
    /**
     * Optional reference to an element that should receive focus when a popup is shown. If left blank,
     * focus will be moved to the first focusable element inside the popup.
     */
    initialFocusRef: undefined as undefined | React.RefObject<any>,
  },
  requiredConfig: useDisclosureModel.requiredConfig,
})(config => {
  const stackRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);
  const [placement, setPlacement] = React.useState<Placement>('bottom');
  const disclosure = useDisclosureModel(config);

  const state = {
    ...disclosure.state,
    /**
     * Reference of the stack item used in the PopupStack. This value will be used in all
     * Popup-related behaviors.
     */
    stackRef,
    /**
     * Reference of the target element. This will point to the element that triggered the showing of a
     * Popup and is used in Popup-related behaviors.
     */
    targetRef,
    /**
     * Optional reference to an element that should receive focus when a popup is shown. If left blank,
     * focus will be moved to the first focusable element inside the popup.
     */
    initialFocusRef: config.initialFocusRef,
    /**
     * Optional reference to an element that should receive focus when a popup is hidden. If left
     * blank, focus will return to the `targetRef`
     */
    returnFocusRef: config.returnFocusRef,
    /**
     * The placement chosen by the positioning Popper. This should get set prior to showing the popup
     * content.
     * @default 'bottom'
     */
    placement,
  };

  const events = {
    ...disclosure.events,
    /**
     * Called whenever a popup placement changes around a target. This is useful for animations that
     * depend on the placement chosen.
     */
    updatePlacement(data: {placement: Placement}) {
      setPlacement(data.placement);
    },
  };

  return {
    state,
    events,
  };
});

// export type _PopupModel = ReturnType<typeof _usePopupModel>;
// export interface PopupModel extends _PopupModel {}
// export type _PopupState = _PopupModel['state'];
// export type _PopupEvents = _PopupModel['events'];
// export interface PopupState extends _PopupState {}
// export interface PopupEvents extends _PopupEvents {}
// export type PopupDefaultConfig = typeof _usePopupModel.defaultConfig &
//   ToEventConfig<PopupState, PopupEvents>;
// export type PopupRequiredConfig = typeof _usePopupModel.requiredConfig;
// export interface PopupModelConfig extends Partial<PopupDefaultConfig>, PopupRequiredConfig {}
// export interface PopupModelHook
//   extends ModelExtras<
//     typeof _usePopupModel.defaultConfig,
//     typeof _usePopupModel.requiredConfig,
//     PopupState,
//     PopupEvents,
//     PopupModel
//   > {
//   (config?: PopupModelConfig): PopupModel;
// }
// export const usePopupModel: PopupModelHook = _usePopupModel;

// // create enough of a model to use `Popup.Card` without a `Popup` container component.
// export const PopupModelContext = usePopupModel.Context;

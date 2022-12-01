import * as React from 'react';
import {ModelExtras, ToEventConfig} from '@workday/canvas-kit-react/common';
import {Placement} from '@workday/canvas-kit-react/popup';
declare const _usePopupModel: (<TT_Special_Generic>(
  config?:
    | (Partial<{
        /**
         * Optional reference to an element that should receive focus when a popup is hidden. If left
         * blank, focus will return to the `targetRef`
         */
        returnFocusRef: React.RefObject<any> | undefined;
        /**
         * Optional reference to an element that should receive focus when a popup is shown. If left blank,
         * focus will be moved to the first focusable element inside the popup.
         */
        initialFocusRef: React.RefObject<any> | undefined;
        id: string;
        initialVisibility: import('@workday/canvas-kit-react/disclosure').Visibility;
      }> & {
        onUpdatePlacement?:
          | ((
              data: {
                placement: Placement;
              },
              prevState: PopupState
            ) => void)
          | undefined;
        onShow?:
          | ((
              data: Event | React.SyntheticEvent<Element, Event> | undefined,
              prevState: PopupState
            ) => void)
          | undefined;
        onHide?:
          | ((
              data: Event | React.SyntheticEvent<Element, Event> | undefined,
              prevState: PopupState
            ) => void)
          | undefined;
      } & {
        shouldUpdatePlacement?:
          | ((
              data: {
                placement: Placement;
              },
              state: PopupState
            ) => boolean)
          | undefined;
        shouldShow?:
          | ((
              data: Event | React.SyntheticEvent<Element, Event> | undefined,
              state: PopupState
            ) => boolean)
          | undefined;
        shouldHide?:
          | ((
              data: Event | React.SyntheticEvent<Element, Event> | undefined,
              state: PopupState
            ) => boolean)
          | undefined;
      })
    | undefined
) => {
  state: {
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
    initialFocusRef: React.RefObject<any> | undefined;
    /**
     * Optional reference to an element that should receive focus when a popup is hidden. If left
     * blank, focus will return to the `targetRef`
     */
    returnFocusRef: React.RefObject<any> | undefined;
    /**
     * The placement chosen by the positioning Popper. This should get set prior to showing the popup
     * content.
     * @default 'bottom'
     */
    placement: import('@popperjs/core').Placement;
    id: string;
    visibility: 'hidden' | 'visible';
  };
  events: {
    /**
     * Called whenever a popup placement changes around a target. This is useful for animations that
     * depend on the placement chosen.
     */
    updatePlacement(data: {placement: Placement}): void;
    show(event?: Event | React.SyntheticEvent<Element, Event> | undefined): void;
    hide(event?: Event | React.SyntheticEvent<Element, Event> | undefined): void;
  };
}) &
  ModelExtras<
    {
      /**
       * Optional reference to an element that should receive focus when a popup is hidden. If left
       * blank, focus will return to the `targetRef`
       */
      returnFocusRef: React.RefObject<any> | undefined;
      /**
       * Optional reference to an element that should receive focus when a popup is shown. If left blank,
       * focus will be moved to the first focusable element inside the popup.
       */
      initialFocusRef: React.RefObject<any> | undefined;
      id: string;
      initialVisibility: import('@workday/canvas-kit-react/disclosure').Visibility;
    },
    {},
    {
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
      initialFocusRef: React.RefObject<any> | undefined;
      /**
       * Optional reference to an element that should receive focus when a popup is hidden. If left
       * blank, focus will return to the `targetRef`
       */
      returnFocusRef: React.RefObject<any> | undefined;
      /**
       * The placement chosen by the positioning Popper. This should get set prior to showing the popup
       * content.
       * @default 'bottom'
       */
      placement: import('@popperjs/core').Placement;
      id: string;
      visibility: 'hidden' | 'visible';
    },
    {
      /**
       * Called whenever a popup placement changes around a target. This is useful for animations that
       * depend on the placement chosen.
       */
      updatePlacement(data: {placement: Placement}): void;
      show(event?: Event | React.SyntheticEvent<Element, Event> | undefined): void;
      hide(event?: Event | React.SyntheticEvent<Element, Event> | undefined): void;
    },
    {
      state: {
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
        initialFocusRef: React.RefObject<any> | undefined;
        /**
         * Optional reference to an element that should receive focus when a popup is hidden. If left
         * blank, focus will return to the `targetRef`
         */
        returnFocusRef: React.RefObject<any> | undefined;
        /**
         * The placement chosen by the positioning Popper. This should get set prior to showing the popup
         * content.
         * @default 'bottom'
         */
        placement: import('@popperjs/core').Placement;
        id: string;
        visibility: 'hidden' | 'visible';
      };
      events: {
        /**
         * Called whenever a popup placement changes around a target. This is useful for animations that
         * depend on the placement chosen.
         */
        updatePlacement(data: {placement: Placement}): void;
        show(event?: Event | React.SyntheticEvent<Element, Event> | undefined): void;
        hide(event?: Event | React.SyntheticEvent<Element, Event> | undefined): void;
      };
    }
  >;

export interface PopupDefaultConfig {
  /**
   * Optional reference to an element that should receive focus when a popup is hidden. If left
   * blank, focus will return to the `targetRef`
   */
  returnFocusRef: React.RefObject<any> | undefined;
  /**
   * Optional reference to an element that should receive focus when a popup is shown. If left blank,
   * focus will be moved to the first focusable element inside the popup.
   */
  initialFocusRef: React.RefObject<any> | undefined;
  id: string;
  initialVisibility: import('@workday/canvas-kit-react/disclosure').Visibility;
}

export interface PopupRequiredConfig {}

export interface PopupState {
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
  initialFocusRef: React.RefObject<any> | undefined;
  /**
   * Optional reference to an element that should receive focus when a popup is hidden. If left
   * blank, focus will return to the `targetRef`
   */
  returnFocusRef: React.RefObject<any> | undefined;
  /**
   * The placement chosen by the positioning Popper. This should get set prior to showing the popup
   * content.
   * @default 'bottom'
   */
  placement: import('@popperjs/core').Placement;
  id: string;
  visibility: 'hidden' | 'visible';
}

export interface PopupEvents {
  /**
   * Called whenever a popup placement changes around a target. This is useful for animations that
   * depend on the placement chosen.
   */
  updatePlacement(data: {placement: Placement}): void;
  show(event?: Event | React.SyntheticEvent<Element, Event> | undefined): void;
  hide(event?: Event | React.SyntheticEvent<Element, Event> | undefined): void;
}

export declare type _PopupModel = ReturnType<typeof _usePopupModel>;
export interface PopupModel extends _PopupModel {}
export declare type _PopupState = _PopupModel['state'];
export declare type _PopupEvents = _PopupModel['events'];
export interface PopupState extends _PopupState {}
export interface PopupEvents extends _PopupEvents {}
export declare type PopupDefaultConfig = typeof _usePopupModel.defaultConfig &
  ToEventConfig<PopupState, PopupEvents>;
export declare type PopupRequiredConfig = typeof _usePopupModel.requiredConfig;
export interface PopupModelConfig extends Partial<PopupDefaultConfig>, PopupRequiredConfig {}
export interface PopupModelHook
  extends ModelExtras<
    typeof _usePopupModel.defaultConfig,
    typeof _usePopupModel.requiredConfig,
    PopupState,
    PopupEvents,
    PopupModel
  > {
  (config?: PopupModelConfig): PopupModel;
}
export declare const usePopupModel: PopupModelHook;
export declare const PopupModelContext: React.Context<PopupModel>;
export {};
//# sourceMappingURL=usePopupModel.d.ts.map

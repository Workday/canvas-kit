import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

export type DisclosureState = {
  /** ID reference of the list. Children ids can be derived from this id */
  id: string;
  /** Visual state of the disclosed content */
  visible: boolean;
};

export type DisclosureEvents = {
  /** Show the disclosed content */
  show(): void;
  /** Hide this disclosed content */
  hide(): void;
};

export type DisclosureModel = Model<DisclosureState, DisclosureEvents>;

export const disclosureEventMap = createEventMap<DisclosureEvents>()({
  guards: {
    /**
     * Determines if a Disclosure component should show. Returning false will prevent the
     * contents from showing. This might be useful for components like an `OverflowTooltip` where
     * the contents only need to show if overflow is detected.
     */
    shouldShow: 'show',
    /**
     * Determines if a Disclosure component should hide. Returning false will prevent the
     * contents from hiding.
     */
    shouldHide: 'hide',
  },
  callbacks: {
    /**
     * Called before disclosed contents are shown. It is safe to update state inside this callback
     */
    onShow: 'show',
    onHide: 'hide',
  },
});

export type BaseDisclosureModelConfig = {
  /** ID reference of the list. Children ids can be derived from this id */
  id?: string;
  /** Should the model start visible?
   * @default false
   */
  initialVisible?: boolean;
};

export type DisclosureModelConfig = BaseDisclosureModelConfig &
  Partial<ToModelConfig<DisclosureState, DisclosureEvents, typeof disclosureEventMap>>;

export const useDisclosureModel = (config: DisclosureModelConfig = {}): DisclosureModel => {
  const id = useUniqueId(config.id);
  const [visible, setVisible] = React.useState(config.initialVisible || false);

  const state = {id, visible};

  const events = useEventMap(disclosureEventMap, state, config, {
    show() {
      console.log('show');
      setVisible(true);
    },
    hide() {
      setVisible(false);
    },
  });

  return {state, events};
};

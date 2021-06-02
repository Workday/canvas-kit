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
  /** Visibility state of the disclosed content. Models are allowed to extend the states to fit
   * their needs, so if you need to consistently determine "not hidden", use `visibility !==
   * 'hidden'` rather than `visibility === 'visible'` */
  visibility: 'hidden' | 'visible';
};

export type DisclosureEvents = {
  /**
   * Start showing the disclosed content. If a DOM event triggered this event, the event data will
   * be passed along. This data can be used by guards and callbacks.
   */
  show(data?: {event: Event | React.SyntheticEvent}): void;
  /**
   * Start hiding this disclosed content. If a DOM event triggered this event, the event data will
   * be passed along. This data can be used by guards and callbacks. */
  hide(data?: {event: Event | React.SyntheticEvent}): void;
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
     * Called when disclosed contents start showing. It is safe to update state inside this callback
     */
    onShow: 'show',
    /**
     * Called when disclosed contents start hiding. It is safe to update state inside this callback
     */
    onHide: 'hide',
  },
});

export type BaseDisclosureModelConfig = {
  /** ID reference of the list. Children ids can be derived from this id */
  id?: string;
  /** The initial visibility of the disclosed content
   * @default 'hidden'
   */
  initialVisibility?: DisclosureState['visibility'];
};

export type DisclosureModelConfig = BaseDisclosureModelConfig &
  Partial<ToModelConfig<DisclosureState, DisclosureEvents, typeof disclosureEventMap>>;

export const useDisclosureModel = (config: DisclosureModelConfig = {}): DisclosureModel => {
  const id = useUniqueId(config.id);
  const [visibility, setVisibility] = React.useState<DisclosureState['visibility']>(
    config.initialVisibility || 'hidden'
  );

  const state = {id, visibility};

  const events = useEventMap(disclosureEventMap, state, config, {
    show() {
      setVisibility('visible');
    },
    hide() {
      setVisibility('hidden');
    },
  });

  return {state, events};
};

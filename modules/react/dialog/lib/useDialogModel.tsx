import {createEventMap, Model, ToModelConfig} from '@workday/canvas-kit-react/common';

import {
  DisclosureState,
  DisclosureEvents,
  BaseDisclosureModelConfig,
  disclosureEventMap,
  DisclosureModelConfig,
  useDisclosureModel,
} from '../../disclosure';

export type DialogState = DisclosureState;

export type DialogEvents = DisclosureEvents;

export type DialogModel = Model<DialogState, DialogEvents>;

export const dialogEventMap = createEventMap<DialogEvents>()({
  guards: {
    ...disclosureEventMap.guards,
  },
  callbacks: {
    ...disclosureEventMap.callbacks,
  },
});

export type DialogModelConfig = BaseDisclosureModelConfig &
  Partial<ToModelConfig<DialogState, DialogEvents, typeof dialogEventMap>>;

export const useDialogModel = (config: DialogModelConfig = {}): DialogModel => {
  const disclosure = useDisclosureModel(config as DisclosureModelConfig);

  const state = {...disclosure.state};

  const events = {...disclosure.events};

  return {state, events};
};

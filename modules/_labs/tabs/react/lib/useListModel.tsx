import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react-common';

export type Item = {
  id: string;
  ref: React.RefObject<HTMLElement>;
};

export type ListState = {
  /** IDREF of the list. Children ids can be derived from this id */
  id: string;
  /** Used as an auto-incrementing ID for accessibility */
  indexRef: React.RefObject<number>;
  items: Item[];
};

export type ListEvents = {
  registerItem(data: {item: Item}): void;
  unregisterItem(data: {id: string}): void;
};

export type ListModel = Model<ListState, ListEvents>;

export const listEventMap = createEventMap<ListEvents>()({
  guards: {
    shouldRegisterItem: 'registerItem',
    shouldUnregisterItem: 'unregisterItem',
  },
  actions: {
    onRegisterItem: 'registerItem',
    onUnregisterItem: 'unregisterItem',
  },
});

export type ListModelConfig = {
  /** IDREF of the list. Children ids can be derived from this id */
  id?: string;
} & Partial<ToModelConfig<ListState, ListEvents, typeof listEventMap>>;

export const useListModel = (config: ListModelConfig = {}): ListModel => {
  const id = useUniqueId(config.id);
  const indexRef = React.useRef(0);
  const [items, setItems] = React.useState([] as Item[]);

  const state = {id, items, indexRef};

  const events = useEventMap(listEventMap, state, config, {
    registerItem({item}) {
      indexRef.current++;
      setItems(items => items.concat(item));
    },
    unregisterItem({id}) {
      setItems(items => items.filter(item => item.id !== id));
    },
  });

  return {state, events};
};

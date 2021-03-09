import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

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
  /** Register an item to the list. Takes in an identifier and a React.Ref. This should be called on
   * component mount */
  registerItem(data: {item: Item}): void;
  /** Unregister an item by its identifier. This should be called when the component is unmounted */
  unregisterItem(data: {id: string}): void;
};

export type ListModel = Model<ListState, ListEvents>;

export const listEventMap = createEventMap<ListEvents>()({
  guards: {
    /**
     * Should a list item be registered? This will prevent a DOM-based list item from being
     * registered as an item in the list. Use this only for advanced cases.
     * */
    shouldRegisterItem: 'registerItem',
    /**
     * Should a list item be unregistered? Use this only for advanced cases. Lists can get into an
     * unspecified state if not managed properly.
     */
    shouldUnregisterItem: 'unregisterItem',
  },
  callbacks: {
    /**
     * Called once an item has been registered to the list. This is useful to do any `setState` or
     * side effects. This method is called synchronously during a `setState` batch. Calling state
     * setters will not cause extra renders. Item registration should be called during the
     * mount/unmount cycles of rendering.
     */
    onRegisterItem: 'registerItem',
    /**
     * Called once an item has been unregistered from the list. This is useful to do any `setState`
     * or side effects. This method is called synchronously during a `setState` batch. Calling state
     * setters will not cause extra renders. Item registration should be called during the
     * mount/unmount cycles of rendering.
     */
    onUnregisterItem: 'unregisterItem',
  },
});

export type BaseListModelConfig = {
  /** IDREF of the list. Children ids can be derived from this id */
  id?: string;
};

export type ListModelConfig = BaseListModelConfig &
  Partial<ToModelConfig<ListState, ListEvents, typeof listEventMap>>;

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

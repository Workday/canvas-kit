import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

export type Item = {
  /** IDREF of the list. Children ids can be derived from this id */
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
  /** Register an item to the list. Takes in an identifier, a React.Ref and an optional index. This should be called on
   * component mount */
  registerItem(data: {item: Item; index?: number}): void;
  /** Unregister an item by its identifier. This should be called when the component is unmounted */
  unregisterItem(data: {id: string}): void;
  /** Updates the position of a tab within the list. This should be called when a tab's index is updated */
  updateItemPosition(data: {id: string; index: number}): void;
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
    /**
     * Should a list item position be updated? Use this only for advanced cases. Lists can get into an
     * unspecified state if not managed properly.
     */
    shouldUpdateItemPosition: 'updateItemPosition',
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
    /**
     * Called once an item's position has been updated in the list. This is useful to do any `setState`
     * or side effects. This method is called synchronously during a `setState` batch. Calling state
     * setters will not cause extra renders. Item registration should be called during the
     * mount/unmount cycles of rendering.
     */
    onUpdateItemPosition: 'updateItemPosition',
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
    registerItem({item, index}) {
      indexRef.current++;
      setItems(items => {
        if (index !== undefined) {
          const copy = [...items];
          copy.splice(index, 0, item);
          return copy;
        }
        return items.concat(item);
      });
    },
    unregisterItem({id}) {
      setItems(items => {
        if (items.find(item => item.id === id)) {
          return items.filter(item => item.id !== id);
        } else {
          return items;
        }
      });
    },
    updateItemPosition({id, index}) {
      setItems(items => {
        const copy = items.filter(item => item.id !== id);
        copy.splice(index, 0, items.find(item => item.id === id)!);
        return copy;
      });
    },
  });

  return {state, events};
};

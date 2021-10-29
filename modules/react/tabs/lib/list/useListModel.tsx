import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
  assert,
} from '@workday/canvas-kit-react/common';

export type ListState<T> = {
  /** IDREF of the list. Children ids can be derived from this id */
  id: string;
  /** Used as an auto-incrementing ID for accessibility */
  indexRef: React.RefObject<number>;
  items: T[];
  disabledKeys: string[];
  getId: (item: T) => string;
};

export type ListEvents<T> = {
  /** Register an item to the list. Takes in an identifier, a React.Ref and an optional index. This should be called on
   * component mount */
  registerItem(data: {item: T; index?: number}): void;
  /** Unregister an item by its identifier. This should be called when the component is unmounted */
  unregisterItem(data: {id: string}): void;
  /** Updates the position of a tab within the list. This should be called when a tab's index is updated */
  updateItemPosition(data: {id: string; index: number}): void;
};

export type ListModel<T> = Model<ListState<T>, ListEvents<T>>;

// We don't have a way of knowing what the generic could be, so we leave it as `unknown`. It will
// probably need to be cast to the generic in use inside extending models. This will not effect the
// use of the model in an application, only in models composing this model.
export const listEventMap = createEventMap<ListEvents<unknown>>()({
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

export type BaseListModelConfig<T = unknown> = {
  /** IDREF of the list. Children ids can be derived from this id */
  id?: string;
  items?: T[];
  getId?: (item: T) => string;
  /**
   * Array of all keys which are currently disabled
   */
  disabledKeys?: string[];
};

export type ListModelConfig<T> = BaseListModelConfig<T> &
  Partial<ToModelConfig<ListState<T>, ListEvents<T>, typeof listEventMap>>;

export const defaultGetId = (item: any) => {
  assert(item.id, 'A list item must have an `id` field or a `getId` function defined');
  return item.id;
};

export const useListModel = <T extends unknown>(config: ListModelConfig<T> = {}): ListModel<T> => {
  const id = useUniqueId(config.id);
  const indexRef = React.useRef(0);
  const [items, setItems] = React.useState(config.items || []);
  const getId = config.getId || defaultGetId;

  const state = {id, items: config.items || items, indexRef, disabledKeys: ['1'], getId};

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
        if (items.find(item => getId(item) === id)) {
          return items.filter(item => getId(item) !== id);
        } else {
          return items;
        }
      });
    },
    updateItemPosition({id, index}) {
      setItems(items => {
        const copy = items.filter(item => getId(item) !== id);
        copy.splice(index, 0, items.find(item => getId(item) === id)!);
        return copy;
      });
    },
  } as ListEvents<T>);

  return {state, events};
};

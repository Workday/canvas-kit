import React from 'react';
import {useVirtualizer} from '@tanstack/react-virtual';

import {useUniqueId, createModelHook, Generic} from '@workday/canvas-kit-react/common';

export type Orientation = 'horizontal' | 'vertical';

export const defaultGetId = (item: Generic): string => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof item === 'object' && item.id === undefined) {
      console.warn(
        "List item was an object, but no `getId` was passed to the model to inform the list where to find the item's identifier. Please pass a `getId` to the list model"
      );
    }
  }
  return item === undefined ? '' : typeof item === 'string' ? item : item.id || '';
};

export const defaultGetTextValue = (item: Generic): string => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof item === 'object' && item.text === undefined) {
      console.warn(
        "List item was an object, but no `getTextValue` was passed to the model to inform the list where to find the item's text value. The item's text value is used for accessibility. Please pass a `getTextValue` to the list model"
      );
    }
  }
  return typeof item === 'string' ? item : item === undefined ? '' : item.text || '';
};

export interface Item<T> {
  index: number;
  id: string;
  value: T;
  /**
   * Used by components that allow jumping to an item based on typing
   */
  textValue: string;
}

// interface Collection<T> {
//   getKeys(): string[];
//   getItem(id: string): Item<T> | null;
//   at(index: number): Item<T> | null;
//   size: number;
// }

// TODO: Build an interface that allows representation of different collections. For example an array and a dynamically loaded dataset
// class StaticCollection<T> implements Collection<T> {
//   // eslint-disable-next-line no-empty-function
//   private items: Item<T>[];
//   constructor(items: T[], getId = defaultGetId, getTextValue = defaultGetTextValue) {
//     this.items = items.map((item, index) => ({
//       index,
//       value: item,
//       id: getId(item),
//       textValue: getTextValue(item),
//     }));
//   }

//   getKeys() {
//     return this.items.map(item => item.id);
//   }

//   getItem(id: string) {
//     return this.items.find(item => item.id === id) || null;
//   }

//   at(index: number) {
//     return this.items[index] || null;
//   }

//   get size() {
//     return this.items.length;
//   }
// }

// force Typescript to use `Generic` as a symbol
const genericDefaultConfig: {
  /**
   * Optional array of items. If provided, use a render prop for list children instead of static
   * children. If the shape of each item object does not have an `id` property or uses a different
   * property to uniquely identify each item, a `getId` must also be supplied.
   */
  items: Generic[];
} = {
  items: [],
};

export const useBaseListModel = createModelHook({
  defaultConfig: {
    ...genericDefaultConfig,
    /** IDREF of the list. Children ids can be derived from this id */
    id: '',
    /**
     * Optional function to return an id of an item. If not provided, the default function will
     * return the `id` property from the object of each item. If you did not provide `items`, do not
     * override this function. If you don't provided `items` and instead provide static items via
     * JSX, the list will create an internal array of items where `id` is the only property and the
     * default `getId` will return the desired result.
     */
    getId: defaultGetId,
    /**
     * Optional function to return the text representation of an item. If not provided, the default
     * function will return the `text` property of the object of each item or an empty string if
     * there is no `text` property. If you did not provide `items`, do not override this function.
     */
    getTextValue: defaultGetTextValue,
    /**
     * Array of all ids which are currently disabled. This is used for navigation to skip over items
     * which are not focusable.
     */
    nonInteractiveIds: [] as string[],
    /**
     * The orientation of a list of items. Values are either `vertical` or `horizontal`. This value will
     * effect which ids activate progression through a list. For example, `horizontal` will activate with
     * left and right arrows while `vertical` will activate with up and down arrows.
     * @default 'vertical'
     */
    orientation: 'vertical' as Orientation,
    /**
     * Best guess to the default item height for virtualization. Getting this number correct
     * avoids a rerender while the list is initializing.
     *
     * @default 50
     */
    defaultItemHeight: 50,
    shouldVirtualize: true,
  },
})(config => {
  const id = useUniqueId(config.id);

  // Optimization to not redo items when `getId` and `getTextValue` references change. They will not
  // likely change during the lifecycle and we don't want to recalculate items when a lamba is
  // passed instead of a stable reference.
  const getIdRef = React.useRef(defaultGetId);
  const getTextValueRef = React.useRef(defaultGetTextValue);

  getIdRef.current = config.getId || defaultGetId;
  getTextValueRef.current = config.getTextValue || config.getId || defaultGetTextValue;

  const [orientation] = React.useState(config.orientation || 'vertical');
  const [UNSTABLE_defaultItemHeight, setDefaultItemHeight] = React.useState(
    config.defaultItemHeight
  );
  const isVirtualized = config.shouldVirtualize && !!config.items?.length;
  const indexRef = React.useRef(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const items: Item<Generic>[] = React.useMemo(
    () =>
      (config.items || []).map((item, index) => {
        return {
          id: getIdRef.current(item),
          index,
          value: item,
          textValue: getTextValueRef.current(item),
        };
      }),
    [config.items]
  );
  const [staticItems, setStaticItems] = React.useState<Item<Generic>[]>([]);

  const UNSTABLE_virtual = useVirtualizer({
    count: items.length,
    getScrollElement: () => containerRef.current,
    estimateSize: React.useCallback(() => UNSTABLE_defaultItemHeight, [UNSTABLE_defaultItemHeight]),
    horizontal: config.orientation === 'horizontal',
    overscan: 3, // overscan of 3 helps rapid navigation
  });

  // Force Typescript to recognize the `Generic` symbol
  const genericState: {items: Item<Generic>[]} = {
    items: items.length ? items : staticItems,
  };

  const state = {
    ...genericState,
    UNSTABLE_virtual,
    UNSTABLE_defaultItemHeight,
    containerRef,
    id,
    orientation,
    indexRef,
    nonInteractiveIds: config.nonInteractiveIds || [],
    isVirtualized,
  };

  const events = {
    /**
     * Register an item to the list. Takes in an identifier, a React.Ref and an optional index. This
     * should be called on component mount. This event is only called for static rendering.
     */
    registerItem(data: {id: string; textValue: string}) {
      indexRef.current++;
      setStaticItems(items => {
        return items.concat({
          ...data,
          value: data,
          index: items.length,
        });
      });
    },
    /**
     * Unregister an item by its identifier. This should be called when the component is unmounted.
     * This event is only called for static rendering.
     */
    unregisterItem(data: {id: string}) {
      setStaticItems(items => {
        // this extra `if` ensures reference stability for no-ops
        if (items.find(item => item.id === data.id)) {
          return items.filter(item => item.id !== data.id);
        } else {
          return items;
        }
      });
    },
    /**
     * Updates the default item height. This should only be called when item height is measured.
     * Calling this with a different default item height than previous will cause a virtual list to
     * recalculate the overall height of the list and invalidate any height caching. Doing this only
     * on the first item may save the user from experiencing odd scrolling behavior where the
     * scrollbar updates while scrolling. If the user uses the mouse to drag the bar, it can become
     * "detached" since the browser recalculates scroll bar position while the overflow container is
     * updated.
     */
    updateItemHeight(data: {value: number}) {
      setDefaultItemHeight(data.value);
    },
  };

  return {state, events, getId: config.getId, getTextValue: config.getTextValue};
});

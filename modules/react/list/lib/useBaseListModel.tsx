import React from 'react';
import {useVirtual} from './react-virtual';

import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
  assert,
  createModel,
  Generic,
} from '@workday/canvas-kit-react/common';

export type Orientation = 'horizontal' | 'vertical';

export type BaseListState<T = unknown> = {
  /** IDREF of the list. Children ids can be derived from this id */
  id: string;
  /** Used as an auto-incrementing ID for accessibility */
  indexRef: React.RefObject<number>;
  /**
   * An array of items represented by the list. The type is a generic and the structure of each item
   * should never be assumed by any internal code. The `model.getId<T>(item)` function should be
   * used to extract the unique identifier of each item.
   */
  items: Item<T>[];
  /**
   * @private
   * The implementation is considered experimental and could change at any time. Using this property
   * could make upgrading much more difficult.
   *
   * Internally used for virtualization. Direct access to the `react-virtual` return value of
   * `useVirtual`.
   */
  UNSTABLE_virtual: ReturnType<typeof useVirtual>;
  containerRef: React.RefObject<HTMLDivElement>;
  /**
   * @private
   * The implementation is considered experimental and could change at any time. Using this property
   * could make upgrading much more difficult
   *
   * Internally used for virtualization. Used to make the scrollbar of large virtual lists more
   * stable while scrolling. It will update once for the first item rendered as an approximation for
   * every item in the collection. Each item will then update the virtual item height cache, so this
   * doesn't have to be accurate for every item. It gives an overall idea of the scrollbar height.
   * Without this, scrolling through not-yet rendered items will constantly adjust the scrollbar
   * height while scrolling. If the user clicks and holds the scrollbar to scroll, the mouse will
   * "drift" from the scrollbar due to this constant resizing. .
   */
  UNSTABLE_defaultItemHeight: number;
  /**
   * An array of ids of non-interactive elements. Non-interactive elements usually have `disabled`
   * applied to them and thus are not focusable by the browser. Lists need to know about these so
   * that keyboard navigation properly skips over these items. Interactive elements that are
   * disabled should use `[aria-disabled]` instead and should still receive focus.
   * @see https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_disabled_controls
   */
  nonInteractiveIds: string[];
  /**
   * Orientation of the list. This property determines what "next" and "previous" mean. This should
   * be set to match the layout of UI components
   */
  orientation: Orientation;
  /**
   * Indicator if virtualization is being used. If virtualized, `aria-setsize` and `aria-posinset`
   * are being used and not all items may be in the DOM.
   */
  isVirtualized: boolean;
};

export type BaseListEvents<T = unknown> = {
  /**
   * Register an item to the list. Takes in an identifier, a React.Ref and an optional index. This
   * should be called on component mount
   * */
  registerItem(data: {item: T; textValue?: string}): void;
  /** Unregister an item by its identifier. This should be called when the component is unmounted */
  unregisterItem(data: {id: string}): void;
};

export interface BaseListModel<T = unknown> extends Model<BaseListState<T>, BaseListEvents<T>> {
  getId: (item: T) => string;
}

// We don't have a way of knowing what the generic could be, so we leave it as `unknown`. It will
// probably need to be cast to the generic in use inside extending models. This will not effect the
// use of the model in an application, only in models composing this model.
export const baseListEventMap = createEventMap<BaseListEvents>()({
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

export type BaseBaseListModelConfig<T = unknown> = {
  /** IDREF of the list. Children ids can be derived from this id */
  id?: string;
  /**
   * Optional array of items. If provided, use a render prop for list children instead of static
   * children. If the shape of each item object does not have an `id` property or uses a different
   * property to uniquely identify each item, a `getId` must also be supplied.
   */
  items?: T[];
  /**
   * Optional function to return an id of an item. If not provided, the default function will return
   * the `id` property from the object of each item. If you did not provide `items`, do not override
   * this function. If you don't provided `items` and instead provide static items via JSX, the list
   * will create an internal array of items where `id` is the only property and the default `getId`
   * will return the desired result.
   */
  getId?: (item: T) => string;
  getTextValue?: (item: T) => string;
  /**
   * Array of all ids which are currently disabled. This is used for navigation to skip over items
   * which are not focusable.
   */
  nonInteractiveIds?: string[];
  /**
   * The orientation of a list of items. Values are either `vertical` or `horizontal`. This value will
   * effect which ids activate progression through a list. For example, `horizontal` will activate with
   * left and right arrows while `vertical` will activate with up and down arrows.
   * @default 'vertical'
   */
  orientation?: Orientation;
};

export type BaseListModelConfig<T> = BaseBaseListModelConfig<T> &
  Partial<ToModelConfig<BaseListState<T>, BaseListEvents<T>, typeof baseListEventMap>>;

export const defaultGetId = (item: any): string => {
  assert(item.id, 'A list item must have an `id` field or a `getId` function defined');
  return item.id;
};

export const defaultGetTextValue = (item: any): string => {
  return item.text || '';
};

export interface Item<T> {
  index: number;
  id: string;
  value: T;
  /**
   * Used by components that allow jumping to an item based on typing
   */
  textValue?: string;
}

interface Collection<T> {
  getKeys(): string[];
  getItem(id: string): Item<T> | null;
  at(index: number): Item<T> | null;
  size: number;
}

// TODO: Build an interface that allows representation of different collections. For example an array and a dynamically loaded dataset
class StaticCollection<T> implements Collection<T> {
  // eslint-disable-next-line no-empty-function
  private items: Item<T>[];
  constructor(items: T[], getId = defaultGetId, getTextValue = defaultGetTextValue) {
    this.items = items.map((item, index) => ({
      index,
      value: item,
      id: getId(item),
      textValue: getTextValue(item),
    }));
  }

  getKeys() {
    return this.items.map(item => item.id);
  }

  getItem(id: string) {
    return this.items.find(item => item.id === id) || null;
  }

  at(index: number) {
    return this.items[index] || null;
  }

  get size() {
    return this.items.length;
  }
}

export const useBaseListModel = <T extends unknown>(
  config: BaseListModelConfig<T> = {}
): BaseListModel<T> => {
  const id = useUniqueId(config.id);
  const getId = config.getId || defaultGetId;
  const getTextValue = config.getTextValue || defaultGetTextValue;
  const [orientation] = React.useState(config.orientation || 'vertical');
  const [UNSTABLE_defaultItemHeight, setDefaultItemHeight] = React.useState(50);
  const isVirtualized = !!config.items?.length;
  const indexRef = React.useRef(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const items: Item<T>[] = React.useMemo(
    () =>
      (config.items || []).map((item, index) => {
        return {
          id: getId(item),
          index,
          value: item,
          textValue: getTextValue(item),
        };
      }),
    [config.items, getId, getTextValue]
  );
  const [staticItems, setStaticItems] = React.useState<Item<T>[]>([]);
  console.log('size', items.length);
  const UNSTABLE_virtual = useVirtual({
    size: items.length,
    parentRef: containerRef,
    // estimateSize: React.useCallback(() => UNSTABLE_defaultItemHeight, [UNSTABLE_defaultItemHeight]),
    horizontal: config.orientation === 'horizontal',
  });

  const state = {
    /** IDREF of the list. Children ids can be derived from this id */
    id,
    /**
     * An array of items represented by the list. The type is a generic and the structure of each item
     * should never be assumed by any internal code. The `model.getId<T>(item)` function should be
     * used to extract the unique identifier of each item.
     */
    items: items.length ? items : staticItems,
    /**
     * Orientation of the list. This property determines what "next" and "previous" mean. This should
     * be set to match the layout of UI components
     */
    orientation,
    /**
     * Indicator if virtualization is being used. If virtualized, `aria-setsize` and `aria-posinset`
     * are being used and not all items may be in the DOM.
     */
    isVirtualized,
    /**
     * An array of ids of non-interactive elements. Non-interactive elements usually have `disabled`
     * applied to them and thus are not focusable by the browser. Lists need to know about these so
     * that keyboard navigation properly skips over these items. Interactive elements that are
     * disabled should use `[aria-disabled]` instead and should still receive focus.
     * @see https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_disabled_controls
     */
    nonInteractiveIds: config.nonInteractiveIds || [],
    containerRef,
    /**
     * @private
     * Used as an auto-incrementing ID for accessibility
     */
    indexRef,
    /**
     * @private
     * The implementation is considered experimental and could change at any time. Using this property
     * could make upgrading much more difficult
     *
     * Internally used for virtualization. Used to make the scrollbar of large virtual lists more
     * stable while scrolling. It will update once for the first item rendered as an approximation for
     * every item in the collection. Each item will then update the virtual item height cache, so this
     * doesn't have to be accurate for every item. It gives an overall idea of the scrollbar height.
     * Without this, scrolling through not-yet rendered items will constantly adjust the scrollbar
     * height while scrolling. If the user clicks and holds the scrollbar to scroll, the mouse will
     * "drift" from the scrollbar due to this constant resizing. .
     */
    UNSTABLE_defaultItemHeight,
    /**
     * @private
     * The implementation is considered experimental and could change at any time. Using this property
     * could make upgrading much more difficult.
     *
     * Internally used for virtualization. Direct access to the `react-virtual` return value of
     * `useVirtual`.
     */
    UNSTABLE_virtual,
  };

  const events = useEventMap(baseListEventMap, state, config, {
    registerItem({item, textValue}) {
      indexRef.current++;
      setStaticItems(items => {
        console.log('index', items.length);
        return items.concat({
          id: getId(item),
          value: item,
          index: items.length - 1,
          textValue,
        });
      });
    },
    unregisterItem({id}) {
      setStaticItems(items => {
        // this extra `if` ensures reference stability for no-ops
        if (items.find(item => getId(item.value) === id)) {
          return items.filter(item => getId(item.value) !== id);
        } else {
          return items;
        }
      });
    },
  } as BaseListEvents<T>);

  return {state, events, getId};
};

export const useBaseListModel2 = createModel({
  defaultConfig: {
    /** IDREF of the list. Children ids can be derived from this id */
    id: '',
    /**
     * Optional array of items. If provided, use a render prop for list children instead of static
     * children. If the shape of each item object does not have an `id` property or uses a different
     * property to uniquely identify each item, a `getId` must also be supplied.
     */
    items: [] as Generic[],
    /**
     * Optional function to return an id of an item. If not provided, the default function will return
     * the `id` property from the object of each item. If you did not provide `items`, do not override
     * this function. If you don't provided `items` and instead provide static items via JSX, the list
     * will create an internal array of items where `id` is the only property and the default `getId`
     * will return the desired result.
     */
    getId: (item: Generic) => item.id as string,

    getTextValue: (item: Generic) => (item.text || '') as string,
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
  },
})(config => {
  const id = useUniqueId(config.id);
  console.log('model2 id', id);
  const getId = config.getId || defaultGetId;
  const getTextValue = config.getTextValue || defaultGetTextValue;
  const [orientation] = React.useState(config.orientation || 'vertical');
  const [UNSTABLE_defaultItemHeight, setDefaultItemHeight] = React.useState(
    config.defaultItemHeight
  );
  const isVirtualized = !!config.items?.length;
  const indexRef = React.useRef(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const items: Item<Generic>[] = React.useMemo(
    () =>
      (config.items || []).map((item, index) => {
        return {
          id: getId(item),
          index,
          value: item,
          textValue: getTextValue(item),
        };
      }),
    [config.items, getId, getTextValue]
  );
  const [staticItems, setStaticItems] = React.useState<Item<Generic>[]>([]);
  console.log('size', items.length);
  const UNSTABLE_virtual = useVirtual({
    size: items.length,
    parentRef: containerRef,
    estimateSize: React.useCallback(() => UNSTABLE_defaultItemHeight, [UNSTABLE_defaultItemHeight]),
    horizontal: config.orientation === 'horizontal',
  });

  const state = {
    UNSTABLE_virtual,
    UNSTABLE_defaultItemHeight,
    containerRef,
    id,
    orientation,
    items: items.length ? items : staticItems,
    indexRef,
    nonInteractiveIds: config.nonInteractiveIds || [],
    isVirtualized,
  };

  const events = {
    /**
     * Register an item to the list. Takes in an identifier, a React.Ref and an optional index. This
     * should be called on component mount. This event is only called for static rendering.
     */
    registerItem(data: {item: Generic; textValue: string}) {
      indexRef.current++;
      setStaticItems(items => {
        console.log('index', items.length);
        return items.concat({
          id: getId(data.item),
          value: data.item,
          index: items.length - 1,
          textValue: data.textValue,
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
        if (items.find(item => getId(item.value) === data.id)) {
          return items.filter(item => getId(item.value) !== data.id);
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

  return {state, events, getId};
});

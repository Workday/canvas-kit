import React from 'react';
import {createEventMap, ToModelConfig, useEventMap, assert} from '@workday/canvas-kit-react/common';

import {
  BaseListState,
  BaseListEvents,
  BaseBaseListModelConfig,
  baseListEventMap,
  useBaseListModel,
  BaseListModelConfig,
  BaseListModel,
} from './useBaseListModel';

export type CursorListState<T = unknown> = BaseListState<T> & {
  /** The id of the list item the cursor is pointing to */
  cursorId: string;
  /**
   * Any positive non-zero value treats the list like a grid with rows and columns
   * @default 0
   */
  columnCount: number;
};

export type CursorListEvents<T = unknown> = BaseListEvents<T> & {
  /** Directly sets the cursor to the list item by its identifier.  */
  goTo(data: {id: string}): void;
  /**
   * Set the cursor to the "next" item in the list. This event delegates to the `getNext` method of
   * the navigation manager. For a list, the default navigation manager will wrap if cursor is
   * currently on the last item. For a grid, the default navigation manager will stay on the last
   * item in a row.
   */
  goToNext(): void;
  /**
   * Next item perpendicular to the orientation of a list, or the next row in a grid. For example,
   * if a list is horizontal, the next row would describe a down direction. This could be ignored by
   * the navigation manager, or return the same result as `next()`. In a grid, this would be the
   * next row (current position + column count).
   */
  goToNextRow(): void;
  /**
   * Set the cursor to the "previous" item in the list. If the beginning of the list is detected,
   * it will wrap to the last item
   */
  goToPrevious(): void;
  /**
   * Previous item perpendicular to the orientation of a list, or the previous row in a grid. For
   * example, if a list is horizontal, the previous row would describe an up direction. This could
   * be ignored by the navigation manager, or return the same result as `previous()`. In a grid,
   * this would be the previous row (current position - column count).
   */
  goToPreviousRow(): void;
  /** Set the cursor to the first item in the list */
  goToFirst(): void;
  /** Set the cursor to the last item in the list */
  goToLast(): void;

  goToFirstOfRow(): void;
  goToLastOfRow(): void;
  goToNextPage(): void;
  goToPreviousPage(): void;
};

type NavigationInput<T> = Pick<CursorListModel<T>, 'state' | 'getId'>;

export interface NavigationManager {
  getFirst: NavigationRequestor;
  getLast: NavigationRequestor;
  getItem: NavigationRequestor;
  getNext: NavigationRequestor;
  getNextRow: NavigationRequestor;
  getPrevious: NavigationRequestor;
  getPreviousRow: NavigationRequestor;
  getFirstOfRow: NavigationRequestor;
  getLastOfRow: NavigationRequestor;
  getPreviousPage: NavigationRequestor;
  getNextPage: NavigationRequestor;
}

export interface CursorListModel<T = unknown> extends BaseListModel<T> {
  state: CursorListState<T>;
  events: CursorListEvents<T>;
  navigation: NavigationManager;
}

export const cursorListEventMap = createEventMap<CursorListEvents>()({
  guards: {
    ...baseListEventMap.guards,
    /** Should a cursor position be set? Use only in advance use-cases */
    shouldGoTo: 'goTo',
  },
  callbacks: {
    ...baseListEventMap.callbacks,
    /**
     * Called when a cursor position has been changed. Useful to set state or perform side effects.
     * This is called during state change batching, so calling state setters will not invoke extra
     * renders.
     */
    onGoTo: 'goTo',
  },
});

export type BaseCursorModelConfig<T> = BaseBaseListModelConfig<T> & {
  /**
   * Initial cursor position. If not provided, the cursor will point to the first item in the list
   */
  initialCursorId?: string;
  /**
   * If this is set it will cause a wrapping of a list that will turn it into a grid
   * @default 0
   */
  columnCount?: number;
  /**
   * Controls the state changes when the user sends navigation events to the model. For example,
   * when the user hits the "right" arrow, a behavior hook will determine directionality
   * (left-to-right or right-to-left) and call the correct navigation method. In our example, a
   * left-to-right language would send a `getNext`. The navigation manager may return the next item
   * in the list. Different managers can be created for slightly different use cases. The default
   * navigation manager will accept `orientation` and directionality to determine mapping. If
   * `columnCount` is non-zero, it will use a grid mode where `orientation` is ignored and only
   * directionality matters.
   *
   * An example override might be a tab list with an overflow menu that is meant to be transparent
   * to screen reader users. This would require the overflow menu to accept both up/down keys as
   * well as left/right keys to give a more consistent experience to all users.
   */
  navigation?: NavigationManager;
};

export type CursorListModelConfig<T> = BaseCursorModelConfig<T> &
  Partial<ToModelConfig<CursorListState<T>, CursorListEvents<T>, typeof cursorListEventMap>>;

/**
 * Factory function that does type checking to create navigation managers. Navigation managers
 * are expected to handle all methods of a grid. If your use-case isn't meant to handle a grid,
 * pick one of the existing navigation managers and override the methods you wish to implement.
 *
 * For example,
 * ```tsx
 * import {createNavigationManager, wrappingNavigationManager} from '@workday/canvas-kit-react/list'
 *
 * const navigationManager = createNavigationManager({
 *   ...wrappingNavigationManager,
 *   getNext(id, {state, getId}) {
 *     //
 *   }
 * })
 * ```
 */
export const createNavigationManager = (manager: NavigationManager) => manager;

/** Function type to make it easier to define navigation functions */
export type NavigationRequestor = <T>(id: string, {state}: NavigationInput<T>) => T;

/**
 * Get the first item in a list regardless of column count
 */
export const getFirst: NavigationRequestor = (_, {state}) => state.items[0];
/**
 * Get the last item in a list regardless of column count
 */
export const getLast: NavigationRequestor = (_, {state}) => state.items[state.items.length - 1];

/**
 * Get the first item in a row. If column count is 0, it will return the results of `getFirst`
 */
export const getFirstOfRow: NavigationRequestor = (id, {state, getId}) => {
  if (state.columnCount) {
    const item = getItem(id, {state, getId});
    const currentIndex = state.items.findIndex(i => getId(item) === getId(i));
    const offset = currentIndex % state.columnCount;
    return state.items[currentIndex - offset];
  }
  return getFirst(id, {state, getId});
};

/**
 * get the last item in a row - if column count is 0, it will return the results of `getLast`
 */
export const getLastOfRow: NavigationRequestor = (id, {state, getId}) => {
  if (state.columnCount) {
    const item = getItem(id, {state, getId});
    const currentIndex = state.items.findIndex(i => getId(item) === getId(i));
    const offset = (currentIndex % state.columnCount) - state.columnCount + 1;
    return state.items[currentIndex - offset];
  }
  return getLast(id, {state, getId});
};

/**
 * get the item in the previous page. This can be author defined. By default it will return the
 * first item for a list, and the first item in the same column for a grid.
 */
export const getPreviousPage: NavigationRequestor = (id, {state, getId}) => {
  if (state.columnCount) {
    const item = getItem(id, {state, getId});
    const currentIndex = state.items.findIndex(i => getId(item) === getId(i));
    return state.items[currentIndex % state.columnCount];
  }
  return getFirst(id, {state, getId});
};

/**
 * get the item in the next page. This can be author defined. By default, it will return the last
 * item for a list, and the last item in the same column for a grid.
 */
export const getNextPage: NavigationRequestor = (id, {state, getId}) => {
  if (state.columnCount) {
    const item = getItem(id, {state, getId});
    const currentIndex = state.items.findIndex(i => getId(item) === getId(i));
    const lastRowIndex = state.items.length - state.columnCount;
    return state.items[lastRowIndex + (currentIndex % state.columnCount)];
  }
  return getLast(id, {state, getId});
};

const getItem: NavigationRequestor = (id, {state, getId}) => {
  const item = id ? state.items.find(item => getId(item) === id) : getFirst(id, {state, getId}); // no id, return first item
  assert(item, `Item not found: ${id}`);
  return item;
};

export const getWrappingOffsetItem = (offset: number) => <T extends unknown>(
  id: string,
  {state, getId}: NavigationInput<T>,
  tries = state.items.length
): T => {
  const items = state.items;
  const item = getItem(id, {state, getId});

  const currentIndex = items.findIndex(i => getId(item) === getId(i));
  let nextIndex = currentIndex + offset;
  if (nextIndex < 0) {
    nextIndex = items.length + nextIndex;
  } else if (nextIndex >= items.length) {
    nextIndex = nextIndex - items.length;
  }

  if (state.nonInteractiveIds.includes(getId(items[nextIndex])) && tries > 0) {
    // The next item is disabled, try again, but only if we haven't already tried everything.
    // Avoid an infinite loop with `tries`
    return getWrappingOffsetItem(offset)(getId(items[nextIndex]), {state, getId}, tries - 1);
  }

  return items[nextIndex];
};

export const getOffsetItem = (offset: number) => <T extends unknown>(
  id: string,
  {state, getId}: NavigationInput<T>,
  tries = state.items.length
): T => {
  const {items, columnCount} = state;
  const item = getItem(id, {state, getId});

  const currentIndex = items.findIndex(i => getId(item) === getId(i));
  let nextIndex = currentIndex + offset;
  if (Math.abs(offset) < columnCount) {
    // if we're here, the columnCount is non-zero and the absolute value of offset is less than the
    // column count. We don't want to wrap, so we'll bound within the row

    const currentIndexInRow = currentIndex % columnCount;
    const nextIndexInRow = nextIndex - currentIndex + currentIndexInRow;
    if (nextIndexInRow >= columnCount || nextIndexInRow < 0) {
      nextIndex = currentIndex;
    }
  } else if (columnCount) {
    // if we're here, there's a column count, but the offset will move into another row. We need to
    // bound to row values
    const nextRow = Math.floor(nextIndex / columnCount);
    if (nextRow < 0 || nextRow >= columnCount) {
      nextIndex = currentIndex;
    }
  } else if (nextIndex < 0) {
    nextIndex = 0;
  } else if (nextIndex >= items.length) {
    nextIndex = items.length - 1;
  }

  if (state.nonInteractiveIds.includes(getId(items[nextIndex])) && tries > 0) {
    // The next item is disabled, try again, but only if we haven't already tried everything.
    // Avoid an infinite loop with `tries`
    return getOffsetItem(offset)(getId(items[nextIndex]), {state, getId}, tries - 1);
  }

  return items[nextIndex];
};

/**
 * The default navigation manager of lists
 */
export const wrappingNavigationManager = createNavigationManager({
  getFirst,
  getLast,
  getItem,
  getNext: getWrappingOffsetItem(1),
  getNextRow: (id, {state, getId}) => getWrappingOffsetItem(-state.columnCount)(id, {state, getId}),
  getPrevious: getWrappingOffsetItem(-1),
  getPreviousRow: (id, {state, getId}) =>
    getWrappingOffsetItem(state.columnCount)(id, {state, getId}),
  getPreviousPage,
  getNextPage,
  getFirstOfRow,
  getLastOfRow,
});

export const navigationManager = createNavigationManager({
  getFirst,
  getLast,
  getItem,
  getNext: getOffsetItem(1),
  getNextRow: (id, {state, getId}) => getOffsetItem(-state.columnCount)(id, {state, getId}),
  getPrevious: getOffsetItem(-1),
  getPreviousRow: (id, {state, getId}) => getOffsetItem(state.columnCount)(id, {state, getId}),
  getPreviousPage,
  getNextPage,
  getFirstOfRow,
  getLastOfRow,
});

/**
 * A `CursorModel` extends a `ListModel` and adds a "cursor" to the list. A cursor is a pointer to a
 * current position in the list. The most common use-case is keeping track of which item currently
 * has focus within the list. Many w3c list role types specify a single tab stop within the list.
 */
export const useCursorListModel = <T extends unknown>(
  config: CursorListModelConfig<T> = {}
): CursorListModel<T> => {
  const [cursorId, setCursorId] = React.useState('');
  const columnCount = config.columnCount || 0;
  const list = useBaseListModel(config as BaseListModelConfig<T>);
  const initialCurrentRef = React.useRef(
    config.initialCursorId || config.items?.length ? list.getId(config.items![0]) : ''
  );

  const state = {...list.state, cursorId, columnCount};
  const navigation = config.navigation || wrappingNavigationManager;

  const events = useEventMap(cursorListEventMap, state, config, {
    ...list.events,
    registerItem(data) {
      // point the cursor at the first item
      if (!initialCurrentRef.current) {
        initialCurrentRef.current = list.getId(data.item);
        setCursorId(initialCurrentRef.current);
      }
      list.events.registerItem(data);
    },
    goTo({id}) {
      setCursorId(id);
    },
    goToNext() {
      setCursorId(list.getId(navigation.getNext(state.cursorId, {state, getId: list.getId})));
    },
    goToPrevious() {
      setCursorId(list.getId(navigation.getPrevious(state.cursorId, {state, getId: list.getId})));
    },
    goToPreviousRow() {
      setCursorId(
        list.getId(navigation.getPreviousRow(state.cursorId, {state, getId: list.getId}))
      );
    },
    goToNextRow() {
      setCursorId(list.getId(navigation.getNextRow(state.cursorId, {state, getId: list.getId})));
    },
    goToFirst() {
      setCursorId(list.getId(navigation.getFirst(state.cursorId, {state, getId: list.getId})));
    },
    goToLast() {
      setCursorId(list.getId(navigation.getLast(state.cursorId, {state, getId: list.getId})));
    },
    goToFirstOfRow() {
      setCursorId(list.getId(navigation.getFirstOfRow(state.cursorId, {state, getId: list.getId})));
    },
    goToLastOfRow() {
      setCursorId(list.getId(navigation.getLastOfRow(state.cursorId, {state, getId: list.getId})));
    },
    goToNextPage() {
      setCursorId(list.getId(navigation.getNextPage(state.cursorId, {state, getId: list.getId})));
    },
    goToPreviousPage() {
      setCursorId(
        list.getId(navigation.getPreviousPage(state.cursorId, {state, getId: list.getId}))
      );
    },
  } as CursorListEvents<T>);

  return {...list, state, events, navigation};
};

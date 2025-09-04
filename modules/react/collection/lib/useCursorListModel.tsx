import React from 'react';
import {createModelHook, Generic} from '@workday/canvas-kit-react/common';

import {useBaseListModel, Item} from './useBaseListModel';

type NavigationInput = Pick<ReturnType<typeof useCursorListModel>, 'state'>;

/**
 * The list and grid models accept a `navigation` config. If one is not provided, a default will be
 * chosen. It is possible to create a custom navigation manager to hand to the model if the default
 * doesn't work.
 */
export interface NavigationManager {
  /** Get the first item in a collection. This will be called when the `Home` key is pressed for
   * Lists and `Ctrl+Home` for Grids. */
  getFirst: NavigationRequestor;
  /** Get the last item in a collection. This will be called when the `End` key is pressed for Lists
   * and `Ctrl+End` for Grids. */
  getLast: NavigationRequestor;
  /** Get an item with the provided `id`. */
  getItem: (id: string, model: NavigationInput) => Item<Generic> | undefined;
  /** Get the next item after the provided `id`. This will be called when the `Right` arrow key is
   * pressed for RTL languages and when the `Left` arrow is pressed for LTR languages. */
  getNext: NavigationRequestor;
  /** **For Grids:** Get the cell in the next row from the provided `id`. This will be called when
   * the `Down` arrow is pressed.  */
  getNextRow: NavigationRequestor;
  /** Get the previous item before the provided `id`. This will be called when the `Left` arrow key
   * is pressed for RTL languages and when the `Right` arrow is pressed for LTR languages. */
  getPrevious: NavigationRequestor;
  /** **For Grids:** Get the cell in the previous row from the provided `id`. This will be called
   * when the `Up` arrow is pressed.  */
  getPreviousRow: NavigationRequestor;
  /** **For Grids:** Get the first item in a row. This will be called when the `Home` key is
   * pressed. */
  getFirstOfRow: NavigationRequestor;
  /** **For Grids:** Get the last item in a row. This will be called when the `End` key is
   * pressed. */
  getLastOfRow: NavigationRequestor;
  /** Get the next "page". A "page" is application specific and usually means next visible screen.
   * If the viewport is scrollable, it would scroll so that the last item visible is now the first
   * item visible. This is called when the `PageDown` key is pressed */
  getNextPage: NavigationRequestor;
  /** Get the next "page". A "page" is application specific and usually means previous visible
   * screen. If the viewport is scrollable, it would scroll so that the first item visible is now
   * the last item visible. This is called when the `PageUp` key is pressed */
  getPreviousPage: NavigationRequestor;
}

/**
 * Factory function that does type checking to create navigation managers. Navigation managers
 * are expected to handle all methods of a grid. If your use-case isn't meant to handle a grid,
 * pick one of the existing navigation managers and override the methods you wish to implement.
 *
 * For example,
 * ```tsx
 * import {createNavigationManager, wrappingNavigationManager} from '@workday/canvas-kit-react/collection'
 *
 * const navigationManager = createNavigationManager({
 *   ...wrappingNavigationManager,
 *   getNext(id, {state}) {
 *     //
 *   }
 * })
 * ```
 */
export const createNavigationManager = (manager: NavigationManager) => manager;

/**
 * Given an id and a model, return an item from the collection
 */
export type NavigationRequestor = (index: number, model: NavigationInput) => number;

/**
 * Get the first item in a list regardless of column count
 */
export const getFirst: NavigationRequestor = () => 0;
/**
 * Get the last item in a list regardless of column count
 */
export const getLast: NavigationRequestor = (_, {state}) => state.items.length - 1;

/**
 * Get the first item in a row. If column count is 0, it will return the results of `getFirst`
 */
export const getFirstOfRow: NavigationRequestor = (index, {state}) => {
  if (state.columnCount) {
    const offset = index % state.columnCount;
    return index - offset;
  }
  return getFirst(index, {state});
};

/**
 * get the last item in a row - if column count is 0, it will return the results of `getLast`
 */
export const getLastOfRow: NavigationRequestor = (index, {state}) => {
  if (state.columnCount) {
    const offset = (index % state.columnCount) - state.columnCount + 1;
    let nextIndex = index - offset;
    if (nextIndex >= state.items.length) {
      nextIndex = state.items.length - 1;
    }
    return nextIndex;
  }
  return getLast(index, {state});
};

/**
 * get the item in the previous page. This can be author defined. By default it will return the
 * first item for a list, and the first item in the same column for a grid.
 */
export const getPreviousPage: NavigationRequestor = (index, {state}) => {
  if (state.columnCount) {
    return index % state.columnCount;
  }
  return getFirst(index, {state});
};

/**
 * get the item in the next page. This can be author defined. By default, it will return the last
 * item for a list, and the last item in the same column for a grid.
 */
export const getNextPage: NavigationRequestor = (index, {state}) => {
  if (state.columnCount) {
    const lastRowIndex = state.items.length - state.columnCount;
    return lastRowIndex + (index % state.columnCount);
  }
  return getLast(index, {state});
};

const getItem: (id: string, model: NavigationInput) => Item<Generic> | undefined = (
  id,
  {state}
) => {
  return state.items.find(item => item.id === id);
};

/**
 * Get the current cursor id of a Collection model's state.
 */
export const getCursor = (state: NavigationInput['state']): string =>
  typeof state.cursorId === 'string' ? state.cursorId : state.cursorId.slice(-1)[0] || '';

/**
 * Check if the provided id is the current cursor id of a Collection model's state.
 */
export const isCursor = (state: NavigationInput['state'], id?: string): boolean =>
  state.cursorId && typeof state.cursorId === 'string'
    ? state.cursorId === id
    : state.cursorId.includes(id as string);

export const getWrappingOffsetItem =
  (offset: number) =>
  (index: number, {state}: NavigationInput, tries = state.items.length): number => {
    if (Number.isNaN(index)) {
      // we have no valid index. If the offset is positive, we'll return the first item
      if (offset === 1) {
        return getFirst(index, {state});
      }
      if (offset === -1) {
        return getLast(index, {state});
      }
    }
    const items = state.items;

    let nextIndex = index + offset;

    // calculate idealLength as in if the grid was a perfect rectangle
    const rows = Math.ceil(items.length / state.columnCount);
    const idealLength = rows * state.columnCount;
    if (nextIndex < 0) {
      if (offset === -1) {
        // if the offset is -1, we want to wrap to the end
        nextIndex = items.length - 1;
      } else {
        // if the offset is smaller than -1, we want to wrap by column
        if (idealLength + nextIndex >= items.length) {
          // we'll overflow the grid because there isn't enough items. Move `nextIndex` up so we wrap in
          // the right spot
          nextIndex -= state.columnCount;
        }
        nextIndex = idealLength + nextIndex;
      }
    } else if (nextIndex >= items.length) {
      if (offset === 1) {
        // if the offset is 1, we want to wrap to the beginning
        nextIndex = 0;
      } else {
        // if the offset is larger than 1, we want to wrap by column
        if (nextIndex - idealLength < 0) {
          // we're going to overflow the grid because there isn't enough items. Move `nextIndex` down to
          // the missing item in the next row. This way we'll end up wrapping in the right spot
          nextIndex += state.columnCount;
        }
        nextIndex = nextIndex - idealLength;
      }
    }

    if (items.length > 1 && state.nonInteractiveIds.includes(items[nextIndex].id) && tries > 0) {
      // The next item is disabled, try again, but only if we haven't already tried everything.
      // Avoid an infinite loop with `tries`
      return getWrappingOffsetItem(offset)(nextIndex, {state}, tries - 1);
    }

    return nextIndex;
  };

export const getOffsetItem =
  (offset: number) =>
  (index: number, {state}: NavigationInput, tries = state.items.length): number => {
    const {items, columnCount} = state;

    let nextIndex = index + offset;

    if (Math.abs(offset) < columnCount) {
      // if we're here, the columnCount is non-zero and the absolute value of offset is less than the
      // column count. We don't want to wrap, so we'll bound within the row

      const currentIndexInRow = index % columnCount;
      const nextIndexInRow = nextIndex - index + currentIndexInRow;
      if (nextIndexInRow >= columnCount || nextIndexInRow < 0) {
        nextIndex = index;
      }
    } else if (columnCount) {
      // if we're here, there's a column count, but the offset will move into another row. We need to
      // bound to row values
      const nextRow = Math.floor(nextIndex / columnCount);

      if (nextRow < 0 || nextRow >= columnCount) {
        nextIndex = index;
      }

      // make sure we don't go out of bounds if the grid isn't a perfect rectangle
      if (nextIndex > items.length - 1) {
        nextIndex = index;
      }
    }

    // make sure we're always in bounds
    if (nextIndex < 0) {
      nextIndex = 0;
    } else if (nextIndex >= items.length) {
      nextIndex = items.length - 1;
    }

    if (state.nonInteractiveIds.includes(items[nextIndex].id) && tries > 0) {
      // The next item is disabled, try again, but only if we haven't already tried everything.
      // Avoid an infinite loop with `tries`
      return getOffsetItem(offset)(nextIndex, {state}, tries - 1);
    }

    return nextIndex;
  };

/**
 * The default navigation manager of lists. This navigation manager will wrap around when the edge
 * is hit. For example, if the user is the the right-most item in a list or right-most item in a
 * row, the cursor will wrap around to the beginning or the next row.
 */
export const wrappingNavigationManager = createNavigationManager({
  getFirst,
  getLast,
  getItem,
  getNext: getWrappingOffsetItem(1),
  getNextRow: (index, {state}) => getWrappingOffsetItem(state.columnCount)(index, {state}),
  getPrevious: getWrappingOffsetItem(-1),
  getPreviousRow: (index, {state}) => getWrappingOffsetItem(-state.columnCount)(index, {state}),
  getPreviousPage,
  getNextPage,
  getFirstOfRow,
  getLastOfRow,
});

/**
 * The default navigation of grids. This navigation manager will not wrap, but will stop when an
 * edge is detected. This could be the last item in a list or the last item of a row in a grid.
 */
export const navigationManager = createNavigationManager({
  getFirst,
  getLast,
  getItem,
  getNext: getOffsetItem(1),
  getNextRow: (index, {state}) => getOffsetItem(state.columnCount)(index, {state}),
  getPrevious: getOffsetItem(-1),
  getPreviousRow: (index, {state}) => getOffsetItem(-state.columnCount)(index, {state}),
  getPreviousPage,
  getNextPage,
  getFirstOfRow,
  getLastOfRow,
});

type Writeable<T> = {-readonly [P in keyof T]: T[P]};

/**
 * A `CursorModel` extends a `ListModel` and adds a "cursor" to the list. A cursor is a pointer to a
 * current position in the list. The most common use-case is keeping track of which item currently
 * has focus within the list. Many w3c list role types specify a single tab stop within the list.
 */
export const useCursorListModel = createModelHook({
  defaultConfig: {
    ...useBaseListModel.defaultConfig,
    /**
     * Initial cursor position. If not provided, the cursor will point to the first item in the list
     */
    initialCursorId: '' as string | string[],
    /**
     * If this is set it will cause a wrapping of a list that will turn it into a grid
     * @default 0
     */
    columnCount: 0,
    /**
     * Controls the state changes when the user sends navigation events to the model. For example,
     * when the user hits the "right" arrow, a behavior hook will determine directionality
     * (left-to-right or right-to-left) and call the correct navigation method. In our example, a
     * left-to-right language would send a `getNext`. The navigation manager may return the next item
     * in the list. Different managers can be created for slightly different use cases. The default
     * navigation manager will accept `orientation` and directionality to determine mapping.
     *
     * An example override might be a tab list with an overflow menu that is meant to be transparent
     * to screen reader users. This would require the overflow menu to accept both up/down keys as
     * well as left/right keys to give a more consistent experience to all users.
     */
    navigation: wrappingNavigationManager,
    /**
     * Controls how much a pageUp/pageDown navigation request will jump. If not provided, the size
     * of the list and number of items rendered will determine this value.
     */
    pageSize: 0,
  },
  requiredConfig: useBaseListModel.requiredConfig,
  contextOverride: useBaseListModel.Context,
})(config => {
  const [cursorId, setCursorId] = React.useState(config.initialCursorId);
  const pageSizeRef = React.useRef(config.pageSize);
  const columnCount = config.columnCount || 0;
  const list = useBaseListModel(config);
  const navigation = config.navigation;
  // Cast as a readonly to signify this value should never be set
  const cursorIndexRef = React.useRef(-1) as {readonly current: number};
  const setCursor = (index: number) => {
    const id = state.items[index]?.id || '';
    setCursorId(id);
  };

  // Keep the cursorIndex up to date with the cursor ID
  if (cursorId && list.state.items[cursorIndexRef.current]?.id !== cursorId) {
    // We cast back as a writeable because this is the only place the value should be changed.
    (cursorIndexRef as Writeable<typeof cursorIndexRef>).current = list.state.items.findIndex(
      item => item.id === cursorId
    );
  } else if (!cursorId) {
    (cursorIndexRef as Writeable<typeof cursorIndexRef>).current = -1;
  }

  const state = {
    ...list.state,
    /** The id of the list item the cursor is pointing to */
    cursorId,
    /**
     * Any positive non-zero value treats the list like a grid with rows and columns
     * @default 0
     * @private Use useGridModel instead to make a grid instead of a list
     */
    columnCount,
    /**
     * A React.Ref of the current page size. Either provided as config, or determined at runtime
     * based on the size of the list container and the number of items fitting within the container.
     */
    pageSizeRef,
    /**
     * A readonly [React.Ref](https://react.dev/learn/referencing-values-with-refs) that tracks the
     * index of the `state.cursorId`. This value is automatically updated when the `state.cursorId`
     * or the `items` change.
     *
     * @readonly
     */
    cursorIndexRef,
  };

  const events = {
    ...list.events,
    /** Directly sets the cursor to the list item by its identifier. */
    goTo(data: {id: string}) {
      const index = state.items.findIndex(item => item.id === data.id);
      setCursor(index);
    },
    /**
     * Set the cursor to the "next" item in the list. This event delegates to the `getNext` method of
     * the navigation manager. For a list, the default navigation manager will wrap if cursor is
     * currently on the last item. For a grid, the default navigation manager will stay on the last
     * item in a row.
     */
    goToNext() {
      const index = navigation.getNext(cursorIndexRef.current, {state});
      setCursor(index);
    },
    /**
     * Set the cursor to the "previous" item in the list. If the beginning of the list is detected,
     * it will wrap to the last item
     */
    goToPrevious() {
      const index = navigation.getPrevious(cursorIndexRef.current, {state});
      setCursor(index);
    },
    /**
     * Previous item perpendicular to the orientation of a list, or the previous row in a grid. For
     * example, if a list is horizontal, the previous row would describe an up direction. This could
     * be ignored by the navigation manager, or return the same result as `previous()`. In a grid,
     * this would be the previous row (current position - column count).
     */
    goToPreviousRow() {
      const index = navigation.getPreviousRow(cursorIndexRef.current, {
        state,
      });
      setCursor(index);
    },
    /**
     * Next item perpendicular to the orientation of a list, or the next row in a grid. For example,
     * if a list is horizontal, the next row would describe a down direction. This could be ignored by
     * the navigation manager, or return the same result as `next()`. In a grid, this would be the
     * next row (current position + column count).
     */
    goToNextRow() {
      const index = navigation.getNextRow(cursorIndexRef.current, {state});
      setCursor(index);
    },
    /** Set the cursor to the first item in the list */
    goToFirst() {
      const index = navigation.getFirst(cursorIndexRef.current, {state});
      setCursor(index);
    },
    /** Set the cursor to the last item in the list */
    goToLast() {
      const index = navigation.getLast(cursorIndexRef.current, {state});
      setCursor(index);
    },
    goToFirstOfRow() {
      const index = navigation.getFirstOfRow(cursorIndexRef.current, {state});
      setCursor(index);
    },
    goToLastOfRow() {
      const index = navigation.getLastOfRow(cursorIndexRef.current, {state});
      setCursor(index);
    },
    goToNextPage() {
      const index = navigation.getNextPage(cursorIndexRef.current, {state});
      setCursor(index);
    },
    goToPreviousPage() {
      const index = navigation.getPreviousPage(cursorIndexRef.current, {
        state,
      });
      setCursor(index);
    },
  };

  return {...list, state, events, navigation};
});

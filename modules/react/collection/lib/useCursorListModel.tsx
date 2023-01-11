import React from 'react';
import {assert, createModelHook, Generic} from '@workday/canvas-kit-react/common';

import {useBaseListModel, Item, defaultGetId as getId} from './useBaseListModel';

type NavigationInput = Pick<ReturnType<typeof useCursorListModel>, 'state'>;

export interface NavigationManager {
  /** Get the first item in a collection. This will be called when the `Home` key is pressed for
   * Lists and `Ctrl+Home` for Grids. */
  getFirst: NavigationRequestor;
  /** Get the last item in a collection. This will be called when the `End` key is pressed for Lists
   * and `Ctrl+End` for Grids. */
  getLast: NavigationRequestor;
  /** Get an item with the provided `id`. */
  getItem: NavigationRequestor;
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

/** Function type to make it easier to define navigation functions */
export type NavigationRequestor = (id: string, model: NavigationInput) => Item<Generic>;

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
export const getFirstOfRow: NavigationRequestor = (id, {state}) => {
  if (state.columnCount) {
    const item = getItem(id, {state});
    const currentIndex = item.index;
    const offset = currentIndex % state.columnCount;
    return state.items[currentIndex - offset];
  }
  return getFirst(id, {state});
};

/**
 * get the last item in a row - if column count is 0, it will return the results of `getLast`
 */
export const getLastOfRow: NavigationRequestor = (id, {state}) => {
  if (state.columnCount) {
    const item = getItem(id, {state});
    const currentIndex = item.index;
    const offset = (currentIndex % state.columnCount) - state.columnCount + 1;
    let nextIndex = currentIndex - offset;
    if (nextIndex >= state.items.length) {
      nextIndex = state.items.length - 1;
    }
    return state.items[nextIndex];
  }
  return getLast(id, {state});
};

/**
 * get the item in the previous page. This can be author defined. By default it will return the
 * first item for a list, and the first item in the same column for a grid.
 */
export const getPreviousPage: NavigationRequestor = (id, {state}) => {
  if (state.columnCount) {
    const item = getItem(id, {state});
    const currentIndex = item.index;
    return state.items[currentIndex % state.columnCount];
  }
  return getFirst(id, {state});
};

/**
 * get the item in the next page. This can be author defined. By default, it will return the last
 * item for a list, and the last item in the same column for a grid.
 */
export const getNextPage: NavigationRequestor = (id, {state}) => {
  if (state.columnCount) {
    const item = getItem(id, {state});
    const currentIndex = item.index;
    const lastRowIndex = state.items.length - state.columnCount;
    return state.items[lastRowIndex + (currentIndex % state.columnCount)];
  }
  return getLast(id, {state});
};

const getItem: NavigationRequestor = (id, {state}) => {
  const item = id ? state.items.find(item => getId(item) === id) : getFirst(id, {state}); // no id, return first item
  assert(item, `Item not found: ${id}`);
  return item;
};

export const getWrappingOffsetItem = (offset: number) => (
  id: string,
  {state}: NavigationInput,
  tries = state.items.length
): Item<Generic> => {
  const items = state.items;
  const item = getItem(id, {state});

  const currentIndex = item.index;
  let nextIndex = currentIndex + offset;

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

  if (state.nonInteractiveIds.includes(getId(items[nextIndex])) && tries > 0) {
    // The next item is disabled, try again, but only if we haven't already tried everything.
    // Avoid an infinite loop with `tries`
    return getWrappingOffsetItem(offset)(getId(items[nextIndex]), {state}, tries - 1);
  }

  return items[nextIndex];
};

export const getOffsetItem = (offset: number) => (
  id: string,
  {state}: NavigationInput,
  tries = state.items.length
): Item<Generic> => {
  const {items, columnCount} = state;
  const item = getItem(id, {state});

  const currentIndex = item.index;
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

    // make sure we don't go out of bounds if the grid isn't a perfect rectangle
    if (nextIndex > items.length - 1) {
      nextIndex = currentIndex;
    }
  }

  // make sure we're always in bounds
  if (nextIndex < 0) {
    nextIndex = 0;
  } else if (nextIndex >= items.length) {
    nextIndex = items.length - 1;
  }

  if (state.nonInteractiveIds.includes(getId(items[nextIndex])) && tries > 0) {
    // The next item is disabled, try again, but only if we haven't already tried everything.
    // Avoid an infinite loop with `tries`
    return getOffsetItem(offset)(getId(items[nextIndex]), {state}, tries - 1);
  }

  return items[nextIndex];
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
  getNextRow: (id, {state}) => getWrappingOffsetItem(state.columnCount)(id, {state}),
  getPrevious: getWrappingOffsetItem(-1),
  getPreviousRow: (id, {state}) => getWrappingOffsetItem(-state.columnCount)(id, {state}),
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
  getNextRow: (id, {state}) => getOffsetItem(state.columnCount)(id, {state}),
  getPrevious: getOffsetItem(-1),
  getPreviousRow: (id, {state}) => getOffsetItem(-state.columnCount)(id, {state}),
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
export const useCursorListModel = createModelHook({
  defaultConfig: {
    ...useBaseListModel.defaultConfig,
    /**
     * Initial cursor position. If not provided, the cursor will point to the first item in the list
     */
    initialCursorId: '',
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
  },
  requiredConfig: useBaseListModel.requiredConfig,
})(config => {
  const [cursorId, setCursorId] = React.useState(config.initialCursorId);
  const columnCount = config.columnCount || 0;
  const list = useBaseListModel(config);
  const initialCurrentRef = React.useRef(
    config.initialCursorId || (config.items?.length ? getId(config.items![0]) : '')
  );
  const navigation = config.navigation;

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
  };

  const events = {
    ...list.events,
    /**
     * Register an item to the list. Takes in an identifier, a React.Ref and an optional index. This
     * should be called on component mount
     */
    registerItem(data: Parameters<typeof list.events.registerItem>[0]) {
      // point the cursor at the first item
      if (!initialCurrentRef.current) {
        initialCurrentRef.current = getId(data.item);
        setCursorId(initialCurrentRef.current);
      }
      list.events.registerItem(data);
    },
    /** Directly sets the cursor to the list item by its identifier. */
    goTo(data: {id: string}) {
      setCursorId(data.id);
    },
    /**
     * Set the cursor to the "next" item in the list. This event delegates to the `getNext` method of
     * the navigation manager. For a list, the default navigation manager will wrap if cursor is
     * currently on the last item. For a grid, the default navigation manager will stay on the last
     * item in a row.
     */
    goToNext() {
      setCursorId(getId(navigation.getNext(state.cursorId, {state})));
    },
    /**
     * Set the cursor to the "previous" item in the list. If the beginning of the list is detected,
     * it will wrap to the last item
     */
    goToPrevious() {
      setCursorId(getId(navigation.getPrevious(state.cursorId, {state})));
    },
    /**
     * Previous item perpendicular to the orientation of a list, or the previous row in a grid. For
     * example, if a list is horizontal, the previous row would describe an up direction. This could
     * be ignored by the navigation manager, or return the same result as `previous()`. In a grid,
     * this would be the previous row (current position - column count).
     */
    goToPreviousRow() {
      setCursorId(
        getId(
          navigation.getPreviousRow(state.cursorId, {
            state,
          })
        )
      );
    },
    /**
     * Next item perpendicular to the orientation of a list, or the next row in a grid. For example,
     * if a list is horizontal, the next row would describe a down direction. This could be ignored by
     * the navigation manager, or return the same result as `next()`. In a grid, this would be the
     * next row (current position + column count).
     */
    goToNextRow() {
      setCursorId(getId(navigation.getNextRow(state.cursorId, {state})));
    },
    /** Set the cursor to the first item in the list */
    goToFirst() {
      setCursorId(getId(navigation.getFirst(state.cursorId, {state})));
    },
    /** Set the cursor to the last item in the list */
    goToLast() {
      setCursorId(getId(navigation.getLast(state.cursorId, {state})));
    },
    goToFirstOfRow() {
      setCursorId(getId(navigation.getFirstOfRow(state.cursorId, {state})));
    },
    goToLastOfRow() {
      setCursorId(getId(navigation.getLastOfRow(state.cursorId, {state})));
    },
    goToNextPage() {
      setCursorId(getId(navigation.getNextPage(state.cursorId, {state})));
    },
    goToPreviousPage() {
      setCursorId(
        getId(
          navigation.getPreviousPage(state.cursorId, {
            state,
          })
        )
      );
    },
  };

  return {...list, state, events, navigation};
});

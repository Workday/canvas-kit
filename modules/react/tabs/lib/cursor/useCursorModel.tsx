import React from 'react';
import {createEventMap, ToModelConfig, useEventMap, assert} from '@workday/canvas-kit-react/common';

import {
  ListState,
  ListEvents,
  BaseListModelConfig,
  listEventMap,
  useListModel,
  ListModelConfig,
  ListModel,
} from '../list/useListModel';

export type Orientation = 'horizontal' | 'vertical';

export type CursorState<T = unknown> = ListState<T> & {
  /** Orientation of the list. This property determines what "next" and "previous" mean. This should
   * be set to match the layout of UI components */
  orientation: Orientation;
  /** The id of the list item the cursor is pointing to */
  cursorId: string;
  /**
   * Any positive non-zero value treats the list like a grid with rows and columns
   * @default 0
   */
  columnCount: number;
};

export type CursorEvents<T = unknown> = ListEvents<T> & {
  /** Directly sets the cursor to the list item by its identifier.  */
  goTo(data: {id: string}): void;
  /**
   * Set the cursor to the "next" item in the list. This event delegates to the `getNext` method of
   * the navigation manager. For a list, the default navigation manager will wrap if cursor is
   * currently on the last item. For a grid, the default navigation manager will stay on the last
   * item in a row.
   */
  next(): void;
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
  previous(): void;
  /**
   * Previous item perpendicular to the orientation of a list, or the previous row in a grid. For
   * example, if a list is horizontal, the previous row would describe an up direction. This could
   * be ignored by the navigation manager, or return the same result as `previous()`. In a grid,
   * this would be the previous row (current position - column count).
   */
  goToPreviousRow(): void;
  /** Set the cursor to the first item in the list */
  first(): void;
  /** Set the cursor to the last item in the list */
  last(): void;
};

type NavigationInput<T> = Pick<CursorModel<T>, 'state' | 'getId'>;

export interface NavigationManager {
  getFirst<T>(input: NavigationInput<T>): T;
  getLast<T>(input: NavigationInput<T>): T;
  getItem<T>(id: string, input: NavigationInput<T>): T;
  getNext<T>(id: string, input: NavigationInput<T>): T;
  getNextRow<T>(id: string, input: NavigationInput<T>): T;
  getPrevious<T>(id: string, input: NavigationInput<T>): T;
  getPreviousRow<T>(id: string, input: NavigationInput<T>): T;
}

export interface CursorModel<T = unknown> extends ListModel<T> {
  state: CursorState<T>;
  events: CursorEvents<T>;
  navigation: NavigationManager;
}

export const cursorEventMap = createEventMap<CursorEvents>()({
  guards: {
    ...listEventMap.guards,
    /** Should a cursor position be set? Use only in advance use-cases */
    shouldGoTo: 'goTo',
  },
  callbacks: {
    ...listEventMap.callbacks,
    /**
     * Called when a cursor position has been changed. Useful to set state or perform side effects.
     * This is called during state change batching, so calling state setters will not invoke extra
     * renders.
     */
    onGoTo: 'goTo',
  },
});

export type BaseCursorModelConfig<T> = BaseListModelConfig<T> & {
  /**
   * The orientation of a list of items. Values are either `vertical` or `horizontal`. This value will
   * effect which ids activate progression through a list. For example, `horizontal` will activate with
   * left and right arrows while `vertical` will activate with up and down arrows.
   * @default 'vertical'
   */
  orientation?: Orientation;
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

export type CursorModelConfig<T> = BaseCursorModelConfig<T> &
  Partial<ToModelConfig<CursorState<T>, CursorEvents<T>, typeof cursorEventMap>>;

export const useCursorNavigation = <T extends unknown>(
  state: CursorState<T>,
  getId: ListModel<T>['getId']
) => {
  // refs for performance so that new functions aren't created every render
  const getIdRef = React.useRef(getId);
  const itemsRef = React.useRef(state.items);
  const nonInteractiveIdsRef = React.useRef(state.nonInteractiveIds);

  itemsRef.current = state.items;
  nonInteractiveIdsRef.current = state.nonInteractiveIds;

  // return a memoized function to prevent recreation of functions every render
  return React.useMemo(() => {
    const getFirst = () => itemsRef.current[0];
    const getLast = () => itemsRef.current[itemsRef.current.length - 1];

    const getItem = (id: string): T => {
      const item = id ? itemsRef.current.find(item => getIdRef.current(item) === id) : getFirst(); // no id, return first item
      assert(item, `Item not found: ${id}`);
      return item;
    };

    const getOffsetItem = (offset: number) => (id: string, tries = itemsRef.current.length): T => {
      const items = itemsRef.current;
      const item = getItem(id);

      const getId = getIdRef.current;
      const currentIndex = items.findIndex(i => getId(item) === getId(i));
      let nextIndex = currentIndex + offset;
      if (nextIndex < 0) {
        nextIndex = items.length + nextIndex;
      } else if (nextIndex >= items.length) {
        nextIndex = nextIndex - items.length;
      }

      if (nonInteractiveIdsRef.current.includes(getId(items[nextIndex])) && tries > 0) {
        // The next item is disabled, try again, but only if we haven't already tried everything.
        // Avoid an infinite loop with `tries`
        return getOffsetItem(offset)(getId(items[nextIndex]), tries - 1);
      }

      return items[nextIndex];
    };

    const getNext = getOffsetItem(1);
    const getPrevious = getOffsetItem(-1);
    const goToPreviousRow = getOffsetItem(-state.columnCount);
    const goToNextRow = getOffsetItem(+state.columnCount);

    return {getFirst, getLast, getItem, getNext, goToNextRow, getPrevious, goToPreviousRow};
  }, [state.columnCount]);
};

export const createNavigationManager = (manager: NavigationManager) => manager;

const getFirst = <T extends unknown>({state}: NavigationInput<T>) => state.items[0];
const getLast = <T extends unknown>({state}: NavigationInput<T>) =>
  state.items[state.items.length - 1];

const getItem = <T extends unknown>(id: string, {state, getId}: NavigationInput<T>): T => {
  const item = id ? state.items.find(item => getId(item) === id) : getFirst({state, getId}); // no id, return first item
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
  if (nextIndex < 0) {
    nextIndex = items.length + nextIndex;
  } else if (nextIndex >= items.length) {
    nextIndex = nextIndex - items.length;
  }

  if (state.nonInteractiveIds.includes(getId(items[nextIndex])) && tries > 0) {
    // The next item is disabled, try again, but only if we haven't already tried everything.
    // Avoid an infinite loop with `tries`
    return getOffsetItem(offset)(getId(items[nextIndex]), {state, getId}, tries - 1);
  }

  return items[nextIndex];
};

export const wrappingNavigationManager = createNavigationManager({
  getFirst,
  getLast,
  getItem,
  getNext: getWrappingOffsetItem(1),
  getNextRow: <T extends unknown>(id: string, {state, getId}: NavigationInput<T>) =>
    getWrappingOffsetItem(-state.columnCount)(id, {state, getId}),
  getPrevious: getWrappingOffsetItem(-1),
  getPreviousRow: <T extends unknown>(id: string, {state, getId}: NavigationInput<T>) =>
    getWrappingOffsetItem(state.columnCount)(id, {state, getId}),
});

export const navigationManager = createNavigationManager({
  getFirst,
  getLast,
  getItem,
  getNext: getWrappingOffsetItem(1),
  getNextRow: <T extends unknown>(id: string, {state, getId}: NavigationInput<T>) =>
    getWrappingOffsetItem(-state.columnCount)(id, {state, getId}),
  getPrevious: getWrappingOffsetItem(-1),
  getPreviousRow: <T extends unknown>(id: string, {state, getId}: NavigationInput<T>) =>
    getWrappingOffsetItem(state.columnCount)(id, {state, getId}),
});

/**
 * A `CursorModel` extends a `ListModel` and adds a "cursor" to the list. A cursor is a pointer to a
 * current position in the list. The most common use-case is keeping track of which item currently
 * has focus within the list. Many w3c list role types specify a single tab stop within the list.
 */
export const useCursorModel = <T extends unknown>(
  config: CursorModelConfig<T> = {}
): CursorModel<T> => {
  const [orientation] = React.useState(config.orientation || 'vertical');
  const [cursorId, setCursorId] = React.useState('');
  const columnCount = config.columnCount || 0;
  const list = useListModel(config as ListModelConfig<T>);
  const initialCurrentRef = React.useRef(
    config.initialCursorId || config.items?.length ? list.getId(config.items![0]) : ''
  );

  const state = {...list.state, orientation, cursorId, columnCount};
  const navigation = config.navigation || wrappingNavigationManager;

  const events = useEventMap(cursorEventMap, state, config, {
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
    next() {
      setCursorId(list.getId(navigation.getNext(state.cursorId, {state, getId: list.getId})));
    },
    previous() {
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
    first() {
      setCursorId(list.getId(navigation.getFirst({state, getId: list.getId})));
    },
    last() {
      setCursorId(list.getId(navigation.getLast({state, getId: list.getId})));
    },
  } as CursorEvents<T>);

  return {...list, state, events, navigation};
};

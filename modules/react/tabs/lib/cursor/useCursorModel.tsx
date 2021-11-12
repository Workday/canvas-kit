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
};

export type CursorEvents<T = unknown> = ListEvents<T> & {
  /** Directly sets the cursor to the list item by its identifier.  */
  goTo(data: {id: string}): void;
  /** Set the cursor to the "next" item in the list. If the end of the list is detected, it will
   * wrap to the first item */
  next(): void;
  /** Set the cursor to the "previous" item in the list. If the beginning of the list is detected,
   * it will wrap to the last item */
  previous(): void;
  /** Set the cursor to the first item in the list */
  first(): void;
  /** Set the cursor to the last item in the list */
  last(): void;
};

export interface CursorModel<T = unknown> extends ListModel<T> {
  state: CursorState<T>;
  events: CursorEvents<T>;
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
   * effect which keys activate progression through a list. For example, `horizontal` will activate with
   * left and right arrows while `vertical` will activate with up and down arrows.
   * @default 'vertical'
   */
  orientation?: Orientation;
  /**
   * Initial cursor position. If not provided, the cursor will point to the first item in the list
   */
  initialCursorId?: string;
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
  const nonInteractiveKeysRef = React.useRef(state.nonInteractiveKeys);

  itemsRef.current = state.items;
  nonInteractiveKeysRef.current = state.nonInteractiveKeys;

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
        nextIndex = items.length - 1;
      } else if (nextIndex >= items.length) {
        nextIndex = 0;
      }

      if (nonInteractiveKeysRef.current.includes(getId(items[nextIndex])) && tries > 0) {
        // The next item is disabled, try again, but only if we haven't already tried everything.
        // Avoid an infinite loop with `tries`
        return getOffsetItem(offset)(getId(items[nextIndex]), tries - 1);
      }

      return items[nextIndex];
    };

    const getNext = getOffsetItem(1);
    const getPrevious = getOffsetItem(-1);

    return {getFirst, getLast, getItem, getNext, getPrevious};
  }, []);
};

export const useCursorModel = <T extends unknown>(
  config: CursorModelConfig<T> = {}
): CursorModel<T> => {
  const [orientation] = React.useState(config.orientation || 'vertical');
  const [cursorId, setCursorId] = React.useState('');
  const list = useListModel(config as ListModelConfig<T>);
  const initialCurrentRef = React.useRef(
    config.initialCursorId || config.items?.length ? list.getId(config.items![0]) : ''
  );

  const state = {...list.state, orientation, cursorId};
  const navigation = useCursorNavigation(state, list.getId);

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
      setCursorId(list.getId(navigation.getNext(state.cursorId)));
    },
    previous() {
      setCursorId(list.getId(navigation.getPrevious(state.cursorId)));
    },
    first() {
      setCursorId(list.getId(navigation.getFirst()));
    },
    last() {
      setCursorId(list.getId(navigation.getLast()));
    },
  } as CursorEvents<T>);

  return {state, events, getId: list.getId};
};

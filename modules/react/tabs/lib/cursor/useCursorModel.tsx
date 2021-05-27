import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  assert,
} from '@workday/canvas-kit-react/common';

import {
  ListState,
  ListEvents,
  BaseListModelConfig,
  listEventMap,
  useListModel,
  Item,
  ListModelConfig,
} from '../list/useListModel';

export type Orientation = 'horizontal' | 'vertical';

export type CursorState = ListState & {
  /** Orientation of the list. This property determines what "next" and "previous" mean. This should
   * be set to match the layout of UI components */
  orientation: Orientation;
  /** The id of the list item the cursor is pointing to */
  cursorId: string;
};

export type CursorEvents = ListEvents & {
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

export type CursorModel = Model<CursorState, CursorEvents>;

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

export type BaseCursorModelConfig = BaseListModelConfig & {
  /**
   * The orientation of a list of items. Values are either `vertical` or `horizontal`. This value will
   * effect which keys activate progression through a list. For example, `horizontal` will activate with
   * left and right arrows while `vertical` will activate with up and down arrows.
   * @default 'vertical'
   */
  orientation?: Orientation;
};

export type CursorModelConfig = BaseCursorModelConfig &
  Partial<ToModelConfig<CursorState, CursorEvents, typeof cursorEventMap>>;

const getFirst = (items: Item[]): Item => {
  return items[0];
};

const getLast = (items: Item[]): Item => {
  return items[items.length - 1];
};

export const getItem = (id: string, items: Item[]): Item => {
  const item = id ? items.find(item => item.id === id) : getFirst(items); // no id, return first item
  assert(item, `Item not found: ${id}`);
  return item;
};

const getOffsetItem = (offset: number) => (id: string, items: Item[]): Item => {
  const item = getItem(id, items);
  const currentIndex = items.findIndex(({id}) => item.id === id);
  let nextIndex = currentIndex + offset;
  if (nextIndex < 0) {
    nextIndex = items.length - 1;
  } else if (nextIndex >= items.length) {
    nextIndex = 0;
  }

  const disabledAttribute = items[nextIndex].ref.current?.getAttribute('disabled');
  if (disabledAttribute !== null || disabledAttribute === 'false') {
    // The next item is disabled, try again
    return getOffsetItem(offset)(items[nextIndex].id, items);
  }

  return items[nextIndex];
};

export const hasItems = (items: Item[]) => items.some(item => item.ref.current);

export const getNext = getOffsetItem(1);
export const getPrevious = getOffsetItem(-1);

export const useCursorModel = (config: CursorModelConfig = {}): CursorModel => {
  const [orientation] = React.useState(config.orientation || 'vertical');
  const [cursorId, setCursorId] = React.useState('');
  const initialCurrentRef = React.useRef('');
  const list = useListModel(config as ListModelConfig);

  const state = {...list.state, orientation, cursorId};

  const events = useEventMap(cursorEventMap, state, config, {
    ...list.events,
    registerItem(data) {
      // point the cursor at the first item
      if (!initialCurrentRef.current) {
        initialCurrentRef.current = data.item.id;
        setCursorId(initialCurrentRef.current);
      }
      list.events.registerItem(data);
    },
    unregisterItem(data) {
      // move the cursor forward if the the cursor is pointing to an item that is being removed
      if (state.cursorId === data.id && state.items.some(i => i.ref.current !== null)) {
        events.next();
      }
      list.events.unregisterItem(data);
    },
    goTo({id}) {
      setCursorId(id);
    },
    next() {
      setCursorId(getNext(state.cursorId, state.items).id);
    },
    previous() {
      setCursorId(getPrevious(state.cursorId, state.items).id);
    },
    first() {
      setCursorId(getFirst(state.items).id);
    },
    last() {
      setCursorId(getLast(state.items).id);
    },
  });

  return {state, events};
};

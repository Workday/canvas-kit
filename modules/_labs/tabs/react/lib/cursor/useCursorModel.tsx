import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  assert,
} from '@workday/canvas-kit-react-common';

import {ListState, ListEvents, listEventMap, useListModel, Item} from '../list/useListModel';

export type Orientation = 'horizontal' | 'vertical';

export type CursorState = ListState & {
  /** Orientation of the list. This property determines what "next" and "previous" mean. This should
   * be set to match the layout of UI components */
  orientation: Orientation;
  /** The id of the list item the cursor is pointing to */
  cursorId: string;
};

export type CursorEvents = ListEvents & {
  /** Directly sets the cursor to the list item by its identifier. Bypasses any checks  */
  setCursorId(data: {id: string}): void;
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
    shouldSetCursorId: 'setCursorId',
  },
  callbacks: {
    ...listEventMap.callbacks,
    onSetCursorId: 'setCursorId',
  },
});

export type CursorModelConfig = {
  orientation?: Orientation;
} & Partial<ToModelConfig<CursorState, CursorEvents, typeof cursorEventMap>>;

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

const getNext = getOffsetItem(1);
const getPrevious = getOffsetItem(-1);

export const useCursorModel = (config: CursorModelConfig = {}): CursorModel => {
  const [orientation] = React.useState(config.orientation || 'vertical');
  const [cursorId, setCursorId] = React.useState('');
  const initialCurrentRef = React.useRef('');
  const list = useListModel({
    ...config,
    onRegisterItem({data, state}) {
      if (!initialCurrentRef.current) {
        initialCurrentRef.current = data.item.id;
        setCursorId(initialCurrentRef.current);
      }
      config.onRegisterItem?.({data, state: state as CursorState});
    },
  });

  const state = {...list.state, orientation, cursorId};

  const events = useEventMap(cursorEventMap, state, config, {
    ...list.events,
    setCursorId({id}) {
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

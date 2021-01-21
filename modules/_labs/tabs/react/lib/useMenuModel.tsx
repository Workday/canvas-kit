import React from 'react';
import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  assert,
} from '@workday/canvas-kit-react-common';

import {ListState, ListEvents, listEventMap, useListModel, Item} from './useListModel';

export type Orientation = 'horizontal' | 'vertical';

export type MenuState = ListState & {
  orientation: Orientation;
  currentId: string;
};

export type MenuEvents = ListEvents & {
  setCurrentId(data: {id: string}): void;
  next(): void;
  previous(): void;
  first(): void;
  last(): void;
};

export type MenuModel = Model<MenuState, MenuEvents>;

export const menuEventMap = createEventMap<MenuEvents>()({
  guards: {
    ...listEventMap.guards,
    shouldSetCurrentId: 'setCurrentId',
  },
  callbacks: {
    ...listEventMap.callbacks,
    onSetCurrentId: 'setCurrentId',
  },
});

export type MenuModelConfig = {
  orientation?: Orientation;
} & Partial<ToModelConfig<MenuState, MenuEvents, typeof menuEventMap>>;

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

export const useMenuModel = (config: MenuModelConfig = {}): MenuModel => {
  const [orientation] = React.useState(config.orientation || 'vertical');
  const [currentId, setCurrentId] = React.useState('');
  const initialCurrentRef = React.useRef('');
  const list = useListModel({
    ...config,
    onRegisterItem({data, state}) {
      if (!initialCurrentRef.current) {
        initialCurrentRef.current = data.item.id;
        setCurrentId(initialCurrentRef.current);
      }
      config.onRegisterItem?.({data, state: state as MenuState});
    },
  });

  const state = {...list.state, orientation, currentId};

  const events = useEventMap(menuEventMap, state, config, {
    ...list.events,
    setCurrentId({id}) {
      setCurrentId(id);
    },
    next() {
      setCurrentId(getNext(state.currentId, state.items).id);
    },
    previous() {
      setCurrentId(getPrevious(state.currentId, state.items).id);
    },
    first() {
      setCurrentId(getFirst(state.items).id);
    },
    last() {
      setCurrentId(getLast(state.items).id);
    },
  });

  return {state, events};
};

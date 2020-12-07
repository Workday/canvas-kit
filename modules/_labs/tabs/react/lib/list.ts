import {assert} from '@workday/canvas-kit-react-common';

export type Item = {
  element: HTMLElement;
  id: string;
};

export const registerItem = (
  item: {id?: Item['id']; element: Item['element']},
  items: Item[]
): Item[] => {
  return items.concat({id: item.id || String(items.length), element: item.element});
};

export const unregisterItem = (id: string, items: Item[]): Item[] => {
  return items.filter(item => item.id !== id);
};

export const getFirst = (items: Item[]): Item => {
  return items[0];
};

export const getLast = (items: Item[]): Item => {
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

  const disabledAttribute = items[nextIndex].element.getAttribute('disabled');
  if (disabledAttribute !== null || disabledAttribute === 'false') {
    // The next item is disabled, try again
    return getOffsetItem(offset)(items[nextIndex].id, items);
  }

  return items[nextIndex];
};

export const getNext = getOffsetItem(1);
export const getPrevious = getOffsetItem(-1);

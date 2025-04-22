import {isCursor} from './useCursorListModel';
import {useSelectionListModel} from './useSelectionListModel';

export const listItemRemove = (
  id: string,
  model: ReturnType<typeof useSelectionListModel>
): string | undefined => {
  // bail early if an ID isn't available
  if (!id) {
    return;
  }

  const index = model.state.items.findIndex(item => item.id === model.state.cursorId);
  const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
  const nextId = model.state.items[nextIndex]?.id;
  if (nextId && isCursor(model.state, id)) {
    // We're removing the currently focused item. Focus next item
    model.events.goTo({id: nextId});
  }

  return nextId;
};

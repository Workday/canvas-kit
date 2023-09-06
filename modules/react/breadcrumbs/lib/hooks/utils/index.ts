export const reorganizeHiddenItems = (
  items: {id: string}[],
  hiddenIds: string[],
  getId: (item: {id: string}) => string
): string[] => {
  let updatedHiddenIds = hiddenIds;
  const totalSize = items.length;
  const itemSpace = totalSize - hiddenIds.length;

  if (totalSize > 2 && itemSpace <= 2) {
    // Keep only last items if there is place for two or less items
    updatedHiddenIds = items.slice(0, totalSize - 1).map(getId);
  } else if (totalSize > 3 && itemSpace === 3) {
    // Always keep first and last item if there is place for 3 items
    updatedHiddenIds = items.slice(1, totalSize - 1).map(getId);
  } else if (itemSpace > 3 && itemSpace < totalSize) {
    // Always keep first and 2 last items if there is place for 4 items
    updatedHiddenIds = items.slice(1, totalSize - 2).map(getId);
  }

  return updatedHiddenIds;
};

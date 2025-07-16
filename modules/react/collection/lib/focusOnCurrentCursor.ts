import {slugify} from '@workday/canvas-kit-styling';
import {useCursorListModel} from './useCursorListModel';

// retry a function each frame so we don't rely on the timing mechanism of React's render cycle.
const retryEachFrame = (cb: () => boolean, iterations: number, reject?: (reason?: any) => void) => {
  if (cb() === false && iterations > 1) {
    requestAnimationFrame(() => retryEachFrame(cb, iterations - 1));
  }
  reject?.('Retry timeout');
};

export const focusOnCurrentCursor = (
  model: ReturnType<typeof useCursorListModel>,
  nextId: string,
  /**
   * This can be any element in the list. It is used only to get the client-id from the element in
   * case it is different than the server ID when DOM is hydrated.
   */
  element?: HTMLElement
) => {
  return new Promise<HTMLElement | null>((resolve, reject) => {
    // Attempt to extract the ID from the DOM element. This fixes issues where the server and client
    // do not agree on a generated ID
    const clientId = (element?.dataset?.focusId || '').split('-')[0] || model.state.id;

    const item = model.navigation.getItem(nextId, model);

    if (item) {
      // If the list is virtualized, we need to manually call out to the virtual list's
      // `scrollToIndex`
      if (model.state.isVirtualized) {
        model.state.UNSTABLE_virtual.scrollToIndex(item.index);
      }

      const getElement = (id?: string) => {
        return document.querySelector<HTMLElement>(
          `[data-focus-id="${slugify(`${id}-${item.id}`)}"]`
        );
      };

      // In React concurrent mode, there could be several render attempts before the element we're
      // looking for could be available in the DOM
      retryEachFrame(
        () => {
          const element = getElement(clientId) || getElement(model.state.id);

          if (element) {
            element.focus();
            resolve(element);
          }
          return !!element;
        },
        5,
        reject
      ); // 5 should be enough, right?!
    }
  });
};

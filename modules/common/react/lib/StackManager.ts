// const stack: HTMLElement[] = [];

// export const getStack = () => stack;

/**
 * This type is purposely an interface so that it can be extended for a
 * specific use-case
 */
export interface PopupStackItem {
  element: HTMLElement;
}

let items: PopupStackItem[] = [];

export const PopupStack = {
  /**
   * When a new Popup is _opened_, it should be added to the stack.
   * @param item
   */
  add(item: PopupStackItem): void {
    items.push(item);
  },

  /**
   * Remove from the stack when a popup is _closed_.
   * @param element
   */
  remove(element: HTMLElement): void {
    items = items.filter(item => item.element !== element);
  },

  /**
   * This method is most useful if you need to access extra metadata associated
   * with a PopupStackItem. For example, if your popup manager adds controller
   * references to call methods when an escape key is hit.
   */
  getTopItem(): PopupStackItem | null {
    if (items.length) {
      return items[items.length - 1];
    }
    return null;
  },

  /**
   * This method is useful if a component handles escape or click outside
   * detection internally and needs to know if the component is the topmost
   * popup.
   * @param element The element reference used to identify the popup
   */
  isTopmostElement(element: HTMLElement): boolean {
    if (items.length) {
      return items[items.length - 1].element === element;
    }
    return false;
  },

  /**
   * This method is useful for click outside detection. It contains all
   * elements currently within the stack. Detection can see if the target
   * element is within any of these elements.
   */
  getElements(): HTMLElement[] {
    return items.map(i => i.element);
  },

  /**
   *
   * @param element The element reference used
   */
  contains(eventTarget: HTMLElement, element: HTMLElement): boolean {
    // get array of elements starting at element and include child stack items
    return items.reduce((acc, item) => item.element.contains(eventTarget), false);
  },
};

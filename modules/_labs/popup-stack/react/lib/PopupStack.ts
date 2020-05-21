/**
 * This type is purposely an interface so that it can be extended for a
 * specific use-case
 */
export interface PopupStackItem {
  /**
   * Ephemeral type popups usually have global listeners like click outside
   * or escape key handling. Ephemeral type popups include Tooltips, Modals,
   * DropDowns, etc. Persistent type popups include Windows. Persistent can
   * only be dismissed explicitly by a close button.
   */
  type: 'persistent' | 'ephemeral';
  element: HTMLElement;
}

function getLast<T>(items: T[]): T | null {
  if (items.length) {
    return items[items.length - 1];
  }
  return null;
}

interface Stack {
  items: PopupStackItem[];
}

// We need to make sure only one stack is ever in use on the page - ever.
// If a stack is already defined on the page, we need to use that one.
// Never, ever, ever change this variable name on window
const stack: Stack = (window as any).__popupStack || {
  items: [] as PopupStackItem[],
};
(window as any).__popupStack = stack;

export const PopupStack = {
  /**
   * When a new Popup is _opened_, it should be added to the stack.
   * @param item
   */
  add(item: PopupStackItem): void {
    stack.items.push(item);
  },

  /**
   * Remove from the stack when a popup is _closed_.
   * @param element
   */
  remove(element: HTMLElement): void {
    stack.items = stack.items.filter(item => item.element !== element);
  },

  /**
   * This method is most useful if you need to access extra metadata associated
   * with a PopupStackItem. For example, if your popup manager adds controller
   * references to call methods when an escape key is hit.
   */
  getTopItem(): PopupStackItem | null {
    return getLast(stack.items);
  },

  /**
   * Is the current element the top in the stack? Use `isTopmostEphemeral`
   * to handle detection of escape key or click outside.
   * @param element The element reference used to identify the popup
   */
  isTopmost(element: HTMLElement, type?: 'ephemeral' | 'persistent'): boolean {
    const items = type ? stack.items.filter(item => item.type === type) : stack.items;
    const last = getLast(items);

    if (last) {
      return last.element === element;
    }
    return false;
  },

  /**
   * This method is useful for click outside detection. It contains all
   * elements currently within the stack. Detection can see if the target
   * element is within any of these elements.
   */
  getElements(): HTMLElement[] {
    return stack.items.map(i => i.element);
  },

  /**
   * Bring the element to the top of the stack. This is useful for persistent
   * popups to place them on top of other persistent popups. This does not
   * need to be called when a popup is added since added popups are already
   * place on the top of the stack.
   * @param element The element reference used to identify the popup
   */
  bringToTop(element: HTMLElement): void {
    const item = stack.items.find(i => i.element === element);

    if (item) {
      stack.items = [...stack.items.filter(i => i !== item), item];
    } else {
      // not found
      const e = new Error();
      console.warn('Could not find item', e.stack);
    }
  },
};

/**
 * Reset all the items in the stack. This should only be used for testing
 * or if the page doesn't properly tear down each item in the stack when
 * switching views.
 */
export function resetStack() {
  stack.items = [];
}

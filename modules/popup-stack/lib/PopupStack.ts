/**
 * This type is purposely an interface so that it can be extended for a
 * specific use-case
 */
export interface PopupStackItem {
  element: HTMLElement;
}

function getLast<T>(items: T[]): T | null {
  if (items.length) {
    return items[items.length - 1];
  }
  return null;
}

/**
 * Calculate the zIndex value of a given index in the stack. The range is 20
 * where 30 is the minimum and 50 is the maximum. If there are more than 20
 * items in the stack, we'll have multiple zIndexes of 30 at the bottom of the
 * stack since the user probably can't tell the difference with that many
 * popups.
 */
export function defaultGetValue(index: number, length: number): number {
  const {min, max} = stack.zIndex;

  if (length <= max - min) {
    return index + min;
  }
  return Math.max(min, max - (length - index) + 1);
}

function setZIndexOfElements(elements: HTMLElement[], getValue: typeof defaultGetValue): void {
  const length = elements.length;
  elements.forEach((element, index) => {
    element.style.zIndex = String(getValue(index, length));
  });
}

interface Stack {
  items: PopupStackItem[];
  zIndex: {
    min: number;
    max: number;
    getValue: typeof defaultGetValue;
  };
}

// We need to make sure only one stack is ever in use on the page - ever.
// If a stack is already defined on the page, we need to use that one.
// Never, ever, ever change this variable name on window
(window as any).workday = (window as any).workday || {};
const stack: Stack = (window as any).workday.__popupStack || {
  description: 'Global popup stack from @workday/cavans-kit-popup-stack',
  items: [] as PopupStackItem[],
  zIndex: {min: 30, max: 50, getValue: defaultGetValue},
};
(window as any).workday.__popupStack = stack;

export const PopupStack = {
  /**
   * When a new Popup is _opened_, it should be added to the stack.
   * @param item
   */
  add(item: PopupStackItem): void {
    stack.items.push(item);

    setZIndexOfElements(PopupStack.getElements(), stack.zIndex.getValue);
  },

  /**
   * Remove from the stack when a popup is _closed_.
   * @param element
   */
  remove(element: HTMLElement): void {
    stack.items = stack.items.filter(item => item.element !== element);

    setZIndexOfElements(PopupStack.getElements(), stack.zIndex.getValue);
  },

  /**
   * Is the current element the top in the stack?
   * @param element The element reference used to identify the popup
   */
  isTopmost(element: HTMLElement): boolean {
    const last = getLast(stack.items);

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

    setZIndexOfElements(PopupStack.getElements(), stack.zIndex.getValue);
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

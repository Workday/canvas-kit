/**
 * This type is purposely an interface so that it can be extended for a specific use-case.
 */
export interface PopupStackItem {
  /**
   * All items in the stack are identified by their DOM element reference. A DOM element is
   * framework agnostic.
   */
  element: HTMLElement;
  /**
   * An owner is typically a trigger or anchor target. For example, it will be a HTMLButtonElement
   * that opened a dropdown menu. If an owner is provided, _and_ that owner element is part of
   * another stack item, it will be considered a "parent" of the provided stack item. This reference
   * helps in the following ways:
   * - Click outside detection typically will use `PopupStack.contains()` which includes this
   *   element. If you wish to close a popup when the target is clicked, add a click handler to do
   *   so.
   * - `PopupStack.bringToTop()` will also bring children to top as well using the `owner` reference
   *   to map a "child" popup back to its parent. This is useful for "Window" or other persistent
   *   popups that are brought to the front when clicked. This will prevent the "Window" from
   *   rendering on top of child popups as they will be brought along also.
   * - Synthetic event systems like in React will bubble events through "portals". This is
   *   inconsistent with DOM event bubbling. This reference helps normalize that behavior across
   *   different frameworks.
   */
  owner?: HTMLElement;
}

function getLast<T>(items: T[]): T | null {
  if (items.length) {
    return items[items.length - 1];
  }
  return null;
}

/**
 * Calculate the zIndex value of a given index in the stack. The range is 20 where 30 is the minimum
 * and 50 is the maximum. If there are more than 20 items in the stack, we'll have multiple zIndexes
 * of 30 at the bottom of the stack since the user probably can't tell the difference with that many
 * popups.
 */
export function getValue(index: number, length: number): number {
  const {min, max} = stack.zIndex;

  if (length <= max - min) {
    return index + min;
  }
  return Math.max(min, max - (length - index) + 1);
}

// IE11 doesn't support Array.prototype.find, so we'll polyfill here
function find<T>(
  items: T[],
  predicate: (value: T, index: number, obj: T[]) => boolean,
  thisArg?: any
): T | undefined {
  const length = items.length;
  for (let i = 0; i < length; i++) {
    if (predicate(items[i], i, items)) {
      return items[i];
    }
  }
  return;
}

/**
 * Sets the z-index value of all elements in the stack according to the `getValue` function. This
 * will be run any time the stack changes.
 */
function setZIndexOfElements(elements: HTMLElement[]): void {
  const length = elements.length;
  elements.forEach((element, index) => {
    element.style.zIndex = String(getValue(index, length));
  });
}

/**
 * Return the owning popup element reference given an owner reference passed when a Popup was added
 * to the stack.
 */
function getOwnerPopup(element: HTMLElement, items: PopupStackItem[]): HTMLElement | undefined {
  let parentEl: HTMLElement | null = element;
  do {
    const owner = find(items, el => el.element === parentEl);
    if (owner) {
      return owner.element;
    }
  } while ((parentEl = parentEl.parentElement));

  return;
}

/**
 * Get all child popups associated with an item in the stack. This is used by
 * `PopupStack.bringToTop` logic to bring child popups along with their parent, moving the whole
 * hierarchy.
 */
function getChildPopups(item: PopupStackItem, items: PopupStackItem[]): PopupStackItem[] {
  const owners = items
    .filter(i => i.owner)
    .map(i => ({element: i.element, parent: getOwnerPopup(i.owner!, items)}))
    .filter(i => i.parent === item.element);

  return owners;
}

interface Stack {
  items: PopupStackItem[];
  zIndex: {
    min: number;
    max: number;
    getValue: typeof getValue;
  };
}

/**
 * Get a deeply nested dot-notation path from an arbitrary object safely. Will return `undefined` if
 * path does not exist. This function is not meant to be type-safe. Use with caution.
 * @param obj Any object
 * @param path dot-notation path of a deep property
 */
function get(obj: any, path: string): any {
  const parts = path.split('.');
  const first = parts.splice(0, 1)[0];
  if (parts.length && obj[first]) {
    return get(obj[first], parts.join('.'));
  } else {
    return obj[first];
  }
}

/**
 * Set a deeply nested dot-notation path for an arbitrary object safely.
 * @param obj Any object
 * @param path dot-notation path of a deep property
 * @param value Any value
 */
function set(obj: any, path: string, value: any): any {
  const parts = path.split('.');
  const first = parts.splice(0, 1)[0];
  if (parts.length) {
    if (obj[first] === undefined) {
      obj[first] = {};
    }
    set(obj[first], parts.join('.'), value);
  } else {
    obj[first] = value;
  }
  return value;
}

if (typeof window !== 'undefined') {
  (window as any).workday = (window as any).workday || {};
}

/**
 * Safely get a value from window. Return the value or `undefined` if the path does not exist. This
 * function is not meant to be type-safe. Use with caution. Will silently return `undefined` in
 * environments without a `window` object, so it is safe to use in server-side rendering.
 * @param path Any dot-notation path
 */
const getFromWindow = (path: string) => {
  if (typeof window !== 'undefined') {
    return get(window, path);
  }
  return undefined;
};

/**
 * Set a deeply nested dot-notation path for an arbitrary path on `window` safely. Will silently do
 * nothing in environments without a `window` object, so it is safe to run in server-side rendering.
 * @param path dot-notation path of a deep property
 * @param value Any value
 */
const setToWindow = (path: string, value: any) => {
  if (typeof window !== 'undefined') {
    set(window, path, value);
  }
};

// We need to make sure only one stack is ever in use on the page - ever. If a stack is already
// defined on the page, we need to use that one. Never, ever, ever change this variable name on
// window
const stack: Stack = getFromWindow('workday.__popupStack') || {
  description: 'Global popup stack from @workday/canvas-kit-popup-stack',
  items: [] as PopupStackItem[],
  zIndex: {min: 30, max: 50, getValue: getValue},
};
setToWindow('workday.__popupStack', stack);
let _adapter: Partial<typeof PopupStack> = {};

export const PopupStack = {
  /**
   * Create a HTMLElement as the container for the popup stack item. The returned element reference
   * will be the reference to be passed to all other methods. The Popup Stack will control when this
   * element is added and removed from the DOM as well as the `z-index` style property. Your content
   * should be added to this element.
   */
  createContainer(): HTMLElement {
    if (_adapter.createContainer) {
      return _adapter.createContainer();
    }
    const div = document.createElement('div');
    div.style.position = 'relative'; // z-index only works on _positioned_ elements
    return div;
  },
  /**
   * Adds a PopupStackItem to the stack. This should only be called when the item is rendered to the
   * page. Z-indexes are set when the item is added to the stack. If your application requires
   * popups to be registered initially, but rendered when the user triggers some event, call this
   * method when the event triggers.
   */
  add(item: PopupStackItem): void {
    if (_adapter.add) {
      _adapter.add(item);
      return;
    }
    stack.items.push(item);
    document.body.appendChild(item.element);

    setZIndexOfElements(PopupStack.getElements());
  },

  /**
   * Removes an item from the stack by its `HTMLElement` reference. This should be called when a
   * popup is "closed" or when the element is removed from the page entirely to ensure proper memory
   * cleanup. This will not automatically be called when the element is removed from the DOM. Will
   * reset z-index values of the stack
   */
  remove(element: HTMLElement): void {
    if (_adapter.remove) {
      _adapter.remove(element);
      return;
    }
    stack.items = stack.items.filter(item => item.element !== element);
    document.body.removeChild(element);

    setZIndexOfElements(PopupStack.getElements());
  },

  /**
   * Returns true when the provided `element` is at the top of the stack. It will return false if it
   * is not the top of the stack or is not found in the stack. The `element` should be the same
   * reference that was passed to `add`
   */
  isTopmost(element: HTMLElement): boolean {
    if (_adapter.isTopmost) {
      return _adapter.isTopmost(element);
    }
    const last = getLast(stack.items);

    if (last) {
      return last.element === element;
    }
    return false;
  },

  /**
   * Returns an array of elements defined by the `element` passed to `add`.
   */
  getElements(): HTMLElement[] {
    if (_adapter.getElements) {
      return _adapter.getElements();
    }
    return stack.items.map(i => i.element);
  },

  /**
   * Bring the element to the top of the stack. This is useful for persistent popups to place them
   * on top of the stack when clicked. If an `owner` was provided to an item when it was added and
   * that owner is a DOM child of another item in the stack, that item will be considered a "parent"
   * to this item. If the previous are true, all "children" stack items will be brought to top as
   * well and will be on top of the element passed to `bringToTop`. This maintains stack item
   * "hierarchy" so that stack items like Popups and Tooltips don't get pushed behind elements they
   * are supposed to be on top of.
   *
   * This does not need to be called when a popup is added since added popups are already place on
   * the top of the stack.
   */
  bringToTop(element: HTMLElement): void {
    if (_adapter.bringToTop) {
      _adapter.bringToTop(element);
      return;
    }
    const item = find(stack.items, i => i.element === element);

    if (item) {
      stack.items = [...stack.items.filter(i => i !== item), item];

      // Also bring children to top. There are a few cases where stacking might break otherwise:
      // - Clicking a Popup calls `bringToTop`, but mouse is over a Tooltip so that Tooltip is now
      //   under the Popup
      // - Clicking a button opens a new Popup, but that click bubbles up to a `bringToTop` call
      //   putting the new popup under an existing one
      // Example: https://user-images.githubusercontent.com/338257/83924476-031af580-a742-11ea-8f68-0edabdf0fd6a.gif
      getChildPopups(item, stack.items).forEach(popup => {
        PopupStack.bringToTop(popup.element);
      });

      setZIndexOfElements(PopupStack.getElements());
    } else {
      // not found
      const e = new Error();
      console.warn('Could not find item', e.stack);
    }
  },

  /**
   * Compares a Popup by its element reference against the event target and the stack. An event
   * target is considered to be "contained" by an element under the following conditions:
   * - The `eventTarget` is a DOM child of the popup element
   * - The `eventTarget` is the `owner` element passed when it was added to the stack
   * - The `eventTarget` is a DOM child of the `owner` element
   *
   * This method should be used instead of `element.contains` so that clicking a popup target can
   * opt-in to toggling. Otherwise there is no way to opt-out of toggle behavior (because the target
   * is not inside `element`).
   */
  contains(element: HTMLElement, eventTarget: HTMLElement): boolean {
    if (_adapter.contains) {
      return _adapter.contains(element, eventTarget);
    }
    const item = find(stack.items, i => i.element === element);

    if (item) {
      return (
        eventTarget === item.owner ||
        item.owner?.contains(eventTarget) ||
        element.contains(eventTarget)
      );
    }
    return false;
  },
};

/**
 * Reset all the items in the stack. This should only be used for testing or if the page doesn't
 * properly tear down each item in the stack when switching views.
 */
export function resetStack() {
  stack.items = [];
}

/**
 *
 * @param adapter The parts of the PopupStack that we want to override
 */
export const createAdapter = (adapter: Partial<typeof PopupStack>) => {
  _adapter = adapter;
};

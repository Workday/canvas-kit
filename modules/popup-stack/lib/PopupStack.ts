import screenfull from 'screenfull';

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
    const owner = items.find(el => el.element === parentEl);
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
  /**
   * Returns the container of a stack given an optional element.
   */
  container?: (element?: HTMLElement) => HTMLElement;
  zIndex: {
    min: number;
    max: number;
    getValue: typeof getValue;
  };
  _adapter: Partial<typeof PopupStack>;
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

/**
 * TODO: Remove this after v12 and use `stack.container(el)` directly. This is temporary to make
 * sure Popups can open in new windows while supporting older versions of Canvas Kit AND full screen
 * mode.
 */
const getContainer = (stack: Stack, element?: HTMLElement): HTMLElement => {
  let stackContainer = stack.container?.();
  if (stackContainer === document.body) {
    // Here's the transitory code
    stackContainer = element?.ownerDocument.body;
  }

  return stackContainer || document.body;
};

// We need to make sure only one stack is ever in use on the page - ever. If a stack is already
// defined on the page, we need to use that one. Never, ever, ever change this variable name on
// window
const stack: Stack = getFromWindow('workday.__popupStack') || {
  description: 'Global popup stack from @workday/canvas-kit/popup-stack',
  container: el => el?.ownerDocument.body || document.body,
  items: [],
  zIndex: {min: 30, max: 50, getValue: getValue},
  _adapter: {},
};
setToWindow('workday.__popupStack', stack);

const stacks: Stack[] = getFromWindow('workday.__popupStackOfStacks') || [stack];

(stacks as any).description = 'Global stack of popup stacks from @workday/canvas-kit/popup-stack';
setToWindow('workday.__popupStackOfStacks', stacks);

function getTopStack() {
  return stacks[stacks.length - 1];
}

/**
 * The `PopupStack` is a framework agnostic first-in-last-out (FILO) stack that tracks all popups
 * ("floating UI" or any UI that renders on top of other content). It contains methods that interact
 * with the stack to support all coordinating behaviors of all popups on the page. The `PopupStack`
 * helps:
 *
 * - Render popups in the right order on the page
 * - Helps accessibility with the Escape key (topmost popup is closed)
 * - Handles transition to [Full
 *   Screen](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
 *
 * The `PopupStack` supports adapters to work with existing popup systems. {@link createAdapter} is
 * exported to accept an adapter. Only a single adapter should be used per page.
 *
 * The `PopupStack` is designed to handle multiple versions of `PopupStack` on the page at once
 * while the internal FILO stack is shared between instances. You should not attempt to use the
 * internal FILO stack. If an adapter is used, the internal FILO stack may be empty.
 */
export const PopupStack = {
  /**
   * Create a HTMLElement as the container for the popup stack item. The returned element reference
   * will be the reference to be passed to all other methods. The Popup Stack will control when this
   * element is added and removed from the DOM as well as the `z-index` style property. Your content
   * should be added to this element.
   */
  createContainer(): HTMLElement {
    const stack = getTopStack();
    if (stack._adapter?.createContainer) {
      return stack._adapter.createContainer();
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
    const stack = getTopStack();
    if (stack._adapter?.add) {
      stack._adapter.add(item);
      return;
    }
    stack.items.push(item);
    getContainer(stack, item.owner).appendChild(item.element);

    setZIndexOfElements(PopupStack.getElements());
  },

  /**
   * Removes an item from a stack by its `HTMLElement` reference. This should be called when a popup
   * is "closed" or when the element is removed from the page entirely to ensure proper memory
   * cleanup. A popup will be removed from the stack it is a part of. This will not automatically be
   * called when the element is removed from the DOM. This method will reset z-index values of the
   * stack.
   */
  remove(element: HTMLElement): void {
    // Find the stack the popup belongs to.
    const stack = stacks.find(stack => !!PopupStack.getElements(stack).find(el => el === element));
    if (stack) {
      if (stack._adapter?.remove) {
        stack._adapter.remove(element);
        return;
      }
      const item = stack.items.find(item => item.element === element);
      stack.items = stack.items.filter(item => item.element !== element);
      getContainer(stack, item?.owner).removeChild(element);

      setZIndexOfElements(PopupStack.getElements(stack));
    }
  },

  /**
   * Returns true when the provided `element` is at the top of the stack. It will return false if it
   * is not the top of the stack or is not found in the stack. The `element` should be the same
   * reference that was passed to `add`
   */
  isTopmost(element: HTMLElement): boolean {
    const stack = getTopStack();
    if (stack._adapter?.isTopmost) {
      return stack._adapter.isTopmost(element);
    }
    const last = getLast(stack.items);

    if (last) {
      return last.element === element;
    }
    return false;
  },

  /**
   * Returns an array of elements defined by the `element` passed to `add`. This method return
   * elements in the order of lowest z-index to highest z-index. Some popup behaviors will need to
   * make decisions based on z-index order.
   */
  getElements(stackOverride?: Stack): HTMLElement[] {
    const stack = stackOverride || getTopStack();
    if (stack._adapter?.getElements) {
      return stack._adapter.getElements();
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
    const stack = getTopStack();
    if (stack._adapter?.bringToTop) {
      stack._adapter.bringToTop(element);
      return;
    }
    const item = stack.items.find(i => i.element === element);

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
    const stack = getTopStack();
    if (stack._adapter?.contains) {
      return stack._adapter.contains(element, eventTarget);
    }

    // find the stack item that contains the event target
    const item = stack.items.find(i => i.element === element);
    if (item) {
      return ownsElement(item, eventTarget);
    }
    return false;

    function ownsElement(item: PopupStackItem, eventTarget: HTMLElement, depth = 0): boolean {
      if (depth > 30) {
        // Prevent infinite loop
        return false;
      }

      // See if the event target is inside the popup element or the owner element
      if (
        item.element === eventTarget ||
        item.owner === eventTarget ||
        item.element.contains(eventTarget) ||
        item.owner?.contains(eventTarget)
      ) {
        return true;
      }

      // Find the popup that has an owner element inside this popup
      const owningPopup = stack.items.find(i => i.owner && item.element.contains(i.owner));
      if (owningPopup) {
        // Check if the event target is inside the owning popup
        return ownsElement(owningPopup, eventTarget, depth + 1);
      }

      return false;
    }
  },

  /**
   * Add a new stack context for popups. This method could be called with the same element multiple
   * times, but should only push a new stack context once. The most common use-case for calling
   * `pushStackContext` is when entering fullscreen, but multiple fullscreen listeners could be
   * pushing the same element which is very difficult to ensure only one stack is used. To mitigate,
   * this method filters out multiple calls to push the same element as a new stack context.
   */
  pushStackContext(container: HTMLElement): void {
    const stack = getTopStack();

    if (stack._adapter?.pushStackContext) {
      return stack._adapter.pushStackContext(container);
    }
    // Don't push if the container already exists. This removes duplicates
    if (stack.container?.() === container) {
      return;
    }

    const newStack: Stack = {
      items: [],
      zIndex: stack.zIndex,
      container: () => container,
      _adapter: {},
    };
    stacks.push(newStack);
  },

  /**
   * Remove the topmost stack context. The stack context will only be removed if the top stack
   * context container element matches to guard against accidental remove of other stack contexts
   * you don't own.
   */
  popStackContext(container: HTMLElement): void {
    const stack = getTopStack();

    if (stack._adapter?.popStackContext) {
      return stack._adapter.popStackContext(container);
    }

    if (stack.container?.() === container && stacks.length > 1) {
      stacks.pop();
    }
  },

  /**
   * Transfer the popup stack item into the current popup stack context.
   *
   * An example might be a popup
   * that is opened and an element goes into fullscreen. The default popup stack context is
   * `document.body`, but the [Fullscreen
   * API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) will only render elements
   * that are children of the fullscreen element. If the popup isn't transferred to the current
   * popup stack context, the popup will remain open, but will no longer be rendered. This method
   * will transfer that popup to the fullscreen element so that it will render. Popups created while
   * in a fullscreen context that need to be transferred back when fullscreen is exited should also
   * call this method. While popups may still render when fullscreen is exited, popups will be
   * members of different popup stack contexts which will cause unspecified results (like the escape
   * key will choose the wrong popup as the "topmost").
   */
  transferToCurrentContext(item: PopupStackItem): void {
    const stack = getTopStack();

    if (stack._adapter?.transferToCurrentContext) {
      return stack._adapter.transferToCurrentContext(item);
    }

    if (stack.items.find(i => i.element === item.element)) {
      // The element is already in the stack, don't do anything
      return;
    }

    // Try to find the element in existing stacks. If it exists, we need to first remove from that
    // stack context
    const oldStack = stacks.find(stack => !!stack.items.find(i => i.element === item.element));
    if (oldStack) {
      PopupStack.remove(item.element);
    }

    PopupStack.add(item);
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
 * An adapter is a custom implementation of the {@link PopupStack}. There is only ever a single
 * instance of an adapter on the page. It allows an adapter to intercept any `PopupStack` method.
 * This could bypass the internal FILO stack of the `PopupStack` and allows the FILO stack to be
 * handled by something else.
 *
 * @param adapter The parts of the PopupStack that we want to override
 */
export const createAdapter = (adapter: Partial<typeof PopupStack>) => {
  stack._adapter = adapter;
};

// keep track of the element ourselves to avoid accidentally popping off someone else's stack
// context
let element: HTMLElement | null = null;

// Where should this go? Each version of `PopupStack` on a page will add a listener. The
// `PopupStack` should guard against multiple handlers like this simultaneously and there is no
// lifecycle here.
if (screenfull.isEnabled) {
  screenfull.on('change', () => {
    if (screenfull.isFullscreen) {
      if (screenfull.element) {
        element = screenfull.element as HTMLElement;
        PopupStack.pushStackContext(element);
      }
    } else if (element) {
      PopupStack.popStackContext(element);
    }
  });
}

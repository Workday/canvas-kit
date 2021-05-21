import * as React from 'react';
// @ts-ignore
import elementClosestPolyfill from 'element-closest';

export interface InputProviderProps {
  provideIntent?: boolean;
  container?: HTMLElement | React.RefObject<HTMLElement>;
}

export enum InputType {
  Initial = 'initial',
  Keyboard = 'keyboard',
  Mouse = 'mouse',
  Pointer = 'pointer',
  Touch = 'touch',
}

export enum InputEventType {
  KeyDown = 'keydown',
  KeyUp = 'keyup',
  MouseDown = 'mousedown',
  MouseMove = 'mousemove',
  Wheel = 'wheel',
  MouseWheel = 'mousewheel',
  PointerDown = 'pointerdown',
  PointerMove = 'pointermove',
  TouchStart = 'touchstart',
}

type InputEvent =
  | Event
  | React.KeyboardEvent
  | React.MouseEvent
  | React.TouchEvent
  | React.PointerEvent;

// form input types
const formInputs = ['input', 'select', 'textarea'];

// list of modifier keys commonly used with the mouse and
// can be safely ignored to prevent false keyboard detection
const ignoreMap = [
  16, // shift
  17, // control
  18, // alt
  91, // Windows key / left Apple cmd
  93, // Windows menu / right Apple cmd
];

// mapping of events to input types
export const inputEventMap = {
  [InputEventType.KeyDown]: InputType.Keyboard,
  [InputEventType.KeyUp]: InputType.Keyboard,
  [InputEventType.MouseDown]: InputType.Mouse,
  [InputEventType.MouseMove]: InputType.Mouse,
  [InputEventType.Wheel]: InputType.Mouse,
  [InputEventType.MouseWheel]: InputType.Mouse,
  [InputEventType.PointerDown]: InputType.Pointer,
  [InputEventType.PointerMove]: InputType.Pointer,
  [InputEventType.TouchStart]: InputType.Touch,
};

// map of IE 10 pointer events
const pointerMap = {
  2: InputType.Touch,
  3: InputType.Touch, // treat pen like touch
  4: InputType.Mouse,
};

const getPointerType = (event: React.PointerEvent): InputType => {
  if (typeof event.pointerType === 'number') {
    return pointerMap[event.pointerType];
  } else if (event.pointerType === 'mouse') {
    return InputType.Mouse;
  } else {
    // treat pen like touch
    return InputType.Touch;
  }
};

// detect version of mouse wheel event to use
// via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
const detectWheel = () => {
  let wheelType;

  // Modern browsers support "wheel"
  /* istanbul ignore else for coverage */
  if ('onwheel' in document.createElement('div')) {
    wheelType = InputEventType.Wheel;
  } else {
    // Webkit and IE support at least "mousewheel"
    wheelType = InputEventType.MouseWheel;
  }

  return wheelType;
};

const supportsPassive = () => {
  let supportsPassive;
  try {
    /* istanbul ignore next function for coverage */
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassive = true;
      },
    });

    /* istanbul ignore next function for coverage */
    const stub = () => {
      return;
    };

    window.addEventListener('test', stub, opts);
    window.removeEventListener('test', stub, opts);
  } catch (e) {
    /* istanbul ignore next line for coverage */
    console.warn('Browser does not support passive event listeners');
  }

  return supportsPassive || false;
};

/**
 * This component takes heavy inspiration from what-input (https://github.com/ten1seven/what-input)
 */
export default class InputProvider extends React.Component<InputProviderProps> {
  private eventTimer: number | undefined;

  private currentInput: InputType;
  private currentIntent: InputType;
  private supportsPassive!: boolean;
  private isBuffering = false;
  private isScrolling = false; // Unused if props.provideIntent is not defined
  private mousePosX: number | null = null; // Unused if props.provideIntent is not defined
  private mousePosY: number | null = null; // Unused if props.provideIntent is not defined
  private deferInputTracking = false; // True if there is another input provider

  constructor(props: any) {
    super(props);

    // check for sessionStorage support
    // then check for session variables and use if available
    let storedInput, storedIntent;
    try {
      storedInput = window.sessionStorage.getItem('what-input') as InputType;
      storedIntent = window.sessionStorage.getItem('what-intent') as InputType;
    } catch (e) {
      /* istanbul ignore next line for coverage */
      console.warn('Failed to retrieve input status from session storage' + e);
    }

    this.currentInput = storedInput || InputType.Initial;
    this.currentIntent = storedIntent || InputType.Initial;

    this.setInput = this.setInput.bind(this);
    this.setIntent = this.setIntent.bind(this);
    this.eventBuffer = this.eventBuffer.bind(this);
  }

  // Need to remember how it component was mounted so we ensure listener removal
  provideIntent = this.props.provideIntent;

  getContainer(container?: HTMLElement | React.RefObject<HTMLElement>): HTMLElement {
    // Note: Not a default prop because using document when defining default props causes errors during SSR
    if (!container) {
      return document.body;
    }
    if ('current' in container) {
      if (container.current === null) {
        console.warn('Your ref object can not be null, therefore, falling back to document.body');
        return document.body;
      } else {
        return container.current;
      }
    }
    return container;
  }

  componentDidMount() {
    // For IE11 and under, we'll need to polyfill element.closest
    elementClosestPolyfill(window);

    // Check for passive event listener support
    this.supportsPassive = supportsPassive();

    if (this.getContainer(this.props.container).closest('[data-whatinput]')) {
      this.deferInputTracking = true;
      return;
    }
    this.updateAttributes();
    this.enableListeners(true);
  }

  updateAttributes() {
    const intent = this.provideIntent ? this.currentIntent : null;
    this.getContainer(this.props.container).setAttribute('data-whatinput', this.currentInput);
    if (intent) {
      this.getContainer(this.props.container).setAttribute('data-whatintent', intent);
    }

    try {
      window.sessionStorage.setItem('what-input', this.currentInput);
      window.sessionStorage.setItem('what-intent', this.currentIntent);
    } catch (e) {
      /* istanbul ignore next line for coverage */
      console.warn('Failed to set input status in session storage' + e);
    }
  }

  componentWillUnmount() {
    if (this.deferInputTracking) {
      return;
    }

    this.getContainer(this.props.container).removeAttribute('data-whatinput');
    this.getContainer(this.props.container).removeAttribute('data-whatintent');
    window.clearTimeout(this.eventTimer);
    this.enableListeners(false);
  }

  enableListeners(enable: boolean) {
    /* istanbul ignore if for coverage */
    if (typeof window === 'undefined') {
      return;
    }

    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
    // can only demonstrate potential, but not actual, interaction
    // and are treated separately
    const options = this.supportsPassive
      ? ({passive: true} as AddEventListenerOptions) // fixes Type '{ passive: boolean; }' has no properties in common with type 'EventListenerOptions'.  TS2345
      : false;

    const fn = enable ? window.addEventListener : window.removeEventListener;

    // pointer events (mouse, pen, touch)
    if (window.PointerEvent) {
      fn('pointerdown', this.setInput);
    } else {
      // mouse events
      fn('mousedown', this.setInput);

      // touch events
      if ('ontouchstart' in window) {
        fn('touchstart', this.eventBuffer, options);
        fn('touchend', this.setInput);
      }
    }

    if (this.provideIntent) {
      if (window.PointerEvent) {
        fn('pointermove', this.setIntent);
      } else {
        fn('mousemove', this.setIntent);
      }

      // mouse wheel
      fn(detectWheel(), this.setIntent, options);
    }

    // keyboard events
    fn('keydown', this.eventBuffer);
    fn('keyup', this.eventBuffer);
  }

  setInput(event: InputEvent) {
    // only execute if the event buffer timer isn't running
    /* istanbul ignore if for coverage */
    if (this.isBuffering) {
      return;
    }
    const eventKey = 'which' in event ? event.which : undefined;
    const eventType = event.type as keyof typeof inputEventMap;
    let value = inputEventMap[eventType];

    if (value === InputType.Pointer) {
      value = getPointerType(event as React.PointerEvent);
    }

    const ignoreMatch = eventKey ? ignoreMap.indexOf(eventKey) === -1 : undefined;

    const shouldUpdate =
      (value === InputType.Keyboard && eventKey && ignoreMatch) ||
      value === InputType.Mouse ||
      value === InputType.Touch;

    if (this.currentInput !== value && shouldUpdate) {
      this.currentInput = value;
      this.updateAttributes();
    }

    if (this.currentIntent !== value && shouldUpdate && this.provideIntent) {
      // preserve intent for keyboard typing in form fields
      const activeElem = document.activeElement;
      const notFormInput =
        activeElem &&
        activeElem.nodeName &&
        formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1;

      /* istanbul ignore else for coverage */
      if (notFormInput) {
        this.currentIntent = value;
        this.updateAttributes();
      }
    }
  }

  // updates input intent for `mousemove` and `pointermove`
  setIntent(event: InputEvent) {
    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
    this.detectScrolling(event as React.MouseEvent);

    // only execute if the event buffer timer isn't running
    // or scrolling isn't happening
    /* istanbul ignore else for coverage */
    if (!this.isBuffering && !this.isScrolling) {
      const eventType = event.type as keyof typeof inputEventMap;
      let value = inputEventMap[eventType];
      if (value === InputType.Pointer) {
        value = getPointerType(event as React.PointerEvent);
      }

      this.currentIntent = value;
      this.updateAttributes();
    }
  }

  // buffers events that frequently also fire mouse events
  eventBuffer(event: Event) {
    // set the current input
    this.setInput(event);

    window.clearTimeout(this.eventTimer);

    this.isBuffering = true;

    /* istanbul ignore next function for coverage */
    this.eventTimer = window.setTimeout(() => {
      this.isBuffering = false;
    }, 100);
  }

  detectScrolling(event: React.MouseEvent) {
    if (this.mousePosX !== event.screenX || this.mousePosY !== event.screenY) {
      this.isScrolling = false;
      this.mousePosX = event.screenX;
      this.mousePosY = event.screenY;
    } else {
      this.isScrolling = true;
    }
  }

  render() {
    return this.props.children || null;
  }
}

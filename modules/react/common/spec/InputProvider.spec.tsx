import * as React from 'react';
import InputProvider, {InputType, InputEventType, inputEventMap} from '../lib/InputProvider';
import {mount} from 'enzyme';

const testInput = (
  mockEvent: {type: string},
  expectedInputType?: InputType,
  expectedIntentType?: InputType,
  shimWindowProps?: {[key: string]: boolean},
  provideIntent: boolean = true
) => {
  // https://github.com/airbnb/enzyme/issues/426#issuecomment-228601631
  const map: any = {};
  window.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  // Spoof window environments with different browser event types
  const windowRef = {...window};
  if (shimWindowProps) {
    for (const prop of Object.keys(shimWindowProps)) {
      // @ts-ignore
      window[prop] = shimWindowProps[prop];
    }
  }

  const component = mount(<InputProvider provideIntent={provideIntent} />);
  const eventType = mockEvent.type!;

  // Reset window environment
  if (shimWindowProps) {
    for (const prop of Object.keys(shimWindowProps)) {
      // @ts-ignore
      window[prop] = windowRef[prop];
    }
  }

  // If this fails for not being a function, it's because the listener wasn't added
  // in InputProvider. Likely because the right window circumstances weren't provided
  // in the test to imitate an environment required for certain event types (e.g. IE10)
  map[eventType](mockEvent);

  if (!provideIntent) {
    expect(document.body.getAttribute('data-whatinput')).toBe(expectedInputType);
  } else if (expectedInputType) {
    expect(document.body.getAttribute('data-whatinput')).toBe(expectedInputType);
    expect(document.body.getAttribute('data-whatintent')).toBe(expectedInputType);
  } else if (expectedIntentType) {
    expect(document.body.getAttribute('data-whatintent')).toBe(expectedIntentType);
  }
  component.unmount();
};

const getMockInputEvent = (
  eventType: InputEventType,
  expectedInputType: InputType,
  pointerType?: number | string
) => {
  const inputType = inputEventMap[eventType];

  switch (inputType) {
    case InputType.Mouse:
    case InputType.Touch:
    default:
      return {
        type: eventType,
        screenX: 1,
        screenY: 1,
      };
    case InputType.Keyboard:
      return {
        type: eventType,
        key: 'Tab',
      };
    case InputType.Pointer:
      return {
        type: eventType,
        pointerType: pointerType,
        screenX: 1,
        screenY: 1,
      };
  }
};

describe('InputProvider', () => {
  const cb = jest.fn();

  afterEach(() => {
    cb.mockReset();
  });

  // NOTE: It was hard to shim the `mousewheel` and `DOMMouseScroll` events, so we only test `wheel`

  test(`keydown event should result in keyboard input`, () => {
    const eventType = InputEventType.KeyDown;
    const expectedInputType = InputType.Keyboard;
    const mockEvent = getMockInputEvent(eventType, expectedInputType);

    testInput(mockEvent, expectedInputType, undefined, undefined, false);
  });
  test(`keyup event should result in keyboard input/intent`, () => {
    const eventType = InputEventType.KeyUp;
    const expectedInputType = InputType.Keyboard;
    const mockEvent = getMockInputEvent(eventType, expectedInputType);

    testInput(mockEvent, expectedInputType);
  });
  test(`mousedown event should result in mouse input/intent`, () => {
    const eventType = InputEventType.MouseDown;
    const expectedInputType = InputType.Mouse;
    const mockEvent = getMockInputEvent(eventType, expectedInputType);

    testInput(mockEvent, expectedInputType);
  });

  test(`mousemove event should result in mouse input/intent`, () => {
    const eventType = InputEventType.MouseMove;
    const expectedInputType = InputType.Mouse;
    const mockEvent = getMockInputEvent(eventType, expectedInputType);

    testInput(mockEvent, expectedInputType);
  });

  test(`wheel event should result in mouse input/intent`, () => {
    const eventType = InputEventType.Wheel;
    const expectedInputType = InputType.Mouse;
    const mockEvent = getMockInputEvent(eventType, expectedInputType);

    testInput(mockEvent, expectedInputType);
  });

  test(`pointerdown (w/ pointerType == mouse) event should result in mouse input/intent`, () => {
    const eventType = InputEventType.PointerDown;
    const expectedInputType = InputType.Mouse;
    const pointerType = 'mouse';
    const mockEvent = getMockInputEvent(eventType, expectedInputType, pointerType);
    const shimmedWindowProps = {
      PointerEvent: true,
    };

    testInput(mockEvent, expectedInputType, expectedInputType, shimmedWindowProps);
  });

  test(`pointerdown (w/ pointerType == pen) event should result in touch input/intent`, () => {
    const eventType = InputEventType.PointerDown;
    const expectedInputType = InputType.Touch;
    const pointerType = 'pen';
    const mockEvent = getMockInputEvent(eventType, expectedInputType, pointerType);
    const shimmedWindowProps = {
      PointerEvent: true,
    };

    testInput(mockEvent, expectedInputType, expectedInputType, shimmedWindowProps);
  });

  test(`pointermove (w/ pointerType == mouse) event should result in mouse intent`, () => {
    const eventType = InputEventType.PointerMove;
    const expectedIntentType = InputType.Mouse;
    const pointerType = 'mouse';
    const mockEvent = getMockInputEvent(eventType, expectedIntentType, pointerType);
    const shimmedWindowProps = {
      PointerEvent: true,
    };

    testInput(mockEvent, undefined, expectedIntentType, shimmedWindowProps);
  });

  test(`pointermove (w/ pointerType == pen) event should result in touch intent`, () => {
    const eventType = InputEventType.PointerMove;
    const expectedIntentType = InputType.Touch;
    const pointerType = 'pen';
    const mockEvent = getMockInputEvent(eventType, expectedIntentType, pointerType);
    const shimmedWindowProps = {
      PointerEvent: true,
    };

    testInput(mockEvent, undefined, expectedIntentType, shimmedWindowProps);
  });

  test(`touchstart event should result in touch input/intent`, () => {
    const eventType = InputEventType.TouchStart;
    const expectedInputType = InputType.Touch;
    const mockEvent = getMockInputEvent(eventType, expectedInputType);
    const shimmedWindowProps = {
      ontouchstart: true,
    };

    testInput(mockEvent, expectedInputType, expectedInputType, shimmedWindowProps);
  });

  test(`touchend event should result in touch input/intent`, () => {
    const eventType = 'touchend' as InputEventType;
    const expectedInputType = InputType.Touch;
    const mockEvent = getMockInputEvent(eventType, expectedInputType);
    const shimmedWindowProps = {
      ontouchstart: true,
    };

    testInput(mockEvent, expectedInputType, expectedInputType, shimmedWindowProps);
  });

  test(`Multiple input provider should only attach once to the dom`, () => {
    const ref = React.createRef<HTMLButtonElement>();
    const component = mount(
      <div>
        <InputProvider></InputProvider>
        <h1>Test</h1>
        <button ref={ref}></button>
        <InputProvider container={ref}></InputProvider>
      </div>
    );

    expect(document.querySelectorAll('[data-whatinput]').length).toBe(1);
    component.unmount();
  });
});

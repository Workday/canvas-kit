export function dispatchInputEvent<T extends HTMLElement>(input: T | null, value: string): void {
  // Changing value prop programmatically doesn't fire a synthetic event or trigger a native
  // onChange event. We can not just update .value= in setState because React library overrides
  // input value setter but we can call the function directly on the input as context. This will
  // cause onChange events to fire no matter how value is updated.
  if (input) {
    const nativeInputValue = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value');
    if (nativeInputValue && nativeInputValue.set) {
      nativeInputValue.set.call(input, value);
    }

    const event = new Event('input', {bubbles: true});

    input.dispatchEvent(event);
  }
}

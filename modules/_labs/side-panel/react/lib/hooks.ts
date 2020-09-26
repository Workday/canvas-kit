import * as React from 'react';

// TODO: From our friend NicholasBoll with slight modifications: https://codesandbox.io/s/controllable-tooltip-sfnus?file=/src/useControllableState.ts
export const useControllableState = <T>(
  value: T,
  defaultValue: T | (() => T)
): [T, (value: T) => void, boolean] => {
  const [valueState, setValueState] = React.useState(defaultValue);
  const isControlled = value !== undefined;

  // TODO: warn about switching between controlled and uncontrolled
  // TODO: warn about changing the default value

  const effectiveValue = isControlled ? value : valueState;

  const updateValue = (newValue: T) => {
    if (!isControlled) {
      setValueState(newValue);
    }
  };

  return [effectiveValue, updateValue, isControlled];
};

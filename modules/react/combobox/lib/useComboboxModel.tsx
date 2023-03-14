import React from 'react';
import {createModelHook} from '@workday/canvas-kit-react/common';
import {useMenuModel} from '@workday/canvas-kit-react/menu';

const useInputModel = createModelHook({
  defaultConfig: {
    value: '',
    onChange(event: React.ChangeEvent<HTMLInputElement>) {
      return;
    },
  },
})(config => {
  return {
    onChange: config.onChange,
    state: {value: config.value},
    events: {},
  };
});

function dispatchChangeEvent<T extends HTMLElement>(
  inputRef: React.RefObject<T>,
  value: string
): void {
  // Changing value prop programmatically doesn't fire an Synthetic event or trigger native onChange.
  // We can not just update .value= in setState because React library overrides input value setter
  // but we can call the function directly on the input as context.
  // This will cause onChange events to fire no matter how value is updated.
  if (inputRef.current) {
    const nativeInputValue = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(inputRef.current),
      'value'
    );
    if (nativeInputValue && nativeInputValue.set) {
      nativeInputValue.set.call(inputRef.current, value);
    }

    const event = new Event('input', {bubbles: true});

    inputRef.current.dispatchEvent(event);
  }
}

export const useComboboxModel = createModelHook({
  defaultConfig: {
    ...useInputModel.defaultConfig,
    ...useMenuModel.defaultConfig,
  },
  requiredConfig: {
    ...useInputModel.requiredConfig,
    ...useMenuModel.requiredConfig,
  },
})(config => {
  const input = useInputModel(config);
  const menu = useMenuModel(
    useMenuModel.mergeConfig(config, {
      onSelect({id}) {
        dispatchChangeEvent(menu.state.targetRef, id);
      },
    })
  );
  const [width, setWidth] = React.useState(0);

  const state = {
    ...input.state,
    ...menu.state,
    /**
     * The width of the combobox input. This is used to make sure the UI renders the menu the same
     * width as the input.
     */
    width,
  };

  const events = {
    ...input.events,
    ...menu.events,
    /**
     * Change the width of the menu
     */
    setWidth(width: number) {
      setWidth(width);
    },
  };

  return {...menu, ...input, state, events};
});

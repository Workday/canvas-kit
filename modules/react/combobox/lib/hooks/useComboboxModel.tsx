import React from 'react';
import {createModelHook, dispatchInputEvent} from '@workday/canvas-kit-react/common';
import {useMenuModel} from '@workday/canvas-kit-react/menu';

/**
 * An input model can be used by compound components that need to work with form fields. Some form
 * libraries use `onChange` and `value` to update a form object. Others use `onChange` and `ref` to
 * avoid rerendering. Also autocomplete and test libraries may use the `value` `HTMLInputElement`
 * property. We need to normalize these use cases so subcomponents can have correct data and all
 * use-cases are supported.
 */
export const useInputModel = createModelHook({
  defaultConfig: {
    value: undefined as string | undefined,

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
      return;
    },
  },
})(config => {
  const inputRef = React.createRef<HTMLInputElement>();

  return {
    onChange: config.onChange,
    state: {value: config.value, inputRef},
    events: {},
  };
});

/**
 * `ComboboxModel` extends the {@link ListModel} and the {@link InputModel}. Selecting items from
 * the menu will dispatch an
 * [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event on the
 * input which should work with form libraries, automation, and autofill.
 *
 * ```tsx
 * const model = useComboboxModel()
 *
 * <Combobox model={model}>{Combobox child components}</Combobox>
 * ```
 */
export const useComboboxModel = createModelHook({
  defaultConfig: {
    ...useInputModel.defaultConfig,
    ...useMenuModel.defaultConfig,
    shouldVirtualize: true,
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
        const textValue = menu.navigation.getItem(id, menu).textValue || id;
        dispatchInputEvent(menu.state.targetRef.current, textValue);
      },
    })
  );

  const [width, setWidth] = React.useState(0);

  const state = {
    /**
     * The width of the combobox input. This is used to make sure the UI renders the menu the same
     * width as the input.
     */
    width,
    ...input.state,
    ...menu.state,
  };

  const events = {
    ...input.events,
    ...menu.events,
    /**
     * Change the width of the menu. Usually this is set to the width of the input.
     */
    setWidth(width: number) {
      setWidth(width);
    },
  };

  return {...menu, ...input, state, events};
});

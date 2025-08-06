import React from 'react';
import {
  createElemPropsHook,
  useLocalRef,
  dispatchInputEvent,
} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

function onlyDefined<T>(input: T | undefined): input is T {
  return !!input;
}

/**
 * A constrained combobox input can only offer values that are part of the provided list of `items`.
 * The default is an unconstrained. A constrained input should have both a form input that is hidden
 * from the user as well as a user input that will be visible to the user. This hook is in charge of
 * keeping the inputs and the model in sync with each other and working with a browser's
 * autocomplete, form libraries and the model.
 */
export const useComboboxInputConstrained = createElemPropsHook(useComboboxModel)(
  (
    model,
    ref,
    {
      disabled,
      value: reactValue,
      onChange,
      name,
    }: Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'disabled' | 'value' | 'onChange' | 'name'
    > = {}
  ) => {
    // The user element is what the user sees
    const {elementRef: userElementRef, localRef: userLocalRef} = useLocalRef(
      model.state.targetRef as React.Ref<HTMLInputElement>
    );

    // The form element is what is seen in `FormData` during for submission to the server
    const {elementRef: formElementRef, localRef: formLocalRef} = useLocalRef(
      ref as React.Ref<HTMLInputElement>
    );

    // Create React refs so we can get the current value inside an Effect without using those values
    // as part of the dependency array.
    const modelNavigationRef = React.useRef(model.navigation);
    modelNavigationRef.current = model.navigation;
    const modelStateRef = React.useRef(model.state);
    modelStateRef.current = model.state;

    // Watch the `value` prop passed from React props and update the model accordingly
    React.useLayoutEffect(() => {
      if (formLocalRef.current && typeof reactValue === 'string') {
        if (reactValue !== formLocalRef.current.value) {
          model.events.setSelectedIds(reactValue ? reactValue.split(', ') : []);
        }
      }
    }, [reactValue, formLocalRef, model.events]);

    // useImperativeHandle allows us to modify the `ref` before it is sent to the application,
    // but after it is defined. We can add value watches, and redirect methods here.
    React.useImperativeHandle(
      formElementRef,
      () => {
        if (formLocalRef.current && userLocalRef.current) {
          const formElement = formLocalRef.current;
          const userElement = userLocalRef.current;

          // Hook into the DOM `value` property of the form input element and update the model
          // accordingly
          Object.defineProperty(formElement, 'value', {
            get() {
              const value = Object.getOwnPropertyDescriptor(
                Object.getPrototypeOf(formElement),
                'value'
              )?.get?.call(formElement);
              return value;
            },
            set(value: string) {
              if (
                formElement &&
                value !==
                  (modelStateRef.current.selectedIds === 'all'
                    ? []
                    : modelStateRef.current.selectedIds
                  ).join(', ')
              ) {
                model.events.setSelectedIds(value ? value.split(', ') : []);
              }
            },
          });

          // forward calls to `.focus()` and `.blur()` to the user input
          // https://github.com/testing-library/user-event/pull/1252 doesn't allow writable, but
          // allows reconfiguration, so we use `Object.defineProperty`.
          Object.defineProperty(formElement, 'focus', {
            configurable: true,
            writable: true,
            value: (options: FocusOptions) => userElement!.focus(options),
          });

          Object.defineProperty(formElement, 'blur', {
            configurable: true,
            writable: true,
            value: () => userElement!.blur(),
          });
          return formElement;
        }
        return formLocalRef.current!;
      },
      [formLocalRef, userLocalRef, model.events]
    );

    // sync model selection state with inputs
    React.useLayoutEffect(() => {
      if (userLocalRef.current) {
        const userValue =
          model.state.items.length === 0
            ? ''
            : (model.state.selectedIds === 'all'
                ? []
                : model.state.selectedIds
                    .map(id =>
                      modelNavigationRef.current.getItem(id, {state: modelStateRef.current})
                    )
                    .filter(onlyDefined)
                    .map(item => item.textValue)
              ).join(', ');

        if (userValue !== userLocalRef.current.value) {
          dispatchInputEvent(userLocalRef.current, userValue);
        }
      }

      if (formLocalRef.current) {
        const formValue = (model.state.selectedIds === 'all' ? [] : model.state.selectedIds).join(
          ', '
        );

        if (formValue !== formLocalRef.current.value) {
          dispatchInputEvent(formLocalRef.current, formValue);
        }
      }
    }, [model.state.selectedIds, model.state.items, formLocalRef, userLocalRef]);

    // The props here will go to the user input.
    return {
      ref: userElementRef,
      form: '', // We don't want the user input to be part of the form [elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)
      value: null,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        model.onFilterChange?.(event);
        return null; // Prevent further `onChange` callbacks from firing
      },

      name: null,
      disabled,
      /**
       * These props should be spread onto the form input.
       */
      formInputProps: {
        disabled,
        tabIndex: -1,
        'aria-hidden': true,
        ref: formElementRef,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(event);
          model.onChange?.(event);
        },
        name,
      },
    };
  }
);

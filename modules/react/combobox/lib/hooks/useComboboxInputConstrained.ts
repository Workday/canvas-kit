import React from 'react';
import {
  createElemPropsHook,
  useLocalRef,
  dispatchInputEvent,
} from '@workday/canvas-kit-react/common';
import {useComboboxModel} from './useComboboxModel';

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

    const modelNavigationRef = React.useRef(model.navigation);
    modelNavigationRef.current = model.navigation;
    const modelStateRef = React.useRef(model.state);
    modelStateRef.current = model.state;

    React.useLayoutEffect(() => {
      if (formLocalRef.current && typeof reactValue === 'string') {
        // const value = formLocalRef.current.value;
        if (reactValue !== formLocalRef.current.value) {
          model.events.setSelectedIds(reactValue ? reactValue.split(', ') : []);
        }
      }
    }, [reactValue, formLocalRef, model.events]);

    React.useImperativeHandle(
      formElementRef,
      () => {
        console.log('formLocalRef', formLocalRef.current);
        if (formLocalRef.current) {
          Object.defineProperty(formLocalRef.current, 'value', {
            get() {
              const value = Object.getOwnPropertyDescriptor(
                Object.getPrototypeOf(formLocalRef.current),
                'value'
              )?.get?.call(formLocalRef.current);
              console.log('get', value);
              return value;
            },
            set(value: string) {
              console.log(
                'value',
                value,
                'model',
                (modelStateRef.current.selectedIds === 'all'
                  ? []
                  : modelStateRef.current.selectedIds
                ).join(', '),
                'split',
                value.split(', ')
              );
              if (
                formLocalRef.current &&
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
        }
        return formLocalRef.current!;
      },
      [formLocalRef, model.events]
    );

    // sync model selection state with inputs
    React.useLayoutEffect(() => {
      if (userLocalRef.current) {
        const userValue = (
          model.state.selectedIds === 'all'
            ? []
            : model.state.selectedIds.map(
                id =>
                  modelNavigationRef.current.getItem(id, {state: modelStateRef.current}).textValue
              )
        ).join(', ');

        if (userValue !== userLocalRef.current.value) {
          dispatchInputEvent(userLocalRef.current, userValue);
        }
      }

      if (formLocalRef.current) {
        const formValue = (model.state.selectedIds === 'all' ? [] : model.state.selectedIds).join(
          ', '
        );

        console.log('formValue', formValue, formLocalRef.current.value);
        if (formValue !== formLocalRef.current.value) {
          dispatchInputEvent(formLocalRef.current, formValue);
        }
      }
    }, [model.state.selectedIds, formLocalRef, userLocalRef]);

    // The props here will go to the user input.
    return {
      ref: userElementRef,
      form: '', // We don't want the user input to be part of the form [elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)
      value: null,
      onChange: null,
      name: null,
      disabled,
      /**
       * These props should be spread onto the form input.
       */
      formInputProps: {
        disabled,
        tabIndex: -1,
        // value: reactValue,s
        'aria-hidden': true,
        ref: formElementRef,
        onChange,
        name,
      },
    };
  }
);

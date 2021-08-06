import React from 'react';

import {
  createEventMap,
  ErrorType,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

type TextInputState = {
  hasError?: ErrorType;
  inputId?: string;
  hintId?: string;
};

type TextInputEvents = {
  addError(): void;
  removeError(): void;
  addAlert(): void;
  removeAlert(): void;
};

export type TextInputModel = Model<TextInputState, TextInputEvents>;

const textInputEventMap = createEventMap<TextInputEvents>()({
  guards: {
    shouldError: 'addError',
    shouldRemoveError: 'removeError',
    shouldAlert: 'addAlert',
    shouldRemoveAlert: 'removeAlert',
  },
  callbacks: {
    onError: 'addError',
    onRemoveError: 'removeError',
    onAlert: 'addAlert',
    onRemoveAlert: 'removeAlert',
  },
});

export type TextInputModelConfig = {
  initialError?: ErrorType;
  inputId?: string;
  hintId?: string;
} & Partial<ToModelConfig<TextInputState, TextInputEvents, typeof textInputEventMap>>;

export const useTextInputModel = (config: TextInputModelConfig = {}): TextInputModel => {
  const [hasError, setHasError] = React.useState(config.initialError);
  const inputId = useUniqueId(config.inputId);
  const hintId = useUniqueId(config.hintId);

  const state = {
    hasError,
    inputId,
    hintId,
  };

  const events = useEventMap(textInputEventMap, state, config, {
    addError() {
      setHasError(ErrorType.Error);
    },
    removeError() {
      setHasError(undefined);
    },
    addAlert() {
      setHasError(ErrorType.Alert);
    },
    removeAlert() {
      setHasError(undefined);
    },
  });

  return {
    state,
    events,
  };
};

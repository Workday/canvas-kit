import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

type TextInputState = {
  hasError?: boolean;
  inputId?: string;
  hintId?: string;
};

type TextInputEvents = {};

export type TextInputModel = Model<TextInputState, TextInputEvents>;

const textInputEventMap = createEventMap<TextInputEvents>()({
  guards: {},
  callbacks: {},
});

export type TextInputModelConfig = {
  hasError?: boolean;
  inputId?: string;
  hintId?: string;
} & Partial<ToModelConfig<TextInputState, TextInputEvents, typeof textInputEventMap>>;

export const useTextInputModel = (config: TextInputModelConfig = {}): TextInputModel => {
  const inputId = useUniqueId(config.inputId);
  const hintId = useUniqueId(config.hintId);

  const state = {
    hasError: config.hasError,
    inputId,
    hintId,
  };

  const events = useEventMap(textInputEventMap, state, config, {});

  return {
    state,
    events,
  };
};

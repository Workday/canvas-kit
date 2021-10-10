import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

type FormFieldState = {
  hasError?: boolean;
  inputId?: string;
  hintId?: string;
  isRequired?: boolean;
};

type FormFieldEvents = {};

export type FormFieldModel = Model<FormFieldState, FormFieldEvents>;

const formFieldEventMap = createEventMap<FormFieldEvents>()({
  guards: {},
  callbacks: {},
});

export type FormFieldModelConfig = FormFieldState &
  Partial<ToModelConfig<FormFieldState, FormFieldEvents, typeof formFieldEventMap>>;

export const useFormFieldModel = (config: FormFieldModelConfig = {}): FormFieldModel => {
  const inputId = useUniqueId(config.inputId);
  const hintId = useUniqueId(config.hintId);

  const state = {
    hasError: config.hasError,
    isRequired: config.isRequired,
    inputId,
    hintId,
  };

  const events = useEventMap(formFieldEventMap, state, config, {});

  return {
    state,
    events,
  };
};

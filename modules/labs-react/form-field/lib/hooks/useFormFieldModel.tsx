import {
  createEventMap,
  Model,
  ToModelConfig,
  useEventMap,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

type FormFieldState = {
  /**
   * Optional flag to denote if this field has an error to display. When true the `FormField.Input` will have
   * `required` set to true, and usually some subcomponents will have a error color applied.
   * @default false
   */
  hasError?: boolean;
  /**
   * Optional `id` provided to `FormField`'s subcomponents as HTML attributes:
   * - `FormField.Input` will set `aria-describedby` to `hint-${id}`
   * - `FormField.Input` will set `id` to `input-${id}`
   * - `FormField.Label` will set `htmlFor` to `input-${id}`
   * - `FormField.Hint` will set `id` to `hint-${id}`
   *
   * If a value is not provided, a unique id will be automatically created by `useUniqueId()`.
   * @default `useUniqueId()`
   */
  id?: string;
  /**
   * Optional flag to denote if this field is required. When true the `FormField.Input` will have
   * `required` set to true, and an asterisk will be appended to the `FormField.Label`.
   * @default false
   */
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
  const id = useUniqueId(config.id);

  const state = {
    hasError: config.hasError,
    isRequired: config.isRequired,
    id,
  };

  const events = useEventMap(formFieldEventMap, state, config, {});

  return {
    state,
    events,
  };
};

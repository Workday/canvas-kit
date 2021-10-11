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
   * Optional id for the whole `Form Field`. The `aria-describedby` of the `FormField.Input` / id for `FormField.Hint`
   * and the `htmlFor` of the `FormField.Label` / id for `FormField.Input` will automatically derived from this value.
   * If not provided, a unique id will be created.
   * If you need access to these ids `FormField.Input` will be `input-${id}` and `FormField.Hint` will be `hint-${id}`.
   * @default useUniqueId()
   */
  id?: string;
  /**
   * Optional flag to denote if this field is required. When true the `FormField.Input` will have
   * `requried` set to true, and an asterisk will be appended to the `FormField.Label`.
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

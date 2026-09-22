import {
  multiSelectionManager,
  singleSelectionManager,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {createModelHook} from '@workday/canvas-kit-react/common';

export type SelectionGroupMode = 'single' | 'multiple';
export type SelectionGroupWidth = 'content' | 'equal' | 'column';
export type SelectionGroupError = 'error' | 'caution';

/**
 * The cursor events that keyboard navigation dispatches, mapped to the navigation manager method
 * that resolves the index they land on. A single-select group is a radio group, so selection
 * follows focus while arrowing through items. Only these events select - `goTo` is also used to
 * place the initial focus stop and to respond to clicks, neither of which should select.
 */
const navigationEvents = {
  goToNext: 'getNext',
  goToPrevious: 'getPrevious',
  goToFirst: 'getFirst',
  goToLast: 'getLast',
  goToNextRow: 'getNextRow',
  goToPreviousRow: 'getPreviousRow',
  goToFirstOfRow: 'getFirstOfRow',
  goToLastOfRow: 'getLastOfRow',
  goToNextPage: 'getNextPage',
  goToPreviousPage: 'getPreviousPage',
} as const;

/**
 * `createModelHook` runs a model's guards and callbacks unless the event it is wrapping is already
 * a wrapped event. The overrides below delegate to wrapped events from the list model, which has
 * the same config, so they are marked as wrapped too. Without this, `onSelect` and the `onGoTo*`
 * callbacks would fire twice for a single interaction.
 */
const asWrappedEvent = <T extends (...args: any[]) => void>(fn: T): T => {
  (fn as any)._wrapped = true;
  return fn;
};

export const useSelectionGroupModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    /**
     * Optional id for the whole `SelectionGroup`. If not provided, a unique id will be created.
     * @default useUniqueId()
     */
    id: '',
    /**
     * The selection mode of the group. `single` allows one selection at a time and behaves like a
     * radio group. `multiple` allows more than one selection and behaves like a checkbox group.
     * @default 'single'
     */
    mode: 'single' as SelectionGroupMode,
    /**
     * Controls how item widths are calculated within the group. All items in a group use the same
     * sizing method.
     * - `content`: each item is sized to its own label.
     * - `equal`: each item is sized to match the widest item.
     * - `column`: each item spans the full width of the group.
     * @default 'content'
     */
    width: 'content' as SelectionGroupWidth,
    /**
     * The initially selected ids of the group. Use this for uncontrolled groups. For `single` mode,
     * provide a single id. If not provided, nothing is selected until the user interacts.
     */
    initialSelectedIds: [] as string[],
    /**
     * The selected ids of the group. Providing this prop puts the model in a controlled state: the
     * group renders exactly what is passed in and will not change on its own. Use `onSelect` to
     * respond to selection.
     */
    selectedIds: undefined as string[] | undefined,
    /**
     * Sets disabled state for every item in the group. To disable individual items instead, pass
     * their ids to `nonInteractiveIds` so keyboard navigation skips over them.
     * @default false
     */
    disabled: false,
    /**
     * The type of error associated with the group (if applicable). Notification states apply to the
     * whole group rather than to individual items.
     */
    error: undefined as SelectionGroupError | undefined,
    /**
     * If true, the group is marked invalid to assistive technology.
     * @default true when `error` is `'error'`, otherwise undefined
     */
    'aria-invalid': undefined as boolean | undefined,
    /**
     * The id of the element describing the group, such as the hint text of a `FormField`. This is
     * set automatically when the group is used as a `FormField.Input`.
     */
    'aria-describedby': undefined as string | undefined,
    /**
     * The orientation of keyboard navigation within the group.
     * @default 'horizontal'
     */
    orientation: 'horizontal' as typeof useListModel.defaultConfig.orientation,
  },
  requiredConfig: useListModel.requiredConfig,
})(config => {
  const isControlled = config.selectedIds !== undefined;
  // `selection` always has a value because the list model defaults it to `singleSelectionManager`,
  // so `mode` picks the manager unless a custom one was passed in.
  const selection =
    config.selection && config.selection !== singleSelectionManager
      ? config.selection
      : config.mode === 'multiple'
        ? multiSelectionManager
        : singleSelectionManager;

  const listModel = useListModel(
    useListModel.mergeConfig(config, {
      orientation: config.orientation || 'horizontal',
      selection,
      initialSelectedIds: config.selectedIds || config.initialSelectedIds,
      shouldVirtualize: false,
      // `mergeConfig` combines this with a `shouldSelect` from the consumer rather than replacing
      // it. Guarding here means a blocked selection never reaches `onSelect`.
      shouldSelect: () => !config.disabled,
    })
  );

  const state = {
    ...listModel.state,
    mode: config.mode,
    width: config.width,
    disabled: config.disabled,
    error: config.error,
    'aria-invalid': config['aria-invalid'] ?? (config.error === 'error' ? true : undefined),
    'aria-describedby': config['aria-describedby'],
    selectedIds: isControlled ? config.selectedIds! : listModel.state.selectedIds,
  };

  const events = {
    ...listModel.events,
    ...(config.mode === 'single'
      ? (Object.keys(navigationEvents) as (keyof typeof navigationEvents)[]).reduce(
          (result, eventName) => {
            result[eventName] = asWrappedEvent(() => {
              // Resolve the target before moving the cursor - `cursorIndexRef` is updated by an
              // effect and still points at the previous item at this point.
              const index = listModel.navigation[navigationEvents[eventName]](
                listModel.state.cursorIndexRef.current,
                {state: listModel.state}
              );
              listModel.events[eventName]();

              const item = listModel.state.items[index];
              if (item) {
                listModel.events.select({id: item.id});
              }
            });
            return result;
          },
          {} as Record<keyof typeof navigationEvents, () => void>
        )
      : {}),
  };

  return {
    ...listModel,
    state,
    events,
  };
});

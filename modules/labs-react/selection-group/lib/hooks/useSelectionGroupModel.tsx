import React from 'react';

import {
  SelectionManager,
  multiSelectionManager,
  singleSelectionManager,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {createModelHook} from '@workday/canvas-kit-react/common';

export type SelectionGroupMode = 'single' | 'multiple';
export type SelectionGroupWidth = 'content' | 'equal' | 'column';
export type SelectionGroupError = 'error' | 'caution';

/**
 * `createModelHook` runs a model's guards and callbacks unless the event it is wrapping is already
 * a wrapped event. The overrides below delegate to events from the list model, which runs those
 * same guards and callbacks because both models share a config, so they are marked as wrapped too.
 * Without this, the `onGoTo*` callbacks would fire twice for a single key press.
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
     *
     * This drives more than selection - it also determines the `radio`/`checkbox` role of an item,
     * the `radiogroup`/`group` role of the list, whether the group is one tab stop or many, and the
     * shape of the item's icon. The matching `selection` manager is derived from it, so most groups
     * should set `mode` rather than passing a `selection` manager directly.
     * @default 'single'
     */
    mode: 'single' as SelectionGroupMode,
    /**
     * The selection manager the underlying list model uses. Leave this unset unless you need
     * selection to behave differently from what `mode` provides - `mode` picks
     * `singleSelectionManager` or `multiSelectionManager` for you. Setting this does not change
     * the roles or keyboard behavior that `mode` controls.
     * @default `singleSelectionManager`, or `multiSelectionManager` when `mode` is `'multiple'`
     */
    selection: undefined as SelectionManager | undefined,
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
     *
     * This prop only changes the group's border color, which is not sufficient on its own. Always
     * pair it with visible text describing the state and reference that text with
     * `aria-describedby`. Wrapping the group in a `FormField` with a `FormField.Hint` does this
     * for you.
     */
    error: undefined as SelectionGroupError | undefined,
    /**
     * If true, the group is marked invalid to assistive technology. Only applies when `mode` is
     * `'single'`, because `aria-invalid` is not allowed on the `group` role that a multi-select
     * group renders.
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
  const selection =
    config.selection ||
    (config.mode === 'multiple' ? multiSelectionManager : singleSelectionManager);

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

  // A single-select group is a radio group, so selection follows focus while arrowing through
  // items. The cursor events below set this, and the effect selects whatever the cursor landed on.
  const shouldSelectCursorRef = React.useRef(false);

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

  // The cursor model already maps each of its events to a navigation method, so the events are
  // read off the model rather than restated here. Every cursor event except the direct `goTo`
  // moves the cursor through the navigation manager. `goTo` is excluded because it also places the
  // initial focus stop and responds to clicks, neither of which should select.
  type NavigationEvent = Exclude<Extract<keyof typeof listModel.events, `goTo${string}`>, 'goTo'>;

  const navigationEvents = Object.keys(listModel.events).filter(
    name => name.startsWith('goTo') && name !== 'goTo'
  ) as NavigationEvent[];

  const selectFollowsFocusEvents = navigationEvents.reduce(
    (result, eventName) => {
      result[eventName] = asWrappedEvent(() => {
        // Let the cursor model resolve the target and move the cursor. Navigation skips
        // `nonInteractiveIds`, so this can't land selection on a non-interactive item.
        listModel.events[eventName]();
        shouldSelectCursorRef.current = true;
      });
      return result;
    },
    {} as Record<NavigationEvent, () => void>
  );

  const events = {
    ...listModel.events,
    ...(config.mode === 'single' ? selectFollowsFocusEvents : {}),
    // A click moves the cursor too, but it selects through `useListItemSelect`. Clearing the flag
    // keeps a cursor move that didn't come from the keyboard from selecting a second time.
    goTo: asWrappedEvent((data: {id: string}) => {
      shouldSelectCursorRef.current = false;
      listModel.events.goTo(data);
    }),
  };

  const {cursorId} = listModel.state;

  React.useEffect(() => {
    if (!shouldSelectCursorRef.current) {
      return;
    }
    shouldSelectCursorRef.current = false;

    if (typeof cursorId === 'string' && cursorId && !state.nonInteractiveIds.includes(cursorId)) {
      listModel.events.select({id: cursorId});
    }
    // Selection follows the cursor, so this should only run when the cursor moves.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorId]);

  return {
    ...listModel,
    state,
    events,
  };
});

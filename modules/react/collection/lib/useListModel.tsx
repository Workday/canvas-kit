import {createModelHook} from '@workday/canvas-kit-react/common';
import {useSelectionListModel} from './useSelectionListModel';

// This file creates a `ListModel` composing a `BaseListModel`, `CursorListModel`, and
// `SelectionListModel` and renames to `List*`. Without interfaces like this, the result would be
// `SelectionList*` which is confusing to users, but the separation is easier to maintain

export type ListProps<T = any> = {
  children: React.ReactNode | ((item: T) => React.ReactNode);
};

export type ListItemProps = {
  children?: React.ReactNode;
  'data-id'?: string;
};

/**
 * The List model contains the the state and events necessary to track items, selection, and a cursor.
 * Various hooks can be used for a List model to create common behaviors associated with lists, such as
 * navigating a list with a keyboard, selection (single and multiple), and virtualization.
 *
 * A list also has a "cursor". A cursor is often represented by focus, but it is not always a 1:1
 * mapping. Think of the cursor as the focus item within the list. If the list has browser focus, the
 * cursor will map to browser focus. Behaviors such as `useListRovingFocus` will map the cursor to the
 * active tab stop of the list. For more information, see
 * [Roving Tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex). `useListRovingFocus`
 * adds keyboard events that map to navigation events. A [Navigation Manager](#navigation-manager) is
 * used to map new cursor ids to these events. The `ListModel` takes an optional `navigation`
 * configuration to change the default navigation behavior. The default navigation manager is a
 * [wrappingNavigationManager](#wrappingnavigationmanager) meaning the cursor will wrap around the
 * beginning and the ends. The cursor also provides a [navigationManager](#navigationmanager) that does
 * not wrap. This is the default navigation for grids.
 *
 * The cursor also adds the concept of `orientation` which defaults to `'vertical'`. A Tab list is an
 * example of a `'horizontal'` list.
 *
 * ```tsx
 * const list = useListModel({
 *   // custom handling for selection. single and multi select are provided
 *   selection: mySelectionManager,
 *   // wrapping and non-wrapping navigation are provided
 *   navigation: myNavigationManager,
 *   items: [{ id: '1', text: 'First'}, { id: '2', text: 'Second' }],
 *   getId: item => item.id, // get the unique identifier of your item
 * })
 * ```
 */
export const useListModel = createModelHook({
  defaultConfig: {
    UNSTABLE_parentModel: undefined as ReturnType<typeof useSelectionListModel> | undefined,
    ...useSelectionListModel.defaultConfig,
  },
  requiredConfig: useSelectionListModel.requiredConfig,
})(config => {
  return {UNSTABLE_parentModel: config.UNSTABLE_parentModel, ...useSelectionListModel(config)};
});

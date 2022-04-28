import {createModelHook} from '@workday/canvas-kit-react/common';
import {useSelectionListModel} from './useSelectionListModel';

// This file creates a `ListModel` composing a `BaseListModel`, `CursorListModel`, and
// `SelectionListModel` and renames to `List*`. Without interfaces like this, the result would be
// `SelectionList*` which is confusing to users, but the separation is easier to maintain

export type ListProps<T = unknown> = {
  children: React.ReactNode | ((item: T) => React.ReactNode);
};

export type ListItemProps = {
  children?: React.ReactNode;
  name?: string;
};

/**
 * Create a list model that includes item registration, cursors for focus, and selection. You can
 * inject navigation and selection managers to change how a user navigates or how selection works.
 *
 * @example
 * const list = useListModel({
 *   // custom handling for selection. single and multi select are provided
 *   selection: mySelectionManager,
 *   // wrapping and non-wrapping navigation are provided
 *   navigation: myNavigationManager,
 *   items: [{ id: '1', text: 'First'}, { id: '2', text: 'Second' }],
 *   getId: item => item.id, // get the unique identifier of your item
 * })
 */
export const useListModel = createModelHook({
  defaultConfig: useSelectionListModel.defaultConfig,
  requiredConfig: useSelectionListModel.requiredConfig,
})(useSelectionListModel);

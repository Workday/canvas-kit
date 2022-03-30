import {createModel} from '../../common';
import {
  useSelectionListModel,
  SelectionListState,
  SelectionListEvents,
  selectionListEventMap,
  BaseSelectionListModelConfig,
  SelectionListModelConfig,
  SelectionListModel,
} from './useSelectionListModel';

// This file creates a `ListModel` composing a `BaseListModel`, `CursorListModel`, and
// `SelectionListModel` and renames to `List*`. Without interfaces like this, the result would be
// `SelectionList*` which is confusing to users, but the separation is easier to maintain

export type ListState<T = unknown> = SelectionListState<T>;
export type ListEvents<T = unknown> = SelectionListEvents<T>;
export interface ListModel<T = any> extends SelectionListModel<T> {}
export const listEventMap = selectionListEventMap;

export interface BaseListModelConfig<T> extends BaseSelectionListModelConfig<T> {}
export interface ListModelConfig<T> extends SelectionListModelConfig<T> {}

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
export const useListModel = <T extends unknown>(config?: ListModelConfig<T>): ListModel<T> => {
  return useSelectionListModel(config);
};

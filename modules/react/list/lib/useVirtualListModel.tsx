import {useVirtual, VirtualItem} from 'react-virtual';

import {
  useListModel,
  ListState,
  ListEvents,
  listEventMap,
  BaseListModelConfig,
  ListModelConfig,
  ListModel,
} from './useListModel';
import {ToModelConfig} from '@workday/canvas-kit-react/common';

// This file creates a `ListModel` composing a `BaseListModel`, `CursorListModel`, and
// `SelectionListModel` and renames to `List*`. Without interfaces like this, the result would be
// `SelectionList*` which is confusing to users, but the separation is easier to maintain

export interface VirtualListState<T = unknown> extends ListState<T> {
  /**
   * The virtual items created by [react-virtual](https://react-virtual.tanstack.com/)
   */
  virtualItems: VirtualItem[];
  totalHeight: number;
}
export type VirtualListEvents<T = unknown> = ListEvents<T>;
export interface VirtualListModel<T = any> extends ListModel<T> {}
export const virtualListEventMap = listEventMap;

export interface BaseVirtualListModelConfig<T> extends BaseListModelConfig<T> {}
export type VirtualListModelConfig<T> = ListModelConfig<T> &
  Partial<ToModelConfig<VirtualListState<T>, VirtualListEvents<T>, typeof virtualListEventMap>>;

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
export const useVirtualListModel = <T extends unknown>(
  config?: VirtualListModelConfig<T>
): VirtualListModel<T> => {
  const virtual = useVirtual({});
  return useListModel(config);
};

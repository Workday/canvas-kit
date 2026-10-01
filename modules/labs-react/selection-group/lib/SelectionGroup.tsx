import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';

import {SelectionGroupItem} from './SelectionGroupItem';
import {SelectionGroupList} from './SelectionGroupList';
import {useSelectionGroupModel} from './hooks/useSelectionGroupModel';

export interface SelectionGroupProps {
  children: React.ReactNode;
}

/**
 * `SelectionGroup` is a container component that allows users to select one or more options from a
 * predefined list using chip-style controls with a lightweight glyph indicator. It is responsible
 * for creating a {@link useSelectionGroupModel SelectionGroupModel} and sharing it with its
 * subcomponents using React context. It does not represent a real element.
 *
 * ```tsx
 * <SelectionGroup mode="single">
 *   <SelectionGroup.List aria-label="Select one option">
 *     <SelectionGroup.Item data-id="first">First</SelectionGroup.Item>
 *     <SelectionGroup.Item data-id="second">Second</SelectionGroup.Item>
 *   </SelectionGroup.List>
 * </SelectionGroup>
 * ```
 *
 * Alternatively, you may pass in a model using the [hoisted model
 * pattern](/getting-started/for-developers/resources/compound-components/#configuring-a-model).
 *
 * ```tsx
 * const model = useSelectionGroupModel({mode: 'multiple'});
 *
 * <SelectionGroup model={model}>{Child components}</SelectionGroup>
 * ```
 */
export const SelectionGroup = createContainer()({
  displayName: 'SelectionGroup',
  modelHook: useSelectionGroupModel,
  subComponents: {
    /**
     * `SelectionGroup.List` is a container for {@link SelectionGroupItem SelectionGroup.Item}
     * subcomponents. It renders a `radiogroup` in `single` mode and a `group` in `multiple` mode,
     * and carries the group's accessible label and notification state.
     *
     * ```tsx
     * <SelectionGroup.List aria-label="Select all that apply">
     *   {SelectionGroup.Items}
     * </SelectionGroup.List>
     * ```
     */
    List: SelectionGroupList,
    /**
     * `SelectionGroup.Item` is a `button` element with a glyph and a label. Each item requires a
     * `data-id` prop to handle selection events properly.
     *
     * ```tsx
     * <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
     * ```
     */
    Item: SelectionGroupItem,
  },
})<SelectionGroupProps>(({children}) => {
  return <>{children}</>;
});

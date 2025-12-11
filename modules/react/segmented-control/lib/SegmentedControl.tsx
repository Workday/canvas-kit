import React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';

import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';
import {SegmentedControlList} from './SegmentedControlList';
import {SegmentedControlItem} from './SegmentedControlItem';

export interface SegmentedControlProps {
  children: React.ReactNode;
}

/**
 * `SegmentedControl` is a container component that is responsible for creating a
 * {@link SegmentedControlModel} and sharing it with its subcomponents using React context. It does
 * not represent a real element.
 *
 * ```tsx
 * <SegmentedControl items={[]}>{Child components}</SegmentedControl>
 * ```
 *
 * Alternatively, you may pass in a model using the [hoisted model
 * pattern](/getting-started/for-developers/resources/compound-components/#configuring-a-model).
 *
 * ```tsx
 * const model = useSegmentedControlModel({
 *   items: [],
 * });
 *
 * <SegmentedControl model={model}>{Child components}</SegmentedControl>;
 * ```
 */
export const SegmentedControl = createContainer()({
  displayName: 'SegmentedControl',
  modelHook: useSegmentedControlModel,
  subComponents: {
    /**
     * `SegmentedControl.List` renders {@link Grid} under the hood. It is a container for
     * {@link SegmentedControlItem SegmentedControl.Item} subcomponents.
     *
     * ```tsx
     * <SegmentedControl.List>{SegmentedControl.Items}</SegmentedControl.List>
     * ```
     */
    List: SegmentedControlList,
    /**
     * `SegmentedControl.Item` is a `button` element built on `BaseButton`. `SegmentedControl.Item`
     * has a `data-id` prop to handle `onSelect` properly.
     *
     * ```tsx
     * <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
     * ```
     */
    Item: SegmentedControlItem,
  },
})<SegmentedControlProps>(({children}) => {
  return <>{children}</>;
});

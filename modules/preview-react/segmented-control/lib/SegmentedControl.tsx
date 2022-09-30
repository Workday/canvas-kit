import React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';

import {useSegmentedControlModel} from './useSegmentedControlModel';
import {SegmentedControlList} from './SegmentedControlList';
import {SegmentedControlItem} from './SegmentedControlItem';

export interface SegmentedControlProps {
  children: React.ReactNode;
}

export const SegmentedControl = createContainer()({
  displayName: 'SegmentedControl',
  modelHook: useSegmentedControlModel,
  subComponents: {
    List: SegmentedControlList,
    Item: SegmentedControlItem,
  },
})<SegmentedControlProps>(({children}) => {
  return <>{children}</>;
});

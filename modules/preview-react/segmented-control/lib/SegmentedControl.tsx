import React from 'react';
import {createContainer} from '@workday/canvas-kit-react/common';
import {useSegmentedControlModel} from './useSegmentedControlModel';

export interface SegmentedControlProps {
  children: React.ReactNode;
}

export const SegmentedControl = createContainer()({
  displayName: 'SegmentedControl',
  modelHook: useSegmentedControlModel,
  subComponents: {
    // List: SegmentedControlList,
    // Item: SegmentedControlItem,
  },
})<SegmentedControlProps>(({children}, _, model) => {
  return <React.Component model={model.menu}>{children}</React.Component>;
});

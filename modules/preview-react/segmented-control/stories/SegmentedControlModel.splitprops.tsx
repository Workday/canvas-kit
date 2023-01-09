import React from 'react';
import {useSegmentedControlModel} from '@workday/canvas-kit-preview-react/segmented-control';

type SegmentedControlModelConfig = Partial<typeof useSegmentedControlModel.defaultConfig> &
  typeof useSegmentedControlModel.requiredConfig;
type Model = ReturnType<typeof useSegmentedControlModel>;

export const SegmentedControlModelConfigComponent = (_: SegmentedControlModelConfig) => <div />;
export const SegmentedControlStateComponent = (_: Model['state']) => <div />;
export const SegmentedControlEventsComponent = (_: Model['events']) => <div />;

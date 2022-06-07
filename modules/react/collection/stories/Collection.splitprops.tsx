import {useListModel, useGridModel} from '@workday/canvas-kit-react/collection';

type ListModelConfig = Partial<typeof useListModel.defaultConfig> &
  typeof useListModel.requiredConfig;
type ListModel = ReturnType<typeof useListModel>;

type GridModelConfig = Partial<typeof useGridModel.defaultConfig> &
  typeof useGridModel.requiredConfig;
type GridModel = ReturnType<typeof useGridModel>;

export const ListModelConfigComponent = (_: ListModelConfig) => <div />;
export const ListStateComponent = (_: ListModel['state']) => <div />;
export const ListEventsComponent = (_: ListModel['events']) => <div />;

export const GridModelConfigComponent = (_: GridModelConfig) => <div />;
export const GridStateComponent = (_: GridModel['state']) => <div />;
export const GridEventsComponent = (_: GridModel['events']) => <div />;

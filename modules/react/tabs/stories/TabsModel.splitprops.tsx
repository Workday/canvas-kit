import {useTabsModel} from '@workday/canvas-kit-react/tabs';

type TabsModelConfig = Partial<typeof useTabsModel.defaultConfig> &
  typeof useTabsModel.requiredConfig;
type Model = ReturnType<typeof useTabsModel>;

export const TabsModelConfigComponent = (_: TabsModelConfig) => <div />;
export const TabsStateComponent = (_: Model['state']) => <div />;
export const TabsEventsComponent = (_: Model['events']) => <div />;

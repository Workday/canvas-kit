import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs} from '@workday/canvas-kit-react/tabs';

export const NamedTabs = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item data-id="first">First Tab</Tabs.Item>
        <Tabs.Item data-id="second">Second Tab</Tabs.Item>
        <Tabs.Item data-id="third">Third Tab</Tabs.Item>
        <Tabs.Item data-id="fourth">Fourth Tab</Tabs.Item>
        <Tabs.Item data-id="fifth">Fifth Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel data-id="first">Contents of First Tab</Tabs.Panel>
        <Tabs.Panel data-id="second">Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel data-id="third">Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel data-id="fourth">Contents of Fourth Tab</Tabs.Panel>
        <Tabs.Panel data-id="fifth">Contents of Fifth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};

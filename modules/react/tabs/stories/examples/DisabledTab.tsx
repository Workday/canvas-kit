import {Tabs} from '@workday/canvas-kit-react/tabs';
import {system} from '@workday/canvas-tokens-web';

export const DisabledTab = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item aria-disabled>Disabled Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: system.gap.lg}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Disabled Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};

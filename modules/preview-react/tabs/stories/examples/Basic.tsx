import {Tabs} from '@workday/canvas-kit-preview-react/tabs';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const Basic = () => {
  return (
    <Flex cs={{gap: system.gap.lg, flexDirection: 'column'}}>
      <>
        <Text as="h2">Filled Tabs (Default)</Text>
        <Tabs>
          <Tabs.List>
            <Tabs.Item>First Tab</Tabs.Item>
            <Tabs.Item>Second Tab</Tabs.Item>
            <Tabs.Item>Third Tab</Tabs.Item>
            <Tabs.Item>Fourth Tab</Tabs.Item>
            <Tabs.Item>Fifth Tab</Tabs.Item>
          </Tabs.List>
          <div style={{marginBlock: cssVar(system.gap.lg)}}>
            <Tabs.Panel>Contents of First Tab</Tabs.Panel>
            <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
            <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
            <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
            <Tabs.Panel>Contents of Fifth Tab</Tabs.Panel>
          </div>
        </Tabs>
      </>
      <>
        <Text as="h2">Outline Tabs</Text>
        <Tabs variant="outline">
          <Tabs.List>
            <Tabs.Item>First Tab</Tabs.Item>
            <Tabs.Item>Second Tab</Tabs.Item>
            <Tabs.Item>Third Tab</Tabs.Item>
            <Tabs.Item>Fourth Tab</Tabs.Item>
            <Tabs.Item>Fifth Tab</Tabs.Item>
          </Tabs.List>
          <div style={{marginBlock: cssVar(system.gap.lg)}}>
            <Tabs.Panel>Contents of First Tab</Tabs.Panel>
            <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
            <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
            <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
            <Tabs.Panel>Contents of Fifth Tab</Tabs.Panel>
          </div>
        </Tabs>
      </>
    </Flex>
  );
};

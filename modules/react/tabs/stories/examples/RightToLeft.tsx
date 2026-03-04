import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Tabs} from '@workday/canvas-kit-react/tabs';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const RightToLeft = () => {
  return (
    <CanvasProvider dir="rtl">
      <Tabs>
        <Tabs.List>
          <Tabs.Item>ראשון</Tabs.Item>
          <Tabs.Item>שְׁנִיָה</Tabs.Item>
          <Tabs.Item>שְׁלִישִׁי</Tabs.Item>
          <Tabs.Item>רביעי</Tabs.Item>
          <Tabs.Item>חמישי</Tabs.Item>
        </Tabs.List>
        <div style={{marginTop: cssVar(system.gap.lg)}}>
          <Tabs.Panel>תוכן הראשון</Tabs.Panel>
          <Tabs.Panel>תוכן השני</Tabs.Panel>
          <Tabs.Panel>תוכן השלישי</Tabs.Panel>
          <Tabs.Panel>תוכן הרביעי</Tabs.Panel>
          <Tabs.Panel>תוכן החמישי</Tabs.Panel>
        </div>
      </Tabs>
    </CanvasProvider>
  );
};

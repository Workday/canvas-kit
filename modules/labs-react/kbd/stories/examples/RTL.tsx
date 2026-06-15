import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {Flex} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export const RTL = () => {
  return (
    <Flex dir="rtl" cs={{gap: system.gap.md, alignItems: 'center', flexDirection: 'column'}}>
      <KBD variant="default">
        <KBD.Item>⌘</KBD.Item>
        <KBD.Item>C</KBD.Item>
      </KBD>
      <KBD variant="ghost">
        <KBD.Item>Shift</KBD.Item>
        <span>+</span>
        <KBD.Item>A</KBD.Item>
      </KBD>
    </Flex>
  );
};

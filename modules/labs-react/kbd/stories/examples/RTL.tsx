import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
});

export const RTL = () => {
  return (
    <div className={containerStyles} dir="rtl">
      <KBD>
        <KBD.Item>F</KBD.Item>
      </KBD>
      <KBD>
        <KBD.Item>⌘</KBD.Item>
        <KBD.Item>C</KBD.Item>
      </KBD>
      <KBD>
        <KBD.Item>Shift</KBD.Item>
        <span>+</span>
        <KBD.Item>P</KBD.Item>
      </KBD>
    </div>
  );
};

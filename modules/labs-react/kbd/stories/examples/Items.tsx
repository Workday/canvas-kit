import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
});

const items = ['⌘', 'Shift', 'P'];

export const Items = () => {
  return (
    <div className={containerStyles}>
      <KBD items={items}>{item => <KBD.Item>{item}</KBD.Item>}</KBD>
    </div>
  );
};

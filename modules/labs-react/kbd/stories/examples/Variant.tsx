import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
  p: {
    minWidth: px2rem(104),
    margin: 0,
  },
});

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.md,
});

export const Variant = () => {
  return (
    <div className={containerStyles}>
      <div className={rowStyles}>
        <Subtext size="large">Default Variant</Subtext>
        <KBD variant="default">
          <KBD.Item>⌘</KBD.Item>
          <KBD.Item>C</KBD.Item>
        </KBD>
      </div>
      <div className={rowStyles}>
        <Subtext size="large">Plain Variant</Subtext>
        <KBD variant="plain">
          <KBD.Item>Shift</KBD.Item>
          <span>+</span>
          <KBD.Item>A</KBD.Item>
        </KBD>
      </div>
    </div>
  );
};

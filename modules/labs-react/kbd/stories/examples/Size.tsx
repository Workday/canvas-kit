import {KBD} from '@workday/canvas-kit-labs-react/kbd';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  display: 'flex',
  flexDirection: 'column',
});

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.md,
  p: {
    minWidth: px2rem(104),
    margin: 0,
  },
});

export const Size = () => {
  return (
    <div className={containerStyles}>
      <div className={rowStyles}>
        <Subtext size="large">Large Size</Subtext>
        <KBD size="large">
          <KBD.Item>⌘</KBD.Item>
          <KBD.Item>C</KBD.Item>
        </KBD>
      </div>
      <div className={rowStyles}>
        <Subtext size="medium">Medium Size</Subtext>
        <KBD size="medium">
          <KBD.Item>Shift</KBD.Item>
          <span>+</span>
          <KBD.Item>A</KBD.Item>
        </KBD>
      </div>
      <div className={rowStyles}>
        <Subtext size="small">Small Size</Subtext>
        <KBD size="small">
          <KBD.Item>Ctrl</KBD.Item>
          <KBD.Item>V</KBD.Item>
        </KBD>
      </div>
    </div>
  );
};

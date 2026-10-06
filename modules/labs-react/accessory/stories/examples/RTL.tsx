import {AccessoryIcon} from '@workday/canvas-kit-labs-react/accessory';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

export const RTL = () => (
  <div className={rowStyles} dir="rtl">
    <AccessoryIcon icon={checkIcon} />
    <Subtext size="large">مكتمل</Subtext>
  </div>
);

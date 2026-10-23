import {AccessoryIcon} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

export const Icon = () => (
  <div className={rowStyles}>
    <AccessoryIcon icon={checkIcon} />
    <AccessoryIcon icon={checkIcon} variant="blue" />
  </div>
);

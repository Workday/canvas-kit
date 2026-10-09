import {
  AccessoryFile,
  AccessoryIcon,
  AccessoryMedia,
} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon, playCircleIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
  flexWrap: 'wrap',
});

export const Basic = () => (
  <div className={rowStyles}>
    <AccessoryIcon icon={checkIcon} variant="blue" />
    <AccessoryFile type="pdf" />
    <AccessoryMedia
      alt=""
      icon={playCircleIcon}
      src="https://picsum.photos/seed/accessory/200/200"
    />
  </div>
);

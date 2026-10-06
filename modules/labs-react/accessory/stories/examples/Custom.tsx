import {AccessoryMedia} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

const photo =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80">
      <rect width="160" height="80" fill="#1c2833"/>
      <circle cx="40" cy="40" r="22" fill="#243140"/>
      <circle cx="80" cy="28" r="18" fill="#0e1620"/>
      <circle cx="118" cy="48" r="24" fill="#2c3a48"/>
    </svg>`
  );

export const Custom = () => (
  <div className={rowStyles}>
    <AccessoryMedia alt="Three dark spheres" icon={checkIcon} src={photo} />
    <AccessoryMedia
      alt="Three dark spheres, contained"
      icon={checkIcon}
      objectFit="contain"
      src={photo}
    />
  </div>
);

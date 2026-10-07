import {AccessoryFavicon} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

export const Favicon = () => (
  <div className={rowStyles}>
    <AccessoryFavicon size="medium" url="gmail.com" />
    <AccessoryFavicon size="large" url="gmail.com" />
    <AccessoryFavicon url="gmail.com" />
    <AccessoryFavicon url="stripe.com" />
    <AccessoryFavicon url="linear.app" />
  </div>
);

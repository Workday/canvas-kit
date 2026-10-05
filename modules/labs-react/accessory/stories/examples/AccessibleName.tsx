import {Accessory} from '@workday/canvas-kit-labs-react/accessory';
import {checkIcon} from '@workday/canvas-system-icons-web';

export const AccessibleName = () => (
  <Accessory>
    <Accessory.Icon aria-label="Complete" icon={checkIcon} />
  </Accessory>
);

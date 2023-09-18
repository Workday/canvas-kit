import React from 'react';
import {
  setupIcon,
  uploadCloudIcon,
  userIcon,
  taskContactIcon,
} from '@workday/canvas-system-icons-web';
import {DeprecatedMenu, DeprecatedMenuItem} from '@workday/canvas-kit-preview-react/menu';

export const Icons = () => {
  return (
    <DeprecatedMenu>
      <DeprecatedMenuItem icon={uploadCloudIcon}>First Item</DeprecatedMenuItem>
      <DeprecatedMenuItem icon={setupIcon}>
        Second Item (with a really really really long label)
      </DeprecatedMenuItem>
      <DeprecatedMenuItem isDisabled icon={uploadCloudIcon} secondaryIcon={taskContactIcon}>
        Third Item
      </DeprecatedMenuItem>
      <DeprecatedMenuItem icon={userIcon}></DeprecatedMenuItem>
      <DeprecatedMenuItem hasDivider icon={taskContactIcon}>
        Fifth Item (with divider)
      </DeprecatedMenuItem>
    </DeprecatedMenu>
  );
};

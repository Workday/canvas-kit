import React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {notificationsIcon, alarmClockIcon} from '@workday/canvas-system-icons-web';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const Icons = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative">
        <ActionBar.Item as={PrimaryButton} icon={notificationsIcon}>
          First Action
        </ActionBar.Item>
        <ActionBar.Item icon={alarmClockIcon}>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};

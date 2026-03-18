import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {alarmClockIcon, notificationsIcon} from '@workday/canvas-system-icons-web';

export const Icons = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Action Bar">
        <ActionBar.Item as={PrimaryButton} icon={notificationsIcon}>
          First Action
        </ActionBar.Item>
        <ActionBar.Item icon={alarmClockIcon}>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};

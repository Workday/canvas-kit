import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {editIcon, trashIcon} from '@workday/canvas-system-icons-web';

export const IconOnly = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Icon-only Action Bar">
        <ActionBar.Item as={PrimaryButton}>Save</ActionBar.Item>
        <ActionBar.Item icon={editIcon} aria-label="Edit" />
        <ActionBar.Item icon={trashIcon} aria-label="Delete" />
      </ActionBar.List>
    </ActionBar>
  );
};

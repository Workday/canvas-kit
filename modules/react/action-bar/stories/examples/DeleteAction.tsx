import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {DeleteButton} from '@workday/canvas-kit-react/button';

export const DeleteAction = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Action Bar">
        <ActionBar.Item as={DeleteButton}>Delete Action</ActionBar.Item>
        <ActionBar.Item>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};

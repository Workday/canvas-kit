import {Expandable} from '@workday/canvas-kit-react/expandable';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export const Avatar = () => (
  <div>
    <Expandable>
      <Expandable.Target headingLevel="h4">
        <Expandable.Icon iconPosition="start" />
        <Expandable.Avatar name="Avatar" url={testAvatar} />
        <Expandable.Title>Title</Expandable.Title>
      </Expandable.Target>

      <Expandable.Content>Content</Expandable.Content>
    </Expandable>
    <Expandable>
      <Expandable.Target headingLevel="h4">
        <Expandable.Avatar name="Avatar" url={testAvatar} />
        <Expandable.Title>Title</Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>

      <Expandable.Content>Content</Expandable.Content>
    </Expandable>
  </div>
);

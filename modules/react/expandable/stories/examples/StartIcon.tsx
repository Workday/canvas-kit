import {Expandable} from '@workday/canvas-kit-react/expandable';

export const StartIcon = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.Icon iconPosition="start" />
      <Expandable.Title>Title</Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

import {Expandable} from '@workday/canvas-kit-react/expandable';

export const EndIcon = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.Title>
        This is a really long title that should wrap to multiple lines
      </Expandable.Title>
      <Expandable.Icon iconPosition="end" />
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

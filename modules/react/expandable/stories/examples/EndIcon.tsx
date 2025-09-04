import {Expandable} from '@workday/canvas-kit-react/expandable';

export const EndIcon = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.Title>
        TitleTitleTitleTitleTitle TitleTitleTitleTitle TitleTitleTitle Title
      </Expandable.Title>
      <Expandable.Icon iconPosition="end" />
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

import {Expandable} from '@workday/canvas-kit-react/expandable';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Expandable>
        <Expandable.Target headingLevel="h4">
          <Expandable.Icon iconPosition="start" />
          <Expandable.Avatar name="Avatar" isDecorative />
          <Expandable.Title>Title</Expandable.Title>
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
      <Expandable>
        <Expandable.Target headingLevel="h4">
          <Expandable.Avatar name="Avatar" isDecorative />
          <Expandable.Title>Title</Expandable.Title>
          <Expandable.Icon iconPosition="end" />
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
    </CanvasProvider>
  );
};

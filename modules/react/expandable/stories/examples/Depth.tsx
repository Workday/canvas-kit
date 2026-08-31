import {Expandable} from '@workday/canvas-kit-react/expandable';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const expandableStyles = createStyles({
  boxShadow: system.depth[3],
  borderRadius: system.shape.lg,
  padding: system.padding.xs,
  margin: system.gap.xs,
});

export const Depth = () => {
  return (
    <Expandable cs={expandableStyles}>
      <Expandable.Target headingLevel="h4">
        <Expandable.Title>Additional Information</Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>

      <Expandable.Content>This Expandable Container has a depth of 3.</Expandable.Content>
    </Expandable>
  );
};

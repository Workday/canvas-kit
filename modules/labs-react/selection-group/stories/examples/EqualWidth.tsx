import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const EqualWidth = () => (
  <SelectionGroup mode="single" width="equal" initialSelectedIds={['short']}>
    <SelectionGroup.List aria-label="Equal width selection group (select one)">
      <SelectionGroup.Item data-id="short">Short</SelectionGroup.Item>
      <SelectionGroup.Item data-id="medium-length">Medium Length</SelectionGroup.Item>
      <SelectionGroup.Item data-id="a-much-longer-label">A Much Longer Label</SelectionGroup.Item>
    </SelectionGroup.List>
  </SelectionGroup>
);

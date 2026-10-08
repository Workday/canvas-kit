import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const Basic = () => (
  <SelectionGroup mode="single">
    <SelectionGroup.List aria-label="Preferred contact method (select one)">
      <SelectionGroup.Item data-id="email">Email</SelectionGroup.Item>
      <SelectionGroup.Item data-id="phone">Phone</SelectionGroup.Item>
      <SelectionGroup.Item data-id="text">Text Message</SelectionGroup.Item>
    </SelectionGroup.List>
  </SelectionGroup>
);

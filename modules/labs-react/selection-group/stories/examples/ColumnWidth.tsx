import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const ColumnWidth = () => (
  <SelectionGroup mode="single" width="column" initialSelectedIds={['option-a']}>
    <SelectionGroup.List aria-label="Column width selection group (select one)">
      <SelectionGroup.Item data-id="option-a">
        Option A with a longer descriptive label
      </SelectionGroup.Item>
      <SelectionGroup.Item data-id="option-b">
        Option B with a longer descriptive label
      </SelectionGroup.Item>
      <SelectionGroup.Item data-id="option-c">
        Option C with a longer descriptive label
      </SelectionGroup.Item>
    </SelectionGroup.List>
  </SelectionGroup>
);

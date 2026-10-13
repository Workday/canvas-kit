import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

export const Disabled = () => (
  <>
    <BodyText size="small" cs={{marginBlockEnd: system.gap.xs}}>
      The whole group is disabled
    </BodyText>
    <SelectionGroup mode="single" disabled initialSelectedIds={['option-a']}>
      <SelectionGroup.List aria-label="Fully disabled selection group (select one)">
        <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-b">Option B</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
      </SelectionGroup.List>
    </SelectionGroup>

    <BodyText size="small" cs={{marginBlockStart: system.gap.md, marginBlockEnd: system.gap.xs}}>
      A single item is disabled
    </BodyText>
    <SelectionGroup
      mode="single"
      nonInteractiveIds={['option-c']}
      initialSelectedIds={['option-a']}
    >
      <SelectionGroup.List aria-label="Partially disabled selection group (select one)">
        <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-b">Option B</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-c">Option C</SelectionGroup.Item>
      </SelectionGroup.List>
    </SelectionGroup>
  </>
);

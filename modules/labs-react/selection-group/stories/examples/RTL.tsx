import {SelectionGroup} from '@workday/canvas-kit-labs-react/selection-group';

export const RTL = () => (
  <div dir="rtl">
    <SelectionGroup mode="single" initialSelectedIds={['option-b']}>
      <SelectionGroup.List aria-label="اختر واحدا">
        <SelectionGroup.Item data-id="option-a">الخيار أ</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-b">الخيار ب</SelectionGroup.Item>
        <SelectionGroup.Item data-id="option-c">الخيار ج</SelectionGroup.Item>
      </SelectionGroup.List>
    </SelectionGroup>
  </div>
);

import {AccessoryCalendar} from '@workday/canvas-kit-labs-react/accessory';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const rowStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  gap: system.gap.sm,
});

export const Calendar = () => (
  <div className={rowStyles}>
    <AccessoryCalendar date={30} month="Apr" />
    <AccessoryCalendar date={1} month="May" />
    <AccessoryCalendar date={24} month="Dec" />
  </div>
);

import {css} from '@emotion/react';

import {Accessory, AccessoryIcon} from '@workday/canvas-kit-labs-react/accessory';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const calendarAccessoryStencil = createStencil({
  parts: {
    month: 'month',
    day: 'day',
  },
  base: ({monthPart, dayPart}) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: system.color.surface.alt.default,
    border: `1px solid ${system.color.border.default}`,
    alignItems: 'center',
    lineHeight: system.lineHeight.subtext.md,
    [monthPart]: {
      fontSize: system.fontSize.subtext.sm,
      color: system.color.fg.danger.default,
      fontWeight: system.fontWeight.medium,
    },
    [dayPart]: {
      fontSize: system.fontSize.subtext.lg,
    },
  }),
});

export const Basic = () => (
  <Accessory cs={calendarAccessoryStencil()}>
    <div {...calendarAccessoryStencil.parts.month}>Aug</div>
    <div {...calendarAccessoryStencil.parts.day}>14</div>
  </Accessory>
);

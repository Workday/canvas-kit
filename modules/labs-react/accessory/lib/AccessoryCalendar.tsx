import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {Accessory, AccessoryProps, accessoryStencil} from './Accessory';

export interface AccessoryCalendarProps extends AccessoryProps {
  /**
   * The month label, such as `Apr`.
   */
  month: string;
  /**
   * The day of the month, such as `30`.
   */
  date: number | string;
}

/**
 * Calendar treatment for `AccessoryCalendar`. The month uses a critical color. The day uses the
 * default foreground color. `color` overrides the month. `background` overrides the tile fill.
 */
export const accessoryCalendarStencil = createStencil({
  parts: {
    icon: 'accessory-icon',
    month: 'accessory-calendar-month',
    date: 'accessory-calendar-date',
  },
  base: ({datePart, iconPart, monthPart}) => ({
    [iconPart]: {
      flexDirection: 'column',
      // 2px month margin plus 1px stack gap in the Sana accessory calendar.
      gap: px2rem(3),
      overflow: 'hidden',
      backgroundColor: cssVar(
        accessoryStencil.vars.tileBackground,
        system.legacy.color.surface.default
      ),
      borderWidth: px2rem(1),
      borderStyle: 'solid',
      borderColor: system.legacy.color.border.default,
    },
    [monthPart]: {
      color: cssVar(accessoryStencil.vars.iconColor, system.legacy.color.fg.danger.default),
      fontSize: system.legacy.fontSize.subtext.sm,
      fontWeight: system.fontWeight.medium,
      lineHeight: 1,
      transform: `translateY(${px2rem(1)})`,
    },
    [datePart]: {
      color: system.color.fg.default,
      fontSize: system.legacy.fontSize.body.sm,
      fontWeight: system.fontWeight.normal,
      lineHeight: 1,
      transform: `translateY(${px2rem(1)})`,
    },
  }),
});

/**
 * `AccessoryCalendar` renders a month and day in an accessory tile. The month is critical and the
 * day is the default foreground color. Always decorative.
 */
export const AccessoryCalendar = createComponent('span')({
  displayName: 'AccessoryCalendar',
  Component: (
    {month, date, size = 'extraLarge', color, background, ...elemProps}: AccessoryCalendarProps,
    ref,
    Element
  ) => {
    return (
      <Accessory
        as={Element}
        ref={ref}
        background={background}
        color={color}
        size={size}
        {...handleCsProp(elemProps, accessoryCalendarStencil())}
      >
        <span {...accessoryStencil.parts.icon}>
          <span {...accessoryCalendarStencil.parts.month}>{month}</span>
          <span {...accessoryCalendarStencil.parts.date}>{date}</span>
        </span>
      </Accessory>
    );
  },
});

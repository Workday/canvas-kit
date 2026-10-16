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
 * default foreground color. `size` scales both. `color` overrides the month. `background`
 * overrides the tile fill.
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
      // 3px stack gap on the 40px tile, scaled with the tile.
      gap: '0.075em',
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
      fontSize: '0.25em',
      fontWeight: system.fontWeight.medium,
      lineHeight: 1,
      whiteSpace: 'nowrap',
    },
    [datePart]: {
      color: system.color.fg.default,
      fontSize: '0.4em',
      fontWeight: system.fontWeight.normal,
      lineHeight: 1,
      whiteSpace: 'nowrap',
    },
  }),
  modifiers: {
    /**
     * The icon part's font size matches the tile so month (`0.25em`) and day (`0.4em`) stay in
     * proportion. At `extraLarge` that is 10px and 16px (`subtext.sm` and `body.sm`). Type tokens
     * do not go below 10px, so smaller tiles keep the ratio instead of a fixed type level.
     */
    size: {
      extraSmall: ({iconPart}) => ({
        [iconPart]: {fontSize: system.legacy.fontSize.body.sm},
      }),
      small: ({iconPart}) => ({
        [iconPart]: {fontSize: system.legacy.fontSize.body.lg},
      }),
      medium: ({iconPart}) => ({
        [iconPart]: {fontSize: system.legacy.fontSize.heading.sm},
      }),
      large: ({iconPart}) => ({
        [iconPart]: {fontSize: system.legacy.fontSize.heading.lg},
      }),
      extraLarge: ({iconPart}) => ({
        [iconPart]: {fontSize: system.legacy.fontSize.title.sm},
      }),
    },
  },
  defaultModifiers: {
    size: 'extraLarge',
  },
});

/**
 * `AccessoryCalendar` renders a month and day in an accessory tile. The month is critical and the
 * day is the default foreground color. Both scale with `size`. Always decorative.
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
        {...handleCsProp(elemProps, accessoryCalendarStencil({size}))}
      >
        <span {...accessoryStencil.parts.icon}>
          <span {...accessoryCalendarStencil.parts.month}>{month}</span>
          <span {...accessoryCalendarStencil.parts.date}>{date}</span>
        </span>
      </Accessory>
    );
  },
});

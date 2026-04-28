import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const formFieldStencil = createStencil({
  base: {
    display: 'flex',
    border: 'none',
    padding: 0,
    margin: `0 0 ${system.legacy.gap.lg}`,
  },
  modifiers: {
    grow: {
      true: {
        width: '100%',
        '[data-width="ck-formfield-width"]': {
          width: '100%',
        },
        '&:has(div[data-width="ck-formfield-width"])': {
          width: '100%',
        },
      },
    },
    orientation: {
      horizontalStart: {
        flexDirection: 'row',
        gap: system.legacy.gap.xl,
        width: '100%',
      },
      horizontalEnd: {
        flexDirection: 'row',
        gap: system.legacy.gap.xl,
        width: '100%',
      },
      vertical: {
        flexDirection: 'column',
        gap: system.legacy.gap.xs,
        alignItems: 'flex-start',
      },
    },
    required: {
      true: {},
    },
    error: {
      error: {},
      caution: {},
    },
  },
  defaultModifiers: {
    orientation: 'vertical',
  },
});

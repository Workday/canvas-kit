import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const formFieldStencil = createStencil({
  base: {
    display: 'flex',
    border: 'none',
    padding: system.space.zero,
    margin: `${system.space.zero} ${system.space.zero} ${system.space.x6}`,
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
        gap: system.space.x8,
      },
      horizontalEnd: {
        flexDirection: 'row',
        gap: system.space.x8,
      },
      vertical: {
        flexDirection: 'column',
        gap: system.space.x1,
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

import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const formFieldStencil = createStencil({
  vars: {
    width: '',
  },
  base: ({width}) => ({
    display: 'flex',
    border: 'none',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.none, system.space.zero),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    margin: `${cssVar(system.padding.none, system.space.zero)} ${cssVar(system.padding.none, system.space.zero)} ${cssVar(system.padding.xl, system.space.x6)}`,
    width: cssVar(width, '280px'),
  }),
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
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        gap: cssVar(system.gap.xl, system.space.x8),
        width: '100%',
      },
      horizontalEnd: {
        flexDirection: 'row',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        gap: cssVar(system.gap.xl, system.space.x8),
        width: '100%',
      },
      vertical: {
        flexDirection: 'column',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        gap: cssVar(system.gap.xs, system.space.x1),
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

import {createModelHook} from '@workday/canvas-kit-react/common';

export const useInformationHighlightModel = createModelHook({
  defaultConfig: {
    variant: 'default' as 'default' | 'informational' | 'caution' | 'critical',
    emphasis: 'low' as 'low' | 'high',
    /**
     * Controls where `InformationHighlight.Link` is placed relative to heading and body.
     * - `bottom` (default): link stacks below heading and body.
     * - `end`: link is visually placed at the inline end beside content when the container is wide
     *   enough; in narrower containers it stacks below the body. Placement uses CSS Grid
     *   only—DOM, keyboard tab order, and screen reader order remain heading, body, then link.
     * @default 'bottom'
     */
    actionPlacement: 'bottom' as 'bottom' | 'end',
  },
})(config => {
  return {
    state: {
      variant: config.variant,
      emphasis: config.emphasis,
      actionPlacement: config.actionPlacement,
    },
    events: {},
  };
});

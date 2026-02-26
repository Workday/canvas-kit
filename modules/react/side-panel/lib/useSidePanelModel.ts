import * as React from 'react';

import {createModelHook, useUniqueId} from '@workday/canvas-kit-react/common';

/**
 * The transition states of the SidePanel during expand/collapse animations.
 * - `expanded`: Panel is fully expanded
 * - `expanding`: Panel is animating from collapsed to expanded
 * - `collapsed`: Panel is fully collapsed
 * - `collapsing`: Panel is animating from expanded to collapsed
 */
export type SidePanelTransitionStates = 'collapsed' | 'collapsing' | 'expanded' | 'expanding';

export const useSidePanelModel = createModelHook({
  defaultConfig: {
    /**
     * The initial transition state of the SidePanel.
     * @default 'expanded'
     */
    initialTransitionState: 'expanded' as SidePanelTransitionStates,
    /**
     * Which side the SidePanel originates from. Uses logical properties for RTL support.
     * - `start`: Left side in LTR, right side in RTL
     * - `end`: Right side in LTR, left side in RTL
     * @default 'start'
     */
    origin: 'start' as 'start' | 'end',
    /**
     * The unique ID for the panel element. If not provided, a unique ID will be generated.
     * This ID is used for the `aria-controls` attribute on the toggle button.
     */
    panelId: '',
    /**
     * The unique ID for the panel's label element. If not provided, a unique ID will be generated.
     * This ID is used for the `aria-labelledby` attribute on both the panel and toggle button.
     */
    labelId: '',
    /**
     * Callback fired when the SidePanel's transition state changes.
     * Use this to react to state changes including animation states.
     * @param state The new transition state
     */
    onStateTransition(state: SidePanelTransitionStates) {
      // no-op by default
    },
  },
})(config => {
  const panelId = useUniqueId(config.panelId);
  const labelId = useUniqueId(config.labelId);
  const [transitionState, setTransitionStateInternal] = React.useState<SidePanelTransitionStates>(
    config.initialTransitionState
  );

  // Wrap setTransitionState to call the onStateTransition callback
  const setTransitionState = React.useCallback(
    (newState: SidePanelTransitionStates) => {
      setTransitionStateInternal(newState);
      config.onStateTransition(newState);
    },
    [config]
  );

  const state = {
    ...config,
    /**
     * The unique ID for the panel element. Used for `aria-controls` on the toggle button.
     */
    panelId,
    /**
     * The unique ID for the panel's label element. Used for `aria-labelledby` on the panel
     * and toggle button to provide an accessible name.
     */
    labelId,
    /**
     * The current transition state of the SidePanel. This tracks both the expanded/collapsed
     * state and the animation states (expanding/collapsing).
     */
    transitionState,
  };

  const events = {
    /**
     * Expand the SidePanel. This sets the state directly to `expanded` without animation.
     * For animated expansion, use the toggle button which triggers `setExpandingState`.
     */
    expand() {
      setTransitionState('expanded');
    },

    /**
     * Collapse the SidePanel. This sets the state directly to `collapsed` without animation.
     * For animated collapse, use the toggle button which triggers `setCollapsingState`.
     */
    collapse() {
      setTransitionState('collapsed');
    },

    /**
     * Handler for the CSS transition end event. This should be called when the width
     * transition completes to finalize the state from `expanding` to `expanded` or
     * from `collapsing` to `collapsed`.
     */
    handleAnimationEnd(event: React.TransitionEvent<HTMLDivElement>) {
      if (event.propertyName === 'width') {
        if (transitionState === 'expanding') {
          setTransitionState('expanded');
        } else if (transitionState === 'collapsing') {
          setTransitionState('collapsed');
        }
      }
      return event;
    },

    /**
     * Triggers the start of a transition animation. This toggles between expanding
     * and collapsing states based on the current state.
     */
    handleAnimationStart() {
      if (transitionState === 'collapsed' || transitionState === 'collapsing') {
        setTransitionState('expanding');
      } else if (transitionState === 'expanded' || transitionState === 'expanding') {
        setTransitionState('collapsing');
      }
      return undefined;
    },
  };

  return {state, events};
});

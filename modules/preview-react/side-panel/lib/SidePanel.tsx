import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {
  createStencil,
  handleCsProp,
  px2rem,
  keyframes,
  createVars,
} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {SidePanelContext} from './hooks';
import {SidePanelToggleButton} from './SidePanelToggleButton';

export type SidePanelVariant = 'standard' | 'alternate';
export type SidePanelTransitionStates = 'collapsed' | 'collapsing' | 'expanded' | 'expanding';

export interface SidePanelProps {
  /**
   * The width of the component (in `px` if it's a `number`) when it is collapsed.
   *
   * @default 64
   */
  collapsedWidth?: number | string;
  /**
   * If true, sets the expanded state of the side panel
   * @default true
   */
  expanded?: boolean;
  /**
   * The width of the component (in `px` if it's a `number`) when it is expanded.
   *
   * @default 320
   */
  expandedWidth?: number | string;
  /**
   * Which side the side panel is meant to originate from.
   *
   * @default 'left'
   */
  origin?: 'left' | 'right';
  /**
   * The function called when the side panel's `expanded` state changes. States like `'collapsing'` and `'expanding'` are tracked in another callback: `onStateTransition`
   *
   * @param boolean
   */
  onExpandedChange?: (expanded?: boolean) => void;
  /**
   * The function called when the side panel is transitioning between states.
   * Use this to track when the side panel is animating between `'collapsed'`, `'collapsing'`, `'expanded'`, and `'expanding'` states.
   * This can be particularly helpful if child components need to react specifically to these states.
   *
   * @param SidePanelTransitionStates
   */
  onStateTransition?: (state?: SidePanelTransitionStates) => void;
  /**
   * The style variant of the side panel. 'standard' is with a `soap100` background, no depth. 'alternate' is a `frenchVanilla100` background with a level 6 depth.
   *
   * @default 'standard'
   */
  variant?: SidePanelVariant;
  /**
   * This is set by the useSidePanel hook and prevents unintended keyframe animations
   *
   * @param boolean
   */
  touched: boolean;
  children?: React.ReactNode;
  onAnimationStart?: React.AnimationEventHandler<HTMLElement>;
  onAnimationEnd?: React.AnimationEventHandler<HTMLElement>;
}

const sidePanelKeyframeExpandedVars = createVars('fromAnimationExpanded', 'toAnimationExpanded');
const sidePanelKeyframeCollapsedVars = createVars('fromAnimationCollapsed', 'toAnimationCollapsed');

const sidepanelExpandedlKeyFrames = keyframes({
  from: {
    width: sidePanelKeyframeExpandedVars.fromAnimationExpanded,
    minWidth: sidePanelKeyframeExpandedVars.fromAnimationExpanded,
    maxWidth: sidePanelKeyframeExpandedVars.fromAnimationExpanded,
  },
  to: {
    width: sidePanelKeyframeExpandedVars.toAnimationExpanded,
    minWidth: sidePanelKeyframeExpandedVars.toAnimationExpanded,
    maxWidth: sidePanelKeyframeExpandedVars.toAnimationExpanded,
  },
});

const sidepanelCollapsedKeyFrames = keyframes({
  from: {
    width: sidePanelKeyframeCollapsedVars.fromAnimationCollapsed,
    minWidth: sidePanelKeyframeCollapsedVars.fromAnimationCollapsed,
    maxWidth: sidePanelKeyframeCollapsedVars.fromAnimationCollapsed,
  },
  to: {
    width: sidePanelKeyframeCollapsedVars.toAnimationCollapsed,
    minWidth: sidePanelKeyframeCollapsedVars.toAnimationCollapsed,
    maxWidth: sidePanelKeyframeCollapsedVars.toAnimationCollapsed,
  },
});

export const panelStencil = createStencil({
  vars: {
    expandedWidth: '',
    collapsedWidth: '',
  },
  base: () => ({
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
    outline: `${px2rem(1)} solid transparent`,
  }),
  modifiers: {
    variant: {
      alternate: {
        backgroundColor: system.color.bg.default,
        boxShadow: system.depth[5],
      },
      standard: {
        backgroundColor: system.color.bg.alt.softer,
      },
    },
    expanded: {
      true: ({expandedWidth}) => ({
        width: expandedWidth,
        maxWidth: expandedWidth,
      }),
      false: ({collapsedWidth}) => ({
        width: collapsedWidth,
        maxWidth: collapsedWidth,
      }),
    },
    touched: {
      true: {},
      false: {
        animation: 'none',
      },
    },
  },
  compound: [
    {
      modifiers: {touched: 'true', expanded: 'true'},
      styles: {
        animationName: sidepanelExpandedlKeyFrames,
        animationDuration: '200ms',
        animationTimingFunction: 'ease-out',
      },
    },
    {
      modifiers: {touched: 'true', expanded: 'false'},
      styles: {
        animationName: sidepanelCollapsedKeyFrames,
        animationDuration: '200ms',
        animationTimingFunction: 'ease-out',
      },
    },
  ],
});

export const SidePanel = createComponent('section')({
  displayName: 'SidePanel',
  Component(
    {
      children,
      collapsedWidth = 64,
      expanded = true,
      expandedWidth = 320,
      onAnimationEnd,
      onAnimationStart,
      onExpandedChange,
      onStateTransition,
      origin = 'left',
      variant = 'standard',
      touched,
      ...elemProps
    }: SidePanelProps,
    ref,
    Element
  ) {
    const [state, setState] = React.useState<SidePanelTransitionStates>(
      expanded ? 'expanded' : 'collapsed'
    );

    React.useEffect(() => {
      if (typeof onExpandedChange !== 'undefined') {
        onExpandedChange(expanded);
      }
    }, [expanded, onExpandedChange]);

    React.useEffect(() => {
      if (typeof onStateTransition !== 'undefined') {
        onStateTransition(state);
      }
    }, [state, onStateTransition]);

    const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
      if (event.currentTarget === event.target) {
        if (event.animationName === sidepanelCollapsedKeyFrames) {
          setState('collapsed');
        }

        if (event.animationName === sidepanelExpandedlKeyFrames) {
          setState('expanded');
        }
      }

      if (typeof onAnimationEnd !== 'undefined') {
        onAnimationEnd(event);
      }
    };

    const handleAnimationStart = (event: React.AnimationEvent<HTMLDivElement>) => {
      if (event.currentTarget === event.target) {
        if (
          event.animationName === sidepanelCollapsedKeyFrames ||
          event.animationName === sidepanelExpandedlKeyFrames
        ) {
          setState(expanded ? 'expanding' : 'collapsing');
        }
      }

      if (typeof onAnimationStart !== 'undefined') {
        onAnimationStart(event);
      }
    };

    return (
      <Element
        ref={ref}
        onAnimationEnd={handleAnimationEnd}
        onAnimationStart={handleAnimationStart}
        {...handleCsProp(elemProps, [
          panelStencil({
            expanded: expanded ? 'true' : 'false',
            touched: touched ? 'true' : 'false',
            variant: variant,
            expandedWidth:
              typeof expandedWidth === 'number' ? px2rem(expandedWidth) : expandedWidth,
            collapsedWidth:
              typeof collapsedWidth === 'number' ? px2rem(collapsedWidth) : collapsedWidth,
          }),
          sidePanelKeyframeCollapsedVars({
            fromAnimationCollapsed:
              typeof expandedWidth === 'number' ? px2rem(expandedWidth) : expandedWidth,
            toAnimationCollapsed:
              typeof collapsedWidth === 'number' ? px2rem(collapsedWidth) : collapsedWidth,
          }),
          sidePanelKeyframeExpandedVars({
            fromAnimationExpanded:
              typeof collapsedWidth === 'number' ? px2rem(collapsedWidth) : collapsedWidth,
            toAnimationExpanded:
              typeof expandedWidth === 'number' ? px2rem(expandedWidth) : expandedWidth,
          }),
        ])}
      >
        <SidePanelContext.Provider
          value={{
            state,
            origin,
          }}
        >
          {children}
        </SidePanelContext.Provider>
      </Element>
    );
  },
  subComponents: {
    /**
     * `SidePanel.ToggleButton` is a control that is meant to toggle between `expanded = true` and
     * `expanded = false` states. It must be used within the `SidePanel` component as a child. Use
     * in conjunction with `useSidePanel`'s `controlProps`, otherwise it does not come with explicit
     * `onClick` handlers.
     *
     * For accessibility purposes, it must be the first focusable element. We recommend that you
     * keep it as the first child of `SidePanel`
     */
    ToggleButton: SidePanelToggleButton,
  },
});

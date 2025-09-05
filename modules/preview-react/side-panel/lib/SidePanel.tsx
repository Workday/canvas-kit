import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
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
  onAnimationEnd?: React.TransitionEvent<HTMLElement>;
}

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
    transition: 'width ease-out 200ms, max-width ease-out 200ms',
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

    const handleAnimationEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
      if (event.propertyName === 'width') {
        if (state === 'expanding') {
          setState('expanded');
        } else if (state === 'collapsing') {
          setState('collapsed');
        }
      }
    };

    const handleAnimationStart = () => {
      if (state === 'collapsed' || state === 'collapsing') {
        setState('expanding');
      } else if (state === 'expanded' || state === 'expanding') {
        setState('collapsing');
      }
      return undefined;
    };

    return (
      <Element
        ref={ref}
        onTransitionEnd={handleAnimationEnd}
        {...handleCsProp(elemProps, [
          panelStencil({
            expanded,
            variant,
            expandedWidth:
              typeof expandedWidth === 'number' ? px2rem(expandedWidth) : expandedWidth,
            collapsedWidth:
              typeof collapsedWidth === 'number' ? px2rem(collapsedWidth) : collapsedWidth,
          }),
        ])}
      >
        <SidePanelContext.Provider
          value={{
            state,
            origin,
            handleAnimationStart,
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

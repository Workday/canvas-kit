/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import {createComponent, styled} from '@workday/canvas-kit-react/common';
import {jsx, keyframes, CSSObject} from '@emotion/react';
import {colors, depth} from '@workday/canvas-kit-react/tokens';
import {SidePanelContext} from './hooks';
import {SidePanelToggleButton} from './SidePanelToggleButton';

export type SidePanelVariant = 'standard' | 'alternate';
export type SidePanelTransitionStates = 'collapsed' | 'collapsing' | 'expanded' | 'expanding';

export interface SidePanelProps {
  /**
   * The element the side panel will render as (e.g. 'div').
   *
   * @default 'section'
   */
  as?: React.ElementType;
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

const createKeyframes = (from: number | string, to: number | string) => {
  const normalized = {
    from: typeof from === 'number' ? from + 'px' : from,
    to: typeof to === 'number' ? to + 'px' : to,
  };

  return keyframes`
    from {
      width: ${normalized.from};
      min-width: ${normalized.from};
      max-width: ${normalized.from};
    } to {
      width: ${normalized.to};
      min-width: ${normalized.to};
      max-width: ${normalized.to};
    }
  `;
};

const containerVariantStyle: Record<SidePanelVariant, CSSObject> = {
  alternate: {
    backgroundColor: colors.frenchVanilla100,
    ...depth[5],
  },
  standard: {
    backgroundColor: colors.soap100,
  },
};

const Panel = styled('section')({
  overflow: 'hidden',
  position: 'relative',
  boxSizing: 'border-box',
  height: '100%',
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

    const motion = {
      collapse: createKeyframes(expandedWidth, collapsedWidth),
      expand: createKeyframes(collapsedWidth, expandedWidth),
    };

    const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
      if (event.currentTarget === event.target) {
        if (event.animationName === motion.collapse.name) {
          setState('collapsed');
        }

        if (event.animationName === motion.expand.name) {
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
          event.animationName === motion.collapse.name ||
          event.animationName === motion.expand.name
        ) {
          setState(expanded ? 'expanding' : 'collapsing');
        }
      }

      if (typeof onAnimationStart !== 'undefined') {
        onAnimationStart(event);
      }
    };

    return (
      <Panel
        ref={ref}
        as={Element}
        css={[
          {
            width: expanded ? expandedWidth : collapsedWidth,
            maxWidth: expanded ? expandedWidth : collapsedWidth,
            // mounted.current will be false on the first render, thus you won't get an unwanted animation here
            // Will animate again if you force a re-render (like in Storybook)
            animation: touched
              ? `${expanded ? motion.expand : motion.collapse} 200ms ease-out`
              : undefined,
          },
          containerVariantStyle[variant],
        ]}
        onAnimationEnd={handleAnimationEnd}
        onAnimationStart={handleAnimationStart}
        {...elemProps}
      >
        <SidePanelContext.Provider
          value={{
            state,
            origin,
          }}
        >
          {children}
        </SidePanelContext.Provider>
      </Panel>
    );
  },
  subComponents: {
    /**
     * `<SidePanel.ToggleButton>` is a control that is meant to toggle between `expanded = true` and
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

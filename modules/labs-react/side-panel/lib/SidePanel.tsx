import * as React from 'react';
import {createContainer, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {useSidePanelModel} from './useSidePanelModel';
import {SidePanelToggleButton} from './SidePanelToggleButton';

/**
 * Adds the necessary props to the SidePanel container element.
 * This includes the `id` and `aria-labelledby` attributes for accessibility.
 */
export const useSidePanelContainer = createElemPropsHook(useSidePanelModel)(({state, events}) => {
  return {
    id: state.panelId,
    'aria-labelledby': state.labelId,
    onTransitionEnd: events.handleAnimationEnd,
  };
});

export type SidePanelVariant = 'standard' | 'alternate';

export interface SidePanelProps {
  /**
   * The width of the component (in `px` if it's a `number`) when it is collapsed.
   *
   * @default 64
   */
  collapsedWidth?: number | string;
  /**
   * The width of the component (in `px` if it's a `number`) when it is expanded.
   *
   * @default 320
   */
  expandedWidth?: number | string;
  /**
   * The style variant of the side panel. 'standard' uses a lighter gray background (`system.color.bg.alt.softer`), no depth. 'alternate' uses a white background with depth (`system.color.bg.default` and level 5 depth).
   *
   * @default 'standard'
   */
  variant?: SidePanelVariant;
  children?: React.ReactNode;
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
      expanded: ({expandedWidth}) => ({
        width: expandedWidth,
        maxWidth: expandedWidth,
      }),
      collapsed: ({collapsedWidth}) => ({
        width: collapsedWidth,
        maxWidth: collapsedWidth,
      }),
      expanding: ({expandedWidth}) => ({
        width: expandedWidth,
        maxWidth: expandedWidth,
      }),
      collapsing: ({collapsedWidth}) => ({
        width: collapsedWidth,
        maxWidth: collapsedWidth,
      }),
    },
  },
});

export const SidePanel = createContainer('section')({
  displayName: 'SidePanel',
  modelHook: useSidePanelModel,
  elemPropsHook: useSidePanelContainer,
  subComponents: {
    /**
     * `SidePanel.ToggleButton` is a control that toggles between expanded and collapsed states.
     * It must be used within the `SidePanel` component as a child. For accessibility purposes,
     * it should be the first focusable element in the panel.
     *
     * The button automatically receives `aria-controls`, `aria-expanded`, and `aria-labelledby`
     * attributes from the model.
     */
    ToggleButton: SidePanelToggleButton,
  },
})<SidePanelProps>(
  (
    {
      collapsedWidth = 64,
      expandedWidth = 320,
      variant = 'standard',
      children,
      ...elemProps
    }: SidePanelProps,
    Element,
    model
  ) => {
    return (
      <Element
        {...handleCsProp(elemProps, [
          panelStencil({
            expanded: model.state.transitionState,
            variant,
            expandedWidth:
              typeof expandedWidth === 'number' ? px2rem(expandedWidth) : expandedWidth,
            collapsedWidth:
              typeof collapsedWidth === 'number' ? px2rem(collapsedWidth) : collapsedWidth,
          }),
        ])}
      >
        {children}
      </Element>
    );
  }
);

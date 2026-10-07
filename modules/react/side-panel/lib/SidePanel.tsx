import * as React from 'react';

import {createContainer, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {SidePanelHeading} from './SidePanelHeading';
import {SidePanelToggleButton} from './SidePanelToggleButton';
import {useSidePanelModel} from './useSidePanelModel';

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

export type SidePanelVariant = 'standard' | 'alternative' | 'overlay';

export interface SidePanelProps extends CSProps {
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
   * The style variant of the side panel.
   * - `'standard'`: navigation surface background (`system.legacy.color.surface.navigation`), no depth.
   * - `'alternative'`: raised surface background (`system.legacy.color.surface.raised`), no depth.
   * - `'overlay'`: default surface background (`system.legacy.color.surface.default`) with level 6 depth, for panels that need to look lifted off the page. This is a visual treatment only — it adds no dialog semantics, focus trapping, or backdrop.
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
      overlay: {
        backgroundColor: system.legacy.color.surface.default,
        boxShadow: system.depth[6],
      },
      alternative: {
        backgroundColor: system.legacy.color.surface.raised,
      },
      standard: {
        backgroundColor: system.legacy.color.surface.navigation,
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
     * The button automatically receives `aria-controls` (the panel's `id`), `aria-pressed` (`true`
     * when the panel is collapsed), and `aria-describedby` (the heading's `id`) from the model.
     * Provide a static `aria-label` for the button's accessible name — `aria-pressed` already
     * conveys the state, so the label should not change between states.
     */
    ToggleButton: SidePanelToggleButton,
    /**
     * `SidePanel.Heading` is a styled heading that provides the accessible name for the SidePanel.
     * The heading's `id` is automatically linked to the panel's `aria-labelledby` attribute.
     * By default, the heading is hidden when the panel is collapsed.
     */
    Heading: SidePanelHeading,
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

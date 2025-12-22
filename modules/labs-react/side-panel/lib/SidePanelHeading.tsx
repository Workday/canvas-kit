import * as React from 'react';

import {
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {useSidePanelModel} from './useSidePanelModel';

export interface SidePanelHeadingProps extends ExtractProps<typeof Heading, never> {
  children?: React.ReactNode;
}

export const sidePanelHeadingStencil = createStencil({
  base: {
    padding: system.space.x4,
  },
});

/**
 * Adds the necessary props to the SidePanelHeading subcomponent.
 * This sets the `id` to the `labelId` from the model for accessibility purposes,
 * and hides the heading when the panel is not expanded.
 */
export const useSidePanelHeading = createElemPropsHook(useSidePanelModel)(({state}) => {
  return {
    id: state.labelId,
    hidden: state.transitionState !== 'expanded',
  };
});

/**
 * `SidePanel.Heading` is a styled heading component that provides the accessible name
 * for the SidePanel. The heading's `id` is automatically set to the model's `labelId`,
 * which is used by the panel's `aria-labelledby` attribute.
 *
 * The heading is automatically hidden when the panel is collapsed.
 */
export const SidePanelHeading = createSubcomponent('h2')({
  displayName: 'SidePanel.Heading',
  modelHook: useSidePanelModel,
  elemPropsHook: useSidePanelHeading,
})<SidePanelHeadingProps>(({size = 'small', children, ...elemProps}, Element) => {
  return (
    <Heading as={Element} size={size} {...handleCsProp(elemProps, sidePanelHeadingStencil())}>
      {children}
    </Heading>
  );
});

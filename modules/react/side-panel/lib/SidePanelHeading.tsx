import * as React from 'react';

import {
  ExtractProps,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {Heading, TypeLevelProps} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useSidePanelModel} from './useSidePanelModel';

export interface SidePanelHeadingProps extends Omit<ExtractProps<typeof Heading, never>, 'size'> {
  /**
   * The size of the heading.
   * @default 'small'
   */
  size?: TypeLevelProps['size'];
  children?: React.ReactNode;
}

export const sidePanelHeadingStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.xs, system.space.x2),
  },
  modifiers: {
    origin: {
      end: {
        paddingInlineStart: px2rem(68),
      },
      start: {},
    },
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
export const SidePanelHeading = createSubcomponent(Heading)({
  displayName: 'SidePanel.Heading',
  modelHook: useSidePanelModel,
  elemPropsHook: useSidePanelHeading,
})<SidePanelHeadingProps>(({size = 'small', children, ...elemProps}, Element, model) => {
  return (
    <Element
      size={size}
      {...handleCsProp(elemProps, sidePanelHeadingStencil({size, origin: model.state.origin}))}
    >
      {children}
    </Element>
  );
});

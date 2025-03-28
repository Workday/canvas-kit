import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';

import {ExpandableContent} from './ExpandableContent';
import {ExpandableTarget} from './ExpandableTarget';
import {ExpandableIcon} from './ExpandableIcon';
import {ExpandableTitle} from './ExpandableTitle';
import {ExpandableAvatar} from './ExpandableAvatar';
import {useExpandableModel} from './hooks/useExpandableModel';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ExpandableProps extends ExtractProps<typeof Flex, never> {
  /**
   * The children of the `Expandable` container. This should contain `Expandable.Target` and
   * `Expandable.Container`
   */
  children?: React.ReactNode;
}

export const expandableContainerStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: system.space.x2,
  },
});

/**
 * `Expandable` wraps an `Expandable.Target` and an `Expandable.Content`. By default, it provides a
 * `DisclosureModel` for its subcomponents. Alternatively, a model may be passed in using the
 * hoisted model pattern.
 */

export const Expandable = createContainer('div')({
  displayName: 'Expandable',
  modelHook: useExpandableModel,
  subComponents: {
    /**
     * `Expandable.Target` creates a heading and a button. The heading is a semantic heading to
     * describe the associated content. The button provides users the ability to toggle the
     * associated content.
     *
     * As according to the [W3 disclosure
     * specification](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/), the button has
     * `aria-expanded` and `aria-controls` attributes set by default
     *
     * This component should hold an `Expandable.Icon`, an optional `Expandable.Avatar`, and an
     * `Expandable.Title`.
     */
    Target: ExpandableTarget,
    /**
     * `Expandable.Title` styles the target text that describes the content.
     */
    Title: ExpandableTitle,
    /**
     * `Expandable.Icon` creates an icon to visually indicate the state of the content. It takes an
     * `iconPosition` prop to determine which chevron icon to use.
     */
    Icon: ExpandableIcon,
    /**
     * `Expandable.Avatar` is an optional component that creates an `Avatar` to display a decorative
     * image.
     */
    Avatar: ExpandableAvatar,
    /**
     * `Expandable.Content` holds the content that will be conditionally expanded and collapsed. It
     * has an `id` to ensure the `Expandable.Target` properly set it to the `aria-controls`
     * attribute.
     */
    Content: ExpandableContent,
  },
})<ExpandableProps>(({children, ...elementProps}, Element) => (
  <Element {...mergeStyles(elementProps, expandableContainerStencil())}>{children}</Element>
));

import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles, BoxProps} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {CardHeading} from './CardHeading';
import {CardBody} from './CardBody';

export interface CardProps extends Omit<BoxProps, 'depth'> {
  /**
   * Children of the Card. Should contain a `<Card.Body>` and an optional `<Card.Heading>`
   */
  children?: React.ReactNode;
  /**
   * The depth of the Card.
   * @default 1
   */
  depth?: keyof typeof system.depth;
}

// .cnvs-card
export const cardStencil = createStencil({
  vars: {
    depth: '',
  },
  base: ({depth}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x6,
    paddingBlock: system.space.x8,
    paddingInline: system.space.x6,
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.x2,
    depth: cssVar(depth, 'none'),
  }),
});

/**
 * `Card` is a container component that holds a {@link CardBody Card.Body} and an optional
 * {@link CardHeading Card.Heading}. `Card` wraps a non-semantic `div` element. The element can be
 * replaced using the `as` prop, or a `role` or other `aria-*` attributes can be added to give
 * `Card` semantic meaning.
 *
 * **Note**: Changing the `Card` container to certain semantic elements will put accessibility at
 * risk. For example, using the `as` prop to change the cards to buttons will flatten the content in
 * the card. Headings, calls to action, etc. will not function as expected for users with
 * disabilities. Semantic container elements like `<section>`, or using `<li>` grouped together in a
 * common `<ul>` can be a useful way to elevate the accessibility of your design.
 */
export const Card = createComponent('div')({
  displayName: 'Card',
  Component: ({children, depth, ...elemProps}: CardProps, ref, Element) => {
    const depthToken = depth ? system.depth[depth] : undefined;

    return (
      <Element ref={ref} {...mergeStyles(elemProps, cardStencil({depth: depthToken}))}>
        {children}
      </Element>
    );
  },
  subComponents: {
    /**
     * `Card.Heading` is an optional subcomponent that is meant to describe the Card. Since `Card`
     * is a non-semantic presentational component, `Card.Heading` does not automatically have any
     * semantic meaning. If your use case requires the Heading to label the Card, you must do so
     * manually.
     *
     * For example, {@link Modal} (which uses a `Card`) adds an `aria-labelledby` and a `role` to
     * the `Card`, as well as an `id` to the `Card.Heading`.
     *
     * ```tsx
     * <Card role="dialog" aria-labelledby="card-heading">
     *   <Card.Heading id="card-heading">Card Title</Card.Heading>
     *   <Card.Body>Card Contents</Card.Body>
     * </Card>
     * ```
     *
     * `Card.Heading` defaults to an `<h3>` element, but it can be changed using the `as` prop.
     */
    Heading: CardHeading,
    /**
     * `Card.Body` is a non-semantic subcomponent that contains the body of the card. Attributes may
     * be added to give `Card.Body` semantic meaning. If `Card.Body` is brief (like in a short
     * dialog), it may be helpful to add an `aria-describedby` referencing the `id` of the
     * `Card.Body` to the `Card` container.
     */
    Body: CardBody,
  },
});

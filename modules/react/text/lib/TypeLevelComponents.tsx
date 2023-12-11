import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from './Text';
import {createModifiers, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

type Size = 'large' | 'medium' | 'small';

/**
 * Prop interface for type level specific components:
 * Title, Heading, BodyText, Subtext.
 */
export interface TypeLevelProps extends Omit<TextProps, 'typeLevel'> {
  /**
   * Each type level has three sizes: `large`, `medium`, and `small`.
   */
  size: Size;
}

const createComponentStyles = (name: keyof typeof system.type, modifier: Size) => {
  const entries = Object.entries(system.type[name]).map(([k, v]) => [k, createStyles(v)]);

  const getTitleModifiers = createModifiers({
    size: Object.fromEntries(entries),
  });

  const baseStyles = createStyles({
    color: /^(title|heading)$/.test(name) ? base.blackPepper400 : base.blackPepper300,
  });

  const modifiers = getTitleModifiers({size: modifier});

  return [baseStyles, modifiers];
};

/**
 * This component is intended to be used for small subtext content or in tight spaces.
 * By default, it renders a semantic `p` element, but you can adjust this as needed with the `as` prop.
 * It has three sizes: large, medium, and small.
 * Here's a quick reference for font-sizes and weights:
 *
 * - `large`
 *   - font-size: 14px (0.875rem)
 *   - font-weight: regular (400)
 * - `medium`
 *   - font-size: 12px (0.75rem)
 *   - font-weight: regular (400)
 * - `small`
 *   - font-size: 10px (0.625rem)
 *   - font-weight: regular (400)
 *
 * ```tsx
 * import { Subtext } from '@workday/canvas-kit-react/text';
 *
 * const CustomSubtext = () => (
 *   <Subtext size="small">Subtext</Subtext>
 * );
 * ```
 */
export const Subtext = createComponent('p')({
  displayName: 'Subtext',
  Component: ({size, variant, ...elemProps}: TypeLevelProps, ref, Element) => {
    const styles = createComponentStyles('subtext', size);
    return <Text ref={ref} as={Element} variant={variant} {...mergeStyles(elemProps, styles)} />;
  },
});

/**
 * This component is intended to be used for standard body text.
 * By default, it renders a semantic `p` element, but you can adjust this as needed with the `as` prop.
 * It has three sizes: large, medium, and small.
 * Here's a quick reference for font-sizes and weights:
 *
 * - `large`
 *   - font-size: 20px (1.25rem)
 *   - font-weight: regular (400)
 * - `medium`
 *   - font-size: 18px (1.125rem)
 *   - font-weight: regular (400)
 * - `small`
 *   - font-size: 16px (1rem)
 *   - font-weight: regular (400)
 *
 * ```tsx
 * import { BodyText } from '@workday/canvas-kit-react/text';
 *
 * const CustomBodyText = () => (
 *   <BodyText size="small">Body Text</BodyText>
 * );
 * ```
 */
export const BodyText = createComponent('p')({
  displayName: 'BodyText',
  Component: ({size, variant, ...elemProps}: TypeLevelProps, ref, Element) => {
    const styles = createComponentStyles('body', size);
    return <Text ref={ref} as={Element} variant={variant} {...mergeStyles(elemProps, styles)} />;
  },
});

/**
 * This component is intended to be used for headings and large text.
 * By default, it renders a semantic `h2` element, but you can adjust this as needed with the `as` prop.
 * It has three sizes: large, medium, and small.
 * Here's a quick reference for font-sizes and weights:
 *
 * - `large`
 *   - font-size: 32px (2rem)
 *   - font-weight: bold (700)
 * - `medium`
 *   - font-size: 28px (1.75rem)
 *   - font-weight: bold (700)
 * - `small`
 *   - font-size: 24px (1.5rem)
 *   - font-weight: bold (700)
 *
 * ```tsx
 * import { Heading } from '@workday/canvas-kit-react/text';
 *
 * const CustomHeading = () => (
 *   <Heading size="small">Heading Text</Heading>
 * );
 * ```
 */
export const Heading = createComponent('h2')({
  displayName: 'Heading',
  Component: ({size, variant, ...elemProps}: TypeLevelProps, ref, Element) => {
    const styles = createComponentStyles('heading', size);
    return <Text ref={ref} as={Element} variant={variant} {...mergeStyles(elemProps, styles)} />;
  },
});

/**
 * This component is intended to be used large page titles.
 * By default, it renders a semantic `h1` element, but you can adjust this as needed with the `as` prop.
 * It has three sizes: large, medium, and small.
 * Here's a quick reference for font-sizes and weights:
 *
 * - `large`
 *   - font-size: 56px (3/5rem)
 *   - font-weight: bold (700)
 * - `medium`
 *   - font-size: 48px (3rem)
 *   - font-weight: bold (700)
 * - `small`
 *   - font-size: 40px (2.5rem)
 *   - font-weight: bold (700)
 *
 * ```tsx
 * import { Title } from '@workday/canvas-kit-react/text';
 *
 * const CustomTitle = () => (
 *   <Title size="small">Title Text</Title>
 * );
 * ```
 */
export const Title = createComponent('h1')({
  displayName: 'Title',
  Component: ({size, variant, ...elemProps}: TypeLevelProps, ref, Element) => {
    const styles = createComponentStyles('title', size);
    return <Text ref={ref} as={Element} variant={variant} {...mergeStyles(elemProps, styles)} />;
  },
});

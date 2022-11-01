import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-react/text';

/**
 * Prop interface for type level specific components:
 * Title, Heading, BodyText, Subtext.
 */
export interface TypeLevelProps extends Omit<TextProps, 'typeLevel'> {
  /**
   * Each type level has three sizes: `large`, `medium`, and `small`.
   */
  size: 'large' | 'medium' | 'small';
}

/**
 * ## Subtext
 * [View Docs](https://canvas.workday.com/components/text/subtext)
 *
 * ---
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
 * @example
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
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const typeLevel = `subtext.${size}` as TextProps['typeLevel'];
    return <Text ref={ref} as={Element} typeLevel={typeLevel} {...elemProps} />;
  },
});

/**
 * ## BodyText
 * [View Docs](https://canvas.workday.com/components/text/body-text)
 *
 * ---
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
 * @example
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
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const typeLevel = `body.${size}` as TextProps['typeLevel'];
    return (
      <Text ref={ref} as={Element} typeLevel={typeLevel} {...elemProps} />
    );
  },
});

/**
 * ## Heading
 * [View Docs](https://canvas.workday.com/components/text/heading)
 *
 * ---
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
 * @example
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
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const typeLevel = `heading.${size}` as TextProps['typeLevel'];
    return <Text ref={ref} as={Element} typeLevel={typeLevel} {...elemProps} />;
  },
});

/**
 * ## Title
 * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/docs/preview-text-react--title)
 *
 * ---
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
 * @example
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
  Component: ({size, ...elemProps}: TypeLevelProps, ref, Element) => {
    const typeLevel = `title.${size}` as TextProps['typeLevel'];
    return <Text ref={ref} as={Element} typeLevel={typeLevel} {...elemProps} />;
  },
});

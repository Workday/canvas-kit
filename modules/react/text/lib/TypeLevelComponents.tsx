import {createComponent} from '@workday/canvas-kit-react/common';
import {TextProps, textStencil} from './Text';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';

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

const subtextStencil = createStencil({
  extends: textStencil,
  base: {},
});

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
    const typeLevel = `subtext.${size}` as TextProps['typeLevel'];
    return <Element ref={ref} {...mergeStyles(elemProps, subtextStencil({typeLevel, variant}))} />;
  },
});

const bodyTextStencil = createStencil({
  extends: textStencil,
  base: {},
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
    const typeLevel = `body.${size}` as TextProps['typeLevel'];
    return <Element ref={ref} {...mergeStyles(elemProps, bodyTextStencil({typeLevel, variant}))} />;
  },
});

const headingStencil = createStencil({
  extends: textStencil,
  base: {},
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
    const typeLevel = `heading.${size}` as TextProps['typeLevel'];
    return <Element ref={ref} {...mergeStyles(elemProps, headingStencil({typeLevel, variant}))} />;
  },
});

const titleStencil = createStencil({
  extends: textStencil,
  base: {},
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
    const typeLevel = `title.${size}` as TextProps['typeLevel'];
    return <Element ref={ref} {...mergeStyles(elemProps, titleStencil({typeLevel, variant}))} />;
  },
});

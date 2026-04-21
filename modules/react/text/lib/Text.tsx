import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

type TypeSize = 'large' | 'medium' | 'small';
type TokenName = `${keyof typeof system.type}.${TypeSize}`;

export interface TextProps extends BoxProps {
  /**
   * Type token as string with level and size separated by dot.
   * These values map to our [Canvas type levels](https://canvas.workday.com/tokens/type#type-styles).
   *
   * ```tsx
   * <Text typeLevel="body.small">Small body text</Text>
   * ```
   */
  typeLevel?: TokenName;
  /**
   * Type variant token names: `error`, `hint` or `inverse`.
   *
   * ```tsx
   * <Text variant="error" typeLevel="subtext.large">Error text</Text>
   * ```
   */
  variant?: 'error' | 'hint' | 'inverse';
}

export const textStencil = createStencil({
  base: {},
  modifiers: {
    typeLevel: {
      // Title level styles
      'title.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.fontSize.title.lg,
        lineHeight: system.lineHeight.title.lg,
        color: system.color.fg.strong,
      },
      'title.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.fontSize.title.md,
        lineHeight: system.lineHeight.title.md,
        color: system.color.fg.strong,
      },
      'title.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        lineHeight: system.lineHeight.title.sm,
        fontSize: system.fontSize.title.sm,
        color: system.color.fg.strong,
      },
      // Heading level styles
      'heading.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.fontSize.heading.lg,
        lineHeight: system.lineHeight.heading.lg,
        color: system.color.fg.strong,
      },
      'heading.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.fontSize.heading.md,
        lineHeight: system.lineHeight.heading.md,
        color: system.color.fg.strong,
      },
      'heading.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.fontSize.heading.sm,
        lineHeight: system.lineHeight.heading.sm,
        color: system.color.fg.strong,
      },
      // Body level styles
      'body.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.fontSize.body.lg,
        lineHeight: system.lineHeight.body.lg,
        color: system.color.fg.default,
      },
      'body.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.fontSize.body.md,
        lineHeight: system.lineHeight.body.md,
        color: system.color.fg.default,
      },
      'body.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.fontSize.body.sm,
        lineHeight: system.lineHeight.body.sm,
        letterSpacing: system.letterSpacing.body.sm,
        color: system.color.fg.default,
      },
      // Subtext level styles
      'subtext.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.fontSize.subtext.lg,
        lineHeight: system.lineHeight.subtext.lg,
        letterSpacing: system.letterSpacing.subtext.lg,
        color: system.color.fg.default,
      },
      'subtext.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.fontSize.subtext.md,
        lineHeight: system.lineHeight.subtext.md,
        letterSpacing: system.letterSpacing.subtext.md,
        color: system.color.fg.default,
      },
      'subtext.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.fontSize.subtext.sm,
        lineHeight: system.lineHeight.subtext.sm,
        letterSpacing: system.letterSpacing.subtext.sm,
        color: system.color.fg.default,
      },
    },
    variant: {
      error: {
        color: system.color.brand.fg.critical.default,
      },
      hint: {color: system.color.fg.muted.default},
      inverse: {color: system.color.fg.inverse},
    },
  },
});

/**
 * This is a generic base component intended to render any text.
 * It has `typeLevel` and `variant` style props that simplify navigating
 * our type hierarchy and using [Canvas type tokens](https://canvas.workday.com/tokens/type#type-styles).
 * By default, it renders a semantic `span` element,
 * but you can adjust this as needed with the `as` prop.
 *
 * The type hierarchy is organized into four levels, which correspond to our [Canvas type
 * levels](https://canvas.workday.com/tokens/type#type-styles).
 *
 * - `title`: Intended to be used for large page titles.
 * - `heading`: Intended to be used for headings and large text.
 * - `body`: Intended to be used for standard body text.
 * - `subtext`: Intended to be used for small subtext content or in tight spaces.
 *
 * Each level has three sizes: `large`, `medium`, and `small`.
 *
 * You can provide any level and size to the `typeLevel` prop, and it will apply the correct styles
 * accordingly. In the example below we're providing the `subtext` level and `small` size to the
 * component with the value `subtext.small`.
 *
 * ```tsx
 * import { Text } from '@workday/canvas-kit-react/text';
 *
 * const CustomErrorText = () => (
 *   <Text typeLevel="subtext.small" variant="error">
 *     Error Text
 *   </Text>
 * );
 * ```
 */
export const Text = createComponent('span')({
  displayName: 'Text',
  Component: ({children, typeLevel, variant, ...elemProps}: TextProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, textStencil({typeLevel, variant}))}>
        {children}
      </Element>
    );
  },
});

import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

type TypeSize = 'large' | 'medium' | 'small';
type TokenName = `${keyof typeof system.legacy.type}.${TypeSize}`;

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
        fontSize: system.legacy.fontSize.title.lg,
        lineHeight: system.legacy.lineHeight.title.lg,
        color: system.color.fg.strong,
      },
      'title.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.legacy.fontSize.title.md,
        lineHeight: system.legacy.lineHeight.title.md,
        color: system.color.fg.strong,
      },
      'title.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        lineHeight: system.legacy.lineHeight.title.sm,
        fontSize: system.legacy.fontSize.title.sm,
        color: system.color.fg.strong,
      },
      // Heading level styles
      'heading.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.legacy.fontSize.heading.lg,
        lineHeight: system.legacy.lineHeight.heading.lg,
        color: system.color.fg.strong,
      },
      'heading.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.legacy.fontSize.heading.md,
        lineHeight: system.legacy.lineHeight.heading.md,
        color: system.color.fg.strong,
      },
      'heading.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        fontSize: system.legacy.fontSize.heading.sm,
        lineHeight: system.legacy.lineHeight.heading.sm,
        color: system.color.fg.strong,
      },
      // Body level styles
      'body.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.legacy.fontSize.body.lg,
        lineHeight: system.legacy.lineHeight.body.lg,
        color: system.color.fg.default,
      },
      'body.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.legacy.fontSize.body.md,
        lineHeight: system.legacy.lineHeight.body.md,
        color: system.color.fg.default,
      },
      'body.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.legacy.fontSize.body.sm,
        lineHeight: system.legacy.lineHeight.body.sm,
        letterSpacing: system.legacy.letterSpacing.body.sm,
        color: system.color.fg.default,
      },
      // Subtext level styles
      'subtext.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.legacy.fontSize.subtext.lg,
        lineHeight: system.legacy.lineHeight.subtext.lg,
        letterSpacing: system.legacy.letterSpacing.subtext.lg,
        color: system.color.fg.default,
      },
      'subtext.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.legacy.fontSize.subtext.md,
        lineHeight: system.legacy.lineHeight.subtext.md,
        letterSpacing: system.legacy.letterSpacing.subtext.md,
        color: system.color.fg.default,
      },
      'subtext.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        fontSize: system.legacy.fontSize.subtext.sm,
        lineHeight: system.legacy.lineHeight.subtext.sm,
        letterSpacing: system.legacy.letterSpacing.subtext.sm,
        color: system.color.fg.default,
      },
    },
    variant: {
      error: {
        color: system.legacy.color.brand.fg.critical.default,
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

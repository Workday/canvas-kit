import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
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
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.title.lg, system.fontSize.title.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.title.lg, system.lineHeight.title.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.strong, system.color.text.strong),
      },
      'title.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.title.md, system.fontSize.title.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.title.md, system.lineHeight.title.medium),
        color: cssVar(system.color.fg.strong, system.color.text.strong),
      },
      'title.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.title.sm, system.lineHeight.title.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.title.sm, system.fontSize.title.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.strong, system.color.text.strong),
      },
      // Heading level styles
      'heading.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.heading.lg, system.fontSize.heading.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.heading.lg, system.lineHeight.heading.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.strong, system.color.text.strong),
      },
      'heading.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.heading.md, system.fontSize.heading.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.heading.md, system.lineHeight.heading.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.strong, system.color.text.strong),
      },
      'heading.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.bold,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.heading.sm, system.fontSize.heading.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.heading.sm, system.lineHeight.heading.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.strong, system.color.text.strong),
      },
      // Body level styles
      'body.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.body.lg, system.fontSize.body.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.body.lg, system.lineHeight.body.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.default, system.color.text.default),
      },
      'body.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.body.md, system.fontSize.body.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.body.md, system.lineHeight.body.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.default, system.color.text.default),
      },
      'body.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.body.sm, system.fontSize.body.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.body.sm, system.lineHeight.body.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.default, system.color.text.default),
      },
      // Subtext level styles
      'subtext.large': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.default, system.color.text.default),
      },
      'subtext.medium': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.md, system.fontSize.subtext.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.subtext.md, system.lineHeight.subtext.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.default, system.color.text.default),
      },
      'subtext.small': {
        fontFamily: system.fontFamily.default,
        fontWeight: system.fontWeight.normal,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.sm, system.fontSize.subtext.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.subtext.sm, system.lineHeight.subtext.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.default, system.color.text.default),
      },
    },
    variant: {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      error: {
        color: cssVar(system.color.brand.fg.critical.default, system.color.text.critical.default),
      },
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      hint: {color: cssVar(system.color.fg.default, system.color.text.hint)},
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      inverse: {color: cssVar(system.color.fg.inverse, system.color.text.inverse)},
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

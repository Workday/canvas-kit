import {system} from '@workday/canvas-tokens-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles, BoxProps} from '@workday/canvas-kit-react/layout';

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
        ...system.type.title.large,
        color: system.color.text.strong,
      },
      'title.medium': {
        ...system.type.title.medium,
        color: system.color.text.strong,
      },
      'title.small': {
        ...system.type.title.small,
        color: system.color.text.strong,
      },
      // Heading level styles
      'heading.large': {
        ...system.type.heading.large,
        color: system.color.text.strong,
      },
      'heading.medium': {
        ...system.type.heading.medium,
        color: system.color.text.strong,
      },
      'heading.small': {
        ...system.type.heading.small,
        color: system.color.text.strong,
      },
      // Body level styles
      'body.large': {
        ...system.type.body.large,
        color: system.color.text.default,
      },
      'body.medium': {
        ...system.type.body.medium,
        color: system.color.text.default,
      },
      'body.small': {
        ...system.type.body.small,
        color: system.color.text.default,
      },
      // Subtext level styles
      'subtext.large': {
        ...system.type.subtext.large,
        color: system.color.text.default,
      },
      'subtext.medium': {
        ...system.type.subtext.medium,
        color: system.color.text.default,
      },
      'subtext.small': {
        ...system.type.subtext.small,
        color: system.color.text.default,
      },
    },
    variant: {
      error: {color: system.color.text.critical.default},
      hint: {color: system.color.text.hint},
      inverse: {color: system.color.text.inverse},
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

import * as React from 'react';
import {base, system} from '@workday/canvas-tokens-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createModifiers, createStyles, CSProps} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

type TokenName = `${keyof typeof system.type}.${'large' | 'medium' | 'small'}`;

export interface TextProps extends CSProps {
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
  children: React.ReactNode;
}

type ModRules = Record<TokenName, string>;

const createModRules = (tokens: typeof system.type): ModRules | {} => {
  return Object.entries(tokens).reduce((acc, [firstLevelKey, firstLevelValue]) => {
    Object.entries(firstLevelValue).forEach(([k, v]) => {
      const key = `${firstLevelKey}.${k}` as TokenName;
      (acc as ModRules)[key] = createStyles(v);
    });
    return acc;
  }, {});
};

const getModifiers = createModifiers({
  tokenName: {
    ...createModRules(system.type),
  },
  variant: {
    error: createStyles({color: base.cinnamon500}),
    hint: createStyles({color: base.licorice300}),
    inverse: createStyles({color: base.frenchVanilla100}),
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
    const modifiers = getModifiers({tokenName: typeLevel, variant});
    return (
      <Element ref={ref} {...mergeStyles(elemProps, modifiers)}>
        {children}
      </Element>
    );
  },
});

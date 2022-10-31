import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
// type changes no need
import {type, CanvasTypeHierarchy, CanvasTypeVariants} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export interface TextProps extends BoxProps {
  /**
   * Type token as string with level and size separated by dot.
   * These values map to our [Canvas type levels](https://canvas.workdaydesign.com/tokens/type#type-styles).
   * 
   * @example
   * ```tsx
   * <Text typeLevel="body.small">Small body text</Text>
   * ```
  */
  typeLevel?: `${keyof CanvasTypeHierarchy}.${'large'|'medium'|'small'}`;
  /**
   * Type variant token names: `error`, `hint` or `inverse`.
   * 
   * @example
   * ```tsx
   * <Text variant="error" typeLevel="subtext.large">Error text</Text>
   * ```
  */
  variant?: keyof CanvasTypeVariants;
}

/**
 * Function returns updated props by token and variant values
*/
const validateProps = ({typeLevel, variant, ...props}: TextProps) => {
  let updatedProps: any = props;
  const tokenPropNames = [
    'color',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
  ];

  /*
  If token provided it updates undefined values of token styles:
  `fontFamily`, `fontSize`, `lineHeight`, `fontWeight`, `color` 
  by replacing them by token value
  */
  if (typeLevel) {
    const [level, size] = typeLevel.split('.') as [
      keyof CanvasTypeHierarchy,
      'large' | 'medium' | 'small'
    ];
    const tokenProps = type.levels[level][size];

    tokenPropNames.forEach(item => {
      if (!props[item as keyof typeof props]) {
        updatedProps[item] = tokenProps[item as keyof typeof tokenProps];
      }
    });
  }

  // If variant provided it updates color value by variant color
  if (variant) {
    updatedProps = {...updatedProps, ...type.variants[variant]};
  }

  return updatedProps;
};

/**
 * ## Text
 * [View Storybook Docs](https://workday.github.io/canvas-kit/?path=/docs/preview-text-react--text)
 * 
 * ---
 * This is a generic base component intended to render any text.
 * It's built on top of the `Box` component, so it has access to all [BoxProps](https://workday.github.io/canvas-kit/?path=/docs/components-containers-layout-box--as).
 * It also has `typeLevel` and `variant` style props that simplify navigating our type hierarchy and using [Canvas type tokens](https://canvas.workdaydesign.com/tokens/type#type-styles).
 * By default, it renders a semantic `span` element, but you can adjust this as needed with the `as` prop.
 * 
 * The type hierarchy is organized into four levels, which correspond to the type levels in Figma.
 *
 * - `title`: Intended to be used for large page titles.
 * - `heading`: Intended to be used for headings and large text.
 * - `body`: Intended to be used for standard body text.
 * - `subtext`: Intended to be used for small subtext content or in tight spaces.
 *
 * Each level has three sizes: `large`, `medium`, and `small`.
 * 
 * You can provide any level and size to the `typeLevel` prop, and it will apply the correct styles accordingly.
 * In the example below we're providing the `subtext` level and `small` size to the component with the value `subtext.small`.
 * 
 * @example
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
  Component: ({children, ...elemProps}: TextProps, ref, Element) => (
    <Box ref={ref} as={Element} {...validateProps(elemProps)}>
      {children}
    </Box>
  ),
});

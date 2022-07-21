import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
// type changes no need
import {type, CanvasTypeHierarchy, CanvasTypeVariants} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export interface TextProps extends BoxProps {
  /**
   * Type token level: `title`, `heading`, `body`, `subtext`. Should be provided with `size` prop or it will not apply token.
   */
  level?: keyof CanvasTypeHierarchy;
  /**
   * Type token size: `large`, `medium`, `small`. Should be provided with `level` prop or it will not apply token.
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * Type variant token names: `error`, `hint` or `inverse`.
   */
  variant?: keyof CanvasTypeVariants;
  children: React.ReactNode;
}

/**
 * Props interface for type level specific component:
 * Title, Heading, BodyText, Subtext.
 */
export interface TypeLevelProps extends Omit<TextProps, 'level'> {
  size: 'large' | 'medium' | 'small';
}

/**
 * Return updated styles to replace undefined values of
 * `fontFamily`, `fontSize`, `lineHeight`, `fontWeight`, `color` props by token value
 */
const validatedProps = (props: TextProps, tokenProps: any) => {
  const validatedProps = ['fontFamily', 'fontSize', 'lineHeight', 'fontWeight', 'color'];
  const styles: any = {};
  validatedProps.forEach(item => {
    if (item in props && item in tokenProps && !props[item as keyof TextProps]) {
      styles[item] = tokenProps[item];
    }
  });
  return styles;
};

export const Text = createComponent('span')({
  displayName: 'Text',
  Component: ({level, size, variant, ...elemProps}: TextProps, ref, Element) => {
    const tokenProps = level && size ? type.levels[level][size] : {};
    const variantColor = variant ? type.variants[variant] : {};

    return (
      <Box
        ref={ref}
        as={Element}
        {...tokenProps}
        {...variantColor}
        {...elemProps}
        {...validatedProps(elemProps, tokenProps)}
      />
    );
  },
});

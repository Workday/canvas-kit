import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
// type changes no need
import {type, CanvasTypeHierarchy, CanvasTypeVariants} from '@workday/canvas-kit-react/tokens';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

export interface TextProps extends BoxProps {
  /**
   * Type token as string with level and size separated by dot.
   */
   typeLevel?: `${keyof CanvasTypeHierarchy}.${'large'|'medium'|'small'}`;
  /**
   * Type variant token names: `error`, `hint` or `inverse`.
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

export const Text = createComponent('span')({
  displayName: 'Text',
  Component: ({children, ...elemProps}: TextProps, ref, Element) => (
    <Box ref={ref} as={Element} {...validateProps(elemProps)}>
      {children}
    </Box>
  ),
});

import * as React from 'react';
import {createComponent, StyledType, styled} from '@workday/canvas-kit-react/common';
// type changes no need
import {type, CanvasTypeHierarchy} from '@workday/canvas-kit-react/tokens';
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
   * If true, add ellipsis text for overflow.
   * @default false
   */
  isTruncated?: boolean;
  children: React.ReactNode;
}

/**
 * Props interface for type level specific component:
 * Title, Heading, BodyText, Subtext.
 */
export interface TypeLevelTextProps extends Omit<TextProps, 'level'> {
  size: 'large' | 'medium' | 'small';
}

const StyledTextComponent = styled(Box.as('span'))<StyledType & TextProps>(
  ({isTruncated}) =>
    isTruncated && {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }
);

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
  Component: ({level, size, ...elemProps}: TextProps, ref, Element) => {
    const tokenProps = level && size ? type.levels[level][size] : {};
    return (
      <StyledTextComponent
        ref={ref}
        as={Element}
        {...tokenProps}
        {...elemProps}
        {...validatedProps(elemProps, tokenProps)}
      />
    );
  },
});

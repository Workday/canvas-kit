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

export const Text = createComponent('span')({
  displayName: 'Text',
  Component: ({level, size, ...elemProps}: TextProps, ref, Element) => {
    const levelProps = level && size ? type.levels[level][size] : {};
    return <StyledTextComponent ref={ref} as={Element} {...levelProps} {...elemProps} />;
  },
});

/** @jsx jsx */
import * as React from 'react';
import {jsx, css} from '@emotion/core';
import styled from '@emotion/styled';

import {space, SpaceProps} from './utils/space';
import {layout, LayoutProps} from './utils/layout';
import {safelySpreadProps} from './utils/safelySpreadProps';

const getBoxStyles = (props: BoxProps) => {
  let styleProps = {};
  for (const key in props) {
    if (key in props) {
      if (key in space) {
        const value = props[key as keyof BoxProps];
        const styleFn = space[key as keyof SpaceProps];
        const styles = styleFn(value);
        styleProps = {...styleProps, ...styles};
      }
      if (key in layout) {
        const attr = layout[key as keyof LayoutProps];
        styleProps = {...styleProps, [attr]: props[key as keyof BoxProps]};
      }
    }
  }
  return styleProps;
};

type As = keyof JSX.IntrinsicElements;

export interface BoxProps extends SpaceProps, LayoutProps, React.HTMLAttributes<HTMLElement> {
  as?: As;
}

export const StyledBox = styled('div')<BoxProps>({
  boxSizing: 'border-box',
});

export const Box = React.forwardRef<any, BoxProps>(({as = 'div', ...props}, ref) => {
  // TODO: Memoize style props with React.useMemo
  const boxStyles = getBoxStyles(props);
  const safeProps = safelySpreadProps(props);
  return <StyledBox ref={ref} as={as} css={css(boxStyles)} {...safeProps} />;
});

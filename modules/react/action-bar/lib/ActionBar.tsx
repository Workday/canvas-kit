import * as React from 'react';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {commonColors, colors, space} from '@workday/canvas-kit-react/tokens';
import {HStack, HStackProps, StackSpacing} from '@workday/canvas-kit-react/layout';

interface ActionBarProps extends Omit<HStackProps, 'spacing'> {
  spacing?: StackSpacing;
}

const ResponsiveHStack = styled(HStack)<HStackProps & StyledType>(({theme}) => ({
  [theme.canvas.breakpoints.down('s')]: {
    padding: space.s,
    '> *:not(div)': {
      flex: 1,
    },
  },
}));

export const ActionBar = createComponent('div')({
  displayName: 'ActionBar',
  Component: (elemProps: ActionBarProps, ref, Element) => (
    <ResponsiveHStack
      ref={ref}
      as={Element}
      spacing="s"
      depth={1}
      background={commonColors.background}
      borderTop={`solid 1px ${colors.soap400}`}
      padding={`${space.s} ${space.xl} `}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      {...elemProps}
    />
  ),
});

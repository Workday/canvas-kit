import * as React from 'react';
import {Globals} from 'csstype';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {commonColors, colors, space} from '@workday/canvas-kit-react/tokens';
import {HStack, HStackProps} from '@workday/canvas-kit-labs-react';

type PropertyPosition =
  | Globals
  | '-webkit-sticky'
  | 'absolute'
  | 'fixed'
  | 'relative'
  | 'static'
  | 'sticky';

interface ActionBarProps {
  /**
   * Sets the position for the container
   * @default "fixed"
   */
  position?: PropertyPosition;
}

const ResponsiveHStack = styled(HStack)<HStackProps & StyledType>(({theme}) => ({
  [theme.canvas.breakpoints.down('s')]: {
    padding: space.s,
    '> *:not(div)': {
      flex: 1,
    },
  },
}));

const containerStyles: Omit<HStackProps, 'spacing'> = {
  background: commonColors.background,
  borderTop: `solid 1px ${colors.soap400}`,
  bottom: 0,
  depth: 1,
  left: 0,
  padding: `${space.s} ${space.xl} `,
  width: '100%',
};

export const ActionBar = createComponent('div')({
  displayName: 'ActionBar',
  Component: ({position = 'fixed', ...elProps}: ActionBarProps, ref, Element) => (
    <ResponsiveHStack
      ref={ref}
      as={Element}
      position={position}
      spacing="s"
      {...containerStyles}
      {...elProps}
    />
  ),
});

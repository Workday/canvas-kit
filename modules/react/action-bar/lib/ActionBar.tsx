import * as React from 'react';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {commonColors, colors, space, depth} from '@workday/canvas-kit-react/tokens';
import {Globals} from 'csstype';

type PropertyPosition =
  | Globals
  | '-webkit-sticky'
  | 'absolute'
  | 'fixed'
  | 'relative'
  | 'static'
  | 'sticky';

export type ActionBarProps = StyledType & {
  /**
   * Sets the position for the container
   * @default "fixed"
   */
  position?: PropertyPosition;
};

const ActionBarContainer = styled('div')<ActionBarProps>(
  {
    background: commonColors.background,
    borderTop: `solid 1px ${colors.soap400}`,
    boxSizing: 'border-box',
    display: 'flex',
    position: 'fixed',
    left: 0,
    bottom: 0,
    right: 0,
    padding: `${space.s} ${space.xl} `,
    ...depth[1],
    '> *:not(:last-of-type)': {
      marginRight: space.s,
    },
  },
  ({theme}) => ({
    [theme.canvas.breakpoints.down('s')]: {
      padding: space.s,
      '> *:not(div)': {
        flex: 1,
      },
    },
  }),
  ({position}) => ({position})
);

export const ActionBar = createComponent('div')({
  displayName: 'ActionBar',
  Component: (props: ActionBarProps, ref, Element) => (
    <ActionBarContainer ref={ref} as={Element} {...props} />
  ),
});

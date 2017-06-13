import * as React from 'react';
import styled from 'react-emotion';
import {colors, commonColors, spacing} from '@workday/canvas-kit-react-core';

export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If the actionBar is fixed to the bottom of the screen
   */
  fixed?: boolean;
}

const ActionBarContainer = styled('div')(
  {
    borderTop: `solid 1px ${colors.soap400}`,
    background: commonColors.background,
    padding: spacing.s,
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.08)',
    '@media (max-width: 575px)': {
      padding: spacing.xxs,
    },
  },
  ({fixed}: ActionBarProps) =>
    fixed && {
      position: 'fixed',
      left: 0,
      bottom: 0,
      right: 0,
    }
);

const ChildrenContainer = styled('div')({
  display: 'inline-block',
  padding: `0 ${spacing.m}`,
  '*:not(:first-child)': {
    marginLeft: spacing.s,
  },
  '@media (max-width: 575px)': {
    display: 'flex',
    padding: spacing.xxs,
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    '> *': {
      flex: 1,
      '&:not(:first-child)': {
        marginRight: spacing.s,
        marginLeft: 0,
      },
    },
  },
});

export default class ActionBar extends React.Component<ActionBarProps> {
  public render() {
    const {fixed, children, ...props} = this.props;

    return (
      <ActionBarContainer {...props} fixed={fixed}>
        <ChildrenContainer>{children}</ChildrenContainer>
      </ActionBarContainer>
    );
  }
}

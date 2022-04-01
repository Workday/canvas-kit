import * as React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {colors, commonColors, space, CSSProperties} from '@workday/canvas-kit-react/tokens';

export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, fix the ActionBar to the bottom of the screen.
   * @default false
   */
  fixed?: boolean;
}

function getFixedStyles(fixed = false): CSSProperties {
  return fixed
    ? {
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
      }
    : {};
}

const ActionBarContainer = styled('div')<ActionBarProps>(
  {
    borderTop: `solid 1px ${colors.soap400}`,
    background: commonColors.background,
    padding: space.s,
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.08)',
  },
  ({fixed, theme}) => {
    return {
      ...getFixedStyles(fixed),
      [theme.canvas.breakpoints.down('s')]: {
        padding: space.xxs,
      },
    };
  }
);

const ChildrenContainer = styled('div')(
  {
    display: 'inline-block',
    padding: `0 ${space.m}`,
    '> *:not(style) ~ *:not(style)': {
      marginLeft: space.s,
    },
  },
  ({theme}) => ({
    [theme.canvas.breakpoints.down('s')]: {
      display: 'flex',
      padding: space.xxs,
      justifyContent: 'center',
      flexDirection: 'row-reverse',
      '> *': {
        flex: 1,
        '&:not(style) ~ *:not(style)': {
          marginRight: space.s,
          marginLeft: 0,
        },
      },
    },
  })
);

export default class ActionBar extends React.Component<ActionBarProps> {
  public render() {
    const {fixed, children, ...elemProps} = this.props;

    return (
      <ActionBarContainer {...elemProps} fixed={fixed}>
        <ChildrenContainer>{children}</ChildrenContainer>
      </ActionBarContainer>
    );
  }
}

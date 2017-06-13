import * as React from 'react';
import styled from 'react-emotion';
import {GenericStyle} from '@workday/canvas-kit-react-common';
import Column, {ColumnProps} from './Column';
import canvas from '@workday/canvas-kit-react-core';

export interface LayoutProps {
  /**
   * Layout cannot be empty.
   */
  children: React.ReactElement<ColumnProps>[] | React.ReactNode;
  /**
   * Spacing of layout children.
   */
  spacing?: number;
  /**
   * Gutter of layout
   */
  gutter?: number | string;
  /**
   * If there should be a max-width
   */
  capWidth?: boolean;
}

const LayoutStyles: GenericStyle = {
  classname: 'layout',
  styles: {
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
  },
};

const LayoutContainer = styled('div')<LayoutProps>(
  LayoutStyles.styles,
  ({gutter}) => {
    if (gutter === 0) {
      return;
    }

    return {padding: `0 ${gutter}`};
  },
  ({capWidth}) => {
    if (!capWidth) {
      return;
    }

    return {
      maxWidth: '1280px',
      margin: '0 auto',
    };
  }
);

export default class Layout extends React.Component<LayoutProps> {
  static defaultProps = {
    gutter: canvas.spacing.xs,
  };

  public static Column = Column;

  private renderChild = (child: React.ReactElement<ColumnProps>): React.ReactNode => {
    if (typeof child.type === typeof Column) {
      const childProps = child.props;

      if (childProps.spacing || childProps.spacing === 0) {
        return child;
      }

      return React.cloneElement(child as React.ReactElement<ColumnProps>, {
        spacing: this.props.spacing,
      });
    }

    return child;
  };

  public render() {
    return (
      <LayoutContainer {...this.props}>
        {React.Children.map(this.props.children, this.renderChild)}
      </LayoutContainer>
    );
  }
}

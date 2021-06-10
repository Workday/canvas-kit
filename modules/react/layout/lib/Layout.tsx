import * as React from 'react';
import styled from '@emotion/styled';
import {GenericStyle} from '@workday/canvas-kit-react/common';
import Column, {ColumnProps} from './Column';
import canvas, {spaceNumbers} from '@workday/canvas-kit-react/tokens';
import isPropValid from '@emotion/is-prop-valid';

export interface LayoutProps {
  /**
   * The children of the Layout (cannot be empty).
   */
  children: React.ReactElement<ColumnProps>[] | React.ReactNode;
  /**
   * The spacing of the Layout children.
   */
  spacing?: number;
  /**
   * The padding of the Layout's outside container.
   * @default 12
   */
  gutter?: number | string;
  /**
   * If true, set the max width of the Layout container to `1280px`.
   * @default false
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

const LayoutContainer = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'spacing',
})<LayoutProps>(
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

class Layout extends React.Component<LayoutProps> {
  public static Column = Column;

  private renderChild = (child: React.ReactNode, spacing: number): React.ReactNode => {
    if (!React.isValidElement(child)) {
      return;
    }

    if (child.type === Column) {
      const childProps = child.props;

      if (childProps.spacing || childProps.spacing === 0) {
        return child;
      }

      return React.cloneElement(child, {spacing});
    }

    return child;
  };

  public render() {
    const {
      gutter = canvas.space.xs,
      spacing = spaceNumbers.xs,
      children,
      capWidth,
      ...elemProps
    } = this.props;

    return (
      <LayoutContainer spacing={spacing} gutter={gutter} capWidth={capWidth} {...elemProps}>
        {React.Children.map(children, child => this.renderChild(child, spacing))}
      </LayoutContainer>
    );
  }
}

Layout.Column = Column;

export default Layout;

import * as React from 'react';
import styled from '@emotion/styled';
import {GenericStyle} from '@workday/canvas-kit-react/common';
import {DeprecatedColumn, DeprecatedColumnProps} from './Column';
import {canvas, spaceNumbers} from '@workday/canvas-kit-react/tokens';
import isPropValid from '@emotion/is-prop-valid';

/**
 * ### Deprecated Layout Props
 *
 * As of Canvas Kit v8, Layout is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */
export interface DeprecatedLayoutProps {
  /**
   * The children of the DeprecatedLayout (cannot be empty).
   */
  children: React.ReactElement<DeprecatedColumnProps>[] | React.ReactNode;
  /**
   * The spacing of the DeprecatedLayout children.
   */
  spacing?: number;
  /**
   * The padding of the DeprecatedLayout's outside container.
   * @default 12
   */
  gutter?: number | string;
  /**
   * If true, set the max width of the DeprecatedLayout container to `1280px`.
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
})<DeprecatedLayoutProps>(
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

/**
 * ### Deprecated Layout
 *
 * As of Canvas Kit v8, Layout is being soft-deprecated.
 * It will be hard-deprecated (completely removed) in v9. Please see the
 * [upgrade guide](https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page)
 * for more information.
 */
export class DeprecatedLayout extends React.Component<DeprecatedLayoutProps> {
  componentDidMount() {
    console.warn(
      `This component is being deprecated and will be removed in Canvas Kit V9.\n
      For more information, please see the V8 upgrade guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-upgrade-guides-v8-0--page
      `
    );
  }

  public static Column = DeprecatedColumn;

  private renderChild = (child: React.ReactNode, spacing: number): React.ReactNode => {
    if (!React.isValidElement(child)) {
      return;
    }

    if (child.type === DeprecatedColumn) {
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

DeprecatedLayout.Column = DeprecatedColumn;

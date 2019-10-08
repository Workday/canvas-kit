import * as React from 'react';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {GenericStyle} from '@workday/canvas-kit-react-common';
import {borderRadius, colors, type, spacing} from '@workday/canvas-kit-react-core';
import {CSSObject} from '@emotion/core';
import styled from '@emotion/styled';

export enum StatusIndicatorType {
  Gray = 'gray',
  Orange = 'orange',
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Transparent = 'transparent',
}

export enum StatusIndicatorEmphasis {
  High = 'high',
  Low = 'low',
}

export interface StatusIndicatorGenericStyle extends GenericStyle {
  styles: CSSObject & React.CSSProperties;
  variants: {
    [statusType in StatusIndicatorType]: {
      [statusEmphasis in StatusIndicatorEmphasis]?: CSSObject & React.CSSProperties;
    };
  };
}

export const statusIndicatorStyles: StatusIndicatorGenericStyle = {
  classname: 'status-indicator',
  styles: {
    ...type.small,
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    maxWidth: 150,
    height: spacing.s,
    padding: `1px ${spacing.xxxs}`,
    borderRadius: borderRadius.s,
    boxSizing: 'border-box',
  },
  variants: {
    gray: {
      high: {
        color: colors.frenchVanilla100,
        background: colors.licorice300,
      },
      low: {
        color: colors.licorice400,
        background: colors.soap200,
      },
    },
    orange: {
      high: {
        color: colors.licorice500,
        background: colors.cantaloupe400,
      },
      low: {
        color: colors.toastedMarshmallow600,
        background: colors.cantaloupe100,
      },
    },
    blue: {
      high: {
        color: colors.frenchVanilla100,
        background: colors.blueberry400,
      },
      low: {
        color: colors.blueberry500,
        background: colors.blueberry100,
      },
    },
    green: {
      high: {
        color: colors.frenchVanilla100,
        background: colors.greenApple600,
      },
      low: {
        color: colors.greenApple600,
        background: colors.greenApple100,
      },
    },
    red: {
      high: {
        color: colors.frenchVanilla100,
        background: colors.cinnamon500,
      },
      low: {
        color: colors.cinnamon600,
        background: colors.cinnamon100,
      },
    },
    transparent: {
      high: {
        color: colors.frenchVanilla100,
        background: colors.blackPepper600,
      },
      // Low & High emphasis are identical for transparent status indicators
      low: {
        color: colors.frenchVanilla100,
        background: colors.blackPepper600,
      },
    },
  },
};

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Type of status indicator (e.g. Gray, Orange etc.).
   */
  type: StatusIndicatorType;
  /**
   * Emphasis of status indicator (e.g. High v Low).
   */
  emphasis: StatusIndicatorEmphasis;
  /**
   * Label of status indicator.
   */
  label: string;
  /**
   * Icon to be used along with the status label.
   */
  icon?: CanvasSystemIcon;
}

const Container = styled('span')<Pick<StatusIndicatorProps, 'type' | 'emphasis'>>(
  statusIndicatorStyles.styles,
  ({type, emphasis}) => ({
    ...statusIndicatorStyles.variants[type][emphasis],
  })
);

const StatusLabel = styled('span')({
  fontWeight: 'bold',
  '-webkit-font-smoothing': 'antialiased',
  textTransform: 'uppercase',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export default class StatusIndicator extends React.Component<StatusIndicatorProps> {
  public static Type = StatusIndicatorType;
  public static Emphasis = StatusIndicatorEmphasis;
  static defaultProps = {
    emphasis: StatusIndicatorEmphasis.High,
  };

  public render() {
    const {type, emphasis, icon, label, ...elemProps} = this.props;
    const variant = statusIndicatorStyles.variants[type][emphasis]!;

    return (
      <Container type={type} emphasis={emphasis} {...elemProps}>
        {icon && (
          <SystemIcon
            colorHover={variant.color}
            color={variant.color}
            icon={icon}
            size={14}
            style={{paddingRight: spacing.xxxs}}
          />
        )}
        <StatusLabel>{label}</StatusLabel>
      </Container>
    );
  }
}

import * as React from 'react';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {GenericStyle, PickRequired} from '@workday/canvas-kit-react/common';
import {borderRadius, colors, type, space, CSSProperties} from '@workday/canvas-kit-react/tokens';
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
  styles: CSSProperties;
  variants: {
    [statusType in StatusIndicatorType]: {
      [statusEmphasis in StatusIndicatorEmphasis]?: CSSProperties;
    };
  };
}

export const statusIndicatorStyles: StatusIndicatorGenericStyle = {
  classname: 'status-indicator',
  styles: {
    ...type.levels.subtext.medium,
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    maxWidth: 150,
    height: space.s,
    padding: `1px ${space.xxxs}`,
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
   * The type of the StatusIndicator. Accepts `Gray`, `Orange`, `Blue`, `Green`, `Red`, or `Transparent`.
   */
  type: StatusIndicatorType;
  /**
   * The emphasis of the StatusIndicator. Accepts `High` or `Low`.
   * @default StatusIndicatorEmphasis.High
   */
  emphasis?: StatusIndicatorEmphasis;
  /**
   * The text of the StatusIndicator.
   */
  label: string;
  /**
   * The icon of the StatusIndicator.
   */
  icon?: CanvasSystemIcon;
}

const Container = styled('span')<PickRequired<StatusIndicatorProps, 'emphasis', 'type'>>(
  statusIndicatorStyles.styles,
  ({type, emphasis}) => ({
    ...statusIndicatorStyles.variants[type][emphasis],
  })
);

const StatusLabel = styled('span')({
  fontWeight: 'bold',
  WebkitFontSmoothing: 'antialiased',
  textTransform: 'uppercase',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export default class StatusIndicator extends React.Component<StatusIndicatorProps> {
  public static Type = StatusIndicatorType;
  public static Emphasis = StatusIndicatorEmphasis;

  public render() {
    const {emphasis = StatusIndicatorEmphasis.High, type, icon, label, ...elemProps} = this.props;
    const variant = statusIndicatorStyles.variants[type][emphasis]!;

    return (
      <Container type={type} emphasis={emphasis} {...elemProps}>
        {icon && (
          <SystemIcon
            colorHover={variant.color}
            color={variant.color}
            icon={icon}
            size={14}
            style={{paddingRight: space.xxxs}}
          />
        )}
        <StatusLabel>{label}</StatusLabel>
      </Container>
    );
  }
}

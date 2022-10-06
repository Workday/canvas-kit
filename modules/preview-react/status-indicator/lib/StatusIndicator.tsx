import React from 'react';

import {
  createComponent,
  ExtractProps,
  StyledType,
  styled,
  PickRequired,
} from '@workday/canvas-kit-react/common';
import {CSSProperties, colors} from '@workday/canvas-kit-react/tokens';
import {HStack} from '@workday/canvas-kit-react/layout';
import {StatusIndicatorIcon} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';

export enum StatusIndicatorVariant {
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

export interface StatusIndicatorGenericStyle {
  variants: {
    [statusType in StatusIndicatorVariant]: {
      [statusEmphasis in StatusIndicatorEmphasis]?: CSSProperties;
    };
  };
}

export const statusIndicatorStyles: StatusIndicatorGenericStyle = {
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
export interface StatusIndicatorProps extends Partial<ExtractProps<typeof HStack, never>> {
  /**
   * Children of the Status Indicator. Should contain a `<StatusIndicator.Target>`, a `<StatusIndicator.Content>`
   */
  children: React.ReactNode;
  /**
   * The type of the StatusIndicator. Accepts `Gray`, `Orange`, `Blue`, `Green`, `Red`, or `Transparent`.
   */
  variant: StatusIndicatorVariant;
  /**
   * The emphasis of the StatusIndicator. Accepts `High` or `Low`.
   * @default StatusIndicatorEmphasis.High
   */
  emphasis: StatusIndicatorEmphasis;
}

const StyledStatusIndicatorContainer = styled(HStack)<
  StyledType & Pick<StatusIndicatorProps, 'emphasis' | 'variant'>
>(({variant, emphasis}) => ({
  ...statusIndicatorStyles.variants[variant][emphasis],
}));

export const StatusIndicator = createComponent('div')({
  displayName: 'StatusIndicator',
  Component: (
    {
      children,
      emphasis = StatusIndicatorEmphasis.Low,
      variant = StatusIndicatorVariant.Gray,
      ...elemProps
    }: StatusIndicatorProps,
    ref,
    Element
  ) => (
    <StyledStatusIndicatorContainer
      spacing={4}
      as={Element}
      ref={ref}
      maxWidth={200}
      emphasis={emphasis}
      variant={variant}
      paddingX="xxxs"
      display="inline-flex"
      alignItems="center"
      height={20}
      borderRadius="s"
      {...elemProps}
    >
      {children}
    </StyledStatusIndicatorContainer>
  ),
  subComponents: {
    Icon: StatusIndicatorIcon,
    Label: StatusIndicatorLabel,
  },
});

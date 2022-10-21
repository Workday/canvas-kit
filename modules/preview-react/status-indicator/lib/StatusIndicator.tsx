import React from 'react';

import {ExtractProps, createContainer, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {HStack} from '@workday/canvas-kit-react/layout';
import {StatusIndicatorIcon} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';
import {useStatusIndicatorModel} from './hooks';

export const colorsMap = {
  gray: {
    high: {
      text: colors.frenchVanilla100,
      background: colors.licorice300,
    },
    low: {
      text: colors.licorice400,
      background: colors.soap300,
    },
  },
  orange: {
    high: {
      text: colors.licorice500,
      background: colors.cantaloupe400,
    },
    low: {
      text: colors.toastedMarshmallow600,
      background: colors.cantaloupe100,
    },
  },
  blue: {
    high: {
      text: colors.frenchVanilla100,
      background: colors.blueberry400,
    },
    low: {
      text: colors.blueberry500,
      background: colors.blueberry100,
    },
  },
  green: {
    high: {
      text: colors.frenchVanilla100,
      background: colors.greenApple600,
    },
    low: {
      text: colors.greenApple600,
      background: colors.greenApple100,
    },
  },
  red: {
    high: {
      text: colors.frenchVanilla100,
      background: colors.cinnamon500,
    },
    low: {
      text: colors.cinnamon600,
      background: colors.cinnamon100,
    },
  },
  transparent: {
    high: {
      text: colors.frenchVanilla100,
      background: colors.blackPepper600,
    },
    low: {
      text: colors.frenchVanilla100,
      background: colors.blackPepper600,
    },
  },
};

export interface StatusIndicatorProps extends Partial<ExtractProps<typeof HStack, never>> {
  /**
   * Children of the Status Indicator. Can contain a `<StatusIndicator.Label>` and or `<StatusIndicator.Icon>`
   */
  children: React.ReactNode;
}

export const useStatusIndicator = createElemPropsHook(useStatusIndicatorModel)(({state}) => {
  const colors = colorsMap[state.variant][state.emphasis];
  return {
    opacity: state.variant === 'transparent' ? '0.85' : undefined,
    color: colors.text,
    background: colors.background,
  };
});

export const StatusIndicator = createContainer('div')({
  displayName: 'StatusIndicator',
  modelHook: useStatusIndicatorModel,
  elemPropsHook: useStatusIndicator,
  subComponents: {
    Icon: StatusIndicatorIcon,
    Label: StatusIndicatorLabel,
  },
})<StatusIndicatorProps>(({children, ...elemProps}, Element, model) => {
  return (
    <HStack
      spacing={4}
      as={Element}
      maxWidth={200}
      paddingX="xxxs"
      display="inline-flex"
      alignItems="center"
      height={20}
      borderRadius="s"
      {...elemProps}
    >
      {children}
    </HStack>
  );
});

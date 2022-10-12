import React from 'react';

import {ExtractProps, createContainer} from '@workday/canvas-kit-react/common';
import {CSSProperties, colors} from '@workday/canvas-kit-react/tokens';
import {HStack} from '@workday/canvas-kit-react/layout';
import {StatusIndicatorIcon} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';
import {StatusIndicatorEmphasis, StatusIndicatorVariant, useStatusIndicatorModel} from './hooks';

const getStuatusIndicatorColors = (
  variant: StatusIndicatorVariant,
  emphasis: StatusIndicatorEmphasis
) => {
  // let statusIndicatorTextColor = '';
  // let statusIndicatorBackgroundColor = '';
  switch (variant) {
    case 'gray': {
      if (emphasis === 'high') {
        return {
          color: colors.frenchVanilla100,
          background: colors.licorice300,
        };
      } else {
        return {
          color: colors.licorice400,
          background: colors.soap300,
        };
      }
    }
    case 'orange': {
      if (emphasis === 'high') {
        return {
          color: colors.licorice500,
          background: colors.cantaloupe400,
        };
      } else {
        return {
          color: colors.toastedMarshmallow600,
          background: colors.cantaloupe100,
        };
      }
    }
    case 'blue': {
      if (emphasis === 'high') {
        return {
          color: colors.frenchVanilla100,
          background: colors.blueberry400,
        };
      } else {
        return {
          color: colors.blueberry500,
          background: colors.blueberry100,
        };
      }
    }
    case 'green': {
      if (emphasis === 'high') {
        return {
          color: colors.frenchVanilla100,
          background: colors.greenApple600,
        };
      } else {
        return {
          color: colors.greenApple600,
          background: colors.greenApple100,
        };
      }
    }
    case 'red': {
      if (emphasis === 'high') {
        return {
          color: colors.frenchVanilla100,
          background: colors.cinnamon500,
        };
      } else {
        return {
          color: colors.cinnamon600,
          background: colors.cinnamon100,
        };
      }
    }
    case 'transparent': {
      if (emphasis === 'high') {
        return {
          color: colors.frenchVanilla100,
          background: colors.blackPepper600,
          opacity: '.85',
        };
      } else {
        return {
          color: colors.frenchVanilla100,
          background: colors.blackPepper600,
        };
      }
    }
    default: {
      return {
        color: colors.frenchVanilla100,
        background: colors.licorice300,
      };
    }
  }
};
export interface StatusIndicatorProps extends Partial<ExtractProps<typeof HStack, never>> {
  /**
   * Children of the Status Indicator. Should contain a `<StatusIndicator.Target>`, a `<StatusIndicator.Content>`
   */
  children: React.ReactNode;
}

export const StatusIndicator = createContainer('div')({
  displayName: 'StatusIndicator',
  modelHook: useStatusIndicatorModel,
  subComponents: {
    Icon: StatusIndicatorIcon,
    Label: StatusIndicatorLabel,
  },
})<StatusIndicatorProps>(({children, ...elemProps}, Element, model) => {
  const {state} = model;
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
      {...getStuatusIndicatorColors(state.variant, state.emphasis)}
      {...elemProps}
    >
      {children}
    </HStack>
  );
});

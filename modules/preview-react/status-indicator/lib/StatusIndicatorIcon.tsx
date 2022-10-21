import React from 'react';

import {createElemPropsHook, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {useStatusIndicatorModel} from './hooks';

export interface StatusIndicatorIconProps extends SystemIconProps {}

import {colors} from '@workday/canvas-kit-react/tokens';

export const statusIndicatorColors = {
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

const useStatusIndicatorIcon = createElemPropsHook(useStatusIndicatorModel)(({state}) => {
  const colors = statusIndicatorColors[state.variant][state.emphasis];
  return {
    color: colors.text,
    colorHover: colors.background,
  };
});

export const StatusIndicatorIcon = createSubcomponent('span')({
  modelHook: useStatusIndicatorModel,
  elemPropsHook: useStatusIndicatorIcon,
})<StatusIndicatorIconProps>(({icon, ...elemProps}, Element, model) => {
  return <SystemIcon as={Element} size={20} role="img" icon={icon} {...elemProps} />;
});

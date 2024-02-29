import React from 'react';

import {createElemPropsHook, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {useStatusIndicatorModel} from './hooks';

export interface StatusIndicatorIconProps extends SystemIconProps {}
import {base} from '@workday/canvas-tokens-web';
import {cssVar} from '@workday/canvas-kit-styling';

export const statusIndicatorColors = {
  gray: {
    high: {
      text: cssVar(base.frenchVanilla100),
      background: cssVar(base.licorice300),
    },
    low: {
      text: cssVar(base.licorice400),
      background: cssVar(base.soap300),
    },
  },
  orange: {
    high: {
      text: cssVar(base.licorice500),
      background: cssVar(base.cantaloupe400),
    },
    low: {
      text: cssVar(base.toastedMarshmallow600),
      background: cssVar(base.cantaloupe100),
    },
  },
  blue: {
    high: {
      text: cssVar(base.frenchVanilla100),
      background: cssVar(base.blueberry400),
    },
    low: {
      text: cssVar(base.blueberry500),
      background: cssVar(base.blueberry100),
    },
  },
  green: {
    high: {
      text: cssVar(base.frenchVanilla100),
      background: cssVar(base.greenApple600),
    },
    low: {
      text: cssVar(base.greenApple600),
      background: cssVar(base.greenApple100),
    },
  },
  red: {
    high: {
      text: cssVar(base.frenchVanilla100),
      background: cssVar(base.cinnamon500),
    },
    low: {
      text: cssVar(base.cinnamon600),
      background: cssVar(base.cinnamon100),
    },
  },
  transparent: {
    high: {
      text: cssVar(base.frenchVanilla100),
      background: cssVar(base.blackPepper600),
    },
    low: {
      text: cssVar(base.frenchVanilla100),
      background: cssVar(base.blackPepper600),
    },
  },
};

export const useStatusIndicatorIcon = createElemPropsHook(useStatusIndicatorModel)(({state}) => {
  const colors = statusIndicatorColors[state.variant][state.emphasis];
  return {
    color: colors.text,
    colorHover: colors.text,
  };
});

export const StatusIndicatorIcon = createSubcomponent('span')({
  modelHook: useStatusIndicatorModel,
  elemPropsHook: useStatusIndicatorIcon,
})<StatusIndicatorIconProps>((elemProps, Element, model) => {
  return <SystemIcon as={Element} size={20} role="img" {...elemProps} />;
});

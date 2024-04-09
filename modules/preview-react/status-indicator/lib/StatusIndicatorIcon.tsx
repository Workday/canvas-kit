import React from 'react';

import {createElemPropsHook, createComponent} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {useStatusIndicatorModel} from './hooks';

export interface StatusIndicatorIconProps extends SystemIconProps {}

/**
 * @deprecated ⚠️ We've deprecated `statusIndicatorColors` for StatusIndicator because it's now directly handeled by the `statusIndicatorStencil`.
 */
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

/**
 * @deprecated ⚠️ We've deprecated `useStatusIndicatorIcon` for StatusIndicatorIcon because it's now directly handeled by the `statusIndicatorStencil`.
 */
export const useStatusIndicatorIcon = createElemPropsHook(useStatusIndicatorModel)(({state}) => {
  const colors = statusIndicatorColors[state.variant][state.emphasis];
  return {
    color: colors.text,
    colorHover: colors.text,
  };
});

export const StatusIndicatorIcon = createComponent('span')({
  displayName: 'StatusIndicatorIcon',
  Component: (elemProps: SystemIconProps, ref, Element) => {
    return <SystemIcon as={Element} ref={ref} size={20} role="img" {...elemProps} />;
  },
});

import React from 'react';

import {createElemPropsHook, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {useStatusIndicatorModel} from './hooks';
import {colorsMap} from './StatusIndicator';

export interface StatusIndicatorIconProps extends SystemIconProps {}

const useStatusIndicatorIcon = createElemPropsHook(useStatusIndicatorModel)(({state}) => {
  const colors = colorsMap[state.variant][state.emphasis];
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

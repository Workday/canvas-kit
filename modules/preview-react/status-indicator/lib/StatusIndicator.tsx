import React from 'react';

import {ExtractProps, createContainer, createElemPropsHook} from '@workday/canvas-kit-react/common';
import {HStack} from '@workday/canvas-kit-react/layout';
import {StatusIndicatorIcon, statusIndicatorColors} from './StatusIndicatorIcon';
import {StatusIndicatorLabel} from './StatusIndicatorLabel';
import {useStatusIndicatorModel} from './hooks';

export interface StatusIndicatorProps extends Partial<ExtractProps<typeof HStack, never>> {
  /**
   * Children of the `StatusIndicator`. Can contain a `StatusIndicator.Label` and optionally a `StatusIndicator.Icon`.
   */
  children: React.ReactNode;
}

export const useStatusIndicator = createElemPropsHook(useStatusIndicatorModel)(({state}) => {
  const colors = statusIndicatorColors[state.variant][state.emphasis];
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

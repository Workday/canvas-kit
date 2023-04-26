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

/**
 * `StatusIndicator` is a container component which renders an {@link HStack} under the hood to
 * apply spacing evenly between its children. It has a default maximum width of `200px`.
 *
 * ```tsx
 * <StatusIndicator emphasis="low" variant="blue">
 *   {Child components}
 * </StatusIndicator>
 * ```
 */
export const StatusIndicator = createContainer('div')({
  displayName: 'StatusIndicator',
  modelHook: useStatusIndicatorModel,
  elemPropsHook: useStatusIndicator,
  subComponents: {
    /**
     * `StatusIndicator.Label` renders {@link Text} under the hood. It will apply an ellipsis if its
     * contents exceed the component's maximum width.
     *
     * ```tsx
     * <StatusIndicator.Label>{The text to be rendered}</StatusIndicator.Label>
     * ```
     */
    Label: StatusIndicatorLabel,
    /**
     * `StatusIndicator.Icon` renders {@link SystemIcon} under the hood. It's used as a decorative
     * element to visually support the {@link StatusIndicatorLabel StatusIndicator.Label} text.
     *
     * ```tsx
     * <StatusIndicator.Icon icon={uploadCloudIcon} />
     * ```
     */
    Icon: StatusIndicatorIcon,
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

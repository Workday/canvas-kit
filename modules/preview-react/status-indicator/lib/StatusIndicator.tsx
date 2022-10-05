import React from 'react';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
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
  emphasis?: StatusIndicatorEmphasis;
}

export const StatusIndicator = createComponent('div')({
  displayName: 'StatusIndicator',
  Component: ({children, ...elemProps}: StatusIndicatorProps, ref, Element) => (
    // Select is still a class component, so we render a renamed version of it
    // (SelectContainer) and pass it ref and Element
    <HStack spacing={4} as={Element} ref={ref} {...elemProps}>
      {children}
    </HStack>
  ),
  subComponents: {
    Icon: StatusIndicatorIcon,
    Label: StatusIndicatorLabel,
  },
});

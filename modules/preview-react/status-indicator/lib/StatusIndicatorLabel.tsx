import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {Text} from '@workday/canvas-kit-react/text';

import {colors} from '@workday/canvas-kit-react/tokens';

export interface StatusIndicatorLabelProps extends BoxProps {
  tooltipProps?: Omit<OverflowTooltipProps, 'children'>;
}

export const StatusIndicatorLabel = createComponent('span')({
  displayName: 'StatusIndicator.Label',
  Component: ({tooltipProps, ...elemProps}: StatusIndicatorLabelProps, ref, Element) => {
    return (
      <OverflowTooltip {...tooltipProps}>
        <Text
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          typeLevel="subtext.medium"
          fontWeight="bold"
          textTransform="capitalize"
          color={colors.licorice100}
          maxWidth={200}
          as={Element}
          {...elemProps}
        >
          {elemProps.children}
        </Text>
      </OverflowTooltip>
    );
  },
});

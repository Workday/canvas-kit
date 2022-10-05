import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {Text} from '@workday/canvas-kit-react/text';

import {colors} from '@workday/canvas-kit-react/tokens';

export interface StatusIndicatorLabelProps extends BoxProps {
  tooltipProps?: Omit<OverflowTooltipProps, 'children'>;
}
const StyledLabelContainer = styled(Box.as('span'))<StyledType>({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
});

// export const PillLabel = createComponent('span')({
//   modelHook: usePillModel,
// })<PillLabelProps>(({tooltipProps, ...elemProps}, Element, model) => {
//   return (
//     <OverflowTooltip {...tooltipProps}>
//       <StyledLabelContainer
//         color={model.state.disabled ? colors.licorice100 : 'inherit'}
//         maxWidth={model.state.maxWidth}
//         as={Element}
//         id={`label-${model.state.id}`}
//         {...elemProps}
//       >
//         {elemProps.children}
//       </StyledLabelContainer>
//     </OverflowTooltip>
//   );
// });

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

import React from 'react';

import {createSubcomponent, styled, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';

import {usePillModel} from './usePillModel';
import {colors} from '@workday/canvas-kit-react/tokens';

export interface PillLabelProps extends BoxProps {
  tooltipProps?: Omit<OverflowTooltipProps, 'children'>;
}
const StyledLabelContainer = styled(Box.as('span'))<StyledType>({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
});

export const PillLabel = createSubcomponent('span')({
  modelHook: usePillModel,
})<PillLabelProps>(({tooltipProps, ...elemProps}, Element, model) => {
  return (
    <OverflowTooltip {...tooltipProps}>
      <StyledLabelContainer
        color={model.state.disabled ? colors.licorice100 : 'inherit'}
        maxWidth={model.state.maxWidth}
        as={Element}
        id={`label-${model.state.id}`}
        {...elemProps}
      >
        {elemProps.children}
      </StyledLabelContainer>
    </OverflowTooltip>
  );
});

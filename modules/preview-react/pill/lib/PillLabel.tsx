import React from 'react';

import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {PillModelContext} from './Pill';
import {PillModel} from './usePillModel';
import {colors} from '@workday/canvas-kit-react/tokens';

export interface PillLabelProps extends BoxProps {
  model?: PillModel;
  tooltipProps?: Omit<OverflowTooltipProps, 'children'>;
}
const StyledLabelContainer = styled(Box.as('span'))<StyledType>({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
});
export const PillLabel = createComponent('span')({
  displayName: 'Pill.Label',
  Component: ({children, model, tooltipProps, ...elemProps}: PillLabelProps, ref, Element) => {
    const {state} = useModelContext(PillModelContext, model);
    return (
      <OverflowTooltip {...tooltipProps}>
        <StyledLabelContainer
          color={state.disabled ? colors.licorice100 : 'inherit'}
          maxWidth={state.maxWidth}
          ref={ref}
          as={Element}
          {...elemProps}
        >
          {children}
        </StyledLabelContainer>
      </OverflowTooltip>
    );
  },
});

import React from 'react';

import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {PillModelContext} from './Pill';
import {PillModel} from './usePillModel';

export interface PillLabelProps extends BoxProps {
  model?: PillModel;
}
const StyledLabelContainer = styled(Box.as('span'))<StyledType>({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'inline-block',
});
export const PillLabel = createComponent('span')({
  displayName: 'Pill.Label',
  Component: ({children, model, ...elemProps}: PillLabelProps, ref, Element) => {
    const {state} = useModelContext(PillModelContext, model);
    return (
      <OverflowTooltip>
        <StyledLabelContainer maxWidth={state.maxWidth} ref={ref} {...elemProps}>
          {children}
        </StyledLabelContainer>
      </OverflowTooltip>
    );
  },
});

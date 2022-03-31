import React from 'react';

import {colors, space} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {PillModelContext} from './Pill';
import {PillModel} from './usePillModel';

export interface PillContentProps {
  model?: PillModel;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: colors.frenchVanilla600,
  padding: space.s,
  border: `1px solid ${colors.licorice600}`,
});

export const PillContent = createComponent('div')({
  displayName: 'Pill.Content',
  Component: ({children, model, ...elemProps}: PillContentProps, ref, Element) => {
    const {state} = useModelContext(PillModelContext, model);

    return state.open ? (
      <Container as={Element} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});

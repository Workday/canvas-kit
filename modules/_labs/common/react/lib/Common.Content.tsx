import React from 'react';

import {colors, spacing} from '@workday/canvas-kit-react-core';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react-common';

import {CommonModelContext} from './Common';
import {CommonModel} from './useCommonModel';

export interface CommonContentProps {
  model?: CommonModel;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: colors.frenchVanilla600,
  padding: spacing.s,
  border: `1px solid ${colors.licorice600}`,
});

export const CommonContent = createComponent('div')({
  displayName: 'Common.Content',
  Component: ({children, model, ...elemProps}: CommonContentProps, ref, Element) => {
    const {state} = useModelContext(CommonModelContext, model);

    return state.open ? (
      <Container as={Element} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});

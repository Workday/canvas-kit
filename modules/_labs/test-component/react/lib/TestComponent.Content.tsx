import React from 'react';

import {colors, spacing} from '@workday/canvas-kit-react-core';
import {createComponent, styled, StyledType, useModelContext} from '@workday/canvas-kit-react-common';

import {TestComponentModelContext} from './TestComponent';
import { TestComponentModel } from './useTestComponentModel';

export interface TestComponentContentProps {
  model?: TestComponentModel;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: colors.frenchVanilla600,
  padding: spacing.s,
  border: `1px solid ${colors.licorice600}`,
});

export const TestComponentContent = createComponent('div')({
  displayName: 'TestComponent.Content',
  Component: ({children, model, ...elemProps}: TestComponentContentProps, ref, Element) => {
    const {state} = useModelContext(model, TestComponentModelContext);

    return state.open ? (
      <Container as={Element} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});

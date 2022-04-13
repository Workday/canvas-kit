import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ExpandableContainerModelContext} from './ExpandableContainer';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export interface ExpandableContainerContentProps {
  model?: DisclosureModel;
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: 'none',
  border: 'none',
  padding: space.s,
});

export const ExpandableContainerContent = createComponent('div')({
  displayName: 'ExpandableContainer.Content',
  Component: ({children, model, ...elemProps}: ExpandableContainerContentProps, ref, Element) => {
    const {state} = useModelContext(ExpandableContainerModelContext, model);

    return state.visibility === 'visible' ? (
      <Container as={Element} id={state.id} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});

import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export interface ExpandableContentProps {
  model?: DisclosureModel;
  /**
   * Children of the Expandable Content. Can contain anything that should be conditionally visible.
   */
  children: React.ReactNode;
}

const Container = styled('div')<StyledType>({
  background: 'none',
  border: 'none',
  padding: `${space.s} ${space.xxs} ${space.xxs}`,
});

export const ExpandableContent = createComponent('div')({
  displayName: 'Expandable.Content',
  Component: ({children, model, ...elemProps}: ExpandableContentProps, ref, Element) => {
    const {state} = useModelContext(ExpandableModelContext, model);

    return state.visibility === 'visible' ? (
      <Container as={Element} id={state.id} ref={ref} {...elemProps}>
        {children}
      </Container>
    ) : null;
  },
});

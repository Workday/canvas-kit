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
import {useExpandableContent} from './hooks/useExpandableContent';

export interface ExpandableContentProps {
  model?: DisclosureModel;
  /**
   * Children of the `Expandable.Content` whose visibility will be controlled by the `Expandable.Target`
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
  Component: ({children, model}: ExpandableContentProps, ref, Element) => {
    const localModel = useModelContext(ExpandableModelContext, model);
    const {open, ...props} = useExpandableContent(localModel, {}, ref);

    return open ? (
      <Container as={Element} {...props}>
        {children}
      </Container>
    ) : null;
  },
});

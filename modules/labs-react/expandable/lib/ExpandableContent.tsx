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
   * Children of the `Expandable.Content` whose visibility is controlled by the associated `Expandable.Target`
   */
  children: React.ReactNode;
}

const StyledContent = styled('div')<StyledType>({
  background: 'none',
  border: 'none',
  padding: `${space.s} ${space.xxs} ${space.xxs}`,
});

export const ExpandableContent = createComponent('div')({
  displayName: 'Expandable.Content',
  Component: ({children, model}: ExpandableContentProps, ref, Element) => {
    const localModel = useModelContext(ExpandableModelContext, model);
    const props = useExpandableContent(localModel, {}, ref);

    return (
      <StyledContent as={Element} {...props}>
        {children}
      </StyledContent>
    );
  },
});

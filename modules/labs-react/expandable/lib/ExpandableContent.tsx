import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {createSubcomponent, styled, StyledType} from '@workday/canvas-kit-react/common';

import {useDisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {useExpandableContent} from './hooks/useExpandableContent';

export interface ExpandableContentProps {
  /**
   * The children of the `Expandable.Content` whose visibility is controlled by the associated
   * `Expandable.Target`
   */
  children: React.ReactNode;
}

const StyledContent = styled('div')<StyledType>({
  background: 'none',
  border: 'none',
  padding: `${space.s} ${space.xxs} ${space.xxs}`,
});

export const ExpandableContent = createSubcomponent('div')({
  modelHook: useDisclosureModel,
  elemPropsHook: useExpandableContent,
})<ExpandableContentProps>(({children, ...elementProps}, Element) => {
  return (
    <StyledContent as={Element} {...elementProps}>
      {children}
    </StyledContent>
  );
});

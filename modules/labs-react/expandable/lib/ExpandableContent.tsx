import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {useExpandableContent} from './hooks/useExpandableContent';
import {Box} from '@workday/canvas-kit-react/layout';
import {useExpandableModel} from './useExpandableModel';

export interface ExpandableContentProps {
  /**
   * The children of the `Expandable.Content` whose visibility is controlled by the associated
   * `Expandable.Target`
   */
  children?: React.ReactNode;
}

export const ExpandableContent = createSubcomponent('div')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableContent,
})<ExpandableContentProps>(({children, ...elementProps}, Element) => {
  return (
    <Box
      as={Element}
      background="none"
      border="none"
      padding={`${space.s} ${space.xxs} ${space.xxs}`}
      {...elementProps}
    >
      {children}
    </Box>
  );
});

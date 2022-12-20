import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

import {useExpandableContent} from './hooks/useExpandableContent';
import {useExpandableModel} from './hooks/useExpandableModel';

export interface ExpandableContentProps extends ExtractProps<typeof Box, never> {
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
      padding={`${space.s} ${space.xxs} ${space.xxs}`}
      {...elementProps}
    >
      {children}
    </Box>
  );
});

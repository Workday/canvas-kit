import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';

export interface ExpandableContainerHeaderProps {
  children: React.ReactNode;
}

export const ExpandableContainerHeader = createComponent('h1')({
  displayName: 'ExpandableContainer.Header',
  Component: ({children, ...elemProps}: ExpandableContainerHeaderProps, ref, Element) => {
    return (
      <Element ref={ref} {...elemProps}>
        {children}
      </Element>
    );
  },
});

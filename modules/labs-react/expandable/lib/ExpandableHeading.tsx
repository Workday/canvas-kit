import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';

export interface ExpandableHeaderProps {
  children: React.ReactNode;
}

export const ExpandableHeading = createComponent('h3')({
  displayName: 'Expandable.Heading',
  Component: ({children, ...elemProps}: ExpandableHeaderProps, ref, Element) => {
    return (
      <Element ref={ref} {...elemProps}>
        {children}
      </Element>
    );
  },
});

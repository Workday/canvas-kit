import React from 'react';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableCaptionStencil = createStencil({
  base: {
    paddingInline: `${system.space.x2} ${system.space.x4}`,
  },
});

export const TableCaption = createComponent('caption')({
  displayName: 'Table.Caption',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, tableCaptionStencil())}>
        {children}
      </Element>
    );
  },
});

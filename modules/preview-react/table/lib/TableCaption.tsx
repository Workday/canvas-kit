import React from 'react';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const captionStyles = createStyles({
  display: 'flex',
  borderBottom: `${px2rem(1)} solid ${base.soap500}`,
  padding: `${system.space.x2} ${system.space.x4}`,
  boxSizing: 'border-box',
});

export const TableCaption = createComponent('caption')({
  displayName: 'Table.Caption',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, captionStyles)}>
        {children}
      </Element>
    );
  },
});

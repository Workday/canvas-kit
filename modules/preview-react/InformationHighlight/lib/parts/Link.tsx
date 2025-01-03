import * as React from 'react';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

const informationHighlightLinkStencil = createStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      gridColumn: '2',
      justifySelf: 'start',
      //!important is needed until hyperlink is refactored, color override is not respected otherwise
      color: `${cssVar(base.blackPepper300)} !important`,
      fontWeight: system.fontWeight.bold,
    };
  },
});

export const Link = createComponent('a')({
  displayName: 'Link',
  Component: ({...elemProps}: ExtractProps<typeof Hyperlink, never>, ref, Element) => {
    return (
      <Hyperlink
        as={Element}
        ref={ref}
        {...mergeStyles(elemProps, informationHighlightLinkStencil())}
      />
    );
  },
});

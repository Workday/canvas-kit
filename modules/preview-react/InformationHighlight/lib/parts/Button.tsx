import * as React from 'react';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

const informationHighlightButtonStencil = createStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      gridColumn: '2',
      justifySelf: 'start',
      color: base.blackPepper300,
      fontWeight: system.fontWeight.bold,
    };
  },
});

export const Button = createComponent('a')({
  displayName: 'Button',
  Component: ({...elemProps}: ExtractProps<typeof TertiaryButton, never>, ref, Element) => {
    return (
      <TertiaryButton
        as={Element}
        ref={ref}
        {...mergeStyles(elemProps, informationHighlightButtonStencil())}
      />
    );
  },
});

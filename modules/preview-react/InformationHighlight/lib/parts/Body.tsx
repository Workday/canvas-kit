import * as React from 'react';
import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const informationHighlightBodyStencil = createStencil({
  base: () => {
    return {
      ...system.type.subtext.large,
      color: system.color.text.strong,
      gridColumn: '2',
      margin: `0 0 ${cssVar(system.space.x2)}`,
    };
  },
});

export const Body = createComponent('p')({
  displayName: 'Body',
  Component: ({...elemProps}: ExtractProps<typeof Text, never>, ref, Element) => {
    return (
      <Text
        as={Element}
        ref={ref}
        {...handleCsProp(elemProps, informationHighlightBodyStencil())}
      />
    );
  },
});

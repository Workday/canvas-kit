import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {BasePill, BasePillProps} from './BasePill';

export interface ReadyOnlyPillProps extends BasePillProps {}

export const ReadyOnlyPill = createComponent('span')({
  displayName: 'ReadyOnlyPill',
  Component: ({children, variant, ...elemProps}: ReadyOnlyPillProps, ref, Element) => {
    return (
      <BasePill padding={`0 ${space.xxs}`} variant="readOnly" ref={ref} as={Element} {...elemProps}>
        {children}
      </BasePill>
    );
  },
});

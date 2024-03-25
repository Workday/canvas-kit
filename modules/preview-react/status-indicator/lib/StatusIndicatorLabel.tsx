import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {TextProps} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export interface StatusIndicatorLabelProps extends TextProps {}

const labelStyles = createStyles({
  ...system.type.subtext.large,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: system.fontWeight.bold,
  textTransform: 'capitalize',
});

export const StatusIndicatorLabel = createComponent('span')({
  displayName: 'StatusIndicator.Label',
  Component: ({children, ...elemProps}: StatusIndicatorLabelProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, labelStyles)}>
        {children}
      </Element>
    );
  },
});

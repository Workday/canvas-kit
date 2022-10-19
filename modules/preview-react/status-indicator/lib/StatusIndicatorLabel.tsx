import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-react/text';

export interface StatusIndicatorLabelProps extends TextProps {}

export const StatusIndicatorLabel = createComponent('span')({
  displayName: 'StatusIndicator.Label',
  Component: ({...elemProps}: StatusIndicatorLabelProps, ref, Element) => {
    return (
      <Text
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        typeLevel="subtext.large"
        fontWeight="bold"
        textTransform="capitalize"
        color="inherit"
        as={Element}
        {...elemProps}
      >
        {elemProps.children}
      </Text>
    );
  },
});

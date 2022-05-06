import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-preview-react/text';
import {type} from '@workday/canvas-kit-react/tokens';
import {TypeProps} from './utils/types';

export const BodyText = createComponent('p')({
  displayName: 'BodyText',
  Component: ({children, size, ...elemProps}: TypeProps, ref, Element) => {
    return (
      <Text ref={ref} as={Element} {...type.levels.body[size]} {...elemProps}>
        {children}
      </Text>
    );
  },
});

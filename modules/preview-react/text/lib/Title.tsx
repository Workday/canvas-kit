import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TypeLevelTextProps} from '@workday/canvas-kit-preview-react/text';

export const Title = createComponent('h1')({
  displayName: 'Title',
  Component: (elemProps: TypeLevelTextProps, ref, Element) => (
    <Text ref={ref} as={Element} level="title" {...elemProps} />
  ),
});

import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TypeLevelTextProps} from '@workday/canvas-kit-preview-react/text';

export const TypeBodyLevel = createComponent('p')({
  displayName: 'TypeBodyLevel',
  Component: (elemProps: TypeLevelTextProps, ref, Element) => (
    <Text ref={ref} as={Element} level="body" {...elemProps} />
  ),
});

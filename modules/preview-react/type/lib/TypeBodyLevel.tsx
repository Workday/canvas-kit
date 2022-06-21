import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TypeLevelTextProps} from '@workday/canvas-kit-preview-react/type';

export const TypeBodyLevel = createComponent('p')({
  displayName: 'TypeBodyLevel',
  Component: (elemProps: TypeLevelTextProps, ref, Element) => (
    <Text ref={ref} as={Element} {...elemProps} level="body" />
  ),
});

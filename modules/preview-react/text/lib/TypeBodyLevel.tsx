import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TypeLevelProps} from '@workday/canvas-kit-preview-react/text';

export const TypeBodyLevel = createComponent('p')({
  displayName: 'TypeBodyLevel',
  Component: (elemProps: TypeLevelProps, ref, Element) => (
    <Text ref={ref} as={Element} {...elemProps} level="body" />
  ),
});

import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Text, TypeLevelTextProps} from '@workday/canvas-kit-preview-react/text';

export const TypeTitleLevel = createComponent('h1')({
  displayName: 'TypeTitleLevel',
  Component: (elemProps: TypeLevelTextProps, ref, Element) => (
    <Text ref={ref} as={Element} {...elemProps} level="title" />
  ),
});

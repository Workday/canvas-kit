import * as React from 'react';
import styled from '@emotion/styled';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';

import {ListBox, useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useColorPickerModel} from './useColorPickerModel';
import {Flex} from '@workday/canvas-kit-react/layout';

export interface SwatchBookProps<T = unknown> extends Partial<ExtractProps<typeof Flex, never>> {
  colors?: string[];
  children: ((color: T) => React.ReactNode) | React.ReactNode;
}

/* eslint-disable */
// function setUpTwoDArray(colors: React.ReactNode[], columnCount: number = 8) {
//   const temp: React.ReactNode[][] = [];
//   for (let i = 0; i < colors.length; i += columnCount) {
//     temp.push(colors.slice(i, i + columnCount));
//   }
//   return temp;
// }

export default createSubcomponent('div')({
  displayName: 'SwatchBook',
  modelHook: useColorPickerModel,
})<SwatchBookProps>(({colors, children, ...elemProps}, Element, model) => {
  return (
    <ListBox
      model={model}
      as={Flex}
      flexDirection="row"
      width={232} // determines width of the color picker
      flexWrap="wrap"
      padding="xxxs"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
    </ListBox>
  );
});

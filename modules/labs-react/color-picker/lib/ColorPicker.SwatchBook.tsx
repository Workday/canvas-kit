import * as React from 'react';
import styled from '@emotion/styled';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';

import {ListBox, useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useColorPickerModel} from './useColorPickerModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {swatchButtonSize} from './ColorPicker.SwatchButton';

export interface SwatchBookProps<T = any> extends Partial<ExtractProps<typeof Flex, never>> {
  colors?: string[];
  children: ((color: T) => React.ReactNode) | React.ReactNode;
}

export default createSubcomponent('div')({
  displayName: 'SwatchBook',
  modelHook: useColorPickerModel,
})<SwatchBookProps>(({colors, children, ...elemProps}, Element, model) => {
  const swatchWidth = swatchButtonSize + 8; // the height and width of the swatch + margin
  const swatchBookWidth = swatchWidth * model.state.columnCount + 8; // the width of each swatch times how many columns plus the padding around the swatch book
  return (
    <ListBox
      model={model}
      as={Flex}
      flexDirection="row"
      width={swatchBookWidth} // determines width of the color picker
      flexWrap="wrap"
      padding="xxxs"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
    </ListBox>
  );
});

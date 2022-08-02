import * as React from 'react';
import {
  createSubcomponent,
  ExtractProps,
  StyledType,
  styled,
} from '@workday/canvas-kit-react/common';

import {ListBox, useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useColorPickerModel} from './useColorPickerModel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {swatchButtonSize} from './ColorPickerSwatchButton';

export interface SwatchBookProps<T = any> extends Partial<ExtractProps<typeof Flex, never>> {
  colors?: string[];
  children: ((item: any, index: number) => React.ReactNode) | React.ReactNode;
}

const StyledSwatchBookContainer = styled(ListBox)<StyledType & SwatchBookProps>({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  border: 'none',
});

export default createSubcomponent('fieldset')({
  displayName: 'SwatchBook',
  modelHook: useColorPickerModel,
})<SwatchBookProps>(({colors, children, ...elemProps}, Element, model) => {
  const swatchWidth = swatchButtonSize + 8; // the height and width of the swatch + margin
  const swatchBookWidth = swatchWidth * model.state.columnCount + 8; // the width of each swatch times how many columns plus the padding around the swatch book

  return (
    //@ts-ignore next-line
    <StyledSwatchBookContainer
      model={model}
      as={Element}
      flexDirection="row"
      width={swatchBookWidth} // determines width of the color picker
      flexWrap="wrap"
      padding="xxxs"
      margin="zero"
      role="radiogroup"
      aria-label="Pick a color"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
    </StyledSwatchBookContainer>
  );
});

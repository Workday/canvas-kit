import styled from '@emotion/styled';
import {
  composeHooks,
  createSubcomponent,
  ExtractProps,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import * as React from 'react';

// import SwatchButton, {SwatchButtonProps} from './ColorPicker.SwatchButton';
import {useColorPickerModel} from './useColorPickerModel';
import {Flex} from '@workday/canvas-kit-react/layout';

export interface SwatchBookProps<T = unknown> extends Partial<ExtractProps<typeof Flex, never>> {
  colors?: string[];
  children: ((color: T) => React.ReactNode) | React.ReactNode;
}

/* eslint-disable */
function setUpTwoDArray(colors: React.ReactNode[], columnCount: number = 8) {
  const temp: React.ReactNode[][] = [];
  for (let i = 0; i < colors.length; i += columnCount) {
    temp.push(colors.slice(i, i + columnCount));
  }
  return temp;
}

const StyledFlex = styled('div')<StyledType>({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
});

export default createSubcomponent('div')({
  displayName: 'SwatchBook',
  modelHook: useColorPickerModel,
})<SwatchBookProps>(({colors, children, ...elemProps}, Element, model) => {
  return (
    <StyledFlex
      // flexWrap="wrap"
      // margin={`0px -${space.xxs} -${space.xxs} 0px`}
      // flexDirection="column"
      as={Element}
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {/* {setUpTwoDArray(children(colors), model.state.columnCount).map((row, index) => {
        return (
          <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
            {row
              .filter(
                (child): child is React.ReactElement<SwatchButtonProps> =>
                  React.isValidElement(child) && child.type === SwatchButton
              )
              .map((child, i: number) => {
                return <SwatchButton key={i} {...child.props} />;
              })}
          </div>
        );
      })} */}
    </StyledFlex>
  );
});

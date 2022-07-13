/// <reference path="../../../../typings.d.ts" />
import React from 'react';

import {ColorPicker, useColorPickerModel} from '@workday/canvas-kit-labs-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';

export default {
  title: 'Labs/Color Picker/React',
  component: ColorPicker,
};

const defaultColorSet = [
  colors.blueberry600,
  colors.grapeSoda600,
  colors.pomegranate600,
  colors.cinnamon600,
  colors.cantaloupe600,
  colors.sourLemon600,
  colors.greenApple600,
  colors.jewel600,
  colors.blueberry500,
  colors.grapeSoda500,
  colors.pomegranate500,
  colors.cinnamon500,
  colors.cantaloupe500,
  colors.sourLemon500,
  colors.greenApple500,
  colors.jewel500,
  colors.blueberry400,
  colors.grapeSoda400,
  colors.pomegranate400,
  colors.cinnamon400,
  colors.cantaloupe400,
  colors.sourLemon400,
  colors.greenApple400,
  colors.jewel400,
  colors.blueberry300,
  colors.grapeSoda300,
  colors.pomegranate300,
  colors.cinnamon300,
  colors.cantaloupe300,
  colors.sourLemon300,
  colors.greenApple300,
  colors.jewel300,
  colors.blueberry200,
  colors.grapeSoda200,
  colors.pomegranate200,
  colors.cinnamon200,
  colors.cantaloupe200,
  colors.sourLemon200,
  colors.greenApple200,
  colors.jewel200,
  colors.blueberry100,
  colors.grapeSoda100,
  colors.pomegranate100,
  colors.cinnamon100,
  colors.cantaloupe100,
  colors.sourLemon100,
  colors.greenApple100,
  colors.jewel100,
  colors.blackPepper600,
  colors.blackPepper400,
  colors.blackPepper300,
  colors.blackPepper100,
  colors.frenchVanilla500,
  colors.frenchVanilla400,
  colors.frenchVanilla200,
  colors.frenchVanilla100,
];

const arrOfColor = defaultColorSet.map((individualColor, i) => {
  return {id: individualColor};
});

export const Default = () => {
  const model = useColorPickerModel({
    items: arrOfColor,
  });

  return (
    <>
      <ColorPicker model={model}>
        <ColorPicker.SwatchBook marginBottom="m">
          {item => (
            <ColorPicker.SwatchButton
              onClick={() => console.warn(item)}
              color={item.id}
            ></ColorPicker.SwatchButton>
          )}
        </ColorPicker.SwatchBook>
      </ColorPicker>
      <ColorPicker model={model}>
        Selected Color:
        <ColorPicker.Swatch showCheck={false} color={model.state.selectedIds[0]} />
      </ColorPicker>
    </>
  );
};

export const WithColorInput = () => {
  const colorPickerModel = useColorPickerModel({items: arrOfColor});

  return (
    <>
      <ColorPicker model={colorPickerModel}>
        <ColorPicker.SwatchBook marginBottom={18} colors={defaultColorSet}>
          {item => (
            <ColorPicker.SwatchButton
              onClick={() => console.warn(item)}
              color={item.id}
            ></ColorPicker.SwatchButton>
          )}
        </ColorPicker.SwatchBook>
        <ColorPicker.CustomColorForm label="Custom Hex Color">
          <ColorPicker.Input />
          <ColorPicker.SubmitButton aria-label="Submit Custom Color" />
        </ColorPicker.CustomColorForm>
      </ColorPicker>

      <ColorPicker>
        Selected Color:
        <ColorPicker.Swatch showCheck={false} color={colorPickerModel.state.selectedIds[0]} />
      </ColorPicker>
    </>
  );
};

export const WithCustomColumnCount = () => {
  const model = useColorPickerModel({
    items: arrOfColor,
    columnCount: 5,
  });

  return (
    <>
      <ColorPicker model={model}>
        <ColorPicker.SwatchBook marginBottom="m">
          {item => (
            <ColorPicker.SwatchButton
              onClick={() => console.warn(item)}
              color={item.id}
            ></ColorPicker.SwatchButton>
          )}
        </ColorPicker.SwatchBook>
      </ColorPicker>
      <ColorPicker model={model}>
        Selected Color:
        <ColorPicker.Swatch showCheck={false} color={model.state.selectedIds[0]} />
      </ColorPicker>
    </>
  );
};

export const WithInitialColor = () => {
  const model = useColorPickerModel({
    items: arrOfColor,
    initialColor: [colors.blueberry400],
  });

  return (
    <>
      <ColorPicker model={model}>
        <ColorPicker.SwatchBook marginBottom="m">
          {item => (
            <ColorPicker.SwatchButton
              onClick={() => console.warn(item)}
              color={item.id}
            ></ColorPicker.SwatchButton>
          )}
        </ColorPicker.SwatchBook>
      </ColorPicker>
      <ColorPicker model={model}>
        Default Color:
        <ColorPicker.Swatch showCheck={false} color={model.state.selectedIds[0]} />
      </ColorPicker>
    </>
  );
};

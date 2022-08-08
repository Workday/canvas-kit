import React from 'react';

import {ColorPicker, useColorPickerModel} from '@workday/canvas-kit-labs-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';

const defaultColorSet = [
  colors.cinnamon400,
  colors.peach400,
  colors.chiliMango400,
  colors.cantaloupe400,

  colors.sourLemon400,
  colors.juicyPear400,
  colors.kiwi400,
  colors.greenApple400,

  colors.watermelon400,
  colors.jewel400,
  colors.toothpaste400,
  colors.blueberry400,

  colors.plum400,
  colors.berrySmoothie400,
  colors.blackberry400,
  colors.islandPunch400,

  colors.grapeSoda400,
  colors.pomegranate400,
  colors.fruitPunch400,
  colors.rootBeer400,

  colors.toastedMarshmallow400,
  colors.licorice400,
  colors.cappuccino400,
  colors.blackPepper400,
];

const arrOfColor = defaultColorSet.map((individualColor, i) => {
  return {id: individualColor};
});

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

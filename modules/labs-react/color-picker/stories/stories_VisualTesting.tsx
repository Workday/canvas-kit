import React from 'react';

import {StaticStates} from '@workday/canvas-kit-react/common';
import {ComponentStatesTable} from '@workday/canvas-kit-labs-react/common';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {ColorPicker, useColorPickerModel} from '@workday/canvas-kit-labs-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Color Picker',
  component: ColorPicker,
});

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

export const ColorPickerStates = () => {
  const model = useColorPickerModel({items: arrOfColor});
  const customColumn = useColorPickerModel({items: arrOfColor, columnCount: 5});
  const withInputModel = useColorPickerModel({items: arrOfColor});

  return (
    <>
      <StaticStates>
        <ComponentStatesTable
          rowProps={[{label: 'Default', props: {}}]}
          columnProps={[
            {
              label: 'Default',
              props: {},
            },
          ]}
        >
          {props => {
            return (
              <ColorPicker model={model}>
                <ColorPicker.SwatchBook marginBottom="s">
                  {item => (
                    <ColorPicker.SwatchButton
                      onClick={() => console.warn(item)}
                      color={item.id}
                    ></ColorPicker.SwatchButton>
                  )}
                </ColorPicker.SwatchBook>
              </ColorPicker>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
      <StaticStates>
        <ComponentStatesTable
          rowProps={[{label: 'Custom Column Count', props: {}}]}
          columnProps={[
            {
              label: 'Default',
              props: {},
            },
          ]}
        >
          {props => {
            return (
              <ColorPicker model={customColumn}>
                <ColorPicker.SwatchBook marginBottom="s">
                  {item => (
                    <ColorPicker.SwatchButton
                      onClick={() => console.warn(item)}
                      color={item.id}
                    ></ColorPicker.SwatchButton>
                  )}
                </ColorPicker.SwatchBook>
              </ColorPicker>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
      <StaticStates>
        <ComponentStatesTable
          rowProps={[{label: 'Custom Column Color', props: {}}]}
          columnProps={[
            {
              label: 'Default',
              props: {},
            },
          ]}
        >
          {props => {
            return (
              <ColorPicker model={withInputModel}>
                <ColorPicker.SwatchBook marginBottom="s">
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
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
    </>
  );
};

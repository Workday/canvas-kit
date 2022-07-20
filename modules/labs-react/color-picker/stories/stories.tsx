/// <reference path="../../../../typings.d.ts" />
import React from 'react';

import {ColorPicker, useColorPickerModel} from '@workday/canvas-kit-labs-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';

export default {
  title: 'Labs/Color Picker/React',
  component: ColorPicker,
};

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

export const Default = () => {
  const model = useColorPickerModel({items: arrOfColor});

  return (
    <>
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
        <ColorPicker.SwatchBook marginBottom="s" colors={defaultColorSet}>
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
        <ColorPicker.Swatch showCheck={false} color={colorPickerModel.state.color} />
      </ColorPicker>
    </>
  );
};

export const WithPopup = () => {
  const colorPickerModel = useColorPickerModel({items: arrOfColor});
  const model = usePopupModel();
  useInitialFocus(model);
  useCloseOnEscape(model);
  useCloseOnOutsideClick(model);

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('blur', e.currentTarget, e.relatedTarget, model.state.stackRef.current);
    if (
      !model.state.stackRef.current ||
      !model.state.stackRef.current.contains(e.relatedTarget as Node)
    ) {
      model.events.show();
    }
  };
  return (
    <>
      <Popup model={model}>
        <ColorPicker model={colorPickerModel}>
          <Popup.Target as={ColorPicker.Input} onFocus={onBlur} />
        </ColorPicker>
        <Popup.Popper>
          <Popup.Card style={{marginTop: 8}} padding="s" depth={3}>
            <Popup.Body>
              <ColorPicker model={colorPickerModel}>
                <Flex flexDirection="row" padding={'4px'}>
                  <ColorPicker.SwatchButton
                    onClick={() => {
                      colorPickerModel.events.select({id: colors.blueberry400});
                      model.events.hide();
                    }}
                    color={colors.blueberry400}
                  />
                  Reset
                </Flex>
                <ColorPicker.SwatchBook colors={defaultColorSet}>
                  {item => (
                    <ColorPicker.SwatchButton
                      onClick={() => model.events.hide()}
                      color={item.id}
                    ></ColorPicker.SwatchButton>
                  )}
                </ColorPicker.SwatchBook>
              </ColorPicker>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
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

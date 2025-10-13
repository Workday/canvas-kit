import React from 'react';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {colors} from '@workday/canvas-kit-react/tokens';
import {
  Popup,
  usePopupModel,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const ColorInputPopup = () => {
  const defaultColor = colors.blueberry400;

  const [color, setColor] = React.useState(defaultColor);
  const [colorInputValidColor, setColorInputValidColor] = React.useState(defaultColor);
  const [colorInputValue, setColorInputValue] = React.useState(defaultColor);
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  const resetColor = () => {
    setColor(defaultColor);
    setColorInputValue(defaultColor);
    setColorInputValidColor(defaultColor);
    model.events.hide();
    changeFocus(model.state.targetRef.current);
  };

  const colorSet = [
    colors.cinnamon400,
    colors.cantaloupe400,
    colors.sourLemon400,
    colors.greenApple400,
    colors.blueberry400,
    colors.islandPunch400,
    colors.pomegranate400,
    colors.toastedMarshmallow400,

    colors.frenchVanilla100,
    colors.frenchVanilla200,
    colors.frenchVanilla300,
    colors.frenchVanilla400,
    colors.blackPepper100,
    colors.blackPepper200,
    colors.blackPepper400,
    colors.blackPepper600,
  ];

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('blur', e.currentTarget, e.relatedTarget, model.state.stackRef.current);
    if (
      !model.state.stackRef.current ||
      !model.state.stackRef.current.contains(e.relatedTarget as Node)
    ) {
      // model.events.hide();
    }
  };

  return (
    <Popup model={model}>
      <FormField>
        <FormField.Label>Choose a color</FormField.Label>
        <FormField.Input
          as={Popup.Target.as(ColorInput)}
          onChange={e => setColorInputValue(e.target.value)}
          onValidColorChange={color => {
            setColorInputValidColor(color.toUpperCase());
            setColor(color.toUpperCase());
          }}
          value={colorInputValue}
          showCheck={colorInputValidColor === color || colorInputValue === color}
          onFocus={model.events.show}
          onBlur={onBlur}
        />
        <Popup.Popper>
          <Popup.Card
            cs={{
              marginTop: cssVar(system.space.x2),
              padding: cssVar(system.space.x4),
              boxShadow: cssVar(system.depth[3]),
            }}
          >
            <Popup.Body>
              <ColorPicker
                resetColor={colors.blueberry400}
                resetLabel={'Reset'}
                onColorChange={color => {
                  setColorInputValue(color.toUpperCase());
                  setColor(color.toUpperCase());
                  model.events.hide();
                  model.state.targetRef.current?.focus();
                }}
                onColorReset={resetColor}
                value={color}
                colorSet={colorSet}
              />
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </FormField>
    </Popup>
  );
};

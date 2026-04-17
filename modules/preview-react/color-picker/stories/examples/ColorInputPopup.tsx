import React from 'react';

import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {system} from '@workday/canvas-tokens-web';

import {defaultColorSet} from '../../lib/defaultColorSet';

export const ColorInputPopup = () => {
  const defaultColor = defaultColorSet.blueberry400;

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
    defaultColorSet.cinnamon400,
    defaultColorSet.cantaloupe400,
    defaultColorSet.sourLemon400,
    defaultColorSet.greenApple400,
    defaultColorSet.blueberry400,
    defaultColorSet.pomegranate400,
    defaultColorSet.frenchVanilla100,
    defaultColorSet.frenchVanilla200,
    defaultColorSet.frenchVanilla400,
    defaultColorSet.blackPepper100,
    defaultColorSet.blackPepper400,
    defaultColorSet.blackPepper600,
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
            cs={{marginTop: system.gap.sm, padding: system.padding.md, boxShadow: system.depth[3]}}
          >
            <Popup.Body>
              <ColorPicker
                resetColor={defaultColorSet.blueberry400}
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

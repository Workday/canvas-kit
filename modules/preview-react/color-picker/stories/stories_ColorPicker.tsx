/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
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
import {IconButton} from '@workday/canvas-kit-react/button';
import {bgColorIcon} from '@workday/canvas-system-icons-web';
import {ColorPicker} from '@workday/canvas-kit-preview-react/color-picker';
import README from '../README.md';
import {changeFocus} from '@workday/canvas-kit-react/common';

// eslint-disable-next-line no-empty-function
const noop = () => {};

storiesOf('Preview/Color Picker/React', module)
  .addParameters({component: ColorPicker})
  .addDecorator(withReadme(README))
  .add('Default', () => <ColorPicker onColorChange={noop} />)
  .add('Icon Button Popup', () => {
    const model = usePopupModel();
    const [color, setColor] = React.useState('');

    useCloseOnOutsideClick(model);
    useCloseOnEscape(model);
    useInitialFocus(model);
    useReturnFocus(model);

    const handleSubmit = React.useCallback(
      (submitColor: string) => {
        setColor(submitColor.toUpperCase());
        model.events.hide();
        changeFocus(model.state.targetRef.current);
      },
      [model.events, model.state.targetRef]
    );

    return (
      <Popup model={model}>
        <Popup.Target
          as={IconButton}
          icon={bgColorIcon}
          aria-label="Select Background Color"
          variant="squareFilled"
        />
        <Popup.Popper>
          <Popup.Card marginTop="xxs" padding="s">
            <Popup.Body>
              <ColorPicker
                resetColor={colors.blueberry400}
                resetLabel={'Reset'}
                showCustomHexInput={true}
                onColorChange={handleSubmit}
                onColorReset={() => handleSubmit(colors.blueberry400)}
                onSubmitClick={event => model.events.hide({event})}
                value={color}
              />
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    );
  })
  .add('Color Input Popup', () => {
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
        <Popup.Target
          as={ColorInput}
          onChange={e => setColorInputValue(e.target.value)}
          onValidColorChange={color => {
            setColorInputValidColor(color.toUpperCase());
            setColor(color.toUpperCase());
          }}
          value={colorInputValue}
          showCheck={colorInputValidColor === color || colorInputValue === color}
          onFocus={event => model.events.show({event})}
          onBlur={onBlur}
        />
        <Popup.Popper>
          <Popup.Card style={{marginTop: 8}} padding="s">
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
      </Popup>
    );
  });

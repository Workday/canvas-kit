/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import {ColorInput} from '@workday/canvas-kit-react-color-picker';
import {colors} from '@workday/canvas-kit-react-core';
import {Popper} from '@workday/canvas-kit-react-common';
import {IconButton} from '@workday/canvas-kit-react-button';
import {bgColorIcon} from '@workday/canvas-system-icons-web';
import {ColorPicker} from '../index';
import README from '../README.md';

storiesOf('Labs|Color Picker/React', module)
  .addParameters({component: ColorPicker})
  .addDecorator(withReadme(README))
  .add('Default', () => <ColorPicker onColorChange={color => action('color-change')(color)} />)
  .add('Icon Button Popup', () => {
    const [isOpen, setOpen] = React.useState(false);
    const [color, setColor] = React.useState('');
    const buttonRef = React.useRef(null);

    const toggleOpen = () => setOpen(!isOpen);

    const handleSubmit = React.useCallback(
      (submitColor: string) => {
        action('color-change')(submitColor);
        setColor(submitColor.toUpperCase());
        setOpen(false);
      },
      [setOpen]
    );

    return (
      <>
        <IconButton
          icon={bgColorIcon}
          aria-label="Select Background Color"
          buttonRef={buttonRef}
          variant={IconButton.Variant.SquareFilled}
          onClick={toggleOpen}
        />
        <Popper placement={'bottom-start'} open={isOpen} anchorElement={buttonRef.current!}>
          <ColorPicker
            resetColor={colors.blueberry400}
            resetLabel={'Reset'}
            showCustomHexInput={true}
            onColorChange={handleSubmit}
            onColorReset={() => handleSubmit(colors.blueberry400)}
            onSubmitClick={toggleOpen}
            value={color}
            style={{marginTop: 8}}
          />
        </Popper>
      </>
    );
  })
  .add('Color Input Popup', () => {
    const defaultColor = colors.blueberry400;
    const [isOpen, setOpen] = React.useState(false);
    const [color, setColor] = React.useState(defaultColor);
    const [colorInputValidColor, setColorInputValidColor] = React.useState(defaultColor);
    const [colorInputValue, setColorInputValue] = React.useState(defaultColor);
    const inputRef = React.useRef(null);
    const popupRef = React.useRef(null);

    const resetColor = () => {
      setColor(defaultColor);
      setColorInputValue(defaultColor);
      setColorInputValidColor(defaultColor);
      setOpen(false);
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
      // @ts-ignore
      if (!popupRef.current || !popupRef.current.popper.popper.contains(e.relatedTarget)) {
        setOpen(false);
      }
    };

    return (
      <>
        <ColorInput
          onChange={e => setColorInputValue(e.target.value)}
          onValidColorChange={color => {
            setColorInputValidColor(color.toUpperCase());
            setColor(color.toUpperCase());
          }}
          value={colorInputValue}
          showCheck={colorInputValidColor === color || colorInputValue === color}
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
          onBlur={onBlur}
          inputRef={inputRef}
        />
        <Popper
          placement={'bottom-start'}
          open={isOpen}
          anchorElement={inputRef.current!}
          ref={popupRef}
        >
          <ColorPicker
            resetColor={colors.blueberry400}
            resetLabel={'Reset'}
            onColorChange={color => {
              setColorInputValue(color.toUpperCase());
              setColor(color.toUpperCase());
              setOpen(false);
            }}
            onColorReset={resetColor}
            value={color}
            colorSet={colorSet}
            style={{marginTop: 8}}
          />
        </Popper>
      </>
    );
  });

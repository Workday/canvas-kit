/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import styled from '@emotion/styled';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import {colors, type} from '@workday/canvas-kit-react-core';
import {Popper} from '@workday/canvas-kit-react-common';
import {Button} from '@workday/canvas-kit-react-button';
import {ColorPicker, Swatch} from '../index';
import README from '../README.md';

storiesOf('Labs|Color Picker/React', module)
  .addParameters({component: ColorPicker})
  .addDecorator(withReadme(README))
  .add('Default', () => <ColorPicker onColorChange={color => action('color-change')(color)} />)
  .add('Custom', () => {
    const [color, setColor] = React.useState('');
    const handleSubmit = (submitColor: string) => {
      action('color-change')(submitColor);
      setColor(submitColor.toUpperCase());
    };

    return (
      <ColorPicker
        resetColor={colors.blueberry400}
        resetLabel={'Reset'}
        showCustomHexInput={true}
        onColorChange={handleSubmit}
        onColorReset={() => handleSubmit(colors.blueberry400)}
        value={color}
      />
    );
  })
  .add('Popup', () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [color, setColor] = React.useState('');
    const buttonRef = React.useRef(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSubmit = React.useCallback(
      (submitColor: string) => {
        action('color-change')(submitColor);
        setColor(submitColor.toUpperCase());
        setIsOpen(false);
      },
      [setIsOpen]
    );

    return (
      <>
        <Button buttonRef={buttonRef} variant={Button.Variant.Primary} onClick={toggleOpen}>
          Toggle Color Picker
        </Button>
        <Popper placement={'bottom'} open={isOpen} anchorElement={buttonRef.current!}>
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
  .add('Popup w/ Custom Target', () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [color, setColor] = React.useState(colors.peach400);
    const buttonRef = React.useRef(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSubmit = React.useCallback(
      (submitColor: string) => {
        action('color-change')(submitColor);
        setColor(submitColor.toUpperCase());
        setIsOpen(false);
      },
      [setIsOpen]
    );

    const colorSet = [
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

      colors.frenchVanilla100,
      colors.frenchVanilla200,
      colors.frenchVanilla300,
      colors.frenchVanilla400,
      colors.blackPepper100,
      colors.blackPepper200,
      colors.blackPepper400,
      colors.blackPepper600,
    ];

    const StyledSwatch = styled(Swatch)({
      marginRight: 8,
      border: '1px solid rgba(0, 0, 0, 0.25)',
      boxSizing: 'border-box',
    });

    const SelectedColorButton = styled('button')({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 8,
      boxSizing: 'border-box',
      ...type.body2,
      width: 144,
      height: 40,
      borderRadius: 4,
      boxShadow: `0 0 0 1px ${colors.licorice200}`,
      border: 'none',
      cursor: 'pointer',

      '&:focus, &:active': {
        border: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        boxShadow: `0 0 0 2px ${colors.blueberry400}`,
      },
    });

    const popperOptions = {
      modifiers: {
        offset: {
          enabled: true,
          offset: '4px, 82px',
        },
      },
    };

    return (
      <>
        <SelectedColorButton
          data-testid="color-picker-selected-color-button"
          ref={buttonRef}
          onClick={toggleOpen}
        >
          <StyledSwatch
            data-testid="color-picker-selected-color-button-swatch"
            color={color}
            isSelected={false}
          />
          Selected Color
        </SelectedColorButton>
        <Popper
          placement={'bottom'}
          open={isOpen}
          anchorElement={buttonRef.current!}
          popperOptions={popperOptions}
        >
          <ColorPicker
            resetColor={colors.blueberry400}
            resetLabel={'Reset'}
            showCustomHexInput={true}
            onColorChange={handleSubmit}
            onColorReset={() => handleSubmit(colors.blueberry400)}
            onSubmitClick={toggleOpen}
            value={color}
            colorSet={colorSet}
            style={{marginTop: 8}}
          />
        </Popper>
      </>
    );
  });

import * as React from 'react';
import styled from '@emotion/styled';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {colors, type} from '@workday/canvas-kit-react-core';
import {Popper} from '@workday/canvas-kit-react-common';

import {Button} from '@workday/canvas-kit-react-button';
import {ColorPicker, Swatch} from '../index';
import README from '../README.md';

const ColorPickerPopup: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<string>('');
  const buttonRef = React.useRef(null);

  const handleClick = () => setIsOpen(!isOpen);

  const handleSubmit = React.useCallback(
    (submitColor: string) => {
      setColor(submitColor.toUpperCase());
      setIsOpen(false);
    },
    [setIsOpen]
  );

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Button buttonRef={buttonRef} variant={Button.Variant.Primary} onClick={handleClick}>
        Toggle Color Picker
      </Button>
      <Popper placement={'bottom'} open={isOpen} anchorElement={buttonRef.current}>
        <ColorPicker
          resetColor={colors.blueberry400}
          resetLabel={'Reset'}
          showCustomHexInput={true}
          onColorChange={handleSubmit}
          onColorReset={() => handleSubmit(colors.blueberry400)}
          onSubmitClick={() => setIsOpen(false)}
          value={color}
          style={{marginTop: 8}}
        />
      </Popper>
    </div>
  );
};

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

const ColorPickerInputPopup: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<string>(colors.peach400);
  const buttonRef = React.useRef(null);

  const handleClick = () => setIsOpen(!isOpen);

  const handleSubmit = React.useCallback(
    (submitColor: string) => {
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

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <SelectedColorButton ref={buttonRef} onClick={handleClick}>
        <StyledSwatch color={color} isSelected={false} />
        Selected Color
      </SelectedColorButton>
      <Popper placement={'bottom-start'} open={isOpen} anchorElement={buttonRef.current}>
        <ColorPicker
          resetColor={colors.blueberry400}
          resetLabel={'Reset'}
          showCustomHexInput={true}
          onColorChange={handleSubmit}
          onColorReset={() => handleSubmit(colors.blueberry400)}
          onSubmitClick={() => setIsOpen(false)}
          value={color}
          colorSet={colorSet}
          style={{marginTop: 8}}
        />
      </Popper>
    </div>
  );
};

storiesOf('Labs/Color Picker', module)
  .addParameters({component: ColorPicker})
  .addDecorator(withReadme(README))
  .add('ColorPicker Default', () => (
    <div className="story">
      <h3>Without Reset Button and Custom Input</h3>
      <ColorPicker showCustomHexInput={false} onColorChange={console.log} />
      <div style={{height: 100}}></div>
      <h3>With Reset Button and Custom Input</h3>
      <ColorPicker
        resetColor={colors.blueberry400}
        resetLabel={'Reset'}
        showCustomHexInput={true}
        onColorChange={console.log}
        onColorReset={() => console.log('reset')}
      />
    </div>
  ))
  .add('ColorPicker Popper examples', () => (
    <div className="story">
      <h3>Color Picker with Reset Button and Custom Input,</h3>
      <h5>as a Popup on a button target</h5>
      <ColorPickerPopup />
      <div style={{height: 200}}></div>
      <h5>as a Popup on a custom color button target, with a custom color palette</h5>
      <ColorPickerInputPopup />
    </div>
  ));

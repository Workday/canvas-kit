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
          showCustomInput={true}
          onChange={handleSubmit}
          onReset={() => handleSubmit(colors.blueberry400)}
          onSubmitClick={() => setIsOpen(false)}
          selectedColor={color}
        />
      </Popper>
    </div>
  );
};

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
  border: `1px solid ${colors.licorice200}`,
  cursor: 'pointer',

  '&:focus, &:active': {
    borderStyle: 'outset',
    outline: 'none',
    boxSizing: 'border-box',
    border: `2px solid ${colors.blueberry400}`,
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
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <SelectedColorButton ref={buttonRef} onClick={handleClick}>
        <Swatch
          style={{marginRight: 8, border: '1px solid rgba(0, 0, 0, 0.25)'}}
          color={color}
          showCheck={false}
        />
        Selected Color
      </SelectedColorButton>
      <Popper placement={'bottom-start'} open={isOpen} anchorElement={buttonRef.current}>
        <ColorPicker
          resetColor={colors.blueberry400}
          resetLabel={'Reset'}
          showCustomInput={true}
          onChange={handleSubmit}
          onReset={() => handleSubmit(colors.blueberry400)}
          onSubmitClick={() => setIsOpen(false)}
          selectedColor={color}
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
      <ColorPicker showCustomInput={false} onChange={console.log} />
      <div style={{height: 100}}></div>
      <h3>With Reset Button and Custom Input</h3>
      <ColorPicker
        resetColor={colors.blueberry400}
        resetLabel={'Reset'}
        showCustomInput={true}
        onChange={console.log}
        onReset={() => console.log('reset')}
      />
    </div>
  ))
  .add('ColorPicker Popper examples', () => (
    <div className="story">
      <h3>Color Picker with Reset Button and Custom Input</h3>
      <h5>as a Popup on a button target</h5>
      <ColorPickerPopup />
      <div style={{height: 200}}></div>
      <h5>as a Popup on a custom color button target</h5>
      <ColorPickerInputPopup />
    </div>
  ));

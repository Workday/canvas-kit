import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {ColorPicker} from '../lib/ColorPicker';
import {useColorPickerModel} from '../lib/useColorPickerModel';
import {colors} from '@workday/canvas-kit-react/tokens';

describe('Color Picker', () => {
  verifyComponent(ColorPicker.Swatch, {modelFn: useColorPickerModel});

  it('should have a role of "radio" on the swatch button', () => {
    render(
      <ColorPicker>
        <ColorPicker.SwatchButton color="blue" />
      </ColorPicker>
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('should have a role of "radiogroup" on the swatchbook', () => {
    render(
      <ColorPicker>
        <ColorPicker.SwatchBook>
          <ColorPicker.SwatchButton color="blue" />
        </ColorPicker.SwatchBook>
      </ColorPicker>
    );
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('should have a aria label set to the color', () => {
    render(
      <ColorPicker initialColor={['#ff5347']}>
        <ColorPicker.SwatchBook>
          <ColorPicker.SwatchButton color="#ff5347" />
        </ColorPicker.SwatchBook>
      </ColorPicker>
    );
    // screen.getByRole('radio').fir;
    console.log(screen.getByRole('radio'));
    expect(screen.getByRole('radio')).toHaveAttribute('aria-label', 'color #ff5347');
  });
});

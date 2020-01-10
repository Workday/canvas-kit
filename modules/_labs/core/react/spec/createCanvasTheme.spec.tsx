import {defaultCanvasTheme, createCanvasTheme} from '../lib/theming';
import lodash from 'lodash';

describe('useTheme', () => {
  test('calling without any input provides the default theme', () => {
    const theme = createCanvasTheme({});

    expect(theme).toEqual(defaultCanvasTheme);
  });

  test('calling with a custom palette should replace that palette', () => {
    const palette = {
      lightest: 'orange',
      light: 'orange',
      main: 'orange',
      dark: 'orange',
      darkest: 'orange',
      contrast: 'orange',
    };

    const input = {
      palette: {
        primary: palette,
      },
    };
    const theme = createCanvasTheme(input);
    const expected = defaultCanvasTheme;
    expected.palette.primary = palette;

    expect(theme).toEqual(expected);
  });

  test('calling with a custom palette with only one color should replace that palette with an auto-generated one', () => {
    const input = {
      palette: {
        primary: {
          main: 'orange',
        },
      },
    };
    const theme = createCanvasTheme(input);
    const expected = defaultCanvasTheme;
    expected.palette.primary = {
      lightest: '#ffff7d',
      light: '#ffd64a',
      main: 'orange',
      dark: '#c67600',
      darkest: '#904a00',
      contrast: '#ffffff',
    };

    expect(theme).toEqual(expected);
  });

  test('custom theme should not override defaultCanvasTheme when merged', () => {
    const input = {
      palette: {
        primary: {
          main: 'orange',
        },
      },
    };
    const original = lodash.cloneDeep(defaultCanvasTheme);
    createCanvasTheme(input);

    expect(original).toEqual(defaultCanvasTheme);
  });
});

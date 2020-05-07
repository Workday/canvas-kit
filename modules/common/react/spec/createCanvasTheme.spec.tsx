import {defaultCanvasTheme, createCanvasTheme, PartialCanvasTheme} from '../lib/theming';
import lodash from 'lodash';

describe('createCanvasTheme', () => {
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

  test('calling with a custom palette with only main specified should replace that palette with an auto-generated one', () => {
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

  test('calling with a custom palette with only one (non-main) color should not replace that palette with an auto-generated one', () => {
    const input = {
      palette: {
        primary: {
          dark: 'orange',
        },
      },
    };
    const theme = createCanvasTheme(input);
    const expected = defaultCanvasTheme;
    expected.palette.primary.dark = 'orange';

    expect(theme).toEqual(expected);
  });

  test('calling with a theme containing custom fields should not remove custom fields', () => {
    const input = {
      foo: 'bar',
    };
    const theme = createCanvasTheme(input as PartialCanvasTheme);
    const expected = {
      ...defaultCanvasTheme,
      ...input,
    };

    expect(theme).toEqual(expected);
  });

  test('calling with a fully custom theme should preserve all fields', () => {
    const expected = lodash.cloneDeep(defaultCanvasTheme);

    const customizeTheme = (obj: any) => {
      for (const k in obj) {
        if (obj[k] && typeof obj[k] === 'object') {
          customizeTheme(obj[k]);
        } else {
          if (k === 'direction') {
            obj[k] = 'rtl';
          } else {
            const noop = () => {}; // eslint-disable-line no-empty-function
            obj[k] = typeof obj[k] === 'function' ? noop : typeof obj[k] === 'number' ? 0 : 'foo';
          }
        }
      }
    };

    customizeTheme(expected);
    const theme = createCanvasTheme(expected);

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

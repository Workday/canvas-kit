import colors from '@workday/canvas-colors-web';
import {defaultCanvasTheme, createCanvasTheme, PartialCanvasTheme} from '../lib/theming';
import {shiftColor} from '../lib/theming/createCanvasTheme';

const validateDefaultThemeProps = (theme: PartialCanvasTheme) => {
  expect(theme.direction).toEqual(defaultCanvasTheme.direction);
  expect(theme.palette.alert.dark).toEqual(defaultCanvasTheme.palette.alert.dark);
  expect(theme.palette.common.focusOutline).toEqual(defaultCanvasTheme.palette.common.focusOutline);
  expect(theme.breakpoints.values).toEqual(defaultCanvasTheme.breakpoints.values);
};

describe('createCanvasTheme', () => {
  test('calling without any input provides the default theme', () => {
    const theme = createCanvasTheme({});

    // Since createCanvasTheme is a proxy we need to access the properties directly. I don't particular want to check every property so checking only some should be enough
    validateDefaultThemeProps(theme);
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
    const expected = {...defaultCanvasTheme};
    expected.palette.primary = palette;

    validateDefaultThemeProps(theme);
    Object.keys(palette).forEach(prop => {
      expect(theme.palette.primary[prop]).toEqual(expected.palette.primary[prop]);
    });
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
    const expected = {...defaultCanvasTheme};
    expected.palette.primary = {
      lightest: '#ffff7d',
      light: '#ffd64a',
      main: 'orange',
      dark: '#c67600',
      darkest: '#904a00',
      contrast: '#494949',
    };

    // Test some other default properties are available on theme
    validateDefaultThemeProps(theme);
    Object.keys(expected.palette.primary).forEach(prop => {
      expect(theme.palette.primary[prop]).toEqual(expected.palette.primary[prop]);
    });
  });

  test('calling with a custom palette with only one (non-main) color should not replace that palette with an auto-generated one', () => {
    const input = {
      palette: {
        primary: {
          dark: 'black',
        },
      },
    };
    const theme = createCanvasTheme(input);
    const expected = {...defaultCanvasTheme};
    expected.palette.primary.dark = 'black';

    validateDefaultThemeProps(theme);
    Object.keys(expected.palette.primary).forEach(prop => {
      expect(theme.palette.primary[prop]).toEqual(expected.palette.primary[prop]);
    });
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

    validateDefaultThemeProps(theme);
    type ExtendedTheme = PartialCanvasTheme & {foo?: string};

    expect((theme as ExtendedTheme).foo).toEqual(expected.foo);
  });

  test('calling with a fully custom theme should preserve all fields', () => {
    const expected = defaultCanvasTheme;

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

  test('custom theme should have dark contrast when main does not have high enough contrast ratio', () => {
    const input = {
      palette: {
        primary: {
          main: 'white',
        },
      },
    };

    const theme = createCanvasTheme(input);

    expect(theme.palette.primary.contrast).toEqual('#494949');
  });

  test('shift color should darken canvas color to subsequent canvas color', () => {
    const newColor = shiftColor(colors.soap300, 100);

    expect(newColor).toEqual(colors.soap400);
  });
});

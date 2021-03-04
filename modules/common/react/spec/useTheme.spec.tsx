import * as React from 'react';
import {mount} from 'enzyme';
import {CanvasProvider} from '../index';
import {defaultCanvasTheme, createCanvasTheme, useTheme, EmotionCanvasTheme} from '../lib/theming';

describe('useTheme', () => {
  const customTheme = {
    canvas: {
      palette: {
        primary: {
          main: 'orange',
        },
      },
    },
  };
  const Component = () => {
    const theme = useTheme();
    return <h1 data-theme={JSON.stringify(theme.canvas)}></h1>;
  };

  test('without any input, context or window global, useTheme should return default theme', () => {
    const theme = useTheme();

    expect(theme).toMatchObject({canvas: defaultCanvasTheme});
  });

  test('with a theme provided, useTheme should return that theme', () => {
    const theme = useTheme(customTheme);

    expect(theme).toMatchObject({canvas: createCanvasTheme(customTheme.canvas)});
  });

  test('with no window context available, calling useTheme within a component should return context theme', () => {
    const container = mount(
      <CanvasProvider theme={customTheme}>
        <Component />
      </CanvasProvider>
    );

    expect(
      container
        .find('h1')
        .getDOMNode()
        .getAttribute('data-theme')
    ).toBe(JSON.stringify(createCanvasTheme(customTheme.canvas)));
  });

  test('with no theme or context provided, useTheme should attempt to pull the theme from the window global', () => {
    (window as any).workday = {
      canvas: {
        theme: customTheme.canvas,
      },
    };
    const theme = useTheme();

    expect(theme).toMatchObject({canvas: createCanvasTheme(customTheme.canvas)});
  });
});

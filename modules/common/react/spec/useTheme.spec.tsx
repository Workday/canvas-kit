import * as React from 'react';
import {mount} from 'enzyme';
import useTheme from '../lib/theming/useTheme';
import {
  defaultCanvasTheme,
  CanvasProvider,
  createCanvasTheme,
} from '@workday/canvas-kit-labs-react-core';

describe('useTheme', () => {
  const customTheme = createCanvasTheme({
    palette: {
      primary: {
        main: 'orange',
      },
    },
  });
  const Component = () => {
    const theme = useTheme();
    return <h1 data-theme={JSON.stringify(theme)}></h1>;
  };

  test('without any input, context or window global, useTheme should return default theme', () => {
    const theme = useTheme();

    expect(theme).toBe(defaultCanvasTheme);
  });

  test('with a theme provided, useTheme should return that theme', () => {
    const theme = useTheme(customTheme);

    expect(theme).toBe(customTheme);
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
    ).toBe(JSON.stringify(customTheme));
  });

  test('with no theme or context provided, useTheme should attempt to pull the theme from the window global', () => {
    window.workday = {
      canvas: {
        theme: customTheme,
      },
    };
    const theme = useTheme();

    expect(theme).toBe(customTheme);
  });
});

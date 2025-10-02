import * as React from 'react';
import {screen, render} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import {CanvasProvider} from '../index';
import {defaultCanvasTheme, useTheme} from '../lib/theming';

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
    return <h1 data-theme={JSON.stringify(theme.canvas)}>Theme</h1>;
  };

  it('should return the default theme if no override is provided', () => {
    const {result} = renderHook(useTheme);

    expect(result.current).toMatchObject({canvas: defaultCanvasTheme});
  });

  test('should return the provided theme values merged with defaults', () => {
    const {result} = renderHook(() => useTheme(customTheme));

    expect(result.current.canvas.palette.primary.main).toBe('orange');
  });

  test('with no window context available, calling useTheme within a component should return context theme', () => {
    render(
      <CanvasProvider theme={{canvas: customTheme.canvas}}>
        <Component />
      </CanvasProvider>
    );

    const attr = screen.getByRole('heading', {name: 'Theme'}).getAttribute('data-theme');
    expect(attr).not.toBeNull();
    const parsed = JSON.parse(attr!);
    expect(parsed.palette.primary.main).toBe('orange');
  });

  test('with no theme or context provided, useTheme should attempt to pull the theme from the window global', () => {
    (window as any).workday = {
      canvas: {
        theme: customTheme.canvas,
      },
    };
    const {result} = renderHook(useTheme);

    expect(result.current.canvas.palette.primary.main).toBe('orange');
    delete (window as any).workday;
  });
});

import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import InputProvider from './InputProvider';
import {CanvasTheme} from './types';
import colors from '@workday/canvas-colors-web';

export interface CanvasProviderProps {
  theme: CanvasTheme;
}

// TODO
const getCanvasTheme = (partialTheme?: CanvasTheme) => {
  return {
    palette: {
      common: {
        focusOutline: colors.blueberry400,
      },
      primary: {
        light: colors.blueberry200,
        main: colors.blueberry400,
        dark: colors.blueberry500,
        contrast: colors.frenchVanilla100,
      },
      error: {
        light: colors.cinnamon300,
        main: colors.cinnamon500,
        dark: colors.cinnamon600,
        contrast: colors.frenchVanilla100,
      },
      alert: {
        light: colors.cantaloupe300,
        main: colors.cantaloupe500,
        dark: colors.cantaloupe600,
        contrast: colors.frenchVanilla100,
      },
    },
  };
};

export default class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: getCanvasTheme(),
  };

  render() {
    const {children, theme} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <InputProvider>{children}</InputProvider>
      </ThemeProvider>
    );
  }
}

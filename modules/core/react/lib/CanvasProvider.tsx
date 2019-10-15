import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import InputProvider from './InputProvider';
import {CanvasTheme} from './theming/types';
import {defaultCanvasTheme} from './theming/theme';

export interface CanvasProviderProps {
  theme: CanvasTheme;
}

/**
 * TODO:
 * - Opt in for fonts
 * - Make themes work without provider
 */

export default class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: defaultCanvasTheme,
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

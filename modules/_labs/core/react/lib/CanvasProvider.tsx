import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {CanvasTheme} from './theming/types';
import {defaultCanvasTheme} from './theming/theme';

export interface CanvasProviderProps {
  theme: CanvasTheme;
}

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

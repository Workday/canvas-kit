import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {CanvasTheme} from './theming/types';
import {defaultCanvasTheme} from './theming/theme';

export interface CanvasProviderProps {
  theme: CanvasTheme;
}

function useTheme(theme: CanvasTheme, setThemeGlobal: boolean) {
  if (setThemeGlobal) {
    if (!window.wdCanvas) {
      window.wdCanvas = {};
    }
    window.wdCanvas.theme = theme;
  }

  document.body.dir = theme.direction;
}

export default class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: defaultCanvasTheme,
  };

  componentDidMount() {
    useTheme(this.props.theme, this.props.setThemeGlobal);
  }

  componentDidUpdate() {
    useTheme(this.props.theme, this.props.setThemeGlobal);
  }

  render() {
    const {children, theme} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div dir={theme.direction}>
          <InputProvider>{children}</InputProvider>
        </div>
      </ThemeProvider>
    );
  }
}

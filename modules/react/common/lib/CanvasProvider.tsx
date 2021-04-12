import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react/tokens';
import {defaultCanvasTheme, PartialEmotionCanvasTheme} from '../lib/theming';

export interface CanvasProviderProps {
  theme: PartialEmotionCanvasTheme;
}

export class CanvasProvider extends React.Component<
  CanvasProviderProps & React.HTMLAttributes<HTMLElement>
> {
  static defaultProps = {
    theme: {
      canvas: defaultCanvasTheme,
    },
  };

  render() {
    const {children, theme, ...elemProps} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <InputProvider />
        <div
          dir={(theme.canvas && theme.canvas.direction) || defaultCanvasTheme.direction}
          {...(elemProps as React.HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      </ThemeProvider>
    );
  }
}

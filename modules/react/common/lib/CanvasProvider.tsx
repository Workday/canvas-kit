import * as React from 'react';
import {Theme, ThemeProvider} from '@emotion/react';
import {InputProvider} from './InputProvider';
import {defaultCanvasTheme, PartialEmotionCanvasTheme} from './theming';

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
      <ThemeProvider theme={theme as Theme}>
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

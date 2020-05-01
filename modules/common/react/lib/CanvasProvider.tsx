import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {defaultCanvasTheme, PartialEmotionCanvasTheme, ContentDirection} from '../lib/theming';
import styled from '@emotion/styled';

export interface CanvasProviderProps {
  theme: PartialEmotionCanvasTheme;
}

const DirectionContainer = styled('bdo')<{dir: ContentDirection}>(({dir}) => ({
  direction: dir,
}));

export class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: {
      canvas: defaultCanvasTheme,
    },
  };

  render() {
    const {children, theme} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <InputProvider />
        <DirectionContainer
          dir={(theme.canvas && theme.canvas.direction) || defaultCanvasTheme.direction}
        >
          {children}
        </DirectionContainer>
      </ThemeProvider>
    );
  }
}

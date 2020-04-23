import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {defaultCanvasTheme, PartialCanvasTheme, ContentDirection} from '../lib/theming';
import styled from '@emotion/styled';

export interface CanvasProviderProps {
  theme: PartialCanvasTheme;
}

const DirectionContainer = styled('bdo')<{dir: ContentDirection}>(({dir}) => ({
  direction: dir,
}));

export class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: defaultCanvasTheme,
  };

  render() {
    const {children, theme} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <InputProvider />
        <DirectionContainer dir={theme.direction || defaultCanvasTheme.direction}>
          {children}
        </DirectionContainer>
      </ThemeProvider>
    );
  }
}

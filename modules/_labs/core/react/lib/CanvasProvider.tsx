import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {CanvasTheme, ContentDirection} from './theming/types';
import {defaultCanvasTheme} from './theming/theme';
import styled from '@emotion/styled';

export interface CanvasProviderProps {
  theme: CanvasTheme;
  includeInputProvider: boolean;
}

const DirectionContainer = styled('bdo')<{dir: ContentDirection}>(({dir}) => ({
  direction: dir,
}));

export default class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: defaultCanvasTheme,
    includeInputProvider: true,
  };

  render() {
    const {children, theme, includeInputProvider} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <DirectionContainer dir={theme.direction}>
          {includeInputProvider ? <InputProvider>{children}</InputProvider> : children}
        </DirectionContainer>
      </ThemeProvider>
    );
  }
}

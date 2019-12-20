import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {CanvasTheme, ContentDirection} from './theming/types';
import {defaultCanvasTheme} from './theming/theme';
import styled from '@emotion/styled';

export interface CanvasProviderProps {
  theme: CanvasTheme;
  disableInputProvider: boolean;
}

const DirectionContainer = styled('bdo')<{dir: ContentDirection}>(({dir}) => ({
  direction: dir,
}));

export default class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: defaultCanvasTheme,
    disableInputProvider: false,
  };

  render() {
    const {children, theme, disableInputProvider} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <DirectionContainer dir={theme.direction}>
          {disableInputProvider ? children : <InputProvider>{children}</InputProvider>}
        </DirectionContainer>
      </ThemeProvider>
    );
  }
}

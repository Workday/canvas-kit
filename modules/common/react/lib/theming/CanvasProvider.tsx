import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {ContentDirection} from './types';
import {defaultCanvasTheme, CanvasTheme} from './index';
import styled from '@emotion/styled';

export interface CanvasProviderProps {
  theme: CanvasTheme;
}

const DirectionContainer = styled('bdo')<{dir: ContentDirection}>(({dir}) => ({
  direction: dir,
}));

export default class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: defaultCanvasTheme,
  };

  render() {
    const {children, theme} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <InputProvider />
        <DirectionContainer dir={theme.direction}>{children}</DirectionContainer>
      </ThemeProvider>
    );
  }
}

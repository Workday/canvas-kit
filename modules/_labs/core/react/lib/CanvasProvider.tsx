import * as React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {CanvasTheme} from './theming/types';
import {defaultCanvasTheme} from './theming/theme';
import styled from '@emotion/styled';

export interface CanvasProviderProps {
  theme: CanvasTheme;
}

const DirectionContainer = styled('bdo')<Pick<CanvasProviderProps, 'theme'>>(
  ({theme}) => ({
    direction: theme.direction,
  })
);  

export default class CanvasProvider extends React.Component<CanvasProviderProps> {
  static defaultProps = {
    theme: defaultCanvasTheme,
  };

  render() {
    const {children, theme} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <DirectionContainer theme={theme} dir={theme.direction}>
          <InputProvider>{children}</InputProvider>
        </DirectionContainer>
      </ThemeProvider>
    );
  }
}

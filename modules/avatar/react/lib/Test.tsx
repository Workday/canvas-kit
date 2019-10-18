import * as React from 'react';
import styled from '@emotion/styled';
import {Themeable, getTheme} from '@workday/canvas-kit-react-core';

export interface TestProps extends Themeable {}

const SomeText = styled('div')<TestProps>(
  {
    boxSizing: 'border-box',
  },
  ({theme}) => {
    theme = getTheme(theme); // eslint-disable-line no-param-reassign
    return {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrast,
    };
  }
);

class Test extends React.Component<TestProps> {
  render() {
    return <SomeText>ASDF</SomeText>;
  }
}

export default Test;

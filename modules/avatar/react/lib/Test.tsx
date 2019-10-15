import * as React from 'react';
import styled from '@emotion/styled';
import {Themeable} from '@workday/canvas-kit-react-common';

export interface TestProps extends Themeable {}

const SomeText = styled('div')<TestProps>(
  {
    boxSizing: 'border-box',
  },
  ({theme}) => ({
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrast,
  })
);

class Test extends React.Component<TestProps> {
  render() {
    return <SomeText>ASDF</SomeText>;
  }
}

export default Test;

import * as React from 'react';
import styled from '@emotion/styled';

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = styled('div')<ButtonProps>({});

export default class Button extends React.Component<ButtonProps, {}> {
  public render() {
    const {...elemProps} = this.props;

    return <Container {...elemProps}>Button</Container>;
  }
}

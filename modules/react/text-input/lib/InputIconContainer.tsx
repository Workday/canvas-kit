import * as React from 'react';
import styled from '@emotion/styled';
import {GrowthBehavior} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

export interface InputIconContainerProps extends GrowthBehavior {
  icon?: React.ReactElement<SystemIcon>;
}

const Container = styled('div')<InputIconContainerProps>(({grow}) => ({
  display: grow ? 'block' : 'inline-block',
  position: 'relative',
}));

const IconContainer = styled('div')({
  position: 'absolute',
  top: space.xxs,
  right: space.xxs,
});

const InputIconContainer: React.FunctionComponent<InputIconContainerProps> = ({
  grow,
  children,
  icon,
}) => (
  <Container grow={grow}>
    {children}
    {icon && <IconContainer>{icon}</IconContainer>}
  </Container>
);

export default InputIconContainer;

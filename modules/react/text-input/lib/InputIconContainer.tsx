import * as React from 'react';
import styled from '@emotion/styled';
import {GrowthBehavior} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

/**
 * ### ⚠️ We've deprecated `InputIconContainerProps` from Main because it doesn't handle bidirectionality or icons at the start of an input. ⚠️
 * Please consider using [`InputGroup`](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-text-input--icons) instead.
 * @deprecated
 */
export interface InputIconContainerProps extends GrowthBehavior {
  icon?: React.ReactElement<typeof SystemIcon>;
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

/**
 * ### ⚠️ We've deprecated `InputIconContainer` from Main because it doesn't handle bidirectionality or icons at the start of an input. ⚠️
 * Please consider using [`InputGroup`](https://workday.github.io/canvas-kit/?path=/docs/components-inputs-text-input--icons) instead.
 * @deprecated
 */
export const InputIconContainer: React.FunctionComponent<React.PropsWithChildren<
  InputIconContainerProps
>> = ({grow, children, icon}) => (
  <Container grow={grow}>
    {children}
    {icon && <IconContainer>{icon}</IconContainer>}
  </Container>
);

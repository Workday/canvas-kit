import React from 'react';

import {Pill, pillStencil} from '@workday/canvas-kit-preview-react/pill';

import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {BodyText} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const customPillStencil = createStencil({
  base: {
    [pillStencil.vars.background]: base.berrySmoothie300,
    [pillStencil.vars.border]: base.berrySmoothie500,
    [pillStencil.vars.label]: base.frenchVanilla100,
    [systemIconStencil.vars.color]: base.frenchVanilla100,
    '&:hover, &.hover': {
      [pillStencil.vars.background]: base.berrySmoothie400,
      [pillStencil.vars.label]: base.frenchVanilla100,
      [systemIconStencil.vars.color]: base.frenchVanilla100,
    },
    '&:active, &.active': {
      [pillStencil.vars.background]: 'red',
      [pillStencil.vars.label]: base.frenchVanilla100,
      [systemIconStencil.vars.color]: base.frenchVanilla100,
    },
    '&:disabled, &.disabled': {
      [pillStencil.vars.background]: 'cyan',
      [pillStencil.vars.label]: base.frenchVanilla100,
      [systemIconStencil.vars.color]: base.frenchVanilla100,
    },
  },
});

export const Basic = () => {
  const [text, setText] = React.useState('');
  return (
    <Box>
      <Flex gap="xxs">
        <Pill onClick={() => setText('The first pill is clicked!')}>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill disabled>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Regina Skeltor</Pill.Label>
        </Pill>
        <Pill cs={customPillStencil()}>
          <Pill.Icon aria-label="Add user" />
          <Pill.Label>Custom Pill Color</Pill.Label>
        </Pill>
      </Flex>
      <BodyText size="medium">{text}</BodyText>
    </Box>
  );
};

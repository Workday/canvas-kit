import * as React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';

const Card = props => <Box border="1px solid black" margin="xxs" padding="s" {...props} />;

export const Text = () => (
  <>
    <Card
      textAlign="center"
      textDecoration="line-through"
      textTransform="uppercase"
      letterSpacing="0.05em"
      lineHeight="2em"
      wordBreak="break-all"
      whiteSpace="break-spaces"
    >
      Centered text, uppercase, with line through, 0.05em letter-spacing, 2em line-height, with
      breack-all and break-spaces.
    </Card>
    <Card
      textAlign="left"
      textDecoration="underline"
      textTransform="lowercase"
      letterSpacing="0.1em"
      lineHeight="1em"
      whiteSpace="nowrap"
    >
      Nowrap, Left-aligned text, with lowercase and underline, 0.1em letter-spacing, 1em
      line-height,
    </Card>
  </>
);

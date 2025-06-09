import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

interface CustomCardProps extends BoxProps {
  // custom Card props go here
}

const CustomCard = createComponent('div')({
  displayName: 'CustomCard',
  Component: (props: CustomCardProps, ref, Element) => {
    return (
      <Box
        background={system.color.bg.caution.default}
        as={Element}
        ref={ref}
        borderRadius="m"
        depth={1}
        padding="m"
        {...props}
      />
    );
  },
});

export const Basic = () => {
  return <CustomCard>Hello, Box!</CustomCard>;
};

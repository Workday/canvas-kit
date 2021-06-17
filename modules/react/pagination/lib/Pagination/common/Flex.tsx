import styled from '@emotion/styled';

import {flex, FlexProps as BaseFlexProps} from './utils/flex';

import {Box, BoxProps} from './Box';

export type FlexProps = BaseFlexProps & BoxProps;

const getFlexStyles = (props: FlexProps) => {
  let flexProps = {};

  for (const key in props) {
    if (key in flex) {
      const attr = flex[key as keyof BaseFlexProps];
      flexProps = {...flexProps, [attr]: props[key as keyof FlexProps]};
    }
  }
  return flexProps;
};

export const Flex = styled(Box)({display: 'flex'}, getFlexStyles);

Flex.displayName = 'Flex';

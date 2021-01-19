/** @jsx jsx */
import * as React from 'react';
import {jsx, css} from '@emotion/core';

import {flex, FlexProps as BaseFlexProps} from './utils/flex';

import {Box, BoxProps} from './Box';

export interface FlexProps extends BaseFlexProps, BoxProps {
  display?: 'flex' | 'inline-flex';
}

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

export const Flex = (props: FlexProps) => {
  // TODO: Memoize style props with React.useMemo
  const styleProps = getFlexStyles(props);
  return <Box css={css(styleProps)} {...props} />;
};

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';

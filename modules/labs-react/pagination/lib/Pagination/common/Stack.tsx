/** @jsx jsx */
import * as React from 'react';
import {jsx, css} from '@emotion/core';
import {space as sp} from '@workday/canvas-kit-react/tokens';

import {Flex, FlexProps} from './Flex';
import {Spacing} from './utils/space';
import {getValidChildren} from './utils/getValidChildren';
import {useRTL} from './utils/useRTL';

type StackDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export interface StackProps extends FlexProps {
  children?: React.ReactNode;
  direction: StackDirection;
  flexDirection?: StackDirection;
  spacing: Spacing;
}

const selector = '& > *:not(style) ~ *:not(style)';

type Options = {
  spacing: Spacing;
  direction: StackDirection;
  shouldUseRTL: boolean;
};

function getDirectionStyles(options: Options) {
  const directionStyles = {
    column: {marginTop: sp[options.spacing]},
    'column-reverse': {marginBottom: sp[options.spacing]},
    'row-reverse': options.shouldUseRTL
      ? {marginLeft: sp[options.spacing]}
      : {marginRight: sp[options.spacing]},
    row: options.shouldUseRTL
      ? {marginRight: sp[options.spacing]}
      : {marginLeft: sp[options.spacing]},
  };

  return directionStyles[options.direction];
}

function getStackStyles(options: Options) {
  const {direction} = options;

  return {
    flexDirection: direction,
    [selector]: getDirectionStyles(options),
  };
}

export const useStack = ({direction, shouldUseRTL, spacing}: Options) => {
  return React.useMemo(() => getStackStyles({direction, shouldUseRTL, spacing}), [
    direction,
    spacing,
    shouldUseRTL,
  ]);
};

export const Stack = React.forwardRef(
  ({children, direction, spacing, ...elemProps}: StackProps, ref) => {
    const validChildren = getValidChildren(children);
    const {shouldUseRTL} = useRTL();
    const stackStyles = useStack({direction, spacing, shouldUseRTL});

    return (
      <Flex css={css(stackStyles)} ref={ref} {...elemProps}>
        {validChildren}
      </Flex>
    );
  }
);

Stack.displayName = 'Stack';

export interface HStackProps extends Omit<StackProps, 'direction'> {
  direction?: 'row' | 'row-reverse';
}

export const HStack = React.forwardRef(
  ({direction = 'row', spacing, ...elemProps}: HStackProps, ref) => {
    return <Stack ref={ref} direction={direction} spacing={spacing} {...elemProps} />;
  }
);

HStack.displayName = 'HStack';

export interface VStackProps extends Omit<StackProps, 'direction'> {
  direction?: 'column' | 'column-reverse';
}

export const VStack = React.forwardRef(
  ({direction = 'column', spacing, ...elemProps}: VStackProps, ref) => {
    return <Stack ref={ref} direction={direction} spacing={spacing} {...elemProps} />;
  }
);

VStack.displayName = 'VStack';

import * as React from 'react';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';
import {borderRadius, colors, fontFamily} from '@workday/canvas-kit-react/tokens';

export interface CountBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  count?: number;
  limit?: number;
  variant?: 'default' | 'inverse';
}

const variants = {
  default: {
    background: colors.cinnamon500,
    color: colors.frenchVanilla100,
    textShadow: '0 0 1px rgba(0,0,0, 0.35)',
  },
  inverse: {
    background: colors.frenchVanilla100,
    boxShadow: '0 1px 2px rgba(0,0,0, 0.25)',
    color: colors.blueberry400,
  },
};

const grow = keyframes`
  from {
    transform: scale(0.85);
  }

  to {
    transform: scale(1.0);
  }
`;

const Container = styled('span')<CountBadgeProps>(
  {
    alignItems: 'center',
    animation: `${grow} 0.2s ease`,
    borderRadius: borderRadius.circle,
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontFamily,
    fontSize: '12px',
    fontWeight: 700,
    height: '20px',
    justifyContent: 'center',
    lineHeight: '20px',
    minWidth: '20px',
    padding: '0 6.5px',
  },
  ({variant = 'default'}) => ({
    ...variants[variant],
  })
);

const CountBadge = (props: CountBadgeProps) => {
  const {variant = 'default', count = 0, limit = 1000, ...elemProps} = props;

  const formattedCount = count < limit ? `${count}` : `${limit - 1}+`;

  return (
    <Container variant={variant} {...elemProps}>
      {formattedCount}
    </Container>
  );
};

export default CountBadge;

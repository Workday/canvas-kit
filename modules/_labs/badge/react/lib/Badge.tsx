import * as React from 'react';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';
import {borderRadius, colors, fontFamily} from '@workday/canvas-kit-react-core';

export type BadgeVariant = 'default' | 'inverse';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  'aria-label': string;
  count?: number;
  variant?: BadgeVariant;
}

const variants = {
  default: {
    background: colors.cinnamon500,
    color: colors.frenchVanilla100,
    textShadow: '0 0 1px rgba(0,0,0, 0.35)',
    '&:empty': {
      background: colors.frenchVanilla100,
      border: `solid 6px ${colors.cinnamon500}`,
      padding: 0,
    },
  },
  inverse: {
    background: colors.frenchVanilla100,
    boxShadow: '0 1px 2px rgba(0,0,0, 0.25)',
    color: colors.blueberry400,
    '&:empty': {
      background: colors.blueberry400,
      border: `solid 6px ${colors.frenchVanilla100}`,
      padding: 0,
    },
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

const Container = styled('span')<BadgeProps>(
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

const Badge = (props: BadgeProps) => {
  const {count, 'aria-label': ariaLabel, variant, ...elemProps} = props;

  let formattedCount = '';

  if (count) {
    formattedCount = count < 1000 ? `${count}` : '999+';
  }
  return (
    <Container aria-label={ariaLabel} aria-live="polite" variant={variant} {...elemProps}>
      {formattedCount}
    </Container>
  );
};

export default Badge;

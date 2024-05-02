import React from 'react';
import {createStyles} from '@workday/canvas-kit-styling';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'large' | 'medium' | 'small';
  backgroundColor?: string;
  children?: React.ReactNode;
}

const baseStyles = createStyles({
  fontSize: '1rem',
  display: 'flex',
  borderRadius: '1rem',
});

const modifierStyles = {
  variant: {
    primary: {
      background: `var(--button-background-color, blue)`,
      color: 'white',
    },
    secondary: {
      background: `var(--button-background-color, gray)`,
    },
    danger: {
      background: `var(--button-background-color, red)`,
    },
  },
  size: {
    large: {
      fontSize: '1.4rem',
      height: '2rem',
    },
    medium: {
      fontSize: '1rem',
      height: '1.5rem',
    },
    small: {
      fontSize: '0.8rem',
      height: '1.2rem',
    },
  },
};

const Button = ({variant, size, backgroundColor, children}: ButtonProps) => {
  const className = [baseStyles, modifierStyles.variant[variant], modifierStyles.size[size]].join(
    ' '
  );
  const style = {'--button-background-color': backgroundColor} as React.CSSProperties;
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export const ManualStylesButton = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="primary" size="large">
          Primary Large
        </Button>
        <Button variant="primary" size="medium">
          Primary Medium
        </Button>
        <Button variant="primary" size="small">
          Primary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="secondary" size="large">
          Secondary Large
        </Button>
        <Button variant="secondary" size="medium">
          Secondary Medium
        </Button>
        <Button variant="secondary" size="small">
          Secondary Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large">
          Danger Large
        </Button>
        <Button variant="danger" size="medium">
          Danger Medium
        </Button>
        <Button variant="danger" size="small">
          Danger Small
        </Button>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Button variant="danger" size="large" backgroundColor="orange">
          Custom Large
        </Button>
        <Button variant="danger" size="medium" backgroundColor="orange">
          Custom Medium
        </Button>
        <Button variant="danger" size="small" backgroundColor="orange">
          Custom Small
        </Button>
      </div>
    </div>
  );
};

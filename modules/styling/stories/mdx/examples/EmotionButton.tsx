import styled from '@emotion/styled';
import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'large' | 'medium' | 'small';
  backgroundColor?: string;
  children?: React.ReactNode;
}

const StyledButton = styled('button')<ButtonProps>(
  {
    // base styles
    fontSize: '1rem',
    display: 'flex',
    borderRadius: '1rem',
  },
  // variant styles
  ({variant, backgroundColor}) => {
    switch (variant) {
      case 'primary':
        return {
          background: backgroundColor || 'blue',
          color: 'white',
        };
      case 'secondary':
        return {
          background: backgroundColor || 'gray',
        };
      case 'danger':
        return {
          background: backgroundColor || 'red',
        };
      default:
        return {};
    }
  },
  // size styles
  ({size}) => {
    switch (size) {
      case 'large':
        return {
          fontSize: '1.4rem',
          height: '2rem',
        };
      case 'medium':
        return {
          fontSize: '1rem',
          height: '1.5rem',
        };
      case 'small':
        return {
          fontSize: '0.8rem',
          height: '1.2rem',
        };
      default:
        return {};
    }
  }
);

export const EmotionButton = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="primary" size="large">
          Primary Large
        </StyledButton>
        <StyledButton variant="primary" size="medium">
          Primary Medium
        </StyledButton>
        <StyledButton variant="primary" size="small">
          Primary Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="secondary" size="large">
          Secondary Large
        </StyledButton>
        <StyledButton variant="secondary" size="medium">
          Secondary Medium
        </StyledButton>
        <StyledButton variant="secondary" size="small">
          Secondary Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="danger" size="large">
          Danger Large
        </StyledButton>
        <StyledButton variant="danger" size="medium">
          Danger Medium
        </StyledButton>
        <StyledButton variant="danger" size="small">
          Danger Small
        </StyledButton>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <StyledButton variant="danger" size="large" backgroundColor="orange">
          Custom Large
        </StyledButton>
        <StyledButton variant="danger" size="medium" backgroundColor="orange">
          Custom Medium
        </StyledButton>
        <StyledButton variant="danger" size="small" backgroundColor="orange">
          Custom Small
        </StyledButton>
      </div>
    </div>
  );
};

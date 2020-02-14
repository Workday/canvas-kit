import {styled} from '@workday/canvas-kit-labs-react-core';
import isPropValid from '@emotion/is-prop-valid';
import canvas from '@workday/canvas-kit-react-core';
import {ButtonSize, AllButtonVariants, TextButtonVariant} from '../types';

export interface ButtonLabelProps {
  size: ButtonSize;
  variant?: AllButtonVariants;
}

export const ButtonLabel = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonLabelProps>(
  {
    position: 'relative', // Fixes an IE issue with text within button moving on click
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: 700,
    fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    '&:hover:active': {
      backgroundColor: 'transparent',
    },
  },
  ({size}) => ({
    fontSize: size === ButtonSize.Large ? '16px' : '14px',
    padding: `0 ${size === ButtonSize.Large ? 12 : size === ButtonSize.Medium ? 8 : 0}px`,
  }),
  ({variant}) => {
    if (variant === TextButtonVariant.AllCaps || variant === TextButtonVariant.InverseAllCaps) {
      return {
        ...canvas.type.variant.caps,
        fontSize: '14px',
        letterSpacing: '.5px',
      };
    }
    return;
  }
);

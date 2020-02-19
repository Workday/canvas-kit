import {styled} from '@workday/canvas-kit-labs-react-core';
import isPropValid from '@emotion/is-prop-valid';
import {ButtonSize} from '../types';

export interface ButtonLabelProps {
  size: ButtonSize;
}

export const ButtonLabel = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonLabelProps>(
  {
    position: 'relative', // Fixes an IE issue with text within button moving on click
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  ({size}) => ({
    // TODO: Use type hierarchy and canvas spacing
    padding: `0 ${size === ButtonSize.Large ? 12 : size === ButtonSize.Medium ? 8 : 0}px`,
  })
);

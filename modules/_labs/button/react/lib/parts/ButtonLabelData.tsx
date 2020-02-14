import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import isPropValid from '@emotion/is-prop-valid';
import {ButtonSize} from '../types';
import {ButtonProps} from '../Button';

type ButtonLabelDataProps = Pick<ButtonProps, 'size'> & React.HTMLAttributes<HTMLSpanElement>;

export const buttonLabelDataClassName = 'button-label-data';

const Container = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonLabelDataProps>(
  {
    position: 'relative', // Fixes an IE issue with text within button moving on click
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontFamily: '"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    '&:hover:active': {
      backgroundColor: 'transparent',
    },
  },
  ({size}) => {
    switch (size) {
      case ButtonSize.Large:
      default:
        return {
          paddingRight: '12px',
        };
      case ButtonSize.Medium:
        return {
          paddingRight: '8px',
          fontSize: '14px',
        };
    }
  }
);

export const ButtonLabelData = (props: ButtonLabelDataProps) => (
  <Container className={buttonLabelDataClassName} {...props} />
);

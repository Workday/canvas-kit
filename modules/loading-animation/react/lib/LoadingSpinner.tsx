import * as React from 'react';
import {keyframes} from 'emotion';
import styled from 'react-emotion';

import {colors} from '@workday/canvas-kit-react-core';

interface LoadingSpinnerProps {
  /**
   * Optional loading spinner color.
   */
  color?: string;
  /**
   * Determines the scale of the spinner. Defaults to 1
   */
  scale?: number;
}

const spinnerSize = 36;
const dotSize = 7;

const spinnerAnimation = keyframes`
  from, 0%, 20%, 80%, 100% to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
`;
const Spinner = styled('div')<Pick<LoadingSpinnerProps, 'scale' | 'color'>>(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative' as 'relative',
    width: spinnerSize,
    height: spinnerSize,
    div: {
      position: 'absolute',
      width: dotSize,
      height: dotSize,
      borderRadius: '50%',
      animation: `.8s linear infinite ${spinnerAnimation}`,
    },
    'div:nth-child(1)': {
      top: '14.7px',
      left: '0px',
    },
    'div:nth-child(2)': {
      animationDelay: '.1s',
      top: '4.306px',
      left: '4.306px',
    },
    'div:nth-child(3)': {
      animationDelay: '.2s',
      top: '0px',
      left: '14.7px',
    },
    'div:nth-child(4)': {
      animationDelay: '.3s',
      top: '4.306px',
      right: '4.306px',
    },
    'div:nth-child(5)': {
      animationDelay: '.4s',
      top: '14.7px',
      right: '0px',
    },
    'div:nth-child(6)': {
      animationDelay: '.5s',
      right: '4.306px',
      bottom: '4.306px',
    },
    'div:nth-child(7)': {
      animationDelay: '.6s',
      bottom: '0px',
      left: '14.7px',
    },
    'div:nth-child(8)': {
      animationDelay: '7s',
      bottom: '4.306px',
      left: '4.306px',
    },
  },
  ({scale, color}) => ({
    transform: `scale(${scale || '1'})`,
    div: {
      background: color || colors.blueberry400,
    },
  })
);

/**
 * Renders a Loading Spinner component
 */
export default class LoadingSpinner extends React.Component<LoadingSpinnerProps> {
  public render() {
    return (
      <Spinner role="alert" aria-busy="true" {...this.props}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Spinner>
    );
  }
}

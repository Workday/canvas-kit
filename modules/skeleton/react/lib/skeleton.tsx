import * as React from 'react';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import canvas from '@workday/canvas-kit-react-core';
import {accessibleHide} from '@workday/canvas-kit-react-common';

export interface SkeletonProps {
  /**
   * The `aria-label` that describes loading.
   * @default 'Loading'
   */
  loadingLabel: string;
}

const TRANSPARENCY_POSITION = 45;
const WHITE_SHEEN_WIDTH = 10;
const DURATION = 5;

const AccessibleHide = styled('div')(accessibleHide);

const SkeletonAnimator = styled('div')<{diagonal: number; topPosition: number; width: number}>(
  ({diagonal, topPosition, width}) => {
    const backgroundPositionAnimation = keyframes({
      from: {
        left: `-${diagonal}px`,
      },
      to: {
        left: `${diagonal + width}px`,
      },
    });

    return {
      animation: `${backgroundPositionAnimation} ${DURATION}s ease-in-out infinite`,
      background: `linear-gradient(130deg, rgba(255,255,255,0) ${TRANSPARENCY_POSITION}%, ${
        canvas.colors.frenchVanilla100
      }, rgba(255,255,255,0)  ${TRANSPARENCY_POSITION + WHITE_SHEEN_WIDTH}%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${diagonal}px ${diagonal}px`,
      width: diagonal,
      height: diagonal,
      top: topPosition,
      position: 'absolute',
    };
  }
);

const SkeletonContainer = styled('div')<SkeletonProps>({
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  position: 'relative',
});

export interface SkeletonState {
  width: number;
  height: number;
}

export default class Skeleton extends React.Component<SkeletonProps, SkeletonState> {
  private ref: React.RefObject<HTMLDivElement> = React.createRef();
  static defaultProps = {
    loadingLabel: 'Loading',
  };

  state = {
    width: 0,
    height: 0,
  };

  render(): React.ReactNode {
    const {children, ...elemProps} = this.props;
    const {width, height} = this.state;
    const diagonal = Math.sqrt(width * width + height * height) + WHITE_SHEEN_WIDTH;
    const topPosition = (-1 * (diagonal - height)) / 2;
    const {loadingLabel} = this.props;

    return (
      <SkeletonContainer ref={this.ref} {...elemProps}>
        <AccessibleHide>{loadingLabel}</AccessibleHide>
        <SkeletonAnimator diagonal={diagonal} topPosition={topPosition} width={width} />
        <div aria-hidden={true}>{children}</div>
      </SkeletonContainer>
    );
  }

  componentDidMount(): void {
    if (this.ref.current) {
      this.setState({
        height: this.ref.current.clientHeight,
        width: this.ref.current.clientWidth,
      });
    }
  }

  componentDidUpdate(): void {
    const {width, height} = this.state;
    const current = this.ref.current;
    if (current && (width !== current.clientWidth || height !== current.clientHeight)) {
      this.setState({
        height: current.clientHeight,
        width: current.clientWidth,
      });
    }
  }
}

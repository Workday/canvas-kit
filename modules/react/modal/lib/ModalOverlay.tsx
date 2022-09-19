import React from 'react';
import ReactDOM from 'react-dom';

import {
  createSubcomponent,
  createElemPropsHook,
  StyledType,
  useWindowSize,
  useForkRef,
} from '@workday/canvas-kit-react/common';
import {usePopupModel, usePopupStack} from '@workday/canvas-kit-react/popup';
import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
import {useModalModel} from './hooks';

export interface ModalOverlayProps extends BoxProps {}

const fadeIn = keyframes`
  from {
    background: none;
  }
  to {
    background: rgba(0,0,0,0.65);
  }
`;

const Container = styled(Box)<StyledType>({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.65)',
  animationName: `${fadeIn}`,
  animationDuration: '0.3s',
  // Allow overriding of animation in special cases
  '.wd-no-animation &': {
    animation: 'none',
  },
});

// This centering container helps fix an issue with Chrome. Chrome doesn't normally do subpixel
// positioning, but seems to when using flexbox centering. This messes up Popper calculations inside
// the Modal. The centering container forces a "center" pixel calculation by making sure the width
// is always an even number
const ResponsiveContainer = styled('div')(({theme}) => ({
  maxHeight: '100vh',
  display: 'flex',
  position: 'absolute',
  left: 0,
  top: 0,
  justifyContent: 'center',
  alignItems: 'center',
  [theme.canvas.breakpoints.down('s')]: {
    alignItems: 'end',
  },
}));

export const ModalOverlay = createSubcomponent('div')({
  displayName: 'Modal.Overlay',
  modelHook: useModalModel,
})<ModalOverlayProps>((elemProps, Element, model) => {
  return model.state.visibility !== 'hidden' ? (
    <OpenModalOverlay as={Element} model={model} {...elemProps} />
  ) : null;
});

export const useModalOverlay = createElemPropsHook(usePopupModel)(({state}, ref) => {
  const elementRef = useForkRef(ref, state.stackRef);
  usePopupStack(elementRef);

  return {
    // The ref should not be applied to an element. The passed ref will apply to the stackRef instead
    ref: undefined,
  };
});

const OpenModalOverlay = createSubcomponent('div')({
  displayName: 'Modal.OpenOverlay',
  modelHook: useModalModel,
  elemPropsHook: useModalOverlay,
})<ModalOverlayProps>((elemProps, Element, model) => {
  const windowSize = useWindowSize();
  const content = (
    <Container as={Element} {...elemProps}>
      <ResponsiveContainer
        // make sure the centering container is an even number of pixels to avoid sub-pixel
        // inaccuracies due to centering
        style={{
          width: windowSize.width % 2 === 1 ? 'calc(100vw - 1px)' : '100vw',
        }}
      >
        {elemProps.children}
      </ResponsiveContainer>
    </Container>
  );

  // only render something on the client
  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(content, model!.state.stackRef.current!);
  } else {
    return null;
  }
});

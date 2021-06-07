import React from 'react';
import ReactDOM from 'react-dom';

import {
  createComponent,
  useModelContext,
  createHook,
  StyledType,
  useWindowSize,
  useForkRef,
} from '@workday/canvas-kit-react/common';
import {PopupModel, PopupModelContext, usePopupStack} from '@workday/canvas-kit-react/popup';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';

export interface ModalOverlayProps {
  model?: PopupModel;
  children: React.ReactNode;
}

const fadeIn = keyframes`
  from {
    background: none;
  }
  to {
    background: rgba(0,0,0,0.65);
  }
`;

const Container = styled('div')<StyledType>({
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
const CenteringContainer = styled('div')({
  height: '100vh',
  display: 'flex',
  position: 'absolute',
  left: 0,
  top: 0,
  alignItems: 'center',
  justifyContent: 'center',
});

export const ModalOverlay = createComponent('div')({
  displayName: 'Modal.Overlay',
  Component: ({model, children, ...elemProps}: ModalOverlayProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    return localModel.state.visibility !== 'hidden' ? (
      <OpenModalOverlay ref={ref} as={Element} model={localModel} {...elemProps}>
        {children}
      </OpenModalOverlay>
    ) : null;
  },
});

export const useModalOverlay = createHook(({state}: PopupModel, ref) => {
  const elementRef = useForkRef(ref, state.stackRef);
  usePopupStack(elementRef);

  return {
    // The ref should not be applied to an element. The passed ref will apply to the stackRef instead
    ref: undefined,
  };
});

const OpenModalOverlay = createComponent('div')({
  displayName: 'Modal.OpenOverlay',
  Component: ({model, children, ...elemProps}: ModalOverlayProps, ref, Element) => {
    const props = useModalOverlay(model!, elemProps, ref);
    const windowSize = useWindowSize();

    const content = (
      <Container as={Element} {...props}>
        <CenteringContainer
          // make sure the centering container is an even number of pixels to avoid sub-pixel
          // inaccuracies due to centering
          style={{width: windowSize.width % 2 === 1 ? 'calc(100vw - 1px)' : '100vw'}}
        >
          {children}
        </CenteringContainer>
      </Container>
    );

    // only render something on the client
    if (typeof window !== 'undefined') {
      return ReactDOM.createPortal(content, model!.state.stackRef.current!);
    } else {
      return null;
    }
  },
});

import ReactDOM from 'react-dom';

import {
  createElemPropsHook,
  createSubcomponent,
  useForkRef,
  useWindowSize,
} from '@workday/canvas-kit-react/common';
import {Box, BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {usePopupModel, usePopupStack} from '@workday/canvas-kit-react/popup';
import {createStencil, cssVar, keyframes} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useModalModel} from './hooks';

export interface ModalOverlayProps extends BoxProps {}

const fadeIn = keyframes({
  '0%': {
    background: 'none',
  },
  '100%': {
    background: cssVar(system.color.surface.overlay.scrim, system.color.bg.overlay),
  },
});

export const modalOverlayContainerStencil = createStencil({
  vars: {
    containerCenter: '',
  },
  base: ({containerCenter}) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    background: cssVar(system.color.surface.overlay.scrim, system.color.bg.overlay),
    animationDuration: '0.3s',
    animationName: fadeIn,
    // Allow overriding of animation in special cases
    '.wd-no-animation &': {
      animation: 'none',
    },
    // Responsive Container
    '& > div': {
      maxHeight: '100%',
      display: 'flex',
      position: 'absolute',
      left: 0,
      top: 0,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: containerCenter,
    },
    '@media screen and (max-width: 768px)': {
      height: '100%',
      '& > div': {
        alignItems: 'end',
      },
    },
  }),
});

export const useModalOverlay = createElemPropsHook(usePopupModel)(({state}, ref) => {
  const elementRef = useForkRef(ref, state.stackRef);
  usePopupStack(elementRef, state.targetRef);

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
  const containerCenter = windowSize.width % 2 === 1 ? 'calc(100vw - 1px)' : '100vw';
  const content = (
    <Box {...mergeStyles(elemProps, modalOverlayContainerStencil({containerCenter}))}>
      {/* This centering container helps fix an issue with Chrome. Chrome doesn't normally do
      subpixel positioning, but seems to when using flexbox centering. This messes up Popper
      calculations inside the Modal. The centering container forces a "center" pixel calculation
      by making sure the width is always an even number */}
      <Box
      // make sure the centering container is an even number of pixels to avoid sub-pixel
      // inaccuracies due to centering
      >
        {elemProps.children}
      </Box>
    </Box>
  );

  // only render something on the client
  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(content, model!.state.stackRef.current!);
  } else {
    return null;
  }
});

export const ModalOverlay = createSubcomponent('div')({
  displayName: 'Modal.Overlay',
  modelHook: useModalModel,
})<ModalOverlayProps>((elemProps, Element, model) => {
  return model.state.visibility !== 'hidden' ? (
    <OpenModalOverlay as={Element} model={model} {...elemProps} />
  ) : null;
});

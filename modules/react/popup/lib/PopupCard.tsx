import * as React from 'react';
import {keyframes} from '@emotion/core';

import {Card} from '@workday/canvas-kit-react/card';
import {space} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  TransformOrigin,
  getTranslateFromOrigin,
  createComponent,
  StyledType,
  mergeProps,
  useModelContext,
  ExtractProps,
} from '@workday/canvas-kit-react/common';

import {PopupModel} from './usePopupModel';
import {PopupModelContext} from './Popup';
import {getTransformFromPlacement} from './getTransformFromPlacement';

export interface PopupCardProps extends ExtractProps<typeof Card> {
  /**
   * The width of the Popup.
   */
  width?: number | string;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
  children?: React.ReactNode;
}

const popupAnimation = (transformOrigin: TransformOrigin) => {
  const translate = getTranslateFromOrigin(transformOrigin, space.xxs);

  return keyframes`
    0% {
      opacity: 0;
      transform: translate(${translate.x}px, ${translate.y}px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  `;
};

const StyledPopupCard = styled(Card)<
  StyledType & {width?: number | string; transformOrigin?: TransformOrigin}
>(
  {
    position: 'relative',
    maxWidth: `calc(100vw - ${space.l})`,
  },
  ({width}) => width && {width},
  ({transformOrigin}) => {
    if (transformOrigin == null) {
      return {};
    }
    return {
      animation: popupAnimation(transformOrigin),
      animationDuration: '150ms',
      animationTimingFunction: 'ease-out',
      transformOrigin: `${transformOrigin.vertical} ${transformOrigin.horizontal}`,
      // Allow overriding of animation in special cases
      '.wd-no-animation &': {
        animation: 'none',
      },
    };
  }
);

const usePopupCard = ({state}: PopupModel, elemProps = {}) => {
  return mergeProps(
    {
      role: 'dialog',
      'aria-labelledby': state.id,
    },
    elemProps
  );
};

export const PopupCard = createComponent('div')({
  displayName: 'Popup.Card',
  Component: (
    {children, model, padding = 'l', depth = 2, width, ...elemProps}: PopupCardProps,
    ref,
    Element
  ) => {
    const localModel = useModelContext(PopupModelContext, model);
    const props = usePopupCard(localModel, elemProps);
    const transformOrigin = React.useMemo(() => {
      return getTransformFromPlacement(localModel.state.placement || 'bottom');
    }, [localModel.state.placement]);

    return (
      <StyledPopupCard
        ref={ref}
        as={Element}
        transformOrigin={transformOrigin}
        depth={depth}
        width={width}
        padding={padding}
        {...props}
      >
        {children}
      </StyledPopupCard>
    );
  },
});

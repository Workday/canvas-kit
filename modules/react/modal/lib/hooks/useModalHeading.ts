import React from 'react';

import {
  composeHooks,
  createElemPropsHook,
  useLocalRef,
  useMountLayout,
} from '@workday/canvas-kit-react/common';
import {usePopupHeading, usePopupModel} from '@workday/canvas-kit-react/popup';

export const useModalHeading = composeHooks(
  usePopupHeading,
  createElemPropsHook(usePopupModel)((_, ref?: React.Ref<HTMLElement>) => {
    const {elementRef, localRef} = useLocalRef(ref);

    useMountLayout(() => {
      if (localRef.current?.parentElement?.querySelector('button')?.textContent) {
        // First button is not a close icon button, set tabindex on the heading to capture initial focus
        localRef.current.setAttribute('tabindex', '0');
      }
    });

    const onBlur = () => {
      localRef.current?.removeAttribute('tabindex');
    };

    return {
      ref: elementRef,
      onBlur,
    };
  })
);

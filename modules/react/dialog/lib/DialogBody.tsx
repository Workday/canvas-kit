import React from 'react';
import {
  createComponent,
  useModelContext,
  useLocalRef,
  useMountLayout,
} from '@workday/canvas-kit-react/common';
import {DialogModel} from './useDialogModel';
import {DialogModelContext} from './Dialog';
import {
  usePopupStack,
  useCloseOnEscape,
  useFocusTrap,
  useAssistiveHideSiblings,
} from '@workday/canvas-kit-react/popup';

export interface DialogBodyProps {
  children: React.ReactNode;
  model?: DialogModel;
}

const useInitialFocus = (ref: React.Ref<HTMLOrSVGElement>) => {
  const initialElement = document.activeElement as HTMLOrSVGElement | null;
  const {localRef} = useLocalRef(ref);

  useMountLayout(() => {
    localRef.current?.focus();

    return () => {
      if (initialElement) {
        initialElement.focus?.();
      }
    };
  });
};

export const DialogBody = createComponent('div')({
  displayName: 'Dialog.Body',
  Component: ({children, model, ...elemProps}: DialogBodyProps, ref, Element) => {
    const {state, events} = useModelContext(DialogModelContext, model);

    const stackRef = usePopupStack();

    useCloseOnEscape(stackRef, events.hide);
    useFocusTrap(stackRef);
    useInitialFocus(stackRef);
    useAssistiveHideSiblings(stackRef);

    return (
      <Element
        ref={ref}
        role="dialog"
        aria-labelledby={elemProps.hasOwnProperty('aria-label') ? undefined : state.id}
        {...elemProps}
      >
        {children}
      </Element>
    );
  },
});

import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

import {useDialogCard, useDialogModel} from './hooks';

export interface DialogCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const DialogCard = createSubcomponent('div')({
  displayName: 'Dialog.Card',
  modelHook: useDialogModel,
  elemPropsHook: useDialogCard,
})<ExtractProps<typeof Popup.Card, never>>((elemProps, Element, model) => {
  return (
    <Popup.Card as={Element} model={model} {...elemProps}>
      {elemProps.children}
    </Popup.Card>
  );
});

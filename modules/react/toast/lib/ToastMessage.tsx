import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useToastModel} from './hooks/useToastModel';

export interface ToastMessageProps extends Omit<ExtractProps<typeof Subtext>, 'size'> {}

export const toastMessageStencil = createStencil({
  base: {
    wordBreak: 'break-word',
    marginBlockStart: system.space.zero,
    marginBlockEnd: system.space.zero,
  },
});

export const ToastMessage = createSubcomponent('p')({
  modelHook: useToastModel,
})<ToastMessageProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Subtext
      size="large"
      id={model.state.id}
      as={Element}
      {...mergeStyles(elemProps, toastMessageStencil())}
    >
      {children}
    </Subtext>
  );
});

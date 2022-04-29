import {createHook} from '@workday/canvas-kit-react/common';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export const useExpandableTarget = createHook(
  (
    {state, events}: DisclosureModel,
    _?: React.Ref<any>,
    elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
  ) => {
    const open = state.visibility === 'visible';

    return {
      'aria-controls': open ? state.id : undefined,
      'aria-expanded': open,
      onClick(event: React.MouseEvent<HTMLElement>) {
        elemProps.onClick?.(event);

        if (state.visibility === 'visible') {
          events.hide({event});
        } else {
          events.show({event});
        }
      },
    };
  }
);

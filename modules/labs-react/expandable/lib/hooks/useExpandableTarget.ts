import {createHook} from '@workday/canvas-kit-react/common';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export const useExpandableTarget = createHook(
  (
    {state, events}: DisclosureModel,
    _?: React.Ref<any>,
    elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
  ) => {
    const visible = state.visibility === 'visible';

    return {
      'aria-controls': visible ? state.id : undefined,
      'aria-expanded': visible,
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

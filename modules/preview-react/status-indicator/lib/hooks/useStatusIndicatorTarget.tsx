import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useStatusIndicatorModel} from './useStatusIndicatorModel';

/**
 * Adds the necessary props to a `Target` component.
 * Used by the StatusIndicator.Target subcomponent.
 */
export const useStatusIndicatorTarget = createElemPropsHook(useStatusIndicatorModel)(
  ({state, events}) => {
    return {
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        if (state.open) {
          events.close(event);
        } else {
          events.open(event);
        }
      },
    };
  }
);

import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useStatusIndicatorModel} from './useStatusIndicatorModel';

/**
 * Adds the necessary props to a `Content` component.
 * Used by the StatusIndicator.Content subcomponent.
 */
export const useStatusIndicatorContent = createElemPropsHook(useStatusIndicatorModel)(({state}) => {
  return {
    ['data-is-it-open']: `${state.open ? 'yes' : 'no'}`,
  };
});

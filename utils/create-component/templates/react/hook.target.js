module.exports = pascalCaseName => `
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {use${pascalCaseName}Model} from './use${pascalCaseName}Model';

/**
 * Adds the necessary props to a \`Target\` component.
 * Used by the ${pascalCaseName}.Target subcomponent.
 */
export const use${pascalCaseName}Target = createElemPropsHook(use${pascalCaseName}Model)(({state, events}) => {
  return {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      if (state.open) {
        events.close(event);
      } else {
        events.open(event);
      }
    },
  };
});
`;


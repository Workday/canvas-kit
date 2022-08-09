module.exports = pascalCaseName => `
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {use${pascalCaseName}Model} from './use${pascalCaseName}Model';

/**
 * Adds the necessary props to a \`Content\` component.
 * Used by the ${pascalCaseName}.Content subcomponent.
 */
export const use${pascalCaseName}Content = createElemPropsHook(use${pascalCaseName}Model)(({state}) => {
  return {
    ['data-is-it-open']: \`\${state.open ? 'yes' : 'no'}\`,
  };
});
`;

import {compile, Element} from 'stylis';
import fs from 'fs/promises';

export async function readCssFiles(fileNames: string[]): Promise<string[]> {
  return (await Promise.all(fileNames.map(fileName => fs.readFile(fileName)))).map(v =>
    v.toString()
  );
}

export function getVariablesFromFiles(files: string[]): Record<string, string> {
  return files.reduce((result, file) => {
    extractVariables(compile(file)); //?
    return {...result, ...extractVariables(compile(file))};
  }, {} as Record<string, string>);
}

export function extractVariables(
  blocks: Element[] | string,
  variables: Record<string, string> = {}
): Record<string, string> {
  if (typeof blocks === 'string') {
    return variables;
  }
  return blocks
    .filter(block => block.type === 'rule')
    .reduce(
      (result, rule) => {
        if (Array.isArray(rule.children)) {
          rule.children.forEach(child => {
            if (
              typeof child.props === 'string' &&
              child.props.startsWith('--') &&
              typeof child.children === 'string'
            ) {
              result[child.props] = child.children;
            }
            if (Array.isArray(child.props)) {
              //
            }
          });
        }
        return result;
      },
      {...variables}
    );
}

export function getFallbackVariable(
  variableName: string,
  variables: Record<string, string>
): string | undefined {
  const variable = variableName.includes('var(') ? variableName : variables[variableName];
  if (variable && variable.includes('var(')) {
    return variable.replace(/(var\(([A-Za-z0-9\-_]+)\))/, (
      /** matched substring "var(--var-name)" */ _,
      /** the full match of the first group "var(--var-name)" */ varMatch,
      /** the variable name  - match of the second group "--var-name" */ cssVarName,
      ...args
    ) => {
      const value = variables[cssVarName]; //?
      if (value && value.startsWith('var')) {
        return getFallbackVariable(value, variables);
      }
      return value || varMatch;
    }); //?
  }
  if (variable) {
    return variable; //?
  }

  return;
}

const input = `:root {
  --cnvs-sys-line-error: 1px solid var(--cnvs-base-palette-cinnamon-500);
  --cnvs-sys-line-color: var(--cnvs-base-palette-cinnamon-400);

  --cnvs-base-palette-cinnamon-400: rgba(255, 84, 71, 1);
  --cnvs-base-palette-cinnamon-500: rgba(222, 46, 33, 1);
  --cnvs-base-palette-cinnamon-600: rgba(161, 27, 18, 1);

  --var-1: var(--var-2);
  --var-2: var(--var-3);
  --var-3: red;
}
`;

const variables = extractVariables(compile(input));

getFallbackVariable('--cnvs-base-palette-cinnamon-400', variables); //?
getFallbackVariable('--cnvs-sys-line-error', variables); //?
getFallbackVariable('--cnvs-sys-line-color', variables); //?
getFallbackVariable('--var-1', variables); //?

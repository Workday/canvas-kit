import {compile, Element} from 'stylis';

export function getVariablesFromFiles(files: string[]): Record<string, string> {
  return files.reduce((result, file) => {
    extractVariables(compile(file));
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
    return variable.replace(
      /(var\(([A-Za-z0-9\-_]+)\))/,
      (
        /** matched substring "var(--var-name)" */ _,
        /** the full match of the first group "var(--var-name)" */ varMatch,
        /** the variable name  - match of the second group "--var-name" */ cssVarName,
        ...args
      ) => {
        const value = variables[cssVarName];
        if (value && value.startsWith('var')) {
          return getFallbackVariable(value, variables);
        }
        return value || varMatch;
      }
    );
  }
  if (variable) {
    return variable;
  }

  return;
}

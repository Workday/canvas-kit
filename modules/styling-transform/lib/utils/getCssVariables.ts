import {Element, compile} from 'stylis';

export function getVariablesFromFiles(files: string[]): Record<string, string> {
  return files.reduce(
    (result, file) => {
      extractVariables(compile(file));
      return {...result, ...extractVariables(compile(file))};
    },
    {} as Record<string, string>
  );
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

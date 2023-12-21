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

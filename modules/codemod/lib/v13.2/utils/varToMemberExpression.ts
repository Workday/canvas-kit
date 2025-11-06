export const varToMemberExpression = (j: any, value: string) => {
  const valuesKeys = value.split('.');

  return valuesKeys.reduce((acc: any, key: string, index: number) => {
    if (!index) {
      return j.identifier(key);
    }

    return j.memberExpression(acc, j.identifier(key));
  }, null);
};

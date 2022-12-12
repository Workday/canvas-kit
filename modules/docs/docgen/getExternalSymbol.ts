// prettier-ignore
const externalSymbols: Record<string, string> = {
  Promise: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
  Function: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
  Array: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  Object: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
  Record: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type',
};

export function getExternalSymbol(key: string): string | undefined {
  return externalSymbols[key] || undefined;
}

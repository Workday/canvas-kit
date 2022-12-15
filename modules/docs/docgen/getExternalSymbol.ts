// prettier-ignore
const externalSymbols: Record<string, string> = {
  Promise: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
  Function: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
  Array: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  Object: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
  Element: 'https://developer.mozilla.org/en-US/docs/Web/API/element',
  Event: 'https://developer.mozilla.org/en-US/docs/Web/API/event',
  Record: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type',
  'React.ReactElement': 'https://reactjs.org/docs/rendering-elements.html',
  'React.SyntheticEvent': 'https://reactjs.org/docs/events.html',
};

export function getExternalSymbol(key: string): string | undefined {
  return externalSymbols[key] || undefined;
}

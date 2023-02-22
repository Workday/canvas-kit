// prettier-ignore
const externalSymbols: Record<string, Record<string, string>> = {
  lib: {
    Promise: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
    Function: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
    Array: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
    Object: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
    Element: 'https://developer.mozilla.org/en-US/docs/Web/API/element',
    Event: 'https://developer.mozilla.org/en-US/docs/Web/API/event',
    Record: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type',
    CSSObject: 'https://emotion.sh/docs/object-styles',
    CSSProperties: 'https://emotion.sh/docs/object-styles'
  },
  react: {
    Element: 'https://reactjs.org/docs/rendering-elements.html', // JSX.Element directs here
    ReactElement: 'https://reactjs.org/docs/rendering-elements.html',
    'React.ReactElement': 'https://reactjs.org/docs/rendering-elements.html',
    ReactNode: 'https://reactjs.org/docs/rendering-elements.html',
    'React.ReactNode': 'https://reactjs.org/docs/rendering-elements.html',
    SyntheticEvent: 'https://reactjs.org/docs/events.html',
    'React.SyntheticEvent': 'https://reactjs.org/docs/events.html',
    'Ref': 'https://reactjs.org/docs/refs-and-the-dom.html',
    'React.Ref': 'https://reactjs.org/docs/refs-and-the-dom.html',
    PopperOptions: 'https://popper.js.org/docs/v2/constructors/#options'
  }
};

export function getExternalSymbol(key: string, declarationFile?: string): string | undefined {
  const lib = declarationFile?.includes('react') ? 'react' : 'lib';
  return externalSymbols[lib][key] || undefined;
}

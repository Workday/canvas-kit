/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import {
  COMMENT,
  DECLARATION,
  Element,
  IMPORT,
  KEYFRAMES,
  LAYER,
  Middleware,
  RULESET,
  serialize,
} from 'stylis';

function strlen(input: string): number {
  return input.length;
}

export const prettyStringify: Middleware = (element, index, children, callback) => {
  switch (element.type) {
    case LAYER:
      if (element.children.length) {
        break;
      }
    case IMPORT:
    case DECLARATION:
      return (element.return =
        element.return ||
        '  ' + element.value.replace(':', ': ') + (index === children.length - 1 ? '' : '\n'));
    case COMMENT:
      return `${element.value}\n`;
    case KEYFRAMES:
      return (
        (element.return =
          element.value +
          ' {\n' +
          serialize(element.children as Element[], callback)
            .split('\n')
            .map(i => `  ${i}`)
            .join('\n') +
          '}').replace(/\s\s\}$/, '}') + '\n'
      );
    case RULESET:
      if (!strlen((element.value = (element.props as string[]).join(', ')))) {
        return '';
      }
  }

  const childStr = serialize(element.children as Element[], callback);
  if (childStr) {
    element.return = `${element.value} {\n${childStr}\n}\n\n`;
    return element.return;
  }
  return '';
};

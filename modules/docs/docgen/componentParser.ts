import ts from 'typescript';
import {EnhanceComponentValue, CanvasColorValue} from './customTypes';

import {
  createParserPlugin,
  defaultJSDoc,
  DocParser,
  getPackageName,
  getValueDeclaration,
} from './docParser';
import {ObjectProperty, PrimitiveValue, Value} from './docTypes';
import t from './traverse';

/** Track if we've set a custom color symbol yet */
let shouldCreateColorSymbol = true;

function dashCase(value: string): string {
  return value
    .replace(/^([A-Z])/, (s, l) => l.toLowerCase())
    .replace(/([A-Z])/g, (s, l) => `-${l.toLowerCase()}`);
}

function getDefaultFromTags(tags: ts.JSDocTagInfo[]): Value | undefined {
  for (const tag of tags) {
    if (tag.name === 'default') {
      const text = (tag.text || '').replace('{', '').replace('}', ''); //?
      if (
        [
          'string',
          'number',
          'null',
          'undefined',
          'boolean',
          'any',
          'void',
          'unknown',
          'any',
        ].includes(text)
      ) {
        return {kind: 'primitive', value: text as PrimitiveValue['value']};
      }
      if (['true', 'false'].includes(text)) {
        return {kind: 'boolean', value: Boolean(text)};
      }
      if (!Number.isNaN(Number(text))) {
        return {kind: 'number', value: Number(text)};
      }
      if (/^['"][a-z0-9]+['"]$/.test(text)) {
        return {kind: 'string', value: text.replace(/["']/g, '')};
      }
      return {kind: 'symbol', name: text, value: text};
    }
  }
  return;
}

function getDefaultsFromParameter(
  parser: DocParser,
  node: ts.ParameterDeclaration
): Record<string, Value> {
  if (t.isObjectBindingPattern(node.name)) {
    return node.name.elements.reduce((result, element) => {
      if (t.isBindingElement(element) && t.isIdentifier(element.name) && element.initializer) {
        result[element.name.escapedText as string] = parser.getValueFromNode(element.initializer);
      }
      return result;
    }, {} as Record<string, Value>);
  }

  return {};
}

export const componentParser = createParserPlugin<EnhanceComponentValue | CanvasColorValue>(
  (node, parser) => {
    t.getKindNameFromNode(node); //?

    /**
     * Find all occurrences of `SystemPropValues['color']` and rewrite to a custom color symbol
     */
    if (
      t.isIndexedAccessType(node) &&
      t.isTypeReference(node.objectType) &&
      t.isIdentifier(node.objectType.typeName) &&
      node.objectType.typeName.escapedText === 'SystemPropValues' &&
      t.isLiteralType(node.indexType) &&
      t.isStringLiteral(node.indexType.literal) &&
      node.indexType.literal.text === 'color'
    ) {
      const fileName = node.getSourceFile()?.fileName || '';

      if (shouldCreateColorSymbol) {
        shouldCreateColorSymbol = false;
        parser.symbols.push({
          name: 'CanvasColorTokens',
          packageName: getPackageName(fileName),
          fileName,
          ...defaultJSDoc,
          type: {
            kind: 'canvasColor',
          },
        });
      }
      return {kind: 'symbol', name: 'CanvasColorTokens'};
    }

    /**
     * Find all occurrences of `Property.X` and convert to external links to MDN
     */
    if (
      t.isTypeReference(node) &&
      t.isQualifiedName(node.typeName) &&
      t.isIdentifier(node.typeName.left) &&
      node.typeName.left.text === 'Property' &&
      t.isIdentifier(node.typeName.right)
    ) {
      return {
        kind: 'external',
        name: `${node.typeName.left.text}.${node.typeName.right.text}`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/${dashCase(
          node.typeName.right.text
        )}`,
      };
    }

    if (
      t.isVariableDeclaration(node) &&
      node.initializer &&
      t.isCallExpression(node.initializer) &&
      t.isCallExpression(node.initializer.expression) &&
      t.isIdentifier(node.initializer.expression.expression) &&
      node.initializer.expression.expression.escapedText === 'createComponent'
    ) {
      let baseElement: EnhanceComponentValue | Value | undefined;
      /**
       * baseElementNode is `'button'` in the following example:
       * ```ts
       * export const MyComponent = createComponent('button')({...})
       * ```
       */
      const baseElementNode = node.initializer.expression.arguments[0]; //?
      if (baseElementNode && t.isStringLiteral(baseElementNode)) {
        baseElement = {
          kind: 'external',
          name: baseElementNode.text,
          url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${baseElementNode.text}`,
        };
      } else if (baseElementNode) {
        baseElement = parser.getValueFromNode(baseElementNode) as EnhanceComponentValue | Value;
      }
      baseElement; //?
      /**
       * options is the object containing the `Component` function
       * ```ts
       * export const MyComponent = createComponent('button')({
       *   displayName: 'MyComponent',
       *   Component() {...}
       * })
       * ```
       */
      const options = node.initializer.arguments[0]; //?
      if (options && t.isObjectLiteralExpression(options)) {
        const signature = options.properties.find(
          n => n.name && t.isIdentifier(n.name) && n.name.text === 'Component'
        );
        if (signature) {
          const componentExpression = t.isMethodDeclaration(signature)
            ? signature
            : t.isPropertyAssignment(signature)
            ? signature.initializer
            : undefined;
          if (componentExpression && ts.isFunctionLike(componentExpression)) {
            const type = parser.checker.getTypeAtLocation(componentExpression.parameters[0]);
            const parameterDefaults = getDefaultsFromParameter(
              parser,
              componentExpression.parameters[0]
            ); //?
            const props = type.getProperties().map(symbol => {
              symbol.name; //?
              const propDeclaration = getValueDeclaration(symbol);
              const defaultValue =
                parameterDefaults[symbol.name] || getDefaultFromTags(symbol.getJsDocTags());

              return {
                ...(parser.getValueFromNode(getValueDeclaration(symbol)!) as ObjectProperty),
                defaultValue,
              };
            });

            return {
              kind: 'enhancedComponent',
              props,
              baseElement,
            } as EnhanceComponentValue;
          }
        }
      }
    }

    /**
     * Parse anything using `createComponent`
     */

    node; //?

    return undefined;
  }
);

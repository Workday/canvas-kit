import ts from 'typescript';
import {ComponentValue} from './customTypes';

import {
  createParserPlugin,
  DocParser,
  filterObjectProperties,
  getValueDeclaration,
  getDefaultFromTags,
  isObject,
} from '../docParser';

import t from '../traverse';
import {ObjectProperty, Value} from '../docTypes';

export const componentParser = createParserPlugin<ComponentValue>((node, parser) => {
  t.getKindNameFromNode(node); //?

  /**
   * We'll look for class components that extend from `React.Component` or `Component`
   *
   * ```tsx
   * class MyComponent extends React.Component<Props> {
   * }
   * ```
   */
  if (t.isClassDeclaration(node)) {
    // check if this is a `React.Component`
    if (
      node.heritageClauses &&
      node.heritageClauses[0] &&
      t.isHeritageClause(node.heritageClauses[0]) &&
      node.heritageClauses[0].types[0]
    ) {
      const clause = node.heritageClauses[0].types[0];
      if (
        (clause &&
          // `class A extends Component`
          t.isExpressionWithTypeArguments(clause) &&
          t.isIdentifier(clause.expression) &&
          clause.expression.text === 'Component') ||
        // `class A extends React.Component`
        (t.isPropertyAccessExpression(clause.expression) &&
          t.isIdentifier(clause.expression.expression) &&
          clause.expression.expression.text === 'React' &&
          t.isIdentifier(clause.expression.name) &&
          clause.expression.name.text === 'Component')
      ) {
        // The `typeArguments` are the generics: `React.Component<P>`
        if (
          clause.typeArguments &&
          clause.typeArguments[0] &&
          t.isTypeReference(clause.typeArguments[0])
        ) {
          const type = parser.checker.getTypeAtLocation(clause.typeArguments[0]);
          const defaultPropNode = (node.members.find(
            m =>
              t.isPropertyDeclaration(m) && t.isIdentifier(m.name) && m.name.text === 'defaultProps'
          ) as ts.PropertyDeclaration)?.initializer;

          const defaultProps = getDefaultsFromDefaultProps(parser, defaultPropNode);
          const props = getComponentProps(parser, type, defaultProps);

          /**
           * Get a displayName if there is one
           */
          const displayName: string = (node.members.find(
            m =>
              t.isPropertyDeclaration(m) &&
              t.isIdentifier(m.name) &&
              m.name.text === 'displayName' &&
              m.initializer &&
              t.isStringLiteral(m.initializer)
          ) as any)?.initializer.text;

          return {kind: 'component', props, displayName};
        }

        // We couldn't find any props
        return {
          kind: 'component',
          props: [],
        };
      }
    }
  }

  /**
   * Check all functions for a signature of a component
   */
  if (ts.isFunctionLike(node)) {
    // Get a signature and test the return type for JSX props
    const signature = parser.checker.getSignatureFromDeclaration(node);
    if (signature) {
      const returnType = signature.getReturnType();
      if (isComponent(returnType)) {
        if (signature.parameters[0]) {
          const declaration = getValueDeclaration(signature.parameters[0]);
          if (declaration && t.isParameter(declaration)) {
            const type = parser.checker.getTypeAtLocation(declaration);
            const defaults = getDefaultsFromObjectBindingPattern(parser, declaration.name); //?
            const props = getComponentProps(parser, type, defaults);

            return {
              kind: 'component',
              props,
            };
          }
        }

        'here'; //?

        // We couldn't find props
        return {
          kind: 'component',
          props: [],
        };
      }
    }
  }

  /**
   * The docParser would return `React.FC<Props>` as a type, but we want to evaluate `Props`
   * ```tsx
   * const A: React.FC<Props> = (props) => {
   * }
   * ```
   */
  if (
    t.isVariableDeclaration(node) &&
    node.type &&
    t.isTypeReference(node.type) &&
    t.isQualifiedName(node.type.typeName) &&
    t.isIdentifier(node.type.typeName.left) &&
    node.type.typeName.left.text === 'React' &&
    t.isIdentifier(node.type.typeName.right) &&
    (node.type.typeName.right.text === 'FC' ||
      node.type.typeName.right.text === 'FunctionComponent') &&
    node.initializer
  ) {
    // Force evaluation of the initializer. This will result in the function being evaluated as a
    // component
    return parser.getValueFromNode(node.initializer);
  }

  if (
    t.isVariableDeclaration(node) &&
    node.initializer &&
    t.isCallExpression(node.initializer) &&
    ((t.isIdentifier(node.initializer.expression) &&
      node.initializer.expression.text === 'forwardRef') ||
      (t.isPropertyAccessExpression(node.initializer.expression) &&
        t.isIdentifier(node.initializer.expression.expression) &&
        node.initializer.expression.expression.text === 'React' &&
        t.isIdentifier(node.initializer.expression.name) &&
        node.initializer.expression.name.text === 'forwardRef')) &&
    node.initializer.arguments.length &&
    ts.isFunctionLike(node.initializer.arguments[0])
  ) {
    // Force evaluation of the initializer. This will result in the function being evaluated as a
    // component
    return parser.getValueFromNode(node.initializer.arguments[0]);
  }

  return undefined;
});

/**
 * Evaluate the return type looking for a `React.ReactElement` type based on the `props`.
 */
export function isComponent(returnType: ts.Type) {
  if (returnType.isUnion()) {
    return returnType.types.some(isComponent);
  }
  if (isObject(returnType)) {
    return returnType.getProperties().some(s => s.name === 'props');
  }

  return false;
}

/**
 * Get the props of an interface. It is expected the type of the `Prop` interface has already been
 * created and passed down. Where props are defined is very specific to how a React component is
 * created.
 *
 * @param parser
 * @param signature The function like component containing the component's implementation
 * @param type The type of the props. We use a type because there are many ways the prop interface
 * @param defaultProps Optional record of found default props could be created
 */
export function getComponentProps(
  parser: DocParser<ComponentValue>,
  type: ts.Type,
  defaultProps: Record<string, Value> = {}
): ObjectProperty[] {
  const props = type
    .getProperties()
    .map(symbol => {
      symbol.getJsDocTags(); //?
      const defaultValue = defaultProps[symbol.name] || getDefaultFromTags(symbol.getJsDocTags()); //?

      const value = parser.getValueFromNode(getValueDeclaration(symbol)!);
      if (value.kind === 'property') {
        value.defaultValue = defaultValue;
      }

      return value;
    })
    .filter(filterObjectProperties);

  return props;
}

/**
 * A component might have a `defaultProps` literal. The `node` passed should be this node. If this
 * node is an `ObjectLiteralExpression`, we'll try to parse to extract default props
 */
export function getDefaultsFromDefaultProps(
  parser: DocParser,
  node?: ts.Node
): Record<string, Value> {
  if (node && t.isObjectLiteralExpression(node)) {
    return node.properties.reduce((result, property) => {
      if (t.isPropertyAssignment(property) && t.isIdentifier(property.name)) {
        result[property.name.text] = parser.getValueFromNode(property.initializer);
      }
      return result;
    }, {} as Record<string, Value>);
  }
  return {};
}

/**
 * A parameter might represent a `ObjectBindingPattern` which can be used to set defaults. This will
 * return all defaults found within the `ObjectBindingPattern` and return them as a map of the
 * property name to the `Value`. These defaults can be used to piece together a default. Also
 * `getDefaultFromTags` can be used to get defaults from JSDoc tags.
 */
export function getDefaultsFromObjectBindingPattern(
  parser: DocParser,
  node: ts.Node
): Record<string, Value> {
  if (t.isObjectBindingPattern(node)) {
    return node.elements.reduce((result, element) => {
      if (t.isBindingElement(element) && t.isIdentifier(element.name) && element.initializer) {
        // this might change in the future. If the default value isn't a literal expression, it is
        // much harder to deal with. For example, `{a = 'a'}` instead of `{a = getA(someInput)}`.
        // Until we figure out how to mark defaults for non-literals, this might be a limitation.
        if (ts.isLiteralExpression(element.initializer)) {
          result[element.name.escapedText as string] = parser.getValueFromNode(element.initializer);
        }
      }
      return result;
    }, {} as Record<string, Value>);
  }

  return {};
}

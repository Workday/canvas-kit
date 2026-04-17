import ts from 'typescript';

import {getFallbackVariable} from './getFallbackVariable';
import {parseNodeToStaticValue} from './parseNodeToStaticValue';
import {NestedStyleObject, TransformerContext} from './types';

export function parseObjectToStaticValue(
  node: ts.Node,
  context: TransformerContext
): NestedStyleObject {
  let styleObj: NestedStyleObject = {};

  if (ts.isObjectLiteralExpression(node)) {
    node.properties.forEach(property => {
      styleObj = {...styleObj, ...parsePropertyToStaticValue(property, context)};
    });
  }

  return wrapStyleObj(styleObj, context);
}

/**
 * Wrap all values and nested object values with a maybeWrapCSSVariables call
 */
function wrapStyleObj(styleObj: NestedStyleObject, context: TransformerContext): NestedStyleObject {
  for (const key in styleObj) {
    if (styleObj.hasOwnProperty(key)) {
      const value = styleObj[key];
      if (typeof value === 'object') {
        styleObj[key] = wrapStyleObj(value, context);
      }
      if (typeof value === 'string') {
        styleObj[key] = maybeWrapCSSVariables(value, context.names);
      }
    }
  }

  return styleObj;
}

function handleObjectTransforms(
  node: ts.Node,
  context: TransformerContext
): NestedStyleObject | undefined {
  return context.objectTransforms.reduce(
    (result, transformer) => {
      return result || transformer(node, context) || undefined;
    },
    undefined as undefined | NestedStyleObject
  );
}

function parsePropertyToStaticValue(node: ts.Node, context: TransformerContext): NestedStyleObject {
  const styleObj: NestedStyleObject = {};

  // check to see if there's an object transform for this node
  const obj = handleObjectTransforms(node, context);
  if (obj) {
    return obj;
  }

  // If there's a spread, we're expecting an object to be returned. We'll see if there's an object transform for this node
  if (ts.isSpreadAssignment(node)) {
    const obj = handleObjectTransforms(node.expression, context);

    if (obj) {
      return obj;
    }
  }

  // {...{key: 'value'}}
  if (ts.isSpreadAssignment(node) && ts.isObjectLiteralExpression(node.expression)) {
    // recurse to parse a nested ObjectLiteralExpression
    return parseObjectToStaticValue(node.expression, context);
  }

  // { name: value }
  if (ts.isPropertyAssignment(node)) {
    const key = ts.isIdentifier(node.name)
      ? node.name.text
      : parseNodeToStaticValue(node.name, context);
    if (key) {
      if (ts.isObjectLiteralExpression(node.initializer)) {
        // nested
        styleObj[key] = parseObjectToStaticValue(node.initializer, context);
      } else {
        styleObj[key] = parseNodeToStaticValue(node.initializer, context);
      }

      return styleObj;
    }
  }

  // { name: value } (types)
  if (ts.isPropertySignature(node)) {
    const key = ts.isIdentifier(node.name)
      ? node.name.text
      : parseNodeToStaticValue(node.name, context).toString();
    if (key) {
      if (key.includes('&') || key.startsWith(':')) {
        // nested
        styleObj[key] = parseObjectToStaticValue(node.type!, context);
      } else {
        styleObj[key] = parseNodeToStaticValue(node.type!, context).toString() || '';
      }

      return styleObj;
    }
  }

  // { name }
  if (ts.isShorthandPropertyAssignment(node)) {
    const key = node.name.text;

    styleObj[key] = parseNodeToStaticValue(node.name, context).toString() || '';

    return styleObj;
  }

  // { ...value }
  if (ts.isSpreadAssignment(node)) {
    // Spread assignments are a bit complicated to use the AST to figure out, so we'll ask the
    // TypeScript type checker.
    const type = context.checker.getTypeAtLocation(node.expression);
    return parseStyleObjFromType(type, context);
  }

  return styleObj;
}

/**
 * If we're here, we have a `ts.Type` that represents a style object. We try to parse a style object
 * from the AST, but we might have something that is more complicated like a function call or an
 * identifier that represents an object. It could be imported from another file.
 */
export function parseStyleObjFromType(type: ts.Type, context: TransformerContext) {
  const styleObj: Record<string, any> = {};

  // Gets all the properties of the type object
  return type.getProperties().reduce((result, property) => {
    const declaration = property.valueDeclaration;

    if (!declaration) {
      return result;
    }

    // we might have generics, so we'll use the type of the symbol instead of the type at the
    // declaration. This resolves generics like `T` into literal values if they exist.
    const propType = context.checker.getTypeOfSymbolAtLocation(property, declaration);

    if (propType.isStringLiteral()) {
      // This isn't a component variable, it is a static CSS variable
      result[property.name] = propType.value;
      return result;
    }

    if (propType.isNumberLiteral()) {
      result[property.name] = propType.value;
      return result;
    }

    return {
      ...result,
      ...parsePropertyToStaticValue(declaration, context),
    };
  }, styleObj);
}

/**
 * Wrap all unwrapped CSS Variables. For example, `{padding: '--foo'}` will be replaced with
 * `{padding: 'var(--foo)'}`. It also works on variables in the middle of the property.
 */
export function maybeWrapCSSVariables(
  input: string | number,
  names: Record<string, string>
): string | number {
  if (typeof input === 'number') {
    return input;
  }
  // matches an string starting with `--` that isn't already wrapped in a `var()`. It tries to match
  // any character that isn't a valid separator in CSS
  return input.replace(
    /([a-z]*[ (]*)(--[^\s;,'})]+)(\){0,1})/gi,
    (match: string, prefix: string, variable: string, postfix: string) => {
      // shortcut for var() wrappers that already have a fallback
      if (prefix.startsWith('var(') && postfix !== ')') {
        return match;
      }

      // find a possible fallback
      const fallbackVariable = getFallbackVariable(variable, names);
      const fallback = fallbackVariable
        ? `, ${maybeWrapCSSVariables(fallbackVariable, names)}`
        : '';

      // if this a var wrapper without a fallback
      if (prefix.startsWith('var(') && postfix === ')') {
        return `${prefix}${variable}${fallback}${postfix}`;
      }
      // if this is not a var wrapper at all
      return `${prefix}var(${variable}${fallback})${postfix}`;
    }
  );
}

import ts from 'typescript';
import {getFallbackVariable} from './getFallbackVariable';

import {parseNodeToStaticValue} from './parseNodeToStaticValue';

export type NestedStyleObject = {[key: string]: string | NestedStyleObject};

export function parseObjectToStaticValue(
  node: ts.Node,
  checker: ts.TypeChecker,
  prefix = 'css',
  variables: Record<string, string> = {}
): NestedStyleObject {
  let styleObj: NestedStyleObject = {};

  if (ts.isObjectLiteralExpression(node)) {
    node.properties.forEach(property => {
      styleObj = {...styleObj, ...parsePropertyToStaticValue(property, checker, prefix, variables)};
    });
  }

  return styleObj;
}

function parsePropertyToStaticValue(
  node: ts.Node,
  checker: ts.TypeChecker,
  prefix = 'css',
  variables: Record<string, string> = {}
): NestedStyleObject {
  const styleObj: NestedStyleObject = {};

  // { name: value }
  if (ts.isPropertyAssignment(node)) {
    const key = ts.isIdentifier(node.name)
      ? node.name.text
      : parseNodeToStaticValue(node.name, checker, prefix, variables); //?
    if (key) {
      if (ts.isObjectLiteralExpression(node.initializer)) {
        // nested
        styleObj[key] = parseObjectToStaticValue(node.initializer, checker, prefix, variables);
      } else {
        styleObj[key] = maybeWrapCSSVariables(
          parseNodeToStaticValue(node.initializer, checker, prefix, variables),
          variables
        );
        parseNodeToStaticValue(node.initializer, checker, prefix, variables); //?
      }

      return styleObj; //?
    }
  }

  // { name: value } (types)
  if (ts.isPropertySignature(node)) {
    const key = ts.isIdentifier(node.name)
      ? node.name.text
      : parseNodeToStaticValue(node.name, checker, prefix, variables);
    if (key) {
      if (key.includes('&') || key.startsWith(':')) {
        // nested
        styleObj[key] = parseObjectToStaticValue(node.type!, checker, prefix, variables);
      } else {
        styleObj[key] =
          maybeWrapCSSVariables(
            parseNodeToStaticValue(node.type!, checker, prefix, variables),
            variables
          ) || '';
      }

      return styleObj;
    }
  }

  // {...{key: 'value'}}
  if (ts.isSpreadAssignment(node) && ts.isObjectLiteralExpression(node.expression)) {
    // recurse to parse a nested ObjectLiteralExpression
    return parseObjectToStaticValue(node.expression, checker, prefix, variables); //?
  }

  // { ...value }
  if (ts.isSpreadAssignment(node)) {
    // Spread assignments are a bit complicated to use the AST to figure out, so we'll ask the
    // TypeScript type checker.
    const type = checker.getTypeAtLocation(node.expression);
    checker.typeToString(type); //?
    return parseStyleObjFromType(type, checker, prefix, variables);
  }

  return styleObj;
}

/**
 * If we're here, we have a `ts.Type` that represents a style object. We try to parse a style object
 * from the AST, but we might have something that is more complicated like a function call or an
 * identifier that represents an object. It could be imported from another file.
 */
export function parseStyleObjFromType(
  type: ts.Type,
  checker: ts.TypeChecker,
  prefix: string,
  variables: Record<string, string>
) {
  const styleObj: Record<string, any> = {};

  // Gets all the properties of the type object
  return type.getProperties().reduce((result, property) => {
    const declaration = property.valueDeclaration;

    // we might have generics, so we'll use the type of the symbol instead of the type at the
    // declaration. This resolves generics like `T` into literal values if they exist.
    const propType = checker.getTypeOfSymbolAtLocation(property, declaration);

    if (propType.isStringLiteral()) {
      // This isn't a component variable, it is a static CSS variable
      result[property.name] = propType.value;
      return result;
    }

    if (propType.isNumberLiteral()) {
      result[property.name] = `${propType.value}px`;
      return result;
    }
    return {
      ...result,
      ...parsePropertyToStaticValue(declaration, checker, prefix, variables),
    };
  }, styleObj);
}

/**
 * Wrap all unwrapped CSS Variables. For example, `{padding: '--foo'}` will be replaced with
 * `{padding: 'var(--foo)'}`. It also works on variables in the middle of the property.
 */
function maybeWrapCSSVariables(input: string, variables: Record<string, string>): string {
  // matches an string starting with `--` that isn't already wrapped in a `var()`. It tries to match
  // any character that isn't a valid separator in CSS
  return input.replace(
    /([a-z]*[ (]*)(--[^\s;,'})]+)/gi,
    (match: string, prefix: string, variable: string) => {
      if (prefix.startsWith('var(')) {
        return match;
      }
      variable; //?
      const fallbackVariable = getFallbackVariable(variable, variables); //?
      const fallback = fallbackVariable
        ? `, ${maybeWrapCSSVariables(fallbackVariable, variables)}`
        : '';
      return `${prefix}var(${variable}${fallback})`;
    }
  );
}

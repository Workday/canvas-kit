import ts from 'typescript';

import {base, brand} from '@workday/canvas-tokens-web';

import {maybeCSSVariable, parseNodeToStaticValue} from './parseNodeToStaticValue';

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
      : parseNodeToStaticValue(node.name, checker, prefix, variables);
    if (key) {
      if (ts.isObjectLiteralExpression(node.initializer)) {
        // nested
        styleObj[key] = parseObjectToStaticValue(node.initializer, checker, prefix, variables);
      } else {
        styleObj[key] =
          maybeCSSVariable(
            parseNodeToStaticValue(node.initializer, checker, prefix, variables),
            variables
          ) || '';
      }

      return styleObj;
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
        styleObj[key] = parseNodeToStaticValue(node.type!, checker, prefix, variables) || '';
      }

      return styleObj;
    }
  }

  // { ...focusRing() }
  /**
   * A spread assignment looks like:
   *
   * ```ts
   * {
   *   ...styles
   * }
   * ```
   *
   * https://ts-ast-viewer.com/#code/MYewdgzgLgBFCmBbADjAvDA3gMxCAXDAOQBGAhgE5EC+AUKJLAigEzpYB0Xzy1QA
   */
  if (ts.isSpreadAssignment(node)) {
    // Detect `focusRing` calls. This is temporary until we figure out a better way to do focus
    // rings that doesn't require a special entry in the transform function.
    //
    // TODO: implement a fully working type resolver for CSS variables or remove support for them an
    // remove all uses of `focusRing` from new styling code
    if (
      ts.isCallExpression(node.expression) &&
      ts.isIdentifier(node.expression.expression) &&
      node.expression.expression.text === 'focusRing'
    ) {
      const argumentObject = node.expression.arguments[0];
      // defaults
      const defaults = {
        width: '2px',
        separation: '0px',
        inset: undefined as undefined | string,
        innerColor: `var(${base.frenchVanilla100}, rgba(255,255,255,1))`,
        outerColor: `var(${brand.common.focusOutline}, rgba(8,117,225,1))`,
      };
      if (argumentObject && ts.isObjectLiteralExpression(argumentObject)) {
        argumentObject.properties.forEach(property => {
          if (ts.isPropertyAssignment(property) && ts.isIdentifier(property.name)) {
            defaults[property.name.text as keyof typeof defaults] = parseNodeToStaticValue(
              property.initializer,
              checker,
              prefix,
              variables
            );
          }
        });

        let boxShadow;
        switch (defaults.inset) {
          case 'outer':
            boxShadow = `inset 0 0 0 ${defaults.separation} ${defaults.outerColor}, inset 0 0 0 calc(${defaults.width} + ${defaults.separation}) ${defaults.innerColor}`;
            break;

          case 'inner':
            boxShadow = `inset 0 0 0 ${defaults.separation} ${defaults.innerColor}, 0 0 0 ${defaults.width} ${defaults.outerColor}`;
            break;

          default:
            boxShadow = `0 0 0 ${defaults.separation} ${defaults.innerColor}, 0 0 0 calc(${defaults.width} + ${defaults.separation}) ${defaults.outerColor}`;
            break;
        }

        return {boxShadow};
      }
    }
  }

  // { ...value }
  if (ts.isSpreadAssignment(node)) {
    // Spread assignments are a bit complicated to use the AST to figure out, so we'll ask the
    // TypeScript type checker.
    const type = checker.getTypeAtLocation(node.expression);
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

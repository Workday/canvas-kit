import {ObjectParameter, FunctionValue, SymbolValue} from './docTypes';
import {
  createParserPlugin,
  getValueDeclaration,
  getPackageName,
  defaultJSDoc,
  getSymbolFromNode,
  getFullJsDocComment,
} from './docParser';
import t from './traverse';

function capitalize(string: string) {
  return string[0].toUpperCase() + string.substring(1);
}

export const findModel = createParserPlugin((node, parser) => {
  t.getKindNameFromNode(node); //?

  /**
   * Replace submenus with symbols rather than types.
   *
   * For example:
   * ```ts
   * const menu = useMenuModel()
   *
   * const state = {
   *   menu
   * }
   * ```
   *
   * In this example, the `type` of `state.menu` will be `useMenuModel` instead of an object
   * representing the return type of `useMenuModel`
   *
   * Before:
   * ```json
   * {
   *   kind: 'object',
   *   properties: [
   *     {
   *       kind: 'parameter',
   *       name: 'state',
   *   // ...
   * }
   * ```
   *
   * After:
   * ```json
   * {
   *   kind: 'symbol',
   *   name: 'useMenuModel'
   * }
   * ```
   */
  if (t.isShorthandPropertyAssignment(node)) {
    const {checker} = parser;
    const symbol = getSymbolFromNode(checker, node);
    const declaration = getValueDeclaration(symbol);
    const name = symbol?.name || (t.isIdentifier(node.name) && node.name.escapedText);
    if (declaration && declaration.getSourceFile()) {
      // ShorthandPropertyAssignment doesn't give the original variable declaration
      const originalDeclaration = t(declaration.getSourceFile())
        .find('VariableDeclaration')
        .map(node => {
          if (
            t.isIdentifier(node.name) &&
            node.name.escapedText === name &&
            node.initializer &&
            t.isCallExpression(node.initializer) &&
            t.isIdentifier(node.initializer.expression) &&
            (node.initializer.expression.escapedText as string).includes('Model')
          ) {
            node.initializer.expression.escapedText; //?
            return {
              kind: 'symbol',
              name: node.initializer.expression.escapedText,
            } as SymbolValue;
          }
          return;
        })
        .filter(v => !!v)[0]; //?

      originalDeclaration; //?

      if (originalDeclaration) {
        const jsDoc = symbol ? getFullJsDocComment(checker, symbol) : defaultJSDoc;
        return {
          kind: 'parameter',
          name: symbol?.name || '',
          defaultValue: undefined,
          type: originalDeclaration,
          required: false,
          ...jsDoc,
        };
      }
    }
  }

  /**
   * Replace `typeof useMyModel.TConfig` with a symbol of `MyModelConfig`. This remaps the entire
   * type to point to a symbol of the model config instead.
   *
   * For example,
   * ```ts
   * defaultConfig: {
   *   menuConfig: {} as typeof useMyModel.TConfig
   * }
   * ```
   *
   * Before:
   * ```json
   * {
   *   kind: 'object',
   *   properties: [...]
   * }
   * ```
   *
   * After:
   * ```json
   * {
   *   kind: 'symbol',
   *   name: 'MyModelConfig'
   * }
   * ```
   */
  if (t.isTypeReference(node)) {
    const firstArgument = node.typeArguments?.[0];
    if (firstArgument && t.isTypeQuery(firstArgument) && t.isIdentifier(firstArgument.exprName)) {
      const modelName = firstArgument.exprName.escapedText as string;

      return {kind: 'symbol', name: modelName};
    }
  }

  if (
    t.isPropertyAssignment(node) &&
    t.isIdentifier(node.name) &&
    t.isAsExpression(node.initializer) &&
    t.isTypeQuery(node.initializer.type) &&
    t.isQualifiedName(node.initializer.type.exprName) &&
    t.isIdentifier(node.initializer.type.exprName.left) &&
    t.isIdentifier(node.initializer.type.exprName.right) &&
    // TConfig is special from models
    node.initializer.type.exprName.right.escapedText === 'TConfig'
  ) {
    const symbol = getSymbolFromNode(parser.checker, node);
    const jsDoc = (symbol && getFullJsDocComment(parser.checker, symbol)) || defaultJSDoc;
    return {
      kind: 'parameter',
      name: node.name.escapedText as string,
      defaultValue: parser.getValueFromNode(node.initializer.expression),
      required: false,
      type: {
        kind: 'symbol',
        name:
          (node.initializer.type.exprName.left.escapedText as string).replace('use', '') + 'Config',
      },
      ...jsDoc,
    };
  }

  /**
   * This parsing matcher handles models created using `createModelHook` and adds additional symbols
   * for use by other models or components.
   *
   * For example:
   * ```ts
   * const useMyModel = createModelHook({
   *   defaultConfig: {
   *     // ...
   *   },
   *   requiredConfig: {
   *     // ...
   *   }
   * })(config => {
   *   return {
   *     state: {
   *       // ...
   *     },
   *     events: {
   *       // ...
   *     }
   *   }
   * })
   * ```
   *
   * This node parser will add the following symbols:
   * - MyModelConfig
   * - MyModelState
   * - MyModelEvents
   *
   * These symbols will be used by the model itself as well as in other models that make this model
   * a subModel (including config) and components that use models. Without this parser, a model
   * would be a generic function.
   */
  if (
    t.isVariableDeclaration(node) &&
    node.initializer &&
    t.isIdentifier(node.name) &&
    t.isCallExpression(node.initializer) &&
    t.isCallExpression(node.initializer.expression) &&
    t.isIdentifier(node.initializer.expression.expression) &&
    node.initializer.expression.expression.escapedText === 'createModelHook'
  ) {
    // we have a model
    const modelName = (node.name.escapedText as string).replace('use', ''); //?

    const options = node.initializer.expression.arguments[0]; //?
    // let configProps: Record<string, Value[]> = {};

    const optionsType = parser.checker.getTypeAtLocation(options);
    const configProps = optionsType.getProperties().reduce((result, symbol) => {
      symbol; //?
      if (['defaultConfig', 'requiredConfig'].includes(symbol.getName())) {
        // The declaration of the config
        const declaration = getValueDeclaration(symbol);
        if (declaration) {
          result[symbol.getName()] = parser.checker
            .getTypeAtLocation(declaration)
            .getProperties()
            .map(p => {
              // Each property of the config
              const prop = getValueDeclaration(p);
              return {
                ...parser.getValueFromNode(prop!),
                required: symbol.getName() === 'requiredConfig',
              } as ObjectParameter;
            });
        }
      }
      return result;
    }, {} as Record<string, ObjectParameter[]>);

    const modelProps: Record<string, ObjectParameter[]> = {};
    const returnProps: Record<string, ObjectParameter> = {};
    const type = parser.checker.getTypeAtLocation(node.initializer.arguments[0]); //?
    const returnValue = type.getCallSignatures().map(s => {
      return s
        .getReturnType()
        .getProperties()
        .reduce((result, p) => {
          const declaration = getValueDeclaration(p);
          if (declaration) {
            p.getName(); //?
            t.getKindNameFromNode(declaration); //?
            declaration; //?
            if (['state', 'events'].includes(p.getName())) {
              modelProps[p.getName()] = parser.checker
                .getTypeAtLocation(declaration)
                .getProperties()
                .map(prop => {
                  prop.getName(); //?
                  t.getKindNameFromNode(getValueDeclaration(prop)!); //?
                  return parser.getValueFromNode(getValueDeclaration(prop)!) as ObjectParameter;
                });
            } else {
              returnProps[p.getName()] = parser.getValueFromNode(declaration) as ObjectParameter;
            }
          }
          return result;
        }, returnProps); //?
    });
    returnValue[0]; //?

    const {state, events} = modelProps;

    const fileName = node.getSourceFile().fileName;

    // Add special symbols
    parser.symbols.push({
      name: `${modelName}State`,
      packageName: getPackageName(fileName),
      fileName,
      ...defaultJSDoc,
      type: {
        kind: 'object',
        properties: state,
      },
    });
    parser.symbols.push({
      name: `${modelName}Events`,
      packageName: getPackageName(fileName),
      fileName,
      ...defaultJSDoc,
      type: {
        kind: 'object',
        properties: events,
      },
    });

    const eventConfig = events.reduce((result, event) => {
      const type = event.type as FunctionValue;
      event; //?
      // callback of the event
      result.push({
        ...event,
        defaultValue: undefined,
        name: `on${capitalize(event.name)}`,
        required: false,
        type: {
          ...type,
          parameters: [
            {
              ...defaultJSDoc,
              kind: 'parameter',
              name: 'state',
              required: true,
              type: {
                kind: 'symbol',
                name: `${modelName}State`,
                fileName,
              },
            } as ObjectParameter,
          ].concat(...type.parameters),
          returnType: {
            kind: 'primitive',
            value: 'void',
          },
        },
      });
      // guard of the event
      result.push({
        ...event,
        defaultValue: undefined,
        name: `should${capitalize(event.name)}`,
        required: false,
        type: {
          ...type,
          parameters: [
            {
              ...defaultJSDoc,
              kind: 'parameter',
              name: 'state',
              required: true,
              type: {
                kind: 'symbol',
                name: `${modelName}State`,
                fileName,
              },
            } as ObjectParameter,
          ].concat(...type.parameters),
          returnType: {
            kind: 'primitive',
            value: 'boolean',
          },
        },
      });

      return result;
    }, [] as ObjectParameter[]);

    parser.symbols.push({
      name: `${modelName}Config`,
      packageName: getPackageName(fileName),
      fileName,
      ...defaultJSDoc,
      type: {
        kind: 'object',
        properties: (configProps['defaultConfig'] || []).concat(
          configProps['requiredConfig'],
          eventConfig
        ),
      },
    });

    return {
      kind: 'model',
      defaultConfig: configProps['defaultConfig'] || [],
      requiredConfig: configProps['requiredConfig'] || [],
      state,
      events,
      modelProperties: Object.keys(returnProps).map(p => returnProps[p]),
    };
  }
  return;

  node; //?
});

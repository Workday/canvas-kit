import {ObjectParameter, FunctionValue} from './docTypes';
import {createParserPlugin, getValueDeclaration, getPackageName, defaultJSDoc} from './docParser';
import t from './traverse';

function capitalize(string: string) {
  return string[0].toUpperCase() + string.substring(1);
}

export const findModel = createParserPlugin((node, parser) => {
  t.getKindNameFromNode(node); //?
  if (t.isTypeReference(node)) {
    const firstArgument = node.typeArguments?.[0];
    if (firstArgument && t.isTypeQuery(firstArgument) && t.isIdentifier(firstArgument.exprName)) {
      const modelName = firstArgument.exprName.escapedText as string;

      return {kind: 'symbol', name: modelName};
    }
  }

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

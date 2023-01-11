import ts from 'typescript';
import {
  JSDoc,
  ExportedSymbol,
  Value,
  ModelValue,
  ObjectParameter,
  TypeMember,
  FunctionValue,
} from './docTypes';
import {
  createParserPlugin,
  getValueFromNode,
  getValueDeclaration,
  getPackageName,
  defaultJSDoc,
} from './findSymbols';
import t from './traverse';

function capitalize(string: string) {
  return string[0].toUpperCase() + string.substring(1);
}

export const findModel = createParserPlugin((checker, node, symbols) => {
  t.getKindNameFromNode(node); //?
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

    const optionsType = checker.getTypeAtLocation(options);
    const configProps = optionsType.getProperties().reduce((result, symbol) => {
      symbol; //?
      if (['defaultConfig', 'requiredConfig'].includes(symbol.getName())) {
        // The declaration of the config
        const declaration = getValueDeclaration(symbol);
        if (declaration) {
          result[symbol.getName()] = checker
            .getTypeAtLocation(declaration)
            .getProperties()
            .map(p => {
              // Each property of the config
              const prop = getValueDeclaration(p);
              return {
                ...getValueFromNode(checker, prop!),
                required: symbol.getName() === 'requiredConfig',
              } as ObjectParameter;
            });
        }
      }
      return result;
    }, {} as Record<string, ObjectParameter[]>);

    const modelProps: Record<string, ObjectParameter[]> = {};
    const returnProps: Record<string, ObjectParameter> = {};
    const type = checker.getTypeAtLocation(node.initializer.arguments[0]); //?
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
              modelProps[p.getName()] = checker
                .getTypeAtLocation(declaration)
                .getProperties()
                .map(prop => {
                  prop.getName(); //?
                  t.getKindNameFromNode(getValueDeclaration(prop)); //?
                  return getValueFromNode(checker, getValueDeclaration(prop)!) as ObjectParameter;
                });
            } else {
              returnProps[p.getName()] = getValueFromNode(checker, declaration) as ObjectParameter;
            }
          }
          return result;
        }, returnProps); //?
    });
    returnValue[0]; //?

    const {state, events} = modelProps;

    const fileName = node.getSourceFile().fileName;

    // Add special symbols
    symbols.push({
      name: `${modelName}State`,
      packageName: getPackageName(fileName),
      fileName,
      ...defaultJSDoc,
      type: {
        kind: 'object',
        properties: state,
      },
    });
    symbols.push({
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

    symbols.push({
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

// export function findModel(program: ts.Program, fileName: string): ExportedSymbol[] {
//   const docs: ExportedSymbol[] = [];
//   const checker = program.getTypeChecker();

//   const sourceFile = program.getSourceFile(fileName)!;
//   let name = '';

//   sourceFile.fileName; //?
//   const packageName = getPackageName(sourceFile.fileName);

//   t(sourceFile)
//     .find('VariableDeclaration')
//     .forEach(node => {
//       if (!isNodeExported(node)) {
//         return;
//       }

//       // check for the following format: `const {modelNookName} = createModelHook()` If we find this
//       // pattern, we want to extract {modelHookName} and we'll run the type checker to get the type
//       // for state, events, defaultConfig, and requiredConfig to make our external types nice and
//       // clean.
//       if (
//         node.initializer &&
//         t.isCallExpression(node.initializer) &&
//         t.isCallExpression(node.initializer.expression) &&
//         t.isIdentifier(node.initializer.expression.expression) &&
//         node.initializer.expression.expression.escapedText === 'createModelHook'
//       ) {
//         // extract the model name by dropping the `use` from `use{ModelName}`
//         if (t.isIdentifier(node.name)) {
//           name = node.name.text.replace('use', '').replace('Model', '');
//         }

//         // TODO: make object property access generic by using types from a node instead of specifically AST walking
//         // So instead looping over properties of an ObjectLiteralExpression, we extract the type a `node.initialize.expression`
//         // and loop over apparent properties. This should make generic property iteration no matter the AST node kind as long as it is an object

//         // get the `options` object from `createModelHook(options)`.
//         // Options contains `defaultConfig` and `requiredConfig`. We want to record those.
//         const options = node.initializer.expression.arguments[0];
//         let configProps: Record<string, Prop[]> = {};

//         // if `options` is an object literal expression, we want to loop over all properties
//         // these properties will be `defaultConfig`, `requiredConfig`, `defaultContext`, etc
//         if (t.isObjectLiteralExpression(options)) {
//           configProps = options.properties.reduce((result, prop) => {
//             if (t.isPropertyAssignment(prop) && t.isIdentifier(prop.name)) {
//               if (['defaultConfig', 'requiredConfig'].includes(prop.name.text)) {
//                 // A symbol was found and the property is `defaultConfig` or `requiredConfig`
//                 // Both these are supposed to be objects. We want to extract all properties of
//                 // these objects to record type information of each property
//                 result[prop.name.text] = getProperties(checker, prop.name);
//               }
//             }

//             return result;
//           }, configProps);
//         }

//         let returnProps: Record<string, {jsDoc: JSDoc; props: Prop[]}> = {};

//         const modelBody = node.initializer.arguments[0];
//         t(modelBody)
//           .find('ReturnStatement')
//           .forEach(r => {
//             if (r.expression) {
//               getProperties(checker, r.expression); //?
//             }
//             if (r.expression && t.isObjectLiteralExpression(r.expression)) {
//               // get state and events
//               returnProps = r.expression.properties.reduce((acc, prop) => {
//                 const identifier = getPropertyIdentifier(prop);
//                 if (identifier) {
//                   const jsDocComment = findDocComment(checker, identifier);
//                   acc[identifier.text] = {
//                     jsDoc: jsDocComment,
//                     props: getProperties(checker, identifier),
//                   };
//                 }
//                 return acc;
//               }, returnProps); //?
//             }
//           });

//         // TODO: Create/Inject state/event symbols and return them
//         docs.push({
//           type: 'object',
//           name: `${name}State`,
//           packageName,
//           ...returnProps.state.jsDoc,
//           props: returnProps.state.props,
//         });

//         docs.push({
//           type: 'object',
//           name: `${name}Events`,
//           packageName,
//           ...returnProps.events.jsDoc,
//           props: returnProps.events.props,
//         });

//         docs.push({
//           type: 'model',
//           name: `${name}Model`,
//           description: '',
//           packageName,
//           defaultConfig: (configProps.defaultConfig || []).map(p => ({...p, required: false})),
//           requiredConfig: (configProps.requiredConfig || []).map(p => ({
//             ...p,
//             defaultValue: undefined,
//             required: true,
//           })),
//           state: returnProps.state,
//           events: returnProps.events,
//         });
//       }
//     });

//   return docs;
// }

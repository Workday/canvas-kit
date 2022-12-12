import ts from 'typescript';
import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import _glob from 'glob';

import t from './traverse';
import {findDocs} from './findDocs';

const glob = promisify(_glob);

export function extractDocs(program: ts.Program, fileName: string) {
  return findDocs(program, fileName);
  const checker = program.getTypeChecker();

  // for (const sourceFile of program.getSourceFile(fileNames[0])) {
  //   if (sourceFile.isDeclarationFile) {
  //     console.log('sourceFile', sourceFile.statements.length)
  //     // ts.forEachChild(sourceFile, visit)
  //   }
  // }

  const sourceFile = program.getSourceFile(fileName)!;
  let modelName = '';

  t(sourceFile)
    .find('VariableDeclaration')
    .forEach(node => {
      // check for the following format: `const {modelNookName} = createModelHook()` If we find this
      // pattern, we want to extract {modelHookName} and we'll run the type checker to get the type
      // for state, events, defaultConfig, and requiredConfig to make our external types nice and
      // clean.
      if (
        node.initializer &&
        t.isCallExpression(node.initializer) &&
        t.isCallExpression(node.initializer.expression) &&
        t.isIdentifier(node.initializer.expression.expression) &&
        node.initializer.expression.expression.escapedText === 'createModelHook'
      ) {
        // extract the model name by dropping the `use` from `use{ModelName}`
        if (t.isIdentifier(node.name)) {
          modelName = node.name.text.replace('use', '');
        }

        // get the `options` object from `createModelHook(options)`.
        // Options contains `defaultConfig` and `requiredConfig`. We want to record those.
        const options = node.initializer.expression.arguments[0];

        // if `options` is an object literal expression, we want to loop over all properties
        // these properties will be `defaultConfig`, `requiredConfig`, `defaultContext`, etc
        if (t.isObjectLiteralExpression(options)) {
          options.properties.reduce((result, prop) => {
            if (t.isPropertyAssignment(prop) && t.isIdentifier(prop.name)) {
              prop.name.text; //?
              // We need to get a symbol of the identifier. The identifier is the `prop.name`
              const symbol = checker.getSymbolAtLocation(prop.name);
              symbol?.valueDeclaration.kind; //?
              const config: Record<string, ts.Node> = {};
              // const configDocs = Record<>
              let defaultConfig: ts.InterfaceDeclaration;

              if (symbol && ['defaultConfig', 'requiredConfig'].includes(prop.name.text)) {
                // A symbol was found and the property is `defaultConfig` or `requiredConfig`
                // Both these are supposed to be objects. We want to extract all properties of
                // these objects to record type information of each property
                const properties = checker
                  .getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration)
                  .getApparentProperties()
                  .map(p => {
                    const type = checker.getTypeOfSymbolAtLocation(p, p.valueDeclaration!);
                    checker.typeToString(type); //?
                    const constraint = type.getConstraint();
                    let unionValues: string[] = [];
                    if (constraint && constraint.isUnion()) {
                      unionValues = constraint.types.map(t => {
                        if (t.isStringLiteral()) return `"${t.value}"`;
                        if (t.isNumberLiteral()) return `${t.value}`;
                        return checker.typeToString(t);
                      }); //?
                    }

                    return p;
                  });

                // defaultConfig = ts.factory
              }
            }

            return result;
          }, {});
        }
      }
    });

  modelName; //?
  // const str = find(sourceFile, node => {
  //   return (t.isCallExpression(node) && node.expression) && t.isPropertyAccessExpression(node.expression) && node.expression.name.escapedText === 'log'
  // })
  // str //?

  // const factory = ts.factory

  // str!.arguments = [factory.createStringLiteral("bar1")]

  // sourceFile //?

  // program.emit(
  //   program
  //     .getSourceFiles()
  //     .find(
  //       f =>
  //         f.fileName ===
  //         '/home/nicholas/projects/canvas-kit/modules/react/popup/lib/hooks/usePopupModel.ts'
  //     )
  // );
}

const srcFolder = path.join(__dirname, '../../../');

export function getConfig() {
  const tsconfigPath = ts.findConfigFile(__dirname, ts.sys.fileExists)!;

  __dirname; //?

  const basePath = path.dirname(tsconfigPath);
  const {config, error} = ts.readConfigFile(tsconfigPath, filename =>
    fs.readFileSync(filename, 'utf8')
  );

  const {options, errors} = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    basePath,
    {},
    tsconfigPath
  );

  return options;
}

srcFolder; //?

// glob(`${srcFolder}/modules/**/*.{ts,tsx}`, {
//   ignore: ['**/examples/**', '**/spec/**', '**/stories/**', '**/codemod/**', '**/docs/**'],
// })
//   .then(files => {
//     files.length; //?
//     const fileNames = [
//       '/Users/nicholas.boll/projects/canvas-kit/modules/labs-react/combobox/lib/AutocompleteList.tsx',
//     ];
//     const program = ts.createProgram(files, getConfig());
//     return files.flatMap(fileName => {
//       console.log(fileName); //?
//       return findDocs(program, fileName);
//     });
//   })
//   .then(docs => {
//     docs; //?
//     return fs.promises.writeFile('docs.json', JSON.stringify(docs, null, '  '));
//   });

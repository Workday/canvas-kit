import {API, FileInfo, Identifier, ObjectPattern, Options} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';

const keys = <T extends object>(input: T) => Object.keys(input) as (keyof T)[];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap} = getImportRenameMap(j, root);
  if (!containsCanvasImports) {
    return file.source;
  }

  // inverse the import map
  const imports = Object.keys(importMap).reduce((result, key) => {
    result[importMap[key]] = key;
    return result;
  }, {} as Record<string, any>);

  root.find(j.CallExpression).forEach(nodePath => {
    const {value} = nodePath;
    // check if the identifier was imported from CK AND follows the `use{*}Model` naming convention
    if (
      value.callee.type === 'Identifier' &&
      /use[a-zA-Z]+Model/.test(imports[value.callee.name])
    ) {
      // loop over all the arguments of the `use{*}Model` hook
      value.arguments.forEach(argument => {
        argument.type; //?
        // look for object expressions: `use{*}Model({ /* here */ })`
        if (argument.type === 'ObjectExpression') {
          // loop over all the properties looking for `ObjectMethod` and `ObjectProperties` where
          // the value is a function matching `on{*}` naming convention
          argument.properties.forEach(property => {
            property.type; //?
            // If it is an `ObjectMethod`
            if (
              (property.type === 'ObjectMethod' ||
                (property.type === 'ObjectProperty' &&
                  property.value.type === 'ArrowFunctionExpression')) &&
              property.key.type === 'Identifier'
            ) {
              const propertyName = property.key.name; //?
              const params =
                property.type === 'ObjectMethod'
                  ? property.params
                  : property.value.type === 'ArrowFunctionExpression'
                  ? property.value.params
                  : [];

              // create a mapping for param names of callbacks and guards
              const paramMapping = {
                on: ['data', 'state'],
                should: ['data', 'prevState'],
              };
              const finalParams: (Identifier | ObjectPattern)[] = [];

              keys(paramMapping).forEach(key => {
                if (new RegExp(`${key}[A-Za-z]+`).test(propertyName)) {
                  params.forEach(param => {
                    if (param.type === 'ObjectPattern') {
                      param.properties.forEach(property => {
                        if (
                          property.type === 'ObjectProperty' &&
                          property.key.type === 'Identifier'
                        ) {
                          if (
                            property.value.type === 'Identifier' ||
                            property.value.type === 'ObjectPattern'
                          ) {
                            const index = paramMapping[key].indexOf(property.key.name);
                            finalParams[index] = property.value;
                          }
                        }
                      });
                    }
                  });

                  if (property.type === 'ObjectMethod') {
                    property.params = finalParams;
                  } else if (
                    property.type === 'ObjectProperty' &&
                    property.value.type === 'ArrowFunctionExpression'
                  ) {
                    property.value.params = finalParams;
                  }
                }
              });
              // if (/on[A-Za-z]+/.test(propertyName)) {
              //   let dataParam: Identifier | ObjectPattern | undefined;
              //   let stateParam: Identifier | ObjectPattern | undefined;
              //   params.forEach(param => {
              //     if (param.type === 'ObjectPattern') {
              //       param.properties.forEach(property => {
              //         if (
              //           property.type === 'ObjectProperty' &&
              //           property.key.type === 'Identifier'
              //         ) {
              //           if (
              //             property.value.type === 'Identifier' ||
              //             property.value.type === 'ObjectPattern'
              //           ) {
              //             if (property.key.name === 'data') {
              //               dataParam = property.value;
              //             }
              //             if (property.key.name === 'state') {
              //               stateParam = property.value;
              //             }
              //           }
              //         }
              //       });
              //     }
              //   });

              //   params.length = 0;
              //   if (dataParam) {
              //     params.push(dataParam);
              //   }
              //   if (stateParam) {
              //     params.push(stateParam);
              //   }

              //   if (property.type === 'ObjectMethod') {
              //     property.params = params;
              //   } else if (
              //     property.type === 'ObjectProperty' &&
              //     property.value.type === 'ArrowFunctionExpression'
              //   ) {
              //     property.value.params = params;
              //   }
              // }
            }
          });
        }
      });
    }
  });

  return root.toSource();
}

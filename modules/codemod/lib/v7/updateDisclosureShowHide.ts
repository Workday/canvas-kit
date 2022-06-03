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

  const disclosureModels = [
    'useDisclosureModel',
    'usePopupModel',
    'useModalModel',
    'useDialogModel',
  ] as const;

  // inverse the import map. It is more useful this way for this function
  const imports = Object.keys(importMap).reduce((result, key) => {
    result[importMap[key]] = key;
    return result;
  }, {} as Record<string, any>);

  root.find(j.CallExpression).forEach(nodePath => {
    const {value} = nodePath;
    // check if the identifier was imported from CK AND follows the `use{*}Model` naming convention
    if (
      value.callee.type === 'Identifier' &&
      disclosureModels.includes(imports[value.callee.name])
    ) {
      // loop over all the arguments of the `use{*}Model` hook
      value.arguments.forEach(argument => {
        // look for object expressions: `use{*}Model({ /* here */ })`
        if (argument.type === 'ObjectExpression') {
          // loop over all the properties looking for `ObjectMethod` and `ObjectProperties` where
          // the value is a function matching `on{*}` or `should{*}` naming convention
          argument.properties.forEach(property => {
            // If it is an `ObjectMethod` or an `ObjectProperty` with an arrow function expression:
            // {
            //   onShow() {}, // ObjectMethod
            //   onHide: () => {}, ObjectProperty with arrow function expression
            // }
            if (
              (property.type === 'ObjectMethod' ||
                (property.type === 'ObjectProperty' &&
                  property.value.type === 'ArrowFunctionExpression')) &&
              property.key.type === 'Identifier'
            ) {
              const propertyName = property.key.name;
              // Both types have a `params`, but are at different places in the AST
              const params =
                property.type === 'ObjectMethod'
                  ? property.params
                  : property.value.type === 'ArrowFunctionExpression'
                  ? property.value.params
                  : [];

              // create a mapping for param names of callbacks and guards. This makes the logic more
              // difficult to follow, but decreases duplication
              const paramMapping = {
                on: ['event'],
                should: ['event'],
              };

              // We will be overriding the params with this variable later
              const finalParams: (Identifier | ObjectPattern)[] = [];

              // loop over each `paramMapping` type. `on*` and `should*` functions have different signatures
              keys(paramMapping).forEach(key => {
                // matches `onShow` and `shouldShow`
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
                            // use `property.value` instead of `property.key.name` in case they
                            // renamed it example `shouldShow({ data: myData })`. The key name is
                            // `data` while the value is `myData`
                            finalParams[index] = property.value;
                          }
                        }
                      });
                    }
                  });

                  // `ObjectMethod` and `ObjectProperty` have params in a different place in the
                  // AST, so apply `finalParams` where appropriate
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
            }
          });
        }
      });
    }
  });

  return root.toSource();
}

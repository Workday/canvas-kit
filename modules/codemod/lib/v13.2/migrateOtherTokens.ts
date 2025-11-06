import {Identifier, Transform} from 'jscodeshift';
import {
  addMissingImports,
  filterOutImports,
  getImports,
  transformObjectPropertyRecursively,
} from './utils';
import {mapping} from './mapping';

type DeclarationType = {[key: string]: any};

const canvasImportSources = [
  '@workday/canvas-kit-styling',
  '@workday/canvas-kit-react/tokens',
  '@workday/canvas-space-web',
];

const tokens = ['space', 'borderRadius'] as 'space' | 'borderRadius'[];

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  let importDeclaration: DeclarationType = {};
  const checkImport = (value: any) => Object.keys(importDeclaration).includes(value);

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => canvasImportSources.includes(value)},
    })
    .forEach(nodePath => {
      importDeclaration = {
        ...importDeclaration,
        ...getImports(nodePath),
      };
    });

  if (!Object.values(importDeclaration).some(value => tokens.includes(value))) {
    return root.toSource();
  }

  root
    .find(j.CallExpression, {
      callee: {
        type: 'Identifier',
      },
    })
    .forEach(nodePath => {
      const name = (nodePath.value.callee as Identifier).name;
      const stylesDeclaration = nodePath.value.arguments[0];

      const isCanvasKitStyling =
        importDeclaration[name] === 'createStyles' || importDeclaration[name] === 'createStencil';

      if (stylesDeclaration?.type === 'ObjectExpression') {
        stylesDeclaration.properties = stylesDeclaration.properties.map((prop: any) =>
          transformObjectPropertyRecursively(
            {j, root},
            prop,
            importDeclaration,
            isCanvasKitStyling,
            [...tokens]
          )
        );
      }
    });

  root
    .find(j.MemberExpression, (value: any) => {
      return (
        value.type === 'MemberExpression' &&
        ((value.object.type === 'MemberExpression' &&
          value.object.object.type === 'MemberExpression' &&
          checkImport(value.object.object.object.name)) ||
          checkImport(value.object.name))
      );
    })
    .replaceWith(nodePath => {
      const mainWrapper = nodePath.value.object;

      if (
        mainWrapper.type === 'Identifier' &&
        tokens.includes(importDeclaration[mainWrapper.name])
      ) {
        const mainName = mainWrapper.name;
        const lowestProperty = nodePath.value.property;

        const importedName = importDeclaration[mainName];
        const map = mapping[importedName as keyof typeof mapping];

        if (
          ['space', 'borderRadius'].includes(importedName) &&
          map?.type === 'system' &&
          lowestProperty.type === 'Identifier'
        ) {
          const newValue = map.keys[lowestProperty.name as keyof typeof map.keys];

          if (!newValue) {
            return nodePath.value;
          }

          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
          );

          return j.callExpression(j.identifier('cssVar'), [
            j.memberExpression(
              j.memberExpression(j.identifier(map.type), j.identifier(map.name)),
              j.identifier(map.keys[lowestProperty.name as keyof typeof map.keys])
            ),
          ]);
        }
      }

      return nodePath.value;
    });

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => canvasImportSources.includes(value)},
    })
    .forEach(nodePath => {
      filterOutImports({root, j}, nodePath, tokens);
    });

  return root.toSource();
};

export default transform;

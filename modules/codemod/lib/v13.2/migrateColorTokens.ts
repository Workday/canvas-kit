import {Identifier, Transform} from 'jscodeshift';
import {addMissingImports, filterOutImports, transformObjectPropertyRecursively} from './utils';
import {mapping} from './mapping';

type DeclarationType = {[key: string]: any};

const canvasImportSources = ['@workday/canvas-kit-styling', '@workday/canvas-kit-react/tokens'];

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
      importDeclaration = {...importDeclaration, ...filterOutImports(nodePath)};
    });

  if (!Object.values(importDeclaration).includes('colors')) {
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

      if (stylesDeclaration.type === 'ObjectExpression') {
        stylesDeclaration.properties = stylesDeclaration.properties.map((prop: any) =>
          transformObjectPropertyRecursively({j, root}, prop, importDeclaration, isCanvasKitStyling)
        );
      }
    });

  root.find(j.ObjectExpression).forEach(nodePath => {
    nodePath.value.properties = nodePath.value.properties.map((prop: any) =>
      transformObjectPropertyRecursively({j, root}, prop, importDeclaration)
    );
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

      if (mainWrapper.type === 'Identifier' && importDeclaration[mainWrapper.name] !== 'type') {
        const mainObject = mainWrapper;
        const mainName = mainObject.name;
        const lowestProperty = nodePath.value.property;

        const importedName = importDeclaration[mainName];
        const map = mapping[importedName as keyof typeof mapping];

        if (map.type === 'base' && lowestProperty.type === 'Identifier') {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-tokens-web', specifiers: ['base']}
          );

          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );

          return j.callExpression(j.identifier('cssVar'), [
            j.memberExpression(j.identifier(map.type), j.identifier(lowestProperty.name)),
          ]);
        }
      }

      return nodePath;
    });

  return root.toSource();
};

export default transform;

import {Identifier, Transform} from 'jscodeshift';
import {
  addMissingImports,
  filterOutImports,
  transformObjectPropertyRecursively,
  varToMemberExpression,
} from './utils';
import {mapping} from './mapping';

type DeclarationType = {[key: string]: any};

const canvasImportSources = [
  '@workday/canvas-kit-styling',
  '@workday/canvas-kit-react/tokens',
  '@workday/canvas-colors-web',
];

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
      importDeclaration = {...importDeclaration, ...filterOutImports(nodePath, 'colors')};
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

      if (stylesDeclaration?.type === 'ObjectExpression') {
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
      // Matches: commonColors.background
      const isTwoParts =
        value.type === 'MemberExpression' &&
        value.object.type === 'Identifier' &&
        checkImport(value.object.name);

      // Matches: inputColors.disabled.border
      const isThreeParts =
        value.type === 'MemberExpression' &&
        value.object.type === 'MemberExpression' &&
        value.object.object.type === 'Identifier' &&
        checkImport(value.object.object.name);

      return isTwoParts || isThreeParts;
    })
    .replaceWith(nodePath => {
      const mainWrapper = nodePath.value.object;

      if (mainWrapper.type === 'MemberExpression') {
        const mainObject = mainWrapper.object;
        const mainName = mainObject.type === 'Identifier' ? mainObject.name : '';
        const mainProperty = mainWrapper.property;
        const lowestProperty = nodePath.value.property;

        const importedName = importDeclaration[mainName];
        const map = mapping[importedName as keyof typeof mapping];

        if (
          map?.type === 'system' &&
          importedName &&
          importedName.toLowerCase().includes('colors') &&
          mainProperty.type === 'Identifier' &&
          lowestProperty.type === 'Identifier'
        ) {
          const innerGroup = map.keys[mainProperty.name as keyof typeof map.keys] || {};
          const token = innerGroup[lowestProperty.name as keyof typeof innerGroup];

          if (token) {
            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
            );

            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
            );

            return j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, token)]);
          }
        }
      }

      if (
        mainWrapper.type === 'Identifier' &&
        importDeclaration[mainWrapper.name]?.toLowerCase().includes('colors')
      ) {
        const mainObject = mainWrapper;
        const mainName = mainObject.name;
        const lowestProperty = nodePath.value.property;

        const importedName = importDeclaration[mainName];
        const map = mapping[importedName as keyof typeof mapping];

        if (
          map?.type === 'system' &&
          lowestProperty.type === 'Identifier' &&
          importedName !== 'inputColors'
        ) {
          const token = map.keys[lowestProperty.name as keyof typeof map.keys];

          if (token && typeof token === 'string') {
            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
            );

            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
            );

            return j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, token)]);
          }
        }

        if (map?.type === 'base' && lowestProperty.type === 'Identifier') {
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

      return nodePath.value;
    });

  return root.toSource();
};

export default transform;

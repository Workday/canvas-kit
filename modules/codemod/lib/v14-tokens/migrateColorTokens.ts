import {Identifier, Transform} from 'jscodeshift';
import {addMissingImports, filterOutImports} from '../v13.2/utils';
import {transformObjectPropertyRecursively} from './utils/transformObjectPropertyRecursively';
import {mapping} from '../v13.2/mapping';
import baseMapping from './baseMapping';

type DeclarationType = {[key: string]: any};

const canvasImportSources = [
  '@workday/canvas-kit-styling',
  '@workday/canvas-kit-react/tokens',
  '@workday/canvas-tokens-web',
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
      importDeclaration = {...importDeclaration, ...filterOutImports(nodePath)};
    });

  if (
    !Object.values(importDeclaration).some(
      importedValue => importedValue === 'colors' || importedValue === 'base'
    )
  ) {
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
        checkImport(value.object.name) &&
        Object.keys(baseMapping).includes(value.property.name)
      );
    })
    .replaceWith(nodePath => {
      const mainWrapper = nodePath.value.object;

      if (mainWrapper.type === 'Identifier' && importDeclaration[mainWrapper.name] !== 'type') {
        const mainObject = mainWrapper;
        const mainName = mainObject.name;
        const lowestProperty = nodePath.value.property;

        const importedName = importDeclaration[mainName];
        const map =
          importedName === 'base' ? {type: 'base'} : mapping[importedName as keyof typeof mapping];

        if (map.type === 'base' && lowestProperty.type === 'Identifier') {
          const colorName = baseMapping[lowestProperty.name as keyof typeof baseMapping];

          if (mainName === 'colors') {
            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-tokens-web', specifiers: ['base']}
            );

            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
            );

            return j.callExpression(j.identifier('cssVar'), [
              j.memberExpression(
                j.identifier(map.type),
                j.identifier(colorName || lowestProperty.name)
              ),
            ]);
          }

          if (mainName === 'base') {
            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-tokens-web', specifiers: ['base']}
            );

            return j.memberExpression(j.identifier(map.type), j.identifier(colorName));
          }
        }
      }

      return nodePath;
    });

  // Filter out base imports if no base tokens are used
  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => canvasImportSources.includes(value)},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.filter(specifier => {
        if (specifier.type === 'ImportSpecifier' && specifier.local) {
          const localName = specifier.local.name.toString();
          const importedName = specifier.imported.name.toString();

          if (importedName === 'base') {
            const nodes = root
              .find(j.MemberExpression, {
                object: {
                  type: 'Identifier',
                  name: localName,
                },
              })
              .nodes();

            return nodes.length;
          }
        }

        return true;
      });
    });
  return root.toSource();
};

export default transform;

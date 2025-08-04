import {Identifier, MemberExpression, Transform} from 'jscodeshift';
import {addMissingImports, filterOutImports, varToMemberExpression} from './utils';
import {mapping, systemColors} from './mapping';

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

  if (
    !Object.values(importDeclaration).some(value => value === 'space' || value === 'borderRadius')
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
      addMissingImports(
        {j, root},
        {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
      );

      const name = (nodePath.value.callee as Identifier).name;
      const stylesDeclaration = nodePath.value.arguments[0];

      const isCanvasKitStyling =
        importDeclaration[name] === 'createStyles' || importDeclaration[name] === 'createStencil';

      if (stylesDeclaration.type === 'ObjectExpression') {
        const transformProperty = (property: any): any => {
          if (
            property.type === 'ObjectProperty' &&
            property.key.type === 'Identifier' &&
            property.value.type === 'MemberExpression' &&
            property.value.object.type === 'Identifier' &&
            property.value.property.type === 'Identifier' &&
            importDeclaration[property.value.object.name] === 'colors'
          ) {
            const key = property.key.name;
            const tokens = Object.entries(systemColors).find(([blockKey]) =>
              blockKey.split(',').some(prop => prop === key)
            )?.[1];

            const {property: value} = property.value;
            const colorToken = tokens?.[value.name as keyof typeof tokens];

            if (colorToken) {
              if (!isCanvasKitStyling) {
                addMissingImports(
                  {j, root},
                  {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
                );
              }

              return j.objectProperty(
                j.identifier(key),
                isCanvasKitStyling
                  ? varToMemberExpression(j, colorToken)
                  : j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, colorToken)])
              );
            }
          }

          if (property.type === 'ObjectProperty' && property.value.type === 'TemplateLiteral') {
            const templateLiteral = property.value;
            const transformedQuasis = templateLiteral.quasis.map((quasi: string) => quasi);
            const transformedExpressions = templateLiteral.expressions.map(
              (expr: MemberExpression) => {
                if (
                  expr.type === 'MemberExpression' &&
                  expr.object.type === 'Identifier' &&
                  expr.property.type === 'Identifier' &&
                  importDeclaration[expr.object.name] === 'colors'
                ) {
                  const tokens = Object.entries(systemColors).find(([blockKey]) =>
                    blockKey.split(',').some(prop => prop === property.key.name)
                  )?.[1];

                  const colorToken = tokens?.[expr.property.name as keyof typeof tokens];

                  if (colorToken) {
                    addMissingImports(
                      {j, root},
                      {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
                    );

                    return j.callExpression(j.identifier('cssVar'), [
                      varToMemberExpression(j, colorToken),
                    ]);
                  }
                }
                return expr;
              }
            );

            return j.objectProperty(
              property.key,
              j.templateLiteral(transformedQuasis, transformedExpressions)
            );
          }

          if (property.type === 'ObjectProperty' && property.value.type === 'ObjectExpression') {
            return j.objectProperty(
              property.key,
              j.objectExpression(property.value.properties.map(transformProperty))
            );
          }

          return property;
        };

        stylesDeclaration.properties = stylesDeclaration.properties.map(transformProperty);
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

      if (mainWrapper.type === 'Identifier' && importDeclaration[mainWrapper.name] !== 'type') {
        const mainObject = mainWrapper;
        const mainName = mainObject.name;
        const lowestProperty = nodePath.value.property;

        const importedName = importDeclaration[mainName];
        const map = mapping[importedName as keyof typeof mapping];
        if (importedName !== 'depth') {
          if (map.type === 'system' && lowestProperty.type === 'Identifier') {
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
      }

      return nodePath;
    });

  return root.toSource();
};

export default transform;

import {Transform} from 'jscodeshift';
import {addMissingImports, filterOutImports} from './utils';

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

  if (!Object.values(importDeclaration).includes('depth')) {
    return root.toSource();
  }

  root
    .find(j.SpreadElement, {
      argument: {
        type: 'MemberExpression',
        object: {
          type: 'Identifier',
          name: 'depth',
        },
        property: {
          type: 'NumericLiteral',
        },
      },
    })
    .replaceWith(nodePath => {
      const argument = nodePath.value.argument;
      if (argument.type === 'MemberExpression' && argument.property.type === 'NumericLiteral') {
        const depthValue = argument.property.value;

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        if (depthValue > 0) {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );
        }

        return depthValue > 0
          ? j.objectProperty(
              j.identifier('boxShadow'),
              j.callExpression(j.identifier('cssVar'), [
                j.memberExpression(
                  j.memberExpression(j.identifier('system'), j.identifier('depth')),
                  j.numericLiteral(depthValue),
                  true
                ),
              ])
            )
          : j.objectProperty(j.identifier('boxShadow'), j.literal('none'));
      }

      return nodePath;
    });

  root
    .find(j.MemberExpression, (value: any) => {
      return (
        value.type === 'MemberExpression' &&
        value.property.name === 'boxShadow' &&
        checkImport(value.object.object.name)
      );
    })
    .replaceWith(nodePath => {
      if (
        nodePath.value.object.type === 'MemberExpression' &&
        nodePath.value.object.object.type === 'Identifier' &&
        nodePath.value.object.property.type === 'NumericLiteral'
      ) {
        const value = nodePath.value.object.property.value;

        if (value.toString() !== '0') {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );

          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
          );
        }

        return value.toString() === '0'
          ? j.literal('none')
          : j.callExpression(j.identifier('cssVar'), [
              j.memberExpression(
                j.memberExpression(j.identifier('system'), j.identifier('depth')),
                j.numericLiteral(value),
                true
              ),
            ]);
      }

      return nodePath;
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
        if (importedName === 'depth' && lowestProperty.type === 'NumericLiteral') {
          const isZero = lowestProperty.value.toString() === '0';

          if (!isZero) {
            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
            );

            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
            );
          }

          return j.objectExpression([
            j.property(
              'init',
              j.identifier('boxShadow'),
              isZero
                ? j.literal('none')
                : j.callExpression(j.identifier('cssVar'), [
                    j.memberExpression(
                      j.memberExpression(j.identifier('system'), j.identifier('depth')),
                      j.numericLiteral(lowestProperty.value),
                      true
                    ),
                  ])
            ),
          ]);
        }
      }

      return nodePath;
    });

  return root.toSource();
};

export default transform;

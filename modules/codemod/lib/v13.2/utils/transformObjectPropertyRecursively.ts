import {mapping, paletteNames, systemColors} from '../mapping';
import {addMissingImports} from './addMissingImports';
import {varToMemberExpression} from './varToMemberExpression';

export const transformObjectPropertyRecursively = (
  {j, root}: any,
  property: any,
  importDeclaration: {[key: string]: any},
  isCanvasKitStyling?: boolean,
  tokenTypes?: string[]
): any => {
  // Helper to create object property preserving computed flag
  const createObjectProperty = (key: any, value: any) => {
    const prop = j.objectProperty(key, value);
    // Preserve computed flag: if explicitly true, or if key is not a simple literal/identifier
    if (
      property.computed === true ||
      (property.key?.type !== 'Identifier' &&
        property.key?.type !== 'StringLiteral' &&
        property.key?.type !== 'NumericLiteral')
    ) {
      prop.computed = true;
    }
    return prop;
  };

  if (
    property.type === 'ObjectProperty' &&
    property.key.type === 'Identifier' &&
    property.value.type === 'MemberExpression' &&
    property.value.object.type === 'Identifier' &&
    property.value.property.type === 'Identifier'
  ) {
    const importedTokenName = importDeclaration[property.value.object.name];

    // Handle colors tokens
    if (importedTokenName === 'colors' && (!tokenTypes || tokenTypes.includes('colors'))) {
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

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        return createObjectProperty(
          property.key,
          isCanvasKitStyling
            ? varToMemberExpression(j, colorToken)
            : j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, colorToken)])
        );
      }
    }

    // Handle space and borderRadius tokens
    if (
      tokenTypes &&
      tokenTypes.includes(importedTokenName) &&
      ['space', 'borderRadius'].includes(importedTokenName)
    ) {
      const map = mapping[importedTokenName as keyof typeof mapping];
      const propertyName = property.value.property.name;

      if (map?.type === 'system' && map.keys) {
        const newValue = map.keys[propertyName as keyof typeof map.keys];

        if (newValue) {
          if (!isCanvasKitStyling) {
            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
            );
          }

          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
          );

          const tokenPath = j.memberExpression(
            j.memberExpression(j.identifier(map.type), j.identifier(map.name)),
            j.identifier(newValue)
          );

          return createObjectProperty(
            property.key,
            isCanvasKitStyling ? tokenPath : j.callExpression(j.identifier('cssVar'), [tokenPath])
          );
        }
      }
    }
  }

  if (property.type === 'ObjectProperty' && property.value.type === 'TemplateLiteral') {
    const templateLiteral = property.value;
    const transformedQuasis = templateLiteral.quasis.map((quasi: string) => quasi);
    const transformedExpressions = templateLiteral.expressions.map((expr: any) => {
      if (expr.type === 'CallExpression') {
        expr.arguments = expr.arguments.map((arg: any) => {
          if (
            arg.type === 'MemberExpression' &&
            arg.object.type === 'Identifier' &&
            arg.object.name === 'colors' &&
            arg.property.type === 'Identifier'
          ) {
            const keyName = property.key.type === 'Identifier' ? property.key.name : null;
            const tokens = keyName
              ? Object.entries(systemColors).find(([blockKey]) =>
                  blockKey.split(',').some(prop => prop === keyName)
                )?.[1]
              : {};
            const colorToken = tokens?.[arg.property.name as keyof typeof tokens];

            if (colorToken) {
              return isCanvasKitStyling
                ? varToMemberExpression(j, colorToken)
                : j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, colorToken)]);
            }
          }
          return arg;
        });
      }

      if (
        expr.type === 'MemberExpression' &&
        expr.object.type === 'Identifier' &&
        expr.property.type === 'Identifier'
      ) {
        const importedTokenName = importDeclaration[expr.object.name];

        // Handle colors tokens
        if (importedTokenName === 'colors' && (!tokenTypes || tokenTypes.includes('colors'))) {
          const keyName = property.key.type === 'Identifier' ? property.key.name : null;

          const tokens = keyName
            ? Object.entries(systemColors).find(([blockKey]) =>
                blockKey.split(',').some(prop => prop === keyName)
              )?.[1]
            : null;

          const colorToken = tokens?.[expr.property.name as keyof typeof tokens];

          if (colorToken) {
            if (!isCanvasKitStyling) {
              addMissingImports(
                {j, root},
                {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
              );
            }

            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
            );

            return isCanvasKitStyling
              ? varToMemberExpression(j, colorToken)
              : j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, colorToken)]);
          }
        }

        // Handle space and borderRadius tokens
        if (
          tokenTypes &&
          tokenTypes.includes(importedTokenName) &&
          ['space', 'borderRadius'].includes(importedTokenName)
        ) {
          const map = mapping[importedTokenName as keyof typeof mapping];
          const propertyName = expr.property.name;

          if (map?.type === 'system' && map.keys) {
            const newValue = map.keys[propertyName as keyof typeof map.keys];

            if (newValue) {
              if (!isCanvasKitStyling) {
                addMissingImports(
                  {j, root},
                  {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
                );
              }

              addMissingImports(
                {j, root},
                {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
              );

              const tokenPath = j.memberExpression(
                j.memberExpression(j.identifier(map.type), j.identifier(map.name)),
                j.identifier(newValue)
              );

              return isCanvasKitStyling
                ? tokenPath
                : j.callExpression(j.identifier('cssVar'), [tokenPath]);
            }
          }
        }
      }
      return expr;
    });

    return createObjectProperty(
      property.key,
      j.templateLiteral(transformedQuasis, transformedExpressions)
    );
  }

  if (property.type === 'ObjectProperty' && property.value.type === 'ConditionalExpression') {
    const {test, consequent, alternate} = property.value;

    if (
      consequent.type === 'MemberExpression' &&
      consequent.object.type === 'Identifier' &&
      consequent.property.type === 'Identifier' &&
      importDeclaration[consequent.object.name] === 'colors' &&
      alternate.type === 'MemberExpression' &&
      alternate.object.type === 'Identifier' &&
      alternate.property.type === 'Identifier' &&
      importDeclaration[alternate.object.name] === 'colors'
    ) {
      const keyName = property.key.type === 'Identifier' ? property.key.name : null;
      const consequentTokens = keyName
        ? Object.entries(systemColors).find(([blockKey]) =>
            blockKey.split(',').some(prop => prop === keyName)
          )?.[1]
        : null;

      const alternateTokens = keyName
        ? Object.entries(systemColors).find(([blockKey]) =>
            blockKey.split(',').some(prop => prop === keyName)
          )?.[1]
        : null;

      const consequentColorToken =
        consequentTokens?.[consequent.property.name as keyof typeof consequentTokens];

      const alternateColorToken =
        alternateTokens?.[alternate.property.name as keyof typeof alternateTokens];

      if (consequentColorToken && alternateColorToken) {
        if (!isCanvasKitStyling) {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );
        }

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        return createObjectProperty(
          property.key,
          j.conditionalExpression(
            test,
            isCanvasKitStyling
              ? varToMemberExpression(j, consequentColorToken)
              : j.callExpression(j.identifier('cssVar'), [
                  varToMemberExpression(j, consequentColorToken),
                ]),
            isCanvasKitStyling
              ? varToMemberExpression(j, alternateColorToken)
              : j.callExpression(j.identifier('cssVar'), [
                  varToMemberExpression(j, alternateColorToken),
                ])
          )
        );
      }
    }
  }

  if (
    property.type === 'ObjectProperty' &&
    property.key.type === 'Identifier' &&
    property.value.type === 'MemberExpression' &&
    property.value.object.type === 'Identifier' &&
    property.value.property.type === 'Identifier'
  ) {
    const importedTokenName = importDeclaration[property.value.object.name];

    // Handle colors tokens
    if (importedTokenName === 'colors' && (!tokenTypes || tokenTypes.includes('colors'))) {
      const {property: value} = property.value;

      if (paletteNames.some(name => value.name.includes(name))) {
        if (!isCanvasKitStyling) {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );
        }

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['base']}
        );

        return createObjectProperty(
          property.key,
          isCanvasKitStyling
            ? j.memberExpression(j.identifier('base'), j.identifier(value.name))
            : j.callExpression(j.identifier('cssVar'), [
                j.memberExpression(j.identifier('base'), j.identifier(value.name)),
              ])
        );
      }
    }
  }

  if (property.type === 'ObjectProperty' && property.value.type === 'ObjectExpression') {
    return createObjectProperty(
      property.key,
      j.objectExpression(
        property.value.properties.map((prop: any) =>
          transformObjectPropertyRecursively(
            {j, root},
            prop,
            importDeclaration,
            isCanvasKitStyling,
            tokenTypes
          )
        )
      )
    );
  }

  return property;
};

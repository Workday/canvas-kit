import {
  API,
  ASTPath,
  FileInfo,
  Identifier,
  ImportDeclaration,
  MemberExpression,
  Property,
} from 'jscodeshift';

const legacyTypeLevelsMap = {
  dataViz1: 'levels.title.large',
  dataViz2: 'levels.heading.large',
  h1: 'levels.heading.medium',
  h2: 'levels.heading.small',
  h3: 'levels.body.large',
  h4: 'levels.body.small',
  h5: 'levels.body.small',
  body: 'levels.subtext.large',
  body2: 'levels.subtext.medium',
  small: 'levels.subtext.medium',
};

const legacyTypeFontSizesMap = {
  dataViz1: 56,
  dataViz2: 32,
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 16,
  h5: 16,
  body: 14,
  body2: 12,
  small: 12,
};

const betaTypeLevelsMap = {
  brand1: 'levels.title.large',
  brand2: 'levels.title.medium',
  h1: 'levels.title.small',
  h2: 'levels.heading.large',
  h3: 'levels.heading.small',
  h4: 'levels.body.large',
  h5: 'levels.body.large',
  body: 'levels.body.small',
  body2: 'levels.subtext.large',
  small: 'levels.subtext.medium',
};

const betaTypeFontSizesMap = {
  brand1: 56,
  brand2: 48,
  h1: 40,
  h2: 32,
  h3: 24,
  h4: 20,
  h5: 20,
  body: 16,
  body2: 14,
  small: 12,
};

const fontWeightsMap = {
  brand1: 'bold',
  brand2: 'bold',
  dataViz1: 'bold',
  dataViz2: 'bold',
  h1: 'bold',
  h2: 'bold',
  h3: 'bold',
  h4: 'bold',
  h5: 'bold',
  body: 'regular',
  body2: 'regular',
  small: 'regular',
};

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // Find all legacy `type` import statements from react/tokens
  const legacyTypeImportSpecifiers = root
    .find(j.ImportSpecifier, {imported: {name: 'type'}})
    .filter(nodePath => {
      const parent = nodePath.parent.value as ImportDeclaration;
      // This extra filter ensures we aren't improperly transforming other variables
      return parent.source.value === '@workday/canvas-kit-react/tokens';
    });

  // Find all beta `type` import statements from preview-react/tokens labs-react/tokens
  const betaTypeImportSpecifiers = root
    .find(j.ImportSpecifier, {imported: {name: 'type'}})
    .filter(nodePath => {
      const parent = nodePath.parent.value as ImportDeclaration;
      // This extra filter ensures we aren't improperly transforming other variables
      return (
        parent.source.value === '@workday/canvas-kit-preview-react/tokens' ||
        parent.source.value === '@workday/canvas-kit-labs-react/tokens'
      );
    });

  // Find all canvas import statements from react/tokens
  const canvasImportDefaultSpecifiers = root
    .find(j.ImportDefaultSpecifier, {local: {name: 'canvas'}})
    .filter(nodePath => {
      const parent = nodePath.parent.value as ImportDeclaration;
      // This extra filter ensures we aren't improperly transforming other variables
      return parent.source.value === '@workday/canvas-kit-react/tokens';
    });

  function updateFontFamily(
    nodePath: ASTPath<MemberExpression>,
    identifierName: string,
    isDefaultImport?: boolean
  ) {
    const updatedProperty = j.memberExpression(
      j.identifier(identifierName),
      j.memberExpression(
        j.identifier('properties'),
        j.memberExpression(j.identifier('fontFamilies'), j.identifier('default'), false),
        false
      ),
      false
    );

    if (isDefaultImport) {
      return nodePath.parent.replace(
        j.memberExpression(j.identifier('canvas'), updatedProperty, false)
      );
    }

    nodePath.parent.replace(updatedProperty);
  }

  function updateFontSize(
    nodePath: ASTPath<MemberExpression>,
    importSpecifierName: string,
    identifierName: string,
    typeMap: 'legacy' | 'beta',
    isDefaultImport?: boolean
  ) {
    const updatedFontSizeValue =
      typeMap === 'legacy'
        ? legacyTypeFontSizesMap[identifierName as keyof typeof legacyTypeFontSizesMap]
        : betaTypeFontSizesMap[identifierName as keyof typeof betaTypeFontSizesMap];

    const updatedProperty = j.memberExpression(
      j.identifier(importSpecifierName),
      j.memberExpression(
        j.identifier('properties'),
        j.memberExpression(j.identifier('fontSizes'), j.literal(updatedFontSizeValue), true),
        false
      ),
      false
    );

    if (isDefaultImport) {
      return nodePath.parent.replace(
        j.memberExpression(j.identifier('canvas'), updatedProperty, false)
      );
    }

    nodePath.parent.replace(updatedProperty);
  }

  function updateFontWeight(
    nodePath: ASTPath<MemberExpression>,
    importSpecifierName: string,
    identifierName: string,
    isDefaultImport?: boolean
  ) {
    const updatedFontWeight = fontWeightsMap[identifierName as keyof typeof fontWeightsMap];
    const updatedProperty = j.memberExpression(
      j.identifier(importSpecifierName),
      j.memberExpression(
        j.identifier('properties'),
        j.memberExpression(j.identifier('fontWeights'), j.identifier(updatedFontWeight)),
        false
      ),
      false
    );

    if (isDefaultImport) {
      return nodePath.parent.replace(
        j.memberExpression(j.identifier('canvas'), updatedProperty, false)
      );
    }

    nodePath.parent.replace(updatedProperty);
  }

  function replaceVariantProperties(nodePath: ASTPath<MemberExpression>, properties: Property[]) {
    const grandParentNodeType = nodePath.parent.parent.value.type;
    // This covers variant object styles and variants in styled components />`
    if (
      grandParentNodeType === 'JSXExpressionContainer' ||
      grandParentNodeType === 'CallExpression'
    ) {
      return nodePath.parent.replace(j.objectExpression(properties));
    }
    // And this covers all other variant transformations
    properties.forEach((property, index) => {
      if (index === 0) {
        // Replace the first property provided
        nodePath.parent.parent.replace(property);
      } else {
        // Insert any additional properties after
        nodePath.parent.parent.insertAfter(property);
      }
    });
  }

  function updateVariant(
    nodePath: ASTPath<MemberExpression>,
    importSpecifierName: string,
    variantName: string,
    isDefaultImport?: boolean
  ) {
    switch (variantName) {
      case 'error':
      case 'hint':
      case 'inverse': {
        // Update the node property name from 'variant' to 'variants'
        nodePath.value.property = j.identifier('variants');
        break;
      }
      case 'button': {
        const newFontWeightProperty = j.property(
          'init',
          j.identifier('fontWeight'),
          j.memberExpression(
            j.identifier(importSpecifierName),
            j.memberExpression(
              j.identifier('properties'),
              j.memberExpression(j.identifier('fontWeights'), j.identifier('bold'), false),
              false
            ),
            false
          )
        );

        const newFontWeightMemberExpression = j.memberExpression(
          j.identifier('canvas'),
          j.memberExpression(
            j.identifier(importSpecifierName),
            j.memberExpression(
              j.identifier('properties'),
              j.memberExpression(j.identifier('fontWeights'), j.identifier('bold'), false),
              false
            ),
            false
          ),
          false
        );

        if (isDefaultImport) {
          const newCanvasProperty = j.property(
            'init',
            j.identifier('fontWeight'),
            newFontWeightMemberExpression
          );
          return replaceVariantProperties(nodePath, [newCanvasProperty]);
        }
        // Replace the target node with the new fontWeight property
        replaceVariantProperties(nodePath, [newFontWeightProperty]);
        break;
      }
      case 'caps': {
        // Create a new property: `fontWeight: {importSpecifierName}.properties.fontWeights.medium`
        const newFontWeightProperty = j.property(
          'init',
          j.identifier('fontWeight'),
          j.memberExpression(
            j.identifier(importSpecifierName),
            j.memberExpression(
              j.identifier('properties'),
              j.memberExpression(j.identifier('fontWeights'), j.identifier('medium'), false),
              false
            ),
            false
          )
        );

        const newFontWeightMemberExpression = j.memberExpression(
          j.identifier('canvas'),
          j.memberExpression(
            j.identifier(importSpecifierName),
            j.memberExpression(
              j.identifier('properties'),
              j.memberExpression(j.identifier('fontWeights'), j.identifier('medium'), false),
              false
            ),
            false
          ),
          false
        );

        // Create a new property: `textTransform: 'uppercase'`
        const newTextTransformProperty = j.property(
          'init',
          j.identifier('textTransform'),
          j.literal('uppercase')
        );
        if (isDefaultImport) {
          const newCanvasProperty = j.property(
            'init',
            j.identifier('fontWeight'),
            newFontWeightMemberExpression
          );
          return replaceVariantProperties(nodePath, [newCanvasProperty, newTextTransformProperty]);
        }
        // Replace the target node with the new fontWeight and text transform properties
        replaceVariantProperties(nodePath, [newFontWeightProperty, newTextTransformProperty]);
        break;
      }
      case 'label': {
        // Create a new property: `fontWeight: {importSpecifierName}.properties.fontWeights.medium`
        const newFontWeightProperty = j.property(
          'init',
          j.identifier('fontWeight'),
          j.memberExpression(
            j.identifier(importSpecifierName),
            j.memberExpression(
              j.identifier('properties'),
              j.memberExpression(j.identifier('fontWeights'), j.identifier('medium'), false),
              false
            ),
            false
          )
        );

        const newFontWeightMemberExpression = j.memberExpression(
          j.identifier('canvas'),
          j.memberExpression(
            j.identifier(importSpecifierName),
            j.memberExpression(
              j.identifier('properties'),
              j.memberExpression(j.identifier('fontWeights'), j.identifier('medium'), false),
              false
            ),
            false
          ),
          false
        );

        if (isDefaultImport) {
          const newCanvasProperty = j.property(
            'init',
            j.identifier('fontWeight'),
            newFontWeightMemberExpression
          );
          return replaceVariantProperties(nodePath, [newCanvasProperty]);
        }
        // Replace the target node with the new fontWeight property
        replaceVariantProperties(nodePath, [newFontWeightProperty]);
        break;
      }
      case 'mono': {
        const newFontProperty = j.property(
          'init',
          j.identifier('fontFamily'),
          j.memberExpression(
            j.identifier(importSpecifierName),
            j.memberExpression(
              j.identifier('properties'),
              j.memberExpression(j.identifier('fontFamilies'), j.identifier('monospace'), false),
              false
            ),
            false
          )
        );

        const newFontMemberExpression = j.memberExpression(
          j.identifier('canvas'),
          j.memberExpression(
            j.identifier(importSpecifierName),
            j.memberExpression(
              j.identifier('properties'),
              j.memberExpression(j.identifier('fontFamilies'), j.identifier('monospace'), false),
              false
            ),
            false
          ),
          false
        );

        if (isDefaultImport) {
          const newCanvasProperty = j.property(
            'init',
            j.identifier('fontFamily'),
            newFontMemberExpression
          );
          return replaceVariantProperties(nodePath, [newCanvasProperty]);
        }
        replaceVariantProperties(nodePath, [newFontProperty]);
        break;
      }
      default: {
        break;
      }
    }
  }

  function updateTypeHierarchy(
    nodePath: ASTPath<MemberExpression>,
    identifierName: string,
    typeMap: 'legacy' | 'beta'
  ) {
    const updatedTypeLevelProperty =
      typeMap === 'legacy'
        ? legacyTypeLevelsMap[identifierName as keyof typeof legacyTypeLevelsMap]
        : betaTypeLevelsMap[identifierName as keyof typeof betaTypeLevelsMap];
    nodePath.value.property = j.identifier(updatedTypeLevelProperty);
  }

  function updateHeadingFontWeight(
    nodePath: ASTPath<MemberExpression>,
    importSpecifierName: string,
    legacy?: boolean
  ) {
    const newFontWeightMemberExpression = j.memberExpression(
      j.identifier(importSpecifierName),
      j.memberExpression(
        j.identifier('properties'),
        j.memberExpression(j.identifier('fontWeights'), j.identifier('bold'), false),
        false
      ),
      false
    );

    const fontWeightProperty = j.property(
      'init',
      j.identifier('fontWeight'),
      legacy
        ? j.memberExpression(j.identifier('canvas'), newFontWeightMemberExpression, false)
        : newFontWeightMemberExpression
    );

    if (nodePath.parent.parent.value.type === 'ObjectExpression') {
      return nodePath.parent.parent.value.properties.push(fontWeightProperty);
    } else if (nodePath.parent.value.type === 'CallExpression') {
      const typeArgIndex = nodePath.parent.value.arguments.indexOf(nodePath.value);
      return nodePath.parent.value.arguments.splice(typeArgIndex + 1, 0, fontWeightProperty);
    } else if (nodePath.parent.value.type === 'JSXExpressionContainer') {
      return nodePath.replace(
        j.objectExpression([j.spreadElement(nodePath.value), fontWeightProperty])
      );
    }
  }

  // Run only if there are type imports from react/tokens
  if (legacyTypeImportSpecifiers.paths().length) {
    // Iterate over all type import specifiers and transform their corresponding member expressions
    legacyTypeImportSpecifiers.forEach(importSpecifier => {
      // Use either the local or imported name for the import specifier
      // e.g. `import { type as typeTokens } from '@workday/canvas-kit-react/tokens';`
      // 'type' is the imported name, and 'typeTokens' is the local name
      const importSpecifierName =
        importSpecifier.value.local?.name || importSpecifier.value.imported.name;

      // Find all member expressions using the specifier name
      root
        .find(j.MemberExpression, {object: {type: 'Identifier', name: importSpecifierName}})
        .forEach(nodePath => {
          const parentProperty = nodePath.parent.value.property;
          const propertyIdentifier = nodePath.value.property as Identifier;
          const identifierName = propertyIdentifier.name;

          // Handle font-family transformations
          if (parentProperty && parentProperty.name === 'fontFamily') {
            return updateFontFamily(nodePath, importSpecifierName);
          }

          // Handle font-size transformations
          if (parentProperty && parentProperty.name === 'fontSize') {
            return updateFontSize(nodePath, importSpecifierName, identifierName, 'legacy');
          }

          // Handle font-weight transformations
          if (parentProperty && parentProperty.name === 'fontWeight') {
            return updateFontWeight(nodePath, importSpecifierName, identifierName);
          }

          // Handle variant transformations
          if (parentProperty && propertyIdentifier.name === 'variant') {
            const variantName = parentProperty.name;
            return updateVariant(nodePath, importSpecifierName, variantName);
          }

          // Handle type hierarchy transformations
          if (identifierName in legacyTypeLevelsMap) {
            updateTypeHierarchy(nodePath, identifierName, 'legacy');

            if (identifierName === 'h3' || identifierName === 'h4') {
              updateHeadingFontWeight(nodePath, importSpecifierName);
            }
            return;
          }

          return nodePath;
        });
    });
  }

  if (canvasImportDefaultSpecifiers.paths().length) {
    // Only run if there are canvas default imports from react/tokens or labs-react/tokens
    canvasImportDefaultSpecifiers.forEach(importDefaultSpecifier => {
      root
        .find(j.MemberExpression, {object: {type: 'Identifier', name: 'canvas'}})
        .forEach(nodePath => {
          const grandParentProperty = nodePath.parent.parent.value.property;
          const parentProperty = nodePath.parent.value.property;
          const parentIdentifierName = parentProperty.name;
          const propertyIdentifier = nodePath.value.property as Identifier;
          const identifierName = propertyIdentifier.name;

          if (identifierName === 'type') {
            // Handle font-family transformations
            if (grandParentProperty && grandParentProperty.name === 'fontFamily') {
              updateFontFamily(nodePath.parent, 'type', true);
            }

            // Handle font-family transformations
            if (grandParentProperty && grandParentProperty.name === 'fontSize') {
              updateFontSize(nodePath.parent, 'type', parentIdentifierName, 'legacy', true);
            }

            // Handle font-weight transformations
            if (grandParentProperty && grandParentProperty.name === 'fontWeight') {
              return updateFontWeight(nodePath.parent, 'type', parentIdentifierName, true);
            }
            // Handle variant transformations
            if (parentProperty && parentProperty.name === 'variant') {
              const variantName = grandParentProperty.name;
              return updateVariant(nodePath.parent, 'type', variantName, true);
            }
            // Handle type hierarchy transformations
            if (parentProperty.name in legacyTypeLevelsMap) {
              updateTypeHierarchy(nodePath.parent, parentIdentifierName, 'legacy');

              if (parentIdentifierName === 'h3' || parentIdentifierName === 'h4') {
                updateHeadingFontWeight(nodePath.parent, 'type', true);
              }
              return;
            }
          }

          return nodePath;
        });
    });
  }

  // Only run if there are type imports from preview-react/tokens or labs-react/tokens
  if (betaTypeImportSpecifiers.paths().length) {
    // Iterate over all type import specifiers and transform their corresponding member expressions
    betaTypeImportSpecifiers.forEach(importSpecifier => {
      // Use either the local or imported name for the import specifier
      // e.g. `import { type as typeTokens } from '@workday/canvas-kit-react/tokens';`
      // 'type' is the imported name, and 'typeTokens' is the local name
      const importSpecifierName =
        importSpecifier.value.local?.name || importSpecifier.value.imported.name;

      // Find all member expressions using the specifier name
      root
        .find(j.MemberExpression, {object: {type: 'Identifier', name: importSpecifierName}})
        .forEach(nodePath => {
          const parentProperty = nodePath.parent.value.property;
          const propertyIdentifier = nodePath.value.property as Identifier;
          const identifierName = propertyIdentifier.name;

          // Handle font-family transformations
          if (parentProperty && parentProperty.name === 'fontFamily') {
            return updateFontFamily(nodePath, importSpecifierName);
          }

          // Handle font-size transformations
          if (parentProperty && parentProperty.name === 'fontSize') {
            return updateFontSize(nodePath, importSpecifierName, identifierName, 'beta');
          }

          // Handle font-weight transformations
          if (parentProperty && parentProperty.name === 'fontWeight') {
            return updateFontWeight(nodePath, importSpecifierName, identifierName);
          }

          // Handle variant transformations
          if (parentProperty && propertyIdentifier.name === 'variant') {
            const variantName = parentProperty.name;
            return updateVariant(nodePath, importSpecifierName, variantName);
          }

          // Handle type hierarchy transformations
          if (identifierName in betaTypeLevelsMap) {
            updateTypeHierarchy(nodePath, identifierName, 'beta');

            if (identifierName === 'h4') {
              updateHeadingFontWeight(nodePath, importSpecifierName);
            }
            return;
          }

          return nodePath;
        });
    });
  }

  return root.toSource();
}

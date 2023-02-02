import {API, FileInfo, Identifier, ImportDeclaration, JSXAttribute, Options} from 'jscodeshift';

const mainPackage = '@workday/canvas-kit-react';
const stackPackage = '@workday/canvas-kit-react/layout';
const stackImportNames = ['Stack', 'HStack', 'VStack'];
const stackImportProps = ['StackProps', 'HStackProps', 'VStackProps', 'StackStyleProps'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasStackImports = false;

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // If there's an import from the stack package, set the import boolean check to true
    if (value === stackPackage) {
      hasStackImports = true;
      return false;
    }

    // If there's an import from the main package, check to see if Stack or Stackprops are among the named imports
    // e.g. import {Stack} from '@workday/canvas-kit-react/layout';
    if (value === mainPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (
          (specifier.type === 'ImportSpecifier' &&
            stackImportNames.includes(specifier.imported.name)) ||
          (specifier.type === 'ImportSpecifier' &&
            stackImportProps.includes(specifier.imported.name))
        ) {
          hasStackImports = true;
        }
      });
    }
    return false;
  });

  // Failsafe to skip transforms unless a Stack import is detected
  if (!hasStackImports) {
    return root.toSource();
  }

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes(mainPackage)},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          //  `import {Stack}` becomes `import {Flex}`
          //  `import {HStack}` becomes `import {Flex}`
          //  `import {VStack}` becomes `import {Flex}`
          if (stackImportNames.includes(specifier.imported.name)) {
            specifier.imported.name = 'Flex';
          }
        }
        return specifier;
      });
      nodePath.value.specifiers = nodePath.value.specifiers?.filter(
        (specifier, index, specifiers) => {
          if (
            specifier.type === 'ImportSpecifier' &&
            specifier.imported &&
            specifier.imported.type === 'Identifier'
          ) {
            return (
              specifiers.findIndex(s => {
                return (
                  s.type === 'ImportSpecifier' &&
                  s.imported.type === 'Identifier' &&
                  s.imported.name === specifier.imported.name
                );
              }) === index
            );
          }
          return true;
        }
      );
    });

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes(mainPackage)},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          //  `import {StackProps}` becomes `import {FlexProps}`
          //  `import {HStackProps}` becomes `import {FlexProps}`
          //  `import {VStackProps}` becomes `import {FlexProps}`
          //  `import {StackStyleProps}` becomes `import {FlexProps}`
          if (stackImportProps.includes(specifier.imported.name)) {
            specifier.imported.name = `FlexProps`;
          }
        }
        return specifier;
      });
      nodePath.value.specifiers = nodePath.value.specifiers?.filter(
        (specifier, index, specifiers) => {
          if (
            specifier.type === 'ImportSpecifier' &&
            specifier.imported &&
            specifier.imported.type === 'Identifier'
          ) {
            return (
              specifiers.findIndex(s => {
                return (
                  s.type === 'ImportSpecifier' &&
                  s.imported.type === 'Identifier' &&
                  s.imported.name === specifier.imported.name
                );
              }) === index
            );
          }
          return true;
        }
      );
    });

  // Transform StackProps type references
  // e.g. `type CustomProps = StackProps;` becomes `type CustomProps = FlexProps;`
  // Transform HStackProps type references
  // e.g. `type CustomProps = HStackProps;` becomes `type CustomProps = FlexProps;`
  // Transform VStackProps type references
  // e.g. `type CustomProps = VStackProps;` becomes `type CustomProps = FlexProps;`
  const typeNames = ['StackProps', 'HStackProps', 'VStackProps', 'StackStyleProps'];
  root
    .find(j.TSTypeReference, {
      typeName: {
        type: 'Identifier',
        name: (value: string) => typeNames.includes(value),
      },
    })
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = `FlexProps`;
    });

  // Transform StackProps type interface declaration references
  // e.g. `interface CustomProps extends StackProps` becomes `interface CustomProps extends FlexProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending StackProps, transform the extension name to FlexProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (typeExtension.expression.type === 'Identifier') {
        const typeExtensionName = typeExtension.expression.name;
        if (
          typeExtension.expression.type === 'Identifier' &&
          typeNames.includes(typeExtensionName)
        ) {
          typeExtension.expression.name = `FlexProps`;
        }
      }
    });
  });

  // Transform `spacing` key that are in type interface declaration references
  // e.g. `interface CustomProps extends StackProps {
  // spacing: SystemPropValues['space']
  // }`
  // becomes `interface CustomProps extends FlexProps {
  // gap: FlexProps['gap']
  // }`
  const spacingName = ['spacing', 'space'];
  const propVals = ['SystemPropValues', 'StackProps'];
  root
    .find(j.TSPropertySignature, {
      type: 'TSPropertySignature',
    })
    .forEach(nodePath => {
      if (nodePath.node.key.type === 'Identifier') {
        if (spacingName.includes(nodePath.node.key.name)) {
          nodePath.node.key.name = 'gap';
        }
      }
      if (nodePath.node.typeAnnotation?.typeAnnotation?.type === 'TSIndexedAccessType') {
        if (nodePath.node.typeAnnotation.typeAnnotation.objectType.type === 'TSTypeReference') {
          if (
            nodePath.node.typeAnnotation.typeAnnotation.objectType.typeName.type === 'Identifier'
          ) {
            if (
              propVals.includes(
                nodePath.node.typeAnnotation.typeAnnotation.objectType.typeName.name
              )
            ) {
              nodePath.node.typeAnnotation.typeAnnotation.objectType.typeName.name = 'FlexProps';
            }
          }
        }
        if (nodePath.node.typeAnnotation.typeAnnotation.indexType.type === 'TSLiteralType') {
          if (
            nodePath.node.typeAnnotation.typeAnnotation.indexType.literal.type === 'StringLiteral'
          ) {
            if (
              spacingName.includes(
                nodePath.node.typeAnnotation.typeAnnotation.indexType.literal.value
              )
            ) {
              nodePath.node.typeAnnotation.typeAnnotation.indexType.literal.value = 'gap';
            }
          }
        }
      }
    });

  // Transform Stack JSXElements
  // Transform `<Stack spacing="l">` to `<Flex gap="l">`
  root
    .findJSXElements('Stack')
    .find(j.JSXIdentifier, {name: 'spacing'})
    .forEach(nodePath => {
      nodePath.node.name = 'gap';
    });

  // Transform Stack JSXElements
  // Transform `<Stack shouldWrapChildren>` to `<Flex >`
  root
    .findJSXElements('Stack')
    .find(j.JSXIdentifier)
    .filter(path => path.node.name === 'shouldWrapChildren')
    .remove();

  // Transform styled compoents
  // e.g. `const StyledStack = styled(Stack)({});`
  // becomes `const StyledStack = styled(Flex)({});`
  root.find(j.VariableDeclarator).forEach(nodePath => {
    if (
      nodePath.value.init?.type === 'CallExpression' &&
      nodePath.value.init.callee.type === 'CallExpression' &&
      nodePath.value.init.callee.callee.type === 'Identifier' &&
      nodePath.value.init.callee.callee.name === 'styled' &&
      nodePath.value.init.callee.arguments[0].type === 'Identifier' &&
      stackImportNames.includes(nodePath.value.init.callee.arguments[0].name)
    ) {
      nodePath.value.init.callee.arguments[0].name = 'Flex';
    }
  });

  // Transform Stack JSXElements
  // Transform `<Stack>` to `<Flex>`
  root.find(j.JSXIdentifier, {name: 'Stack'}).forEach(nodePath => {
    nodePath.node.name = 'Flex';
  });

  // Transform Stack JSXElements
  // e.g. `<HStack>` becomes `<Flex>`
  root.find(j.JSXIdentifier, {name: 'HStack'}).forEach(nodePath => {
    nodePath.node.name = 'Flex';
  });

  // Creating new JSXAttribute to push in attribute array for VStack
  // Since we're replacing VStack with Flex, it will need a
  // flexDirection="column" added
  const newVStackProp: JSXAttribute = {
    type: 'JSXAttribute',
    name: {type: 'JSXIdentifier', name: 'flexDirection'},
    value: {type: 'Literal', value: 'column'},
  };

  root
    .find(j.JSXOpeningElement, {name: {type: 'JSXIdentifier', name: 'VStack'}})
    .forEach(nodePath => {
      nodePath.node.attributes?.push(newVStackProp);
    });

  // Transform VStack JSXElements
  // e.g. `<VStack>` becomes `<Flex>`
  root.find(j.JSXIdentifier, {name: 'VStack'}).forEach(nodePath => {
    nodePath.node.name = 'Flex';
  });

  return root.toSource();
}

import {API, FileInfo, Identifier, ImportDeclaration, JSXAttribute, Options} from 'jscodeshift';

const mainPackage = '@workday/canvas-kit-react';
const stackPackage = '@workday/canvas-kit-react/layout';
const stackImportNames = ['Stack', 'HStack', 'VStack'];
const stackImportProps = ['StackProps', 'HStackProps', 'VStackProps', 'StackStyleProps'];
const altImportSpecifier = ['ActionBar', 'Breadcrumbs', 'Menu', 'Pagination', 'Tabs'];
const altImportNames = ['action-bar', 'breadcrumbs', 'menu', 'pagination', 'tabs'];
const altPackage: any[] = [];
altImportNames.forEach(name => {
  const importPackage = mainPackage + '/' + name;
  altPackage.push(importPackage);
});

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasStackImports = false;

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;

    // If there's an import from ActionBar, Breadcrumbs, Menu, Pagination or Tabs package,
    // set the import boolean check to true
    if (altPackage.includes(value)) {
      hasStackImports = true;
      return false;
    }

    // If there's an import from the main package, check to see if Stack, ActionBar, Breadcrumbs,
    // Menu, Pagination or Tabs or Stackprops are among the named imports
    // e.g. import {Stack} from '@workday/canvas-kit-react/layout';
    // e.g. import {Menu} from '@workday/canvas-kit-react/menu';
    if (value === mainPackage || value === stackPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (
          (specifier.type === 'ImportSpecifier' &&
            stackImportNames.includes(specifier.imported.name)) ||
          (specifier.type === 'ImportSpecifier' &&
            stackImportProps.includes(specifier.imported.name)) ||
          (specifier.type === 'ImportSpecifier' &&
            altImportSpecifier.includes(specifier.imported.name))
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
  const spacingName = ['spacing'];

  // Transform `spacing` key that is in type interface
  // e.g. `spacing: SystemPropValues['space']`
  // becomes `gap: FlexProps['gap']`
  root
    .find(j.JSXIdentifier, {
      type: 'JSXIdentifier',
    })
    .forEach(nodePath => {
      if (nodePath.node.type === 'JSXIdentifier') {
        if (spacingName.includes(nodePath.node.name)) {
          nodePath.node.name = 'gap';
        }
      }
    });

  root.find(j.TSLiteralType, {type: 'TSLiteralType'}).forEach(nodePath => {
    if (nodePath.node.literal.type === 'StringLiteral') {
      if (spacingName.includes(nodePath.node.literal.value)) {
        nodePath.node.literal.value = 'gap';
      }
    }
  });

  // Transform `spacing` prop in createComponent to `gap`
  // Component: ({spacing, ...elemProps}: StackProps,
  // Component: ({gap, ...elemProps}: FlexProps,
  root.find(j.ArrowFunctionExpression, {type: 'ArrowFunctionExpression'}).forEach(nodePath => {
    nodePath.node.params?.forEach(path => {
      if (path.type === 'ObjectPattern') {
        path.properties?.forEach(obj => {
          if (obj.type === 'ObjectProperty') {
            if (obj.key.type === 'Identifier') {
              if (spacingName.includes(obj.key.name)) {
                obj.key.name = 'gap';
              }
            }
          }
        });
      }
    });
  });

  // Transform `spacing` JSXIdentifier and value to `gap`
  // e.g. return <StyledContainer spacing={spacing} {...elemProps} />
  // becomes return <StyledContainer gap={gap} {...elemProps} />
  root.find(j.JSXOpeningElement, {type: 'JSXOpeningElement'}).forEach(nodePath => {
    nodePath.node.attributes?.forEach(attr => {
      if (attr.type === 'JSXAttribute') {
        if (attr.value?.type === 'JSXExpressionContainer') {
          if (attr.value.expression.type === 'Identifier') {
            if (spacingName.includes(attr.value.expression.name)) {
              attr.value.expression.name = 'gap';
            }
          }
        }
      }
    });
  });

  // Transforms `as` prop Stack, HStack or VStack values to `Flex`
  // e.g. <Card as={Stack} spacing="s" />
  // becomes <Card as={Flex} spacing="s" />
  root.find(j.JSXOpeningElement, {type: 'JSXOpeningElement'}).forEach(nodePath => {
    nodePath.node.attributes?.forEach(attr => {
      if (attr.type === 'JSXAttribute') {
        if (attr.name.name === 'as') {
          if (attr.value?.type === 'JSXExpressionContainer') {
            if (attr.value.expression.type === 'Identifier') {
              if (stackImportNames.includes(attr.value.expression.name)) {
                attr.value.expression.name = 'Flex';
              }
            }
          }
        }
      }
    });
  });

  // Transform Stack, HStack and VStack JSXElements
  // Transform `<Stack spacing="l">` to `<Flex gap="l">`
  // Transform `<Stack shouldWrapChildren>` to `<Flex >`
  root.find(j.JSXOpeningElement).forEach(nodePath => {
    if (nodePath.node.type === 'JSXOpeningElement') {
      if (nodePath.node.name.type === 'JSXIdentifier') {
        if (stackImportNames.includes(nodePath.node.name.name)) {
          nodePath.node.attributes?.forEach(path => {
            if (path.type === 'JSXAttribute') {
              if (path.name.name === 'spacing') {
                path.name.name = 'gap';
              }
              if (path.name.name === 'shouldWrapChildren') {
                path.name.name = '';
              }
            }
          });
        }
      }
    }
  });
  root.find(j.JSXOpeningElement).forEach(nodePath => {
    if (nodePath.node.type === 'JSXOpeningElement') {
      if (nodePath.node.name.type === 'JSXIdentifier') {
        if (stackImportNames.includes(nodePath.node.name.name)) {
          nodePath.node.attributes?.forEach(path => {
            if (path.type === 'JSXAttribute') {
              if (path.name.name === 'spacing') {
                path.name.name = 'gap';
              }
              if (path.name.name === 'shouldWrapChildren') {
                path.name.name = '';
              }
            }
          });
        }
      }
    }
  });

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

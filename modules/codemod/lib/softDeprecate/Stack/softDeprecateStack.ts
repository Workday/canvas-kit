import {API, FileInfo, Identifier, ImportDeclaration, Options} from 'jscodeshift';

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
          specifier.type === 'ImportSpecifier' &&
          stackImportNames.includes(specifier.imported.name)
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
            specifier.imported.name = `Flex`;
          }
        }
        return specifier;
      });
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
    });

  // Transform StackProps type references
  // e.g. `type CustomProps = StackProps;` becomes `type CustomProps = DeprecatedStackProps;`
  // Transform HStackProps type references
  // e.g. `type CustomProps = HStackProps;` becomes `type CustomProps = DeprecatedHStackProps;`
  // Transform VStackProps type references
  // e.g. `type CustomProps = VStackProps;` becomes `type CustomProps = DeprecatedVStackProps;`
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

  // Transform shouldWrapChildren prop
  //e.g. `shouldWrapChildren` becomes `flexWrap='wrap'`
  root
    .findJSXElements('Stack')
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: 'shouldWrapChildren',
      },
    })
    .forEach(nodePath => {
      nodePath.node.name.name = 'flexWrap';
      nodePath.node.value = {
        type: 'Literal',
        value: 'wrap',
      };
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

  // Transform VStack JSXElements
  // e.g. `<VStack>` becomes `<Flex>`
  root.find(j.JSXIdentifier, {name: 'VStack'}).forEach(nodePath => {
    nodePath.node.name = 'Flex';
  });

  return root.toSource();
}

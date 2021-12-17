import {API, FileInfo, Identifier, ImportDeclaration, Options} from 'jscodeshift';

const mainPackage = '@workday/canvas-kit-react';
const cookieBannerPackage = '@workday/canvas-kit-react/cookie-banner';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasCookieBannerImports = false;

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // If there's an import from the cookie-banner package, set the import boolean check to true
    if (value === cookieBannerPackage) {
      hasCookieBannerImports = true;
      return;
    }
    // If there's an import from the main package, check to see if CookieBanner or CookieBannerProps are among the named imports
    // e.g. import {CookieBanner} from '@workday/canvas-kit-react';
    if (value === mainPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          const specifierName = specifier.imported.name;
          if (specifierName === 'CookieBanner' || specifierName === 'CookieBannerProps') {
            hasCookieBannerImports = true;
          }
        }
      });
    }
  });

  // Failsafe to skip transforms unless a CookieBanner import is detected
  if (!hasCookieBannerImports) {
    return root.toSource();
  }

  // Transform CookieBanner named import statements from the main package
  // e.g. import { CookieBanner, CookieBannerProps } from '@workday/canvas-kit-react';
  // becomes import { DeprecatedCookieBanner, DeprecatedCookieBannerProps } from '@workday/canvas-kit-react';
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          //  `import {CookieBanner}` becomes `import {DeprecatedCookieBanner}`
          if (specifier.imported.name === 'CookieBanner') {
            specifier.imported.name = 'DeprecatedCookieBanner';
          }

          if (specifier.imported.name === 'CookieBannerProps') {
            specifier.imported.name = 'DeprecatedCookieBannerProps';
          }
        }
        return specifier;
      });
    });

  // Transform CookieBanner default and named import statements from the cookie-banner package
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react/cookie-banner'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportDefaultSpecifier') {
          //  `import CookieBanner` becomes `import DeprecatedCookieBanner`
          if (specifier.local?.name === 'CookieBanner') {
            specifier.local.name = 'DeprecatedCookieBanner';
          }
        }
        if (specifier.type === 'ImportSpecifier') {
          //  `import {CookieBanner}` becomes `import {DeprecatedCookieBanner}`
          if (specifier.imported.name === 'CookieBanner') {
            specifier.imported.name = 'DeprecatedCookieBanner';
          }
          //  `import {CookieBannerProps}` becomes `import {DeprecatedCookieBannerProps}`
          if (specifier.imported.name === 'CookieBannerProps') {
            specifier.imported.name = 'DeprecatedCookieBannerProps';
          }
        }
        return specifier;
      });
    });

  // Transform CookieBannerProps type references
  // e.g. `type CustomProps = CookieBannerProps;` becomes `type CustomProps = DeprecatedCookieBannerProps;`
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'CookieBannerProps'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'DeprecatedCookieBannerProps';
    });

  // Transform CookieBannerProps type interface declaration references
  // e.g. `interface CustomProps extends CookieBannerProps` becomes `interface CustomProps extends DeprecatedCookieBannerProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending CookieBannerProps, transform the extension name to DeprecatedCookieBannerProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (
        typeExtension.expression.type === 'Identifier' &&
        typeExtension.expression.name === 'CookieBannerProps'
      ) {
        typeExtension.expression.name = 'DeprecatedCookieBannerProps';
      }
    });
  });

  // Transform CookieBanner JSXElements
  // e.g. `<CookieBanner>` becomes `<DeprecatedCookieBanner>`
  root.find(j.JSXIdentifier, {name: 'CookieBanner'}).forEach(nodePath => {
    nodePath.node.name = 'DeprecatedCookieBanner';
  });

  // Transform CookieBanner MemberExpressions
  // e.g. `CookieBanner.DefaultNotice` becomes `DeprecatedCookieBanner.DefaultNotice`
  root
    .find(j.MemberExpression, {object: {type: 'Identifier', name: 'CookieBanner'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.object as Identifier;
      identifier.name = 'DeprecatedCookieBanner';
    });

  return root.toSource();
}

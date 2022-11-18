import {API, FileInfo, Options} from 'jscodeshift';
import {getImportRenameMap} from '../v7/utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const mainPackage = '@workday/canvas-kit-react';
const loadingAnimationPackage = '@workday/canvas-kit-react/loading-animation';
const loadingDotsPackage = '@workday/canvas-kit-react/loading-dots';
const loadingAnimationImports = ['LoadingDots', 'LoadingAnimation'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, loadingAnimationPackage, loadingAnimationImports)) {
    return file.source;
  }

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react/loading-animation');

  root
    .find(j.ImportDeclaration, {
      // filter on imports from "@workday/canvas-kit/react" including slash imports
      source: {value: (value: string) => value.includes(mainPackage)},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          // Transform named import
          // e.g. `import {LoadingAnimation}` becomes `import {LoadingDots}`
          if (specifier.imported.name === 'LoadingAnimation') {
            specifier.imported.name = 'LoadingDots';
          }

          // Transform slash imports
          // e.g. `import {LoadingAnimation} from from "@workday/canvas-kit-react/loading-animation"`
          // and `import {LoadingDots} from from "@workday/canvas-kit-react/loading-animation"`
          // becomes `import {LoadingDots} from from "@workday/canvas-kit-react/loading-dots"`
          if (nodePath.value.source.value === loadingAnimationPackage) {
            nodePath.value.source.value = loadingDotsPackage;
          }
        }
        return specifier;
      });
    });

  // Transform LoadingAnimation JSXElements
  // e.g. `<LoadingAnimation />` becomes `<LoadingDots />`
  root.find(j.JSXIdentifier, {name: 'LoadingAnimation'}).forEach(nodePath => {
    nodePath.node.name = 'LoadingDots';
  });

  // Transform styled compoents
  // e.g. `const StyledLoadingAnimation = styled(LoadingAnimation)({});`
  // becomes `const StyledLoadingAnimation = styled(LoadingDots)({});`
  root.find(j.VariableDeclarator).forEach(nodePath => {
    if (
      nodePath.value.init?.type === 'CallExpression' &&
      nodePath.value.init.callee.type === 'CallExpression' &&
      nodePath.value.init.callee.callee.type === 'Identifier' &&
      nodePath.value.init.callee.callee.name === 'styled' &&
      nodePath.value.init.callee.arguments[0].type === 'Identifier' &&
      nodePath.value.init.callee.arguments[0].name === importMap.LoadingAnimation
    ) {
      nodePath.value.init.callee.arguments[0].name = 'LoadingDots';
    }
  });

  return root.toSource();
}

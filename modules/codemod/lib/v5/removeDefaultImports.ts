import {API, FileInfo, Options, ImportDeclaration, ASTPath} from 'jscodeshift';

// List of import paths and the named export
// before: import Button from '@workday/canvas-kit-react/button
// after:  import { Button } from '@workday/canvas-kit-react/button
const renameDefaultMap = {
  '@workday/canvas-kit-react/button': 'Button',
  '@workday/canvas-kit-react/card': 'Card',
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // Renames default imports from `renameDefaultMap` and changes them to named exports
  // Example:
  // before:
  // import Button from '@workday/canvas-kit-react/button';
  // import StyledButton from '@workday/canvas-kit-react/button';
  // after:
  // import { Button } from '@workday/canvas-kit-react/button';
  // import { Button as StyledButton } from '@workday/canvas-kit-react/button';
  root.find(j.ImportDefaultSpecifier).forEach(nodePath => {
    const parent = nodePath.parent as ASTPath<ImportDeclaration>;
    const importSource = String(parent.node.source.value) as keyof typeof renameDefaultMap;
    const localName = nodePath.value.local?.name;
    if (Object.keys(renameDefaultMap).includes(importSource) && localName) {
      nodePath.replace(
        j.importSpecifier(j.identifier(renameDefaultMap[importSource]), j.identifier(localName))
      );
    }
  });

  return root.toSource();
}

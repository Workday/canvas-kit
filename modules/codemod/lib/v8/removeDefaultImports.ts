import {API, FileInfo, Options, ImportDeclaration, ASTPath} from 'jscodeshift';

// List of import paths and the named export
// before: import Button from '@workday/canvas-kit-react/button
// after:  import { Button } from '@workday/canvas-kit-react/button
const renameDefaultMap = {
  '@workday/canvas-kit-labs-react/combobox': 'Combobox',
  '@workday/canvas-kit-labs-react/drawer': 'Drawer',
  '@workday/canvas-kit-preview-react/breadcrumbs': 'Breadcrumbs',
  '@workday/canvas-kit-preview-react/color-picker': 'ColorPicker',
  '@workday/canvas-kit-preview-react/menu': 'Menu',
  '@workday/canvas-kit-preview-react/select': 'Select',
  '@workday/canvas-kit-preview-react/side-panel': 'SidePanel',
  '@workday/canvas-kit-react-fonts': 'fonts',
  '@workday/canvas-kit-react/toast': 'Toast',
  '@workday/canvas-kit-react/tokens': 'Canvas',
  '@workday/canvas-kit-react/tooltip': 'Tooltip',
  '@workday/canvas-kit-react/text-area': 'TextArea',
  '@workday/canvas-kit-react/avatar': 'Avatar',
  '@workday/canvas-kit-react/badge': 'CountBadge',
  '@workday/canvas-kit-react/checkbox': 'Checkbox',
  '@workday/canvas-kit-react/form-field': 'FormField',
  '@workday/canvas-kit-react/loading-animation': 'LoadingDots',
  '@workday/canvas-kit-react/radio': 'Radio',
  '@workday/canvas-kit-react/segmented-control': 'SegmentedControl',
  '@workday/canvas-kit-react/select': 'Select',
  '@workday/canvas-kit-react/side-panel': 'SidePanel',
  '@workday/canvas-kit-react/status-indicator': 'StatusIndicator',
  '@workday/canvas-kit-react/switch': 'Switch',
  '@workday/canvas-kit-react/table': 'Table',
  '@workday/canvas-kit-react/text-input': 'TextInput',
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  console.log(file.source);
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
      nodePath.replace(j.importSpecifier(j.identifier(localName)));
    }
  });

  return root.toSource();
}

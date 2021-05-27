import {API, FileInfo, Options, JSXIdentifier} from 'jscodeshift';
import {getImportRenameMap} from './getImportRenameMap';

const inputsMap: {
  [packageName: string]: string[];
} = {
  '@workday/canvas-kit-react/checkbox': ['Checkbox'],
  '@workday/canvas-kit-react/color-picker': ['ColorInput', 'ColorPreview'],
  '@workday/canvas-kit-react/radio': ['Radio'],
  '@workday/canvas-kit-react/switch': ['Switch'],
  '@workday/canvas-kit-react/text-area': ['TextArea'],
  '@workday/canvas-kit-react/text-input': ['TextInput'],
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // defaultImports should be an array of local names that were imported using
  // a default import from any of the modules listed in inputsMap. For example,
  // given...
  //
  // ```
  // import Checkbox from '@workday/canvas-kit-react/checkbox';
  // import CanvasTextArea from '@workday/canvas-kit-react/text-area';
  // import {TextInput} from '@workday/canvas-kit-react/text-input';
  // import StatusIndicator from '@workday/canvas-kit-react/status-indicator';
  // ```
  //
  // ... defaultImports should be set to `['Checkbox', 'CanvasTextArea']`
  const defaultImports: string[] = [];
  root.find(j.ImportDefaultSpecifier).forEach(nodePath => {
    const packageName = nodePath.parent.node.source.value;
    const localName = nodePath.value.local?.name;
    if (packageName in inputsMap && localName) {
      defaultImports.push(localName);
    }
  });

  let runningSource = file.source;
  for (const inputPackageName of Object.keys(inputsMap)) {
    const currentRoot = j(runningSource);

    const {containsCanvasImports, importMap, styledMap} = getImportRenameMap(
      j,
      currentRoot,
      inputPackageName
    );

    if (containsCanvasImports) {
      const inputNames = inputsMap[inputPackageName];
      currentRoot
        .find(j.JSXIdentifier, (value: JSXIdentifier) => value.name === 'inputRef')
        .replaceWith(nodePath => {
          const elementName = nodePath.parent?.parent?.value?.name?.name;
          // Rewrite inputRef to ref if any of the following are true:
          // (a) elementName was the name used in a default import of the current
          //     input being processed (e.g., `import TextInput ...`)
          // (b) elementName was the name used in a named import of the current
          //     input being processed (e.g., `import {TextInput} ...`  or
          //     `import {TextInput as CanvasTextInput} ...`)
          // (c) elementName was created by calling `styled` on the current input
          //     being processed (e.g., `const StyledTextInput = styled(TextInput)`)
          if (
            defaultImports.includes(elementName) ||
            inputNames.map(n => importMap[n]).includes(elementName) ||
            inputNames.map(n => styledMap[n]).includes(elementName)
          ) {
            return j.jsxIdentifier('ref');
          }
          return nodePath.value;
        });

      runningSource = currentRoot.toSource();
    }
  }

  return runningSource;
}

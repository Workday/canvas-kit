import {API, FileInfo, MemberExpression, Options} from 'jscodeshift';
import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const packages = ['@workday/canvas-kit-react', '@workday/canvas-kit-react/common'];
const packageImports = ['ErrorType'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, packages, packageImports)) {
    return file.source;
  }

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');

  // Find all member expressions that match ErrorType.Alert pattern
  const memberExpressions = root.find(j.MemberExpression, (value: MemberExpression) => {
    // Check if it's a member expression with ErrorType.Alert pattern
    return (
      value.object.type === 'Identifier' &&
      value.property.type === 'Identifier' &&
      value.object.type === 'Identifier' &&
      (value.object.name === importMap.ErrorType || value.object.name === styledMap.ErrorType) &&
      value.property.name === 'Alert'
    );
  });

  // Replace ErrorType.Alert with ErrorType.Caution
  memberExpressions.forEach(path => {
    const memberExpression = path.value;

    // Get the ErrorType identifier name (in case it was renamed during import)
    if (memberExpression.object.type === 'Identifier') {
      const errorTypeIdentifier = memberExpression.object.name;

      // Create the new member expression: ErrorType.Caution
      const newMemberExpression = j.memberExpression(
        j.identifier(errorTypeIdentifier),
        j.identifier('Caution')
      );
      j(path).replaceWith(newMemberExpression);
    }

    // Replace the entire member expression
  });

  return root.toSource();
}

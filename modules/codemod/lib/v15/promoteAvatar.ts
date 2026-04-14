import {ASTPath, ImportDeclaration, Transform} from 'jscodeshift';

type SpecifierType = {importedName: string; name?: string};

// List of all Avatar-related exports from preview that should be promoted
const AVATAR_EXPORTS = [
  'Avatar',
  'AvatarProps',
  'avatarStencil',
  'AvatarImage',
  'AvatarImageProps',
  'avatarImageStencil',
  'AvatarName',
  'AvatarNameProps',
  'avatarNameStencil',
  'BaseAvatar',
  'BaseAvatarProps',
  'baseAvatarStencil',
  'getInitialsFromName',
];

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);
  const avatarSpecifiers: SpecifierType[] = [];
  const foundImport: ASTPath<ImportDeclaration>[] = [];

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes('@workday/canvas-kit-preview-react')},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.filter(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.local &&
          AVATAR_EXPORTS.includes(specifier.imported.name)
        ) {
          avatarSpecifiers.push({
            importedName: specifier.imported.name,
            name: specifier.local.name,
          });

          return false;
        }
        return true;
      });

      if (avatarSpecifiers.length) {
        foundImport.push(nodePath);
      }
    });

  const existingAvatarImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/avatar'},
  });

  const mapToSpecifiers = (specifier: SpecifierType) => {
    return j.importSpecifier(
      j.identifier(specifier.importedName),
      specifier.name ? j.identifier(specifier.name) : undefined
    );
  };

  // add to existing import
  if (existingAvatarImports.length) {
    existingAvatarImports.forEach(nodePath => {
      nodePath.value.specifiers = nodePath.value.specifiers?.concat(
        avatarSpecifiers.map(mapToSpecifiers)
      );
    });
  } else {
    // create new import
    if (foundImport.length) {
      foundImport[0].insertBefore(
        j.importDeclaration(
          avatarSpecifiers.map(mapToSpecifiers),
          j.stringLiteral('@workday/canvas-kit-react/avatar')
        )
      );
    }
  }

  foundImport.forEach(importPath => {
    if (
      !importPath.value.specifiers?.length ||
      importPath.value.source.value === '@workday/canvas-kit-preview-react/avatar'
    ) {
      importPath.prune();
    }
  });

  return root.toSource();
};

export default transform;

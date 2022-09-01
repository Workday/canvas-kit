/**
 * Note: you need to run `yarn add -WD file:./utils/custom-lint-rules` after changes for them to be reflected locally
 */


function joinWithEnglishGrammar(arr = []) {
  // E.g. "bears"
  if (arr.length < 2) {
    return arr.join(' ');
  }
  // E.g. "bears and beets"
  if (arr.length === 2) {
    return arr.join(' and ');
  }
  // E.g. "bears, beets, and Battlestar Galactica"
  if (arr.length > 2) {
    const lastItem = arr.pop();
    return `${arr.join(', ')}, and ${lastItem}`
  }
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'encourage imports from canvas-kit subdirectories',
      category: 'Possible Errors',
      recommended: true,
    },
    fixable: 'code',
  },
  create: function(context) {
    return {
      ImportDeclaration(node) {
        const {value} = node.source;
        const {specifiers} = node;
        const specifierNames = specifiers.map(specifier => {
          if (specifier.type === 'ImportDefaultSpecifier' || specifier.type === 'ImportNamespaceSpecifier') {
            return specifier.local.name;
          }
          if (specifier.type === 'ImportSpecifier') {
            return specifier.imported.name;
          }
        });
        const importSourceRegExp = /^@workday\/canvas-kit-(labs-|preview-)*react*$/;
        if (importSourceRegExp.test(value)) {
          const importsInEnglish = joinWithEnglishGrammar(specifierNames);
          const multipleSpecifierMessage = `Import ${importsInEnglish} from their Canvas Kit subdirectories instead of ${value}`;
          const singleSpecifierMessage = `Import ${importsInEnglish} from its Canvas Kit subdirectory instead of ${value}`;
          context.report({
            node,
            message: specifierNames.length > 1 ? multipleSpecifierMessage : singleSpecifierMessage,
          });
        }
      },
    };
  },
};

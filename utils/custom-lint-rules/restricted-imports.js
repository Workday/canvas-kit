module.exports = {
  meta: {
    type: 'suggestion',
  },
  create: function(context) {
    return {
      ImportDeclaration(node) {
        const {value} = node.source;
        const splitPath = value.split('/');
        const packageName = splitPath[1];
        const pathRegex = /^@workday\/canvas-kit[\w-]+\/lib/; // Match on any @workday/canvas-kit package

        if (pathRegex.test(value)) {
          context.report({
            node,
            message: `Only top-level imports are allowed. Import from '@workday/${packageName}'.`,
            fix: function(fixer) {
              const nodeSource = context.getSource(node);
              const fixedImport = nodeSource.replace(value, `@workday/${packageName}`);
              return fixer.replaceText(node, fixedImport);
            },
          });
        }
      },
    };
  },
};

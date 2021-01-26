module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'prevent internal imports across packages',
      category: 'Possible Errors',
      recommended: true,
    },
    fixable: 'code',
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
            message: `The /lib directory isn't available in production. Import from '@workday/${packageName}' instead.`,
          });
        }
      },
    };
  },
};
